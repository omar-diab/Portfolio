"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import gsap from "gsap";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  label?: string;
  className?: string;
}

const DownloadButton = ({
  fileUrl,
  fileName,
  label,
  className,
}: DownloadButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);

    const tl = gsap.timeline({
      onComplete: () => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        link.click();

        gsap.to(buttonRef.current, {
          backgroundColor: "#00ff88",
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          onComplete: () => setIsDownloading(false),
        });
      },
    });

    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "none",
    }).to(
      buttonRef.current,
      {
        duration: 0.2,
      },
      0
    );
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(button, {
      y: -2,
      duration: 0.3,
    });

    const handleMouseEnter = () => !isDownloading && hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hoverTl.kill();
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDownloading]);

  return (
    <button
      ref={buttonRef}
      onClick={handleDownload}
      disabled={isDownloading}
      className={`relative flex items-center gap-2 px-3 py-2 rounded-xl
        border-l-2 border-b-2 text-white hover:border-primary hover:text-primary font-medium w-fit
        transform transition-transform duration-300
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900
        overflow-hidden before:absolute before:inset-0 before:transition-opacity before:duration-300
        ${className}
      `}
      aria-label={label}
    >
      <span
        ref={progressRef}
        className="absolute bottom-0 left-0 h-1 bg-white origin-left scale-x-0"
        style={{ transform: "scaleX(0)" }}
      />

      <span className="relative z-10 flex items-center gap-2">
        {isDownloading ? "DOWNLOADING..." : label}
        <FaArrowDown
          className={`text-sm ${isDownloading ? "animate-pulse" : ""}`}
        />
      </span>
    </button>
  );
};

export default DownloadButton;
