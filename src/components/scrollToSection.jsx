// src/utils/scrollToSection.js
export const scrollToSection = (offset = 100) => {
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
