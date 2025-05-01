'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        mirror: false,
      });

      // Refresh AOS when components update
      const timeout = setTimeout(() => {
        AOS.refresh();
      }, 100);

      return () => {
        clearTimeout(timeout);
        // Cleanup AOS when component unmounts
        AOS.refreshHard();
      };
    }
  }, []);

  return null;
}