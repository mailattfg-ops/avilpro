import os
from PIL import Image

static_dir = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static"
logo_img_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\scratch\logo.png"

def apply_logo(img_name, y_ratio, width_ratio):
    base_img_path = os.path.join(static_dir, img_name)
    try:
        base = Image.open(base_img_path).convert("RGBA")
        logo = Image.open(logo_img_path).convert("RGBA")
        
        target_width = int(base.width * width_ratio)
        ratio = target_width / logo.width
        target_height = int(logo.height * ratio)
        
        logo_resized = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        temp = Image.new("RGBA", base.size, (0, 0, 0, 0))
        
        x = (base.width - target_width) // 2
        y = int(base.height * y_ratio) - (target_height // 2)
        
        temp.paste(logo_resized, (x, y))
        result = Image.alpha_composite(base, temp)
        
        result.save(base_img_path, format="PNG")
        print(f"Success for {img_name}")
    except Exception as e:
        print(f"Error for {img_name}: {e}")

# Loaded Fries: smaller and lower to hit the brown tray
apply_logo("loaded_fries.png", 0.88, 0.18)

# French Fries: already done
# apply_logo("french_fries.png", 0.55, 0.40)
