"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skills, Languages, Experience, Education } from "./";

const HorizontalMovingSections = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || sectionsRef.current.length === 0) return;

      const sections = sectionsRef.current.filter(Boolean);
      const container = containerRef.current;

      // Calculate total width
      const totalWidth = sections.reduce(
        (acc, section) => acc + section.offsetWidth,
        0
      );

      // Set container width
      gsap.set(container, {
        width: `${totalWidth}px`,
        overflow: "visible", // Ensure content isn't clipped
      });

      // Horizontal scroll animation
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.parentElement,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div ref={containerRef} className="flex h-screen will-change-transform">
        {[Languages, Experience, Education, Skills].map((Component, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              if (el) sectionsRef.current[i] = el;
            }}
            className="h-screen w-screen flex-shrink-0 flex items-center justify-center pr-4"
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalMovingSections;
