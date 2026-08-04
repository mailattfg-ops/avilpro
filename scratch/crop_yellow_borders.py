from PIL import Image

burger_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\gourmet_burger.png"
sandwich_path = r"C:\Users\HP\Desktop\projects\tfg projects all\avilpro\static\sn.jpg"

# Crop outer yellow frame border from Burger (approx 15px around)
img_b = Image.open(burger_path)
w_b, h_b = img_b.size
crop_b = img_b.crop((15, 15, w_b - 15, h_b - 15))
crop_b.save(burger_path, "PNG")

# Crop outer yellow frame border from Sandwich (approx 15px around)
img_s = Image.open(sandwich_path)
w_s, h_s = img_s.size
crop_s = img_s.crop((15, 15, w_s - 15, h_s - 15))
crop_s.save(sandwich_path, "JPEG")

print("Cropped yellow frame borders from burger and sandwich images!")
