import { useModal } from "@/App";
import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";

export const BrochureModal = () => {
  const { isBrochureOpen, closeBrochure } = useModal();

  useEffect(() => {
    if (isBrochureOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBrochureOpen]);

  if (!isBrochureOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBrochure();
      }}
    >
      <div className="relative bg-zinc-900 flex flex-col w-[95%] max-w-5xl h-[85vh] rounded-3xl overflow-hidden animate-fade-in-up shadow-2xl border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-950/90 border-b border-white/5">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-yellow-400 text-lg md:text-xl font-black uppercase tracking-wider leading-tight">
              Avilpro Franchise Brochure
            </h3>
            <p className="text-xs text-white/50 font-medium">
              Explore investment guidelines, design setups, and next steps
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/brochure.pdf"
              download="Avilpro_Franchise_Brochure.pdf"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-green-700 border border-white/10 text-white transition-all duration-300"
              title="Download Brochure"
            >
              <Download className="h-4 w-4" />
            </a>
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-green-700 border border-white/10 text-white transition-all duration-300"
              title="Open in New Tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              onClick={closeBrochure}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-red-600 border border-white/10 text-white transition-all duration-300"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 w-full h-full bg-zinc-800 relative">
          <iframe
            src="/brochure.pdf#toolbar=1"
            title="Franchise Brochure"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
