import os

pdf_path = r"c:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\brochure.pdf"

if not os.path.exists(pdf_path):
    print(f"Error: File not found at {pdf_path}")
    exit(1)

with open(pdf_path, "rb") as f:
    content = f.read()

# Replace BROACHER. with BROCHURE.
fixed_content = content.replace(b"BROACHER.", b"BROCHURE.")
# Replace BROACHER with BROCHURE just in case there are other occurrences
fixed_content = fixed_content.replace(b"BROACHER", b"BROCHURE")

# Write it back
with open(pdf_path, "wb") as f:
    f.write(fixed_content)

print("PDF Title metadata updated successfully!")
