import os
import urllib.request
from PIL import Image

logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"
logo = Image.open(logo_img_path).convert("RGBA")

static_dir = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static"
remote_url = "https://www.avilpro.in/wp-content/uploads/2024/12/sn.jpg"
local_sn_path = os.path.join(static_dir, "sn.jpg")

try:
    # 1. Download clean sandwich image
    urllib.request.urlretrieve(remote_url, local_sn_path)
    
    base = Image.open(local_sn_path).convert("RGBA")
    
    # Target width 20% of base image
    target_width = int(base.width * 0.20)
    ratio = target_width / logo.width
    target_height = int(logo.height * ratio)
    
    logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
    
    # Place top right corner, but slightly down
    margin = int(base.width * 0.05)
    x = base.width - target_width - margin
    y = margin + int(base.height * 0.10)
    
    temp.paste(logo_resized, (x, y))
    result = Image.alpha_composite(base, temp)
    
    result.save(local_sn_path, format="PNG")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
