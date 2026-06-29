import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#items", label: "Menu" },
    { href: "#outlets", label: "Outlets" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement | null;
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetTop - 110, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0c2b1c] text-white border-t-4 border-yellow-400 pt-16 pb-8 px-4 overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3f20_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1140px] mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start">
            <img
              src="https://www.avilpro.in/wp-content/uploads/2024/12/avil-pro-removebg-preview.png"
              alt="Avilpro logo"
              className="w-[120px] object-contain mb-6"
            />
            <p className="text-sm md:text-base text-green-100/80 leading-relaxed mb-6 font-medium">
              Thrissur's favourite premium Avilmilk brand. Delivering nostalgic street classics reimagined with premium quality.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/avilpro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400 text-white hover:text-[#0c2b1c] hover:bg-yellow-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/avilpro.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400 text-white hover:text-[#0c2b1c] hover:bg-yellow-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-yellow-400 text-lg font-black uppercase tracking-wider mb-6">
              Quick Navigation
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-2 text-green-100/80 hover:text-yellow-400 text-sm font-semibold transition-colors duration-200 group"
                  >
                    <ArrowRight className="h-4 w-4 text-green-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-yellow-400 text-lg font-black uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Phone</p>
                  <a href="tel:+919497711171" className="text-sm font-semibold hover:text-yellow-400 transition-colors duration-200">
                    +91 94977 11171
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Email</p>
                  <a href="mailto:avilpro.official@gmail.com" className="text-sm font-semibold hover:text-yellow-400 transition-colors duration-200">
                    avilpro.official@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm font-semibold text-green-100/90">
                    Chavakkad PO, Thrissur, Kerala
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Brand Vision */}
          <div>
            <h3 className="text-yellow-400 text-lg font-black uppercase tracking-wider mb-6">
              Our Vision
            </h3>
            <p className="text-sm text-green-100/80 leading-relaxed mb-6 font-medium">
              We strive to craft exceptional quality, curate memorable traditional food experiences, and build homegrown brands that people genuinely love.
            </p>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
                Kerala's First
              </p>
              <p className="text-sm font-extrabold text-white mt-1 uppercase">
                Premium Avil Milk Chain
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-white/10 mt-16 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <p className="text-sm text-green-100/60 font-semibold">
            Copyright &copy; {new Date().getFullYear()} Avilpro. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-green-100/40 text-xs font-semibold uppercase tracking-wider">Powered by</span>
            <a
              href="https://www.thinkforgeglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3.5 py-1.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-green-900 text-xs font-black uppercase tracking-wider hover:shadow-lg transition-all duration-300"
            >
              Think Forge Global
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
