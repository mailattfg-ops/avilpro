import sys
from PIL import Image, ImageOps

# Load images
base_img_path = r"C:\Users\HP\.gemini\antigravity-ide\brain\8afedabe-1762-4986-83b2-dc2acae052db\lebanese_dessert_clean_1784004940853.png"
logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"

try:
    base = Image.open(base_img_path).convert("RGBA")
    
    # Zoom in by cropping (e.g. remove 15% from each side)
    zoom_factor = 0.15
    left = int(base.width * zoom_factor)
    top = int(base.height * zoom_factor)
    right = int(base.width * (1 - zoom_factor))
    bottom = int(base.height * (1 - zoom_factor))
    base = base.crop((left, top, right, bottom))
    
    # Resize back to original size (optional but keeps quality high)
    # base = base.resize((original_width, original_height), Image.Resampling.LANCZOS)
    
    logo = Image.open(logo_img_path).convert("RGBA")
    
    # Calculate target width for logo (e.g. 30% of the base image width for clear visibility on the bowl)
    target_width = int(base.width * 0.35)
    ratio = target_width / logo.width
    target_height = int(logo.height * ratio)
    
    # Resize logo with high quality resampling
    logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Create an empty image for the mask/placement
    temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
    
    # Calculate position (center horizontally, vertically placed well on the bowl front)
    x = (base.width - target_width) // 2
    y = int(base.height * 0.65) - (target_height // 2)
    
    temp.paste(logo_resized, (x, y))
    
    # Composite
    result = Image.alpha_composite(base, temp)
    
    # Save the output back to the project static directory
    out_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\lebanese_salad.png"
    result.save(out_path, format="PNG")
    
    print("Success")
except Exception as e:
    print("Error:", e)
    
