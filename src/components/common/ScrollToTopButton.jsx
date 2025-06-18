import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 p-3 text-2xl rounded-full bg-main-clr text-white shadow-lg cursor-pointer
        hover:brightness-50 transition-all duration-300 ease-in-out
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
