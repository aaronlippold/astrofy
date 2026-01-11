#!/bin/bash
set -e

echo "Converting documents to DOCX and PDF..."

# Generate Work Agreement documents
pandoc ./src/content/blog/post1.md \
  -o ./public/nanny-work-agreement.docx

pandoc ./src/content/blog/post1.md \
  -o ./public/nanny-work-agreement.pdf \
  --pdf-engine=weasyprint

# Generate CV documents
# Use Python to strip images from HTML
python3 scripts/strip-images.py ./dist/cv/index.html /tmp/cv-source.html

pandoc /tmp/cv-source.html \
  -o ./public/carmelina-ayala-cv.docx

pandoc /tmp/cv-source.html \
  -o ./public/carmelina-ayala-cv.pdf \
  --pdf-engine=weasyprint \
  --css=src/styles/print-cv.css

# Cleanup
rm -f /tmp/cv-source.html

echo "✓ Documents converted successfully"
