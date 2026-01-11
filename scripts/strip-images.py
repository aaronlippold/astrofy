#!/usr/bin/env python3
import sys
import re

if len(sys.argv) != 3:
    print("Usage: strip-images.py <input.html> <output.html>")
    sys.exit(1)

input_file = sys.argv[1]
output_file = sys.argv[2]

# Read the HTML file
with open(input_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Remove all img tags
html = re.sub(r'<img[^>]*>', '', html)

# Write the cleaned HTML
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html)
