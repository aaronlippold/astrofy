# CI/CD Workflows

This document describes the automated CI/CD pipeline for the Carmelina Ayala portfolio site.

## Overview

The CI/CD system uses GitHub Actions with four workflows that handle pull requests, releases, and deployments.

## Workflows

### 1. PR Checks (`pr-checks.yml`)

**Trigger:** Pull requests to `main`

**Purpose:** Build validation and quality gates

**Steps:**
1. Checkout code
2. Install dependencies
3. Run lint checks
4. Run type checks (`astro check`)
5. Build project
6. Verify PDF/DOCX generation
7. Upload build artifacts (1-day retention)

**Outputs:**
- Build artifacts for preview deployment
- Build summary with validation results

**Gates:**
- Must pass before PR can be merged
- Blocks deployment if build fails

---

### 2. PR Preview Deploy (`pr-preview.yml`)

**Trigger:** Pull requests opened/synchronized/reopened on `main`

**Purpose:** Deploy preview for testing

**Dependencies:** Runs independently (but shouldn't merge if checks fail)

**Steps:**
1. Checkout code
2. Install dependencies
3. Build project
4. Deploy to Netlify preview
5. Comment on PR with preview URL

**Preview URL:** `https://deploy-preview-{PR-NUMBER}--carmelina-ayala.netlify.app`

**Features:**
- Automatic preview updates on each commit
- PR comment with test checklist
- Deploy summary in workflow

---

### 3. Release Please (`release-please.yml`)

**Trigger:** Push to `main` branch

**Purpose:** Automated versioning and releases

**Steps:**
1. Analyze commits since last release
2. Determine version bump (major/minor/patch)
3. Create/update release PR with changelog
4. When release PR merged:
   - Create Git tag
   - Create GitHub release
   - Trigger production deployment

**Outputs:**
- `release-created`: Boolean if release was created
- `version`: Version number (e.g., "1.1.0")
- `tag-name`: Git tag (e.g., "v1.1.0")

**Conventional Commits:**
- `feat:` → minor version bump
- `fix:` → patch version bump
- `feat!:` or `BREAKING CHANGE:` → major version bump

---

### 4. Deploy to Netlify (`deploy-to-netlify.yml`)

**Trigger:**
- Called by Release Please after release creation
- Manual workflow dispatch

**Purpose:** Production deployment with validation

**Inputs:**
- `version`: Release version (optional)
- `tag-name`: Git tag to deploy (optional)

**Steps:**
1. Checkout code (from tag if provided)
2. Install dependencies
3. **Type check (deployment gate)**
4. Build project
5. **Verify build artifacts:**
   - dist/ directory exists
   - Netlify functions exist
   - All PDF/DOCX files generated
6. Deploy to production
7. Verify deployment is live (HTTP 200 check)

**Environment:** Production (https://carmelina-ayala.netlify.app)

**Safety Features:**
- Type checking before deployment
- Build artifact verification
- Post-deployment health check

---

## Workflow Dependencies

```
Pull Request Flow:
  PR opened/updated
       ↓
  pr-checks.yml (build + validate)
       ↓
  pr-preview.yml (deploy preview)
       ↓
  Manual review + merge

Release Flow:
  Push to main
       ↓
  release-please.yml (analyze commits)
       ↓
  Create release PR with changelog
       ↓
  Merge release PR
       ↓
  Create tag + GitHub release
       ↓
  deploy-to-netlify.yml (production)
       ↓
  Site live at carmelina-ayala.netlify.app
```

## Quality Gates

**PR Gates:**
- ✅ Build must succeed
- ✅ Type checks must pass
- ✅ PDF/DOCX generation must succeed

**Production Gates:**
- ✅ All PR gates (from release PR)
- ✅ Build artifacts verification
- ✅ Post-deployment health check

## Secrets Required

Add these secrets in GitHub Settings → Secrets and variables → Actions:

- `NETLIFY_TOKEN`: Netlify personal access token
- `NETLIFY_SITE_ID`: Netlify site ID

## Manual Deployment

To manually deploy to production:

1. Go to Actions → Deploy to Netlify Production
2. Click "Run workflow"
3. Optionally specify version
4. Click "Run workflow"

## Troubleshooting

**PR checks failing:**
- Check build logs for errors
- Run `pnpm run build` locally
- Run `npx astro check` for type errors

**Preview deployment failing:**
- Verify NETLIFY_TOKEN and NETLIFY_SITE_ID secrets
- Check Netlify CLI authentication

**Production deployment not triggered:**
- Verify release PR was merged (not closed)
- Check Release Please action logs
- Ensure conventional commit format was used

**Release version incorrect:**
- Check commit message format
- Review Release Please documentation
- Manually edit release PR if needed

## Best Practices

1. **Use conventional commits** for automatic versioning
2. **Test in preview** before merging PRs
3. **Let Release Please manage versions** - don't manually edit package.json version
4. **Review release PRs** before merging to verify changelog
5. **Monitor production deployment** after releases

## Future Improvements

- [ ] Add unit tests
- [ ] Add ESLint configuration
- [ ] Add visual regression testing
- [ ] Add performance budgets
- [ ] Add security scanning
- [ ] Add dependency updates (Renovate/Dependabot)
