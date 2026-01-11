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
# Copy CV HTML and fix all image paths to be relative
cp ./dist/cv/index.html /tmp/cv-source.html
sed -i.bak \
  -e 's|src="/profile.webp"|src="../../public/profile.webp"|g' \
  -e 's|src="/.netlify/images/|src="../../.netlify/images/|g' \
  /tmp/cv-source.html

pandoc /tmp/cv-source.html \
  -o ./public/carmelina-ayala-cv.docx

pandoc /tmp/cv-source.html \
  -o ./public/carmelina-ayala-cv.pdf \
  --pdf-engine=weasyprint \
  --css=src/styles/print-cv.css

# Cleanup
rm -f /tmp/cv-source.html /tmp/cv-source.html.bak

echo "✓ Documents converted successfully"
