import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useModal } from "@/App";
import { Award, Leaf, Smile, Utensils, Play } from "lucide-react";

export const IngredientsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.15);
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.15);
  const { openVideo } = useModal();

  const cards = [
    {
      icon: <Award className="h-8 w-8 text-green-700" />,
      title: "High Quality Products",
      description: "Every item is crafted with rigorous standards and premium ingredients to deliver unmatched taste in every single sip.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-700" />,
      title: "Organic Ingredients",
      description: "Directly sourced from trusted regional farms. Pure dairy, fresh bananas, and quality roasted avil with no additives.",
    },
    {
      icon: <Smile className="h-8 w-8 text-green-700" />,
      title: "Welcoming Atmosphere",
      description: "Dedicated to hospitality. We prioritize client convenience and comfort to offer an exceptional hospitality experience.",
    },
    {
      icon: <Utensils className="h-8 w-8 text-green-700" />,
      title: "Authentic Taste",
      description: "Traditional Kerala heritage recipes prepared by experienced food makers, perfectly blended with continental standards.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-50 px-4 py-16 md:px-0 md:py-24">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-2 md:px-4">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`mb-12 md:mb-16 text-center transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h6 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-800 md:text-sm">
            Our Quality Standards
          </h6>
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-green-700 md:text-6xl">
            Why Choose Us?
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-sm font-medium text-neutral-600 md:text-base">
            We merge traditional values with modern food engineering to deliver consistent, delicious, and high-quality milkshakes.
          </p>
        </div>

        {/* redesigned Feature Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-100 ${
            gridVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-3xl border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(21,128,61,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300 text-green-700">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 group-hover:text-green-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Full-Width Video Banner */}
        <div className="relative w-full aspect-[21/9] min-h-[220px] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl group/video">
          {/* Backdrop Image with zoom effect */}
          <img
            src="/avilpro_video_banner.png"
            alt="Avil Milk Preview Banner"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl md:rounded-[40px] group-hover/video:scale-105 transition-transform duration-1000"
          />
          {/* Overlay mask */}
          <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/50 transition-colors duration-500 rounded-3xl md:rounded-[40px]" />

          {/* Centered Play UI */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <button
              onClick={openVideo}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 hover:bg-green-700 border-2 border-white text-white hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
              aria-label="Play Brand Video"
            >
              <Play className="h-6 w-6 fill-current pl-0.5" />
            </button>
            <h3 className="mt-4 text-lg md:text-2xl font-extrabold uppercase text-white tracking-wide">
              Watch The Avilpro Story
            </h3>
            <p className="text-xs md:text-sm font-semibold text-white/70 tracking-widest uppercase mt-1">
              Click to view brand film
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
