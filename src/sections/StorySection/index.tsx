import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timelineData = [
  {
    year: "1980",
    title: "The Humble Beginnings",
    subtitle: "Bakery Fruits & Cool Bar",
    content: "Every extraordinary journey begins with a simple dream. Ours took root in 1980, when our father established Bakery Fruits & Cool Bar. Nestled in a close-knit community, this modest neighborhood bakery was founded on an uncompromised principle: serving fresh, traditional food and beverages with genuine warmth and honesty.\n\nOver the years, it evolved into a beloved sanctuary for families, students, and travelers alike—anyone who appreciated the comforting taste of authentic, care-crafted goods. The loyalty of our community became our greatest asset, teaching us that true business growth is built on a foundation of unwavering trust.",
  },
  {
    year: "2009",
    title: "A Strategic Leap Forward",
    subtitle: "Baking Bakes & Expansion",
    content: "As our aspirations grew, we recognized the need to elevate the local culinary landscape. In 2009, we achieved a monumental milestone by introducing a KR Bakery franchise outlet to our village. Bringing a heavily respected brand to our roots wasn't just a business expansion; it was an educational masterclass.\n\nSimultaneously, we channeled this operational expertise into our independent venture, launching Baking Bakes at Edakkazhiyoor (Chavakkad/Trissur/Kerala). This innovative concept seamlessly integrated a premium bakery with a vibrant fresh juice and cool bar experience under one roof. Equipped with modern facilities and an enhanced product lineup, 2009 effectively set the stage for our future as independent brand builders.",
  },
  {
    year: "2012",
    title: "Engineering Excellence",
    subtitle: "Scalable Quality Precision",
    content: "By 2012, growing regional demand necessitated a shift from traditional craftsmanship to scalable precision. To preserve our signature consistency at a larger volume, we established a state-of-the-art modern manufacturing unit.\n\nThis pivotal investment marked a transformative step forward, enabling the adoption of advanced production technologies alongside strict quality assurance systems. Far more than a production facility, it emerged as the cornerstone of our brand, empowering us to efficiently deliver a wide range of quality and premium bakery products to an ever-growing regional customer base.",
  },
  {
    year: "2023",
    title: "The 'AvilPro' Revolution",
    subtitle: "Radical Street Classic Reimagined",
    content: "A decade of operational refinement paved the way for a bold, visionary leap. In 2023, inspired by the rich heritage of Kerala’s traditional Avil Milk, we set out to do something radical: transform a beloved local street classic into a sophisticated, modern brand experience.\n\nThis vision manifested as AvilPro, debuting in the heart of Chavakkad. By pairing nostalgic, authentic flavors with contemporary branding, innovative recipes, and a guest-centric approach, AvilPro instantly captivated the market.\n\nThe response was nothing short of a phenomenon. Driven by passionate consumer advocacy and flawless operational execution, a singular outlet quickly multiplied into a thriving network.",
  },
  {
    year: "2026",
    title: "Future Outlook (Present)",
    subtitle: "Multi-City Brand Growth",
    content: "Today, in 2026, AvilPro proudly commands over 14 vibrant outlets across major cities in Kerala. What began over four decades ago as a humble village bakery and cool bar shop has matured into a dynamic, continental foods and beverage enterprise.\n\nFrom a single storefront in 1980 to a diversified, multi-city brand offering various concepts today, our evolution stands as a testament to multi-generational dedication, forward-thinking innovation, and the enduring trust of our patrons.\n\nAs we look toward new horizons, our north star remains entirely unchanged: to craft exceptional quality, curate memorable experiences with various traditional and continental foods, and build homegrown brands that people genuinely love.",
    quote: "A legacy built on taste, driven by innovation, and sustained by trust—yesterday, today, and for generations to come."
  },
  {
    year: "2030",
    title: "Vision 2030",
    subtitle: "Kerala Heritage to the World",
    content: "Looking ahead, our vision transcends borders. By 2030, we aim to position AvilPro as a global icon in the food and beverage ecosystem with its own unique approach. We are bringing the vibrant flavors, deep heritage, and bold entrepreneurial spirit of Kerala to the world stage, elegantly harmonized with continental flair.\n\nOur vision is to establish a strong presence in the international food ecosystem and evolve into a world-class brand, recognized for its distinctive approach to innovation, quality, consistency, and exceptional customer experiences. We strive to bring products inspired by our rich heritage to global audiences—thoughtfully blended with continental influences—while preserving the authenticity that defines who we are.",
  },
];

export const StorySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.15);
  const [activeTab, setActiveTab] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-play timeline every 5s if user hasn't manual-clicked
  useEffect(() => {
    if (isUserInteracted) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % timelineData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isUserInteracted]);

  // Reset user interaction state when scrolling out of view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsUserInteracted(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setIsUserInteracted(true);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-yellow-400 px-4 py-16 md:px-0 md:py-24">
      {/* Background Decorative Drift */}
      <div className="pointer-events-none absolute inset-x-0 top-[10%] hidden md:block">
        <div
          className="select-none text-center text-[clamp(76px,10vw,140px)] font-black uppercase leading-none tracking-[-0.08em]"
          style={{ color: "rgba(22, 163, 74, 0.09)" }}
        >
          THE AVILPRO STORY
        </div>
      </div>

      <div className="box-border max-w-none w-full mx-auto md:max-w-[1140px] px-2 md:px-4">
        {/* Title Header */}
        <div
          ref={titleRef}
          className={`mb-10 text-center transition-all duration-700 md:mb-16 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h6 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-800 md:text-sm">
            ISO 22000:2018 Certified Company
          </h6>
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-green-700 md:text-6xl lg:text-7xl">
            Our Legacy Timeline
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-sm font-medium text-green-900 md:text-base">
            From a single storefront in 1980 to a multi-city premium brand, track our growth across generations.
          </p>
        </div>

        {/* Timeline Interaction Area */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Horizontal Year Selector tabs */}
          <div className="relative mb-8 flex w-full max-w-4xl gap-6 md:gap-0 justify-start md:justify-between overflow-x-auto pb-4 scrollbar-none border-b border-green-700/20">
            <div className="absolute top-[22px] left-0 right-0 h-0.5 bg-green-700/10 z-0" />
            {timelineData.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => handleTabClick(idx)}
                className="relative z-10 flex flex-col items-center px-4 focus:outline-none min-w-[70px] cursor-pointer group"
              >
                {/* Year Marker dot */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-green-700 text-yellow-400 border-green-700 scale-110 shadow-lg shadow-green-700/20"
                      : "bg-yellow-400 text-green-700 border-green-700/30 group-hover:border-green-700 group-hover:text-green-800"
                  }`}
                >
                  {item.year}
                </div>
                {/* Visual Label */}
                <span
                  className={`mt-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    activeTab === idx ? "text-green-900" : "text-green-700/60"
                  }`}
                >
                  {item.year === "2026" ? "Present" : item.year}
                </span>
              </button>
            ))}
          </div>

          {/* Active Story Story Card Container */}
          <div className="w-full max-w-4xl">
            <div
              key={activeTab}
              className="bg-white rounded-[32px] p-6 md:p-10 pb-12 border border-green-700/10 shadow-[0_20px_50px_rgba(21,128,61,0.15)] transition-all duration-500 animate-fade-in-up h-auto min-h-[540px] sm:min-h-[440px] md:min-h-[360px] lg:min-h-[320px] overflow-visible"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 mb-6 border-b border-gray-100">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase bg-yellow-400/20 text-yellow-800 tracking-wider mb-3">
                    {timelineData[activeTab].year} Era
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-green-700 uppercase tracking-tight leading-none">
                    {timelineData[activeTab].title}
                  </h2>
                  <p className="mt-1.5 text-sm md:text-base font-semibold text-green-800/70">
                    {timelineData[activeTab].subtitle}
                  </p>
                </div>
              </div>

              {/* Contents block */}
              <div className="text-neutral-700 text-sm md:text-base leading-relaxed font-medium space-y-4">
                {timelineData[activeTab].content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-justify">
                    {para}
                  </p>
                ))}

                {/* Legacy blockquote if present */}
                {timelineData[activeTab].quote && (
                  <blockquote className="mt-8 border-l-4 border-yellow-400 pl-4 py-2 my-4 italic font-bold text-green-800 bg-yellow-400/10 rounded-r-lg">
                    "{timelineData[activeTab].quote}"
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
