import { useModal } from "@/App";
import { useEffect, useRef } from "react";

export const VideoModal = () => {
  const { isVideoOpen, closeVideo } = useModal();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      // Auto-play the video when the modal opens
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
    } else {
      document.body.style.overflow = "";
      // Pause the video when the modal closes
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  if (!isVideoOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeVideo();
      }}
    >
      <div className="relative bg-black flex flex-col w-[95%] max-w-4xl rounded-2xl overflow-hidden animate-fade-in-up shadow-2xl border border-white/10">
        <button
          onClick={closeVideo}
          className="absolute text-white text-3xl font-light z-[10] right-4 top-4 hover:text-green-500 transition-all duration-300 leading-none bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>
        <video
          ref={videoRef}
          src="/avilpro.mp4"
          controls
          autoPlay
          playsInline
          className="w-full aspect-video object-contain"
        />
      </div>
    </div>
  );
};

