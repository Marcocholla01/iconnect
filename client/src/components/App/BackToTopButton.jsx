import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed flex bottom-5 right-5 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-bounce"
        >
          <AiOutlineArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
