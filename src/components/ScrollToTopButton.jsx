import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const colors = {
    midnight: "#111111",
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener(
      "scroll",
      toggleVisibility
    );

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -4, 0],
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            duration: 0.35,
          }}
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 md:bottom-10 md:right-10 z-[100]"
        >
          <div
            style={{
              backgroundColor:
                colors.midnight,
            }}
            className="group flex items-center gap-4 pl-7 pr-3 h-[62px] rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.28)] border border-white/10"
          >

            {/* TEXT */}
            <span className="text-white text-[9px] font-black uppercase tracking-[0.35em]">
              Top
            </span>

            {/* ICON */}
            <div className="w-[56px] h-[56px] rounded-full bg-white/12 backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 border border-white/10">
              <ArrowUp
                size={20}
                strokeWidth={3}
                className="text-white"
              />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;