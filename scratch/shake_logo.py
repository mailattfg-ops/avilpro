import os
from PIL import Image

base_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\premium_shake.jpg"
logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"

try:
    base = Image.open(base_img_path).convert("RGBA")
    logo = Image.open(logo_img_path).convert("RGBA")
    
    # 35% width, same as other glasses
    target_width = int(base.width * 0.35)
    ratio = target_width / logo.width
    target_height = int(logo.height * ratio)
    
    logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
    
    # Place it a little down side (62% height instead of 55%)
    x = (base.width - target_width) // 2
    y = int(base.height * 0.62) - (target_height // 2)
    
    temp.paste(logo_resized, (x, y))
    result = Image.alpha_composite(base, temp)
    
    result.save(base_img_path, format="PNG")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
