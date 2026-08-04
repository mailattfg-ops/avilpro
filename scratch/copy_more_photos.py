from PIL import Image

src_dessert = r"C:\Users\HP\Downloads\ChatGPT Image Aug 4, 2026, 02_48_20 PM.png"
src_burger = r"C:\Users\HP\Downloads\ChatGPT Image Aug 4, 2026, 01_42_37 PM.png"
src_sandwich = r"C:\Users\HP\Downloads\ChatGPT Image Aug 4, 2026, 01_42_16 PM.png"

dest_dessert = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\lebanese_salad.png"
dest_burger = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\gourmet_burger.png"
dest_sandwich = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\sn.jpg"

# Convert & Save Dessert
img_dessert = Image.open(src_dessert).convert("RGBA")
img_dessert.save(dest_dessert, "PNG")
print("Updated lebanese_salad.png!")

# Convert & Save Burger
img_burger = Image.open(src_burger).convert("RGBA")
img_burger.save(dest_burger, "PNG")
print("Updated gourmet_burger.png!")

# Convert & Save Sandwich
img_sandwich = Image.open(src_sandwich).convert("RGB")
img_sandwich.save(dest_sandwich, "JPEG")
print("Updated sn.jpg!")
