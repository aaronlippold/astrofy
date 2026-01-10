# Project Standards & Best Practices

This document captures the standards and practices established for Carmelina Ayala's professional portfolio website.

## Content Writing Standards

### Contract & Professional Documents

**Clarity over Complexity:**
- Use specific numbers: "10 days" not "two weeks"
- Use "calendar year" for consistency across all time references
- Avoid vague terms like "prefers" - use definitive language
- State consequences explicitly: "will not be reimbursed" vs implied

**Grammar & Style:**
- Use hyphens for compound adjectives: "two-week notice" not "two week notice"
- Be consistent with terminology throughout documents
- Professional yet warm tone

**Organization:**
- Group related items by category (Child Safety, Education, Meals, etc.)
- Use clear headers and sub-headers
- Put most important information first
- Include both overview and detailed sections

### Resume/CV Content

**Opening Strategy:**
- Lead with specialization and key differentiators
- First sentence should capture attention
- Keep overview to 2 tight paragraphs maximum
- Mention "Nina" nickname to show family bonds

**Skills Section:**
- Use parent-friendly language: "Newborn through School Age" vs technical terms
- Keep list to 8-10 items maximum
- Order by importance/relevance
- Make each skill distinct (no overlap)

**Experience Entries:**
- Use present tense for current roles
- Use past tense for completed roles
- Include 3-5 specific bullet points per position
- Protect family privacy (no specific locations beyond city)

## Age Range Communication

**Consistency Across Documents:**
- CV Overview: "newborn to 6-year-old" or "birth through early elementary"
- CV Skills: "Newborn through School Age"
- Work Agreement: "newborns through 6-year-olds"

All three communicate the same 0-6 year range in appropriate language for context.

## Privacy & Confidentiality

**Family Information:**
- City and state only (Ashburn, VA) - no street addresses
- No specific relocation cities ("out of state" not "Boston")
- No family names in public documents unless necessary
- Photos require explicit permission

**Personal Information:**
- Vaccination status: Keep general ("all standard vaccinations")
- Certifications: Current status without specific dates
- References: "Available upon request" only

## Work Agreement Structure

### Required Sections (in order):
1. Introduction with specialization
2. START DATE
3. WORKSITE ADDRESS
4. WORK SCHEDULE
5. JOB RESPONSIBILITIES
6. COMPENSATION & BENEFITS (with subsections for PTO, sick leave)
7. PAID HOLIDAYS (standard + optional clearly labeled)
8. CONFIDENTIALITY
9. GROUNDS FOR TERMINATION
10. SOCIAL MEDIA POLICY
11. CPR AND EMERGENCY CARE CERTIFICATION
12. PERFORMANCE REVIEWS
13. EMPLOYEE NOTICE TO LEAVE
14. EMPLOYER NOTICE TO TERMINATE
15. Signature blocks
16. ADDENDUM A

### ADDENDUM A Organization:
- Child Safety & Care
- Education & Development
- Meals & Nutrition
- Household Support (Child-Related)
- Transportation
- Sample Daily Schedule (with flexible time blocks)

## Holiday Structure

**6 Standard Paid Holidays (non-negotiable):**
- New Year's Day
- Memorial Day
- July 4th
- Labor Day
- Thanksgiving Day
- Christmas Day

**4 Optional/Flexible Holidays (negotiated per family):**
- New Year's Eve
- Martin Luther King Jr. Day (Nina's Birthday)
- Presidents' Day
- Christmas Eve

**Compensatory Time:** 1:1 basis clearly stated

## Time Off Policies

**Vacation:**
- 10 days per calendar year
- Rollover: up to 20 days maximum (1-year rollover)
- One month advance notice required

**Sick Leave:**
- 5 days per calendar year
- Rollover: up to 10 days maximum (1-year rollover)
- 12 hours advance notice (best effort)

**Holidays:**
- 6 standard + up to 4 optional = 10 total possible
- Weekend policy clearly stated

## Termination Clarity

**Immediate Termination (5 categories):**
1. Compromising child safety/welfare
2. Gross misconduct or negligence
3. Substance abuse
4. Breach of contract terms
5. Consistent failure to perform

**Two-Week Notice Scenarios:**
- Employee leaving voluntarily
- Employer terminating without cause

## Technical Standards

### Build Process
- Development: `pnpm run dev` (port 4321)
- Production: `pnpm run build` → outputs to dist/
- Post-build: Automatically runs convert-docs (pandoc)

### Document Generation
- Source: src/content/blog/post1.md
- Outputs: public/post1.pdf and public/post1.docx
- Requirements: pandoc + LaTeX installed

### Content Files
- CV: src/pages/cv.astro
- Work Agreement: src/content/blog/post1.md
- Site Config: src/config.ts

## Git Workflow (To Be Decided)

**Current State:**
- Push to main → automatic deploy via GitHub Actions
- No release branches or versioning yet

**Next Session Decision:**
- Keep simple (push to main) OR
- Implement release branches with semantic versioning

## Session Management

**Before Starting Work:**
- Read CLAUDE.md and PROJECT-STANDARDS.md
- Review open beads cards: `bd list`
- Check git status for uncommitted changes

**During Work:**
- Update beads cards as progress is made
- Keep changes focused and related
- Test in dev server before building

**Before Compact:**
- Document work in beads cards
- Update PROJECT-STANDARDS.md if new patterns established
- Create todo list for next session
- Run prepare-compact skill

## Review Checklist

**Before Deploying Changes:**

**Content Review:**
- [ ] All time references use consistent language (days, calendar year)
- [ ] Age specialization (0-6 years) mentioned in all three places
- [ ] No privacy issues (family info, PII)
- [ ] Grammar correct (two-week, not two week)
- [ ] Terminology consistent (CPR and Emergency Care)

**Document Review:**
- [ ] CV: Overview, Experience, Skills, Languages all updated
- [ ] Work Agreement: All sections reviewed for consistency
- [ ] ADDENDUM A: Categories organized, sample schedule times correct

**Technical Review:**
- [ ] Dev server tested (http://localhost:4321)
- [ ] Both /cv and /blog/nanny-work-agreement pages checked
- [ ] Build completes successfully
- [ ] PDF/DOCX files generate correctly

## Contact & Branding

**Professional Identity:**
- Full name: Carmelina Ayala
- Nickname: Nina (used by families/children)
- Email signature: "Authored by: Aaron Lippold<lippold@gmail.com>" (per org policy)

**Site Information:**
- Domain: carmelina-ayala.netlify.app
- Site title: Carmelina Ayala | Professional Nanny
- Focus: Northern Virginia area (Ashburn, Brambleton, Sterling, Broadlands)

---

## Change Log

**January 2026 Session:**
- Established all standards documented above
- Updated CV and Work Agreement comprehensively
- Created beads board for project tracking
- Set up PROJECT-STANDARDS.md document
