"use client";

import { useEffect } from "react";

export default function FadeInObserver() {
  useEffect(() => {
    // Intersection Observer for fade-in effects
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll("section > div");
    elements.forEach((el) => {
      el.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-10"
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
