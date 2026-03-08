from PIL import Image
import os

def convert_images_to_pdf(output_pdf_name):
    
    image_files = [
        "cert_1.jpeg", 
        "cert_2.jpeg",
        "cert_3.jpeg",
	"cert_4.jpeg",
	"cert_5.jpeg"
        
    ]

    image_list = []

    print("--- Görselden PDF'e Dönüştürme Başladı ---")

    for img_path in image_files:
        if os.path.exists(img_path):
            img = Image.open(img_path).convert('RGB')
            image_list.append(img)
            print(f"Eklendi: {img_path}")
        else:
            print(f"Hata: {img_path} bulunamadı.")

    if image_list:
        image_list[0].save(
            output_pdf_name, 
            save_all=True, 
            append_images=image_list[1:]
        )
        print(f"\nBaşarılı! Portfolyon '{output_pdf_name}' adıyla hazır.")
    else:
        print("\nHiç görsel bulunamadı, PDF oluşturulmadı.")

if __name__ == "__main__":
    convert_images_to_pdf("Prtfolio.pdf")