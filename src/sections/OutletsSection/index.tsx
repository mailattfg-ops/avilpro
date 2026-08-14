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
    phone: "+91 80862 22324",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Chavakkad+Beach+road",
  },
  {
    ariaLabel: "2 / 12",
    imageSrc: "/pavaratty.jpg",
    imageAlt: "Avilpro Pavaratty",
    name: "Avilpro Pavaratty",
    address: "Near VKG Cinemas, Pavaratty, Thrissur, Kerala",
    phone: "9746525282",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Pavaratty+near+Vkg+cinemas",
  },
  {
    ariaLabel: "3 / 12",
    imageSrc: "/thammanam.jpg",
    imageAlt: "Avilpro Thammanam",
    name: "Avilpro Thammanam",
    address: "Mahakavi Vailopilly Road, Thammanam, Kochi, Kerala",
    phone: "+91 9497711171",
    mapUrl: "https://maps.app.goo.gl/JMnq8PFfDWRPhkJ19",
  },
  {
    ariaLabel: "4 / 12",
    imageSrc: "/vadanapally.jpg",
    imageAlt: "Avilpro Vadanapally",
    name: "Avilpro Vadanapally",
    address: "Near Nandi Lath G Mart, Vadanapally, Thrissur, Kerala",
    phone: "+91 96331 09155",
    mapUrl: "https://maps.app.goo.gl/8X2gADr97qhBSLUAA",
  },
  {
    ariaLabel: "5 / 12",
    imageSrc: "/eramangalam.jpg",
    imageAlt: "Avilpro Eramangalam",
    name: "Avilpro Eramangalam",
    address: "Kalathil Padi, Eramangalam, Malappuram, Kerala",
    phone: "+91 95449 71393",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+eramangalam+Kalathil+padi",
  },
  {
    ariaLabel: "6 / 12",
    imageSrc: "/kazhakkoottam.jpg",
    imageAlt: "Avilpro Kazhakkoottam",
    name: "Avilpro Kazhakkoottam",
    address: "Kazhakkoottam, Trivandrum, Kerala",
    phone: "0751-1109988",
    mapUrl: "https://maps.app.goo.gl/GjgdRFm2em7AtBUK6",
  },
  {
    ariaLabel: "7 / 12",
    imageSrc: "/thaikkad.jpg",
    imageAlt: "Avilpro Thaikkad",
    name: "Avilpro Thaikkad",
    address: "Palli Road, Thaikkad, Thrissur, Kerala",
    phone: "04872081188",
    mapUrl: "https://maps.app.goo.gl/9dt8mLhFa2rwsZCX9",
  },
  {
    ariaLabel: "8 / 12",
    imageSrc: "/guruvayoor.jpg",
    imageAlt: "Avilpro Guruvayoor",
    name: "Avilpro Guruvayoor",
    address: "Opp. Private Bus Stand, Guruvayoor, Thrissur, Kerala",
    phone: "04872081188",
    mapUrl: "https://maps.app.goo.gl/9dt8mLhFa2rwsZCX9",
  },
  {
    ariaLabel: "9 / 12",
    imageSrc: "/kunnamkulam.jpg",
    imageAlt: "Avilpro Kunnamkulam",
    name: "Avilpro Kunnamkulam",
    address: "New Private Bus Stand, Kunnamkulam, Thrissur, Kerala",
    phone: "+91 99473 00202",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Kunnamkulam+new+private+bus+stand",
  },
  {
    ariaLabel: "10 / 12",
    imageSrc: "/mattoor.jpg",
    imageAlt: "Avilpro Mattoor",
    name: "Avilpro Mattoor",
    address: "Near Kalady Sanskrit University, Mattoor, Kalady, Kerala",
    phone: "+91 96457 08862",
    mapUrl: "https://maps.app.goo.gl/tS4r3z29GoP69RHc7",
  },
  {
    ariaLabel: "11 / 12",
    imageSrc: "/thrissur.jpg",
    imageAlt: "Avilpro Thrissur",
    name: "Avilpro Thrissur",
    address: "Opp. Malabar Gold, MG Road, Thrissur, Kerala",
    phone: "+91 94006 90690",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avil+Pro+Thrissur+mg+road+opp+Malabar+gold",
  },
  {
    ariaLabel: "12 / 12",
    imageSrc: "/vadakkekad.jpg",
    imageAlt: "Avilpro Vadakkekad (Attupuram)",
    name: "Avilpro Vadakkekad (Attupuram)",
    address: "Attupuram, Vadakkekad, Thrissur, Kerala",
    phone: "+91 86061 46638",
    mapUrl: "https://maps.app.goo.gl/LG4WUj5BMqnYsGM4A",
  },
];

export const OutletsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  return (
    <section className="relative box-border overflow-hidden bg-yellow-400 px-2 py-8 md:px-0 md:py-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 py-4">
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
