import os
from PIL import Image

base_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\speciality_falooda.png"
logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"

try:
    base = Image.open(base_img_path).convert("RGBA")
    logo = Image.open(logo_img_path).convert("RGBA")
    
    # Make the logo smaller (20% instead of 25%)
    target_width = int(base.width * 0.20)
    ratio = target_width / logo.width
    target_height = int(logo.height * ratio)
    
    logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
    
    # Place it slightly up (44% height) and slightly to the right
    x = ((base.width - target_width) // 2) + int(base.width * 0.03)
    y = int(base.height * 0.44) - (target_height // 2)
    
    temp.paste(logo_resized, (x, y))
    result = Image.alpha_composite(base, temp)
    
    result.save(base_img_path, format="PNG")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
