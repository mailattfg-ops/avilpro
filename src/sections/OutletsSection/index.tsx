// removed imports
import { OutletCard } from "@/sections/OutletsSection/components/OutletCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const outlets = [
  {
    ariaLabel: "1 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro8.jpeg",
    imageAlt: "Avilpro Chavakkad",
    name: "Avilpro Chavakkad",
    address: "Beach road, Chavakkad, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Chavakkad+Beach+road",
  },
  {
    ariaLabel: "2 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro7.jpeg",
    imageAlt: "Avilpro Pavaratty",
    name: "Avilpro Pavaratty",
    address: "Near VKG Cinemas, Pavaratty, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Pavaratty+near+Vkg+cinemas",
  },
  {
    ariaLabel: "3 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro6.jpeg",
    imageAlt: "Avilpro Thaikkad",
    name: "Avilpro Thaikkad",
    address: "Palli Road, Thaikkad, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Thaikkad+Palli+road",
  },
  {
    ariaLabel: "4 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro8.jpeg",
    imageAlt: "Avilpro Guruvayoor",
    name: "Avilpro Guruvayoor",
    address: "Opp. Private Bus Stand, Guruvayoor, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "#",
  },
  {
    ariaLabel: "5 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro7.jpeg",
    imageAlt: "Avilpro Kunnamkulam",
    name: "Avilpro Kunnamkulam",
    address: "New Private Bus Stand, Kunnamkulam, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Kunnamkulam+new+private+bus+stand",
  },
  {
    ariaLabel: "6 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro6.jpeg",
    imageAlt: "Avilpro Thammanam",
    name: "Avilpro Thammanam",
    address: "Mahakavi Vailopilly Road, Thammanam, Kochi, Kerala",
    phone: "+91 9497711171",
    mapUrl: "#",
  },
  {
    ariaLabel: "7 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro8.jpeg",
    imageAlt: "Avilpro Eramangalam",
    name: "Avilpro Eramangalam",
    address: "Kalathil Padi, Eramangalam, Malappuram, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+eramangalam+Kalathil+padi",
  },
  {
    ariaLabel: "8 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro7.jpeg",
    imageAlt: "Avilpro Vadanapally",
    name: "Avilpro Vadanapally",
    address: "Near Nandi Lath G Mart, Vadanapally, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://maps.app.goo.gl/8X2gADr97qhBSLUAA",
  },
  {
    ariaLabel: "9 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro6.jpeg",
    imageAlt: "Avilpro Mattoor",
    name: "Avilpro Mattoor",
    address: "Near Kalady Sanskrit University, Mattoor, Kalady, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://maps.app.goo.gl/tS4r3z29GoP69RHc7",
  },
  {
    ariaLabel: "10 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro8.jpeg",
    imageAlt: "Avilpro Thrissur",
    name: "Avilpro Thrissur",
    address: "Opp. Malabar Gold, MG Road, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Thrissur+mg+road+opp+Malabar+gold",
  },
  {
    ariaLabel: "11 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro7.jpeg",
    imageAlt: "Avilpro Vadakkekad (Attupuram)",
    name: "Avilpro Vadakkekad (Attupuram)",
    address: "Attupuram, Vadakkekad, Thrissur, Kerala",
    phone: "+91 9497711171",
    mapUrl: "#",
  },
  {
    ariaLabel: "12 / 12",
    imageSrc:
      "https://www.avilpro.in/wp-content/uploads/2025/01/avil-pro6.jpeg",
    imageAlt: "Avilpro Kazhakkoottam",
    name: "Avilpro Kazhakkoottam",
    address: "Kazhakkoottam, Trivandrum, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://maps.app.goo.gl/GjgdRFm2em7AtBUK6",
  },
];

export const OutletsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  return (
    <section className="relative box-border overflow-hidden bg-white px-2 py-8 md:px-0 md:py-6">
      <div className="mx-auto w-full max-w-none px-2 md:max-w-[1140px] md:px-2">
        <div
          ref={titleRef}
          className={`mb-6 transition-all duration-700 md:mb-8 ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h1 className="mb-1 text-[clamp(2.5rem,9vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-green-700 drop-shadow-sm">
            Our Outlets
          </h1>
          <p className="text-[16px] font-medium text-green-700 md:text-[20px]">
            Visit our nearby stores and enjoy fresh taste in every cup.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-4">
            {outlets.map((outlet, i) => (
              <OutletCard
                key={`${outlet.name}-${i}`}
                ariaLabel={outlet.ariaLabel}
                imageSrc={outlet.imageSrc}
                imageAlt={outlet.imageAlt}
                name={outlet.name}
                address={outlet.address}
                phone={outlet.phone}
                mapUrl={outlet.mapUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
