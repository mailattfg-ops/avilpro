import os
import sys
import urllib.request
from PIL import Image, ImageOps

logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"
logo = Image.open(logo_img_path).convert("RGBA")

static_dir = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static"

glasses = [
    "/speciality_falooda.png",
    "/premium_shake.jpg",
    "/red_velvet_shake.png",
    "/refreshing_mojito.png",
    "/white_forest_speciality.png"
]

wrappers = [
    "/gourmet_burger.png",
    "/loaded_fries.png",
    "/french_fries.png"
]

def apply_logo(img_name, y_ratio, width_ratio):
    base_img_path = os.path.join(static_dir, img_name.strip("/"))
    if not os.path.exists(base_img_path):
        print(f"Skipping {base_img_path}, not found.")
        return
    
    try:
        base = Image.open(base_img_path).convert("RGBA")
        
        target_width = int(base.width * width_ratio)
        ratio = target_width / logo.width
        target_height = int(logo.height * ratio)
        
        logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
        
        # Center horizontally, place at y_ratio vertically
        x = (base.width - target_width) // 2
        y = int(base.height * y_ratio) - (target_height // 2)
        
        temp.paste(logo_resized, (x, y))
        result = Image.alpha_composite(base, temp)
        
        result.save(base_img_path, format="PNG") 
        print(f"Processed {img_name}")
    except Exception as e:
        print(f"Error processing {img_name}: {e}")

# Process glasses (logo at ~55% height, center of the glass)
for img in glasses:
    apply_logo(img, 0.55, 0.35)

# Process wrappers (logo at ~65% height, center of the wrapper)
for img in wrappers:
    apply_logo(img, 0.65, 0.35)

# Download and process remote sandwich image (wrapper style)
remote_url = "https://www.avilpro.in/wp-content/uploads/2024/12/sn.jpg"
local_sn_path = os.path.join(static_dir, "sn.jpg")
try:
    urllib.request.urlretrieve(remote_url, local_sn_path)
    apply_logo("sn.jpg", 0.65, 0.35)
except Exception as e:
    print(f"Error processing remote sn.jpg: {e}")
