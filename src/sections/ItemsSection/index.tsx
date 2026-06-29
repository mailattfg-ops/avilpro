import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "special", label: "Special Avil Milks" },
  { id: "specialities", label: "Avil Milk Specialities" },
  { id: "more", label: "More From Our Menu" },
];

const menuProducts = [
  {
    category: "special",
    categoryLabel: "Special Avil Milk",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/avil.jpg",
    title: "Classic Avil Milk",
    description: "Our signature blend of fresh milk, ripe bananas, and perfectly roasted avil (flattened rice) for the ultimate crunch.",
  },
  {
    category: "special",
    categoryLabel: "Special Avil Milk",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/milka.jpg",
    title: "Nutty Shake Special",
    description: "Rich avil milk topped with high-quality roasted cashews, almonds, and peanuts for extra nutty goodness.",
  },
  {
    category: "specialities",
    categoryLabel: "Speciality",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/avil.jpg",
    title: "Avil Milk Speciality",
    description: "Premium edition loaded with delicious fruit chunks, creamy dairy bases, and authentic street-classic tastes.",
  },
  {
    category: "specialities",
    categoryLabel: "Speciality",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/milka.jpg",
    title: "Premium Milk Shake",
    description: "Ultra-creamy, velvety milkshakes crafted with premium ice cream bases and high-grade dairy.",
  },
  {
    category: "specialities",
    categoryLabel: "Speciality",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/mojitto.jpg",
    title: "Refreshing Mojito",
    description: "A bubbly, cooling mojito infused with fresh mint leaves and zesty lime wedges to refresh your day.",
  },
  {
    category: "specialities",
    categoryLabel: "Speciality",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/f.jpg",
    title: "Royal Falooda",
    description: "Traditional rich falooda layers containing sweet rose syrup, vermicelli, basil seeds, and loaded ice cream scoops.",
  },
  {
    category: "more",
    categoryLabel: "Menu Special",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/frui.jpg",
    title: "Fresh Fruit Salad",
    description: "A healthy, colorful bowl of fresh seasonal fruits topped with delicious honey glaze or vanilla ice cream.",
  },
  {
    category: "more",
    categoryLabel: "Menu Special",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/burger-1.jpg",
    title: "Gourmet Burgers",
    description: "Juicy, flame-grilled premium burgers stacked with fresh lettuce, melting cheese, tomatoes, and home sauces.",
  },
  {
    category: "more",
    categoryLabel: "Menu Special",
    imageSrc: "https://www.avilpro.in/wp-content/uploads/2024/12/sn.jpg",
    title: "Signature Sandwiches",
    description: "Perfectly toasted warm sandwiches stuffed with spiced savory fillings and garden-fresh greens.",
  },
];

export const ItemsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? menuProducts
    : menuProducts.filter(p => p.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-0 md:py-24">
      {/* Background Decorative Drift text */}
      <div className="pointer-events-none absolute inset-x-0 top-[40%] hidden md:block">
        <div
          className="select-none text-center text-[clamp(76px,10vw,145px)] font-black uppercase leading-none tracking-[-0.08em]"
          style={{ color: "rgba(22, 163, 74, 0.08)" }}
        >
          AVILPRO PREMIUM MENU
        </div>
      </div>

      <div className="box-border max-w-[1140px] mx-auto px-2 md:px-4">
        {/* Header Block with Flex Columns */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 md:mb-16">
          <div className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h6 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 md:text-sm">
              Discover Our Delights
            </h6>
            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-green-700 md:text-6xl">
              Our Premium Menu
            </h1>
            <p className="mt-2 text-sm font-medium text-neutral-600 md:text-base max-w-xl">
              Combine traditional Kerala values with high culinary standards. Explore our signature shakes, avil milks, and continental snacks.
            </p>
          </div>

          {/* Since 1985 round block */}
          <div
            className={`relative shrink-0 flex items-center justify-center h-44 w-44 md:h-52 md:w-52 transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-yellow-100/80" />
            <div className="absolute flex h-36 w-36 md:h-44 md:w-44 items-center justify-center rounded-full bg-yellow-400 text-center text-lg md:text-2xl font-black uppercase leading-none tracking-tight text-green-800">
              Since 1985
            </div>
            <div className="absolute -inset-6 animate-[spin-slow_15s_linear_infinite] pointer-events-none opacity-[0.15]">
              <svg viewBox="0 0 400 400" className="w-full h-full text-green-700">
                <path
                  id="circlePath"
                  d="M 200, 200 m -160, 0 a 160,160 0 0,1 320,0 a 160,160 0 0,1 -320,0"
                  fill="none"
                />
                <text fill="currentColor" className="font-extrabold uppercase tracking-[0.28em] text-[36px]">
                  <textPath href="#circlePath" startOffset="0%">
                    THE AVILPRO'S STORY • THE AVILPRO'S STORY • 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 border-b border-neutral-100 pb-6">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === category.id
                  ? "bg-green-700 text-yellow-400 border-green-700 shadow-md shadow-green-700/10"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-green-700 hover:text-green-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* redesigned Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product, idx) => (
            <div
              key={`${product.title}-${idx}`}
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(21,128,61,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image box with rounded corners */}
              <div className="relative w-full aspect-[4/3] bg-neutral-50 overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-green-50/90 backdrop-blur-sm px-3.5 py-1 text-[10px] font-black uppercase text-green-700 tracking-wider">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Text descriptions */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-800 group-hover:text-green-700 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-medium flex-grow">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
