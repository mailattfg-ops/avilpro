import os
import sys
import urllib.request
from PIL import Image, ImageOps

logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"
logo = Image.open(logo_img_path).convert("RGBA")

# We will apply the logo to the bottom right corner for all of these images.
images_to_process = [
    "/speciality_falooda.png",
    "/premium_shake.jpg",
    "/red_velvet_shake.png",
    "/refreshing_mojito.png",
    "/white_forest_speciality.png",
    "/gourmet_burger.png",
    "/loaded_fries.png",
    "/french_fries.png"
]

static_dir = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static"

for img_name in images_to_process:
    base_img_path = os.path.join(static_dir, img_name.strip("/"))
    if not os.path.exists(base_img_path):
        print(f"Skipping {base_img_path}, not found.")
        continue
    
    try:
        base = Image.open(base_img_path).convert("RGBA")
        
        # Calculate target width for logo (e.g. 20% of the base image width for a watermark style)
        target_width = int(base.width * 0.25)
        ratio = target_width / logo.width
        target_height = int(logo.height * ratio)
        
        logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
        
        # Place logo at the bottom right with a small margin
        margin = int(base.width * 0.05)
        x = base.width - target_width - margin
        y = base.height - target_height - margin
        
        temp.paste(logo_resized, (x, y))
        result = Image.alpha_composite(base, temp)
        
        # Save back to the same path
        result.save(base_img_path, format="PNG") # Always save as PNG internally, even if extension is JPG
        print(f"Processed {img_name}")
    except Exception as e:
        print(f"Error processing {img_name}: {e}")

# Process the remote image (Signature Sandwiches)
remote_url = "https://www.avilpro.in/wp-content/uploads/2024/12/sn.jpg"
local_sn_path = os.path.join(static_dir, "sn.jpg")
try:
    urllib.request.urlretrieve(remote_url, local_sn_path)
    base = Image.open(local_sn_path).convert("RGBA")
    
    target_width = int(base.width * 0.25)
    ratio = target_width / logo.width
    target_height = int(logo.height * ratio)
    logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
    margin = int(base.width * 0.05)
    x = base.width - target_width - margin
    y = base.height - target_height - margin
    
    temp.paste(logo_resized, (x, y))
    result = Image.alpha_composite(base, temp)
    result.save(local_sn_path, format="PNG")
    print("Processed remote sn.jpg")
except Exception as e:
    print(f"Error processing remote sn.jpg: {e}")
