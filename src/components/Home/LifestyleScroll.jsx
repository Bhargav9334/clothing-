import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const lifestyleImages = [
 { id: 1, url: "/img 1.jpg" }, 
  { id: 2, url: "/img 2.webp" }, 
  { id: 3, url: "/img 3.avif" }, 
  { id: 4, url: "/img 4.webp" }, 
  { id: 5, url: "/img 5.webp" }, 
  { id: 6, url: "/img 6.jpg" }, 
  { id: 7, url: "/img 7.webp" }, 
  { id: 8, url: "/img 8.jpg" },
];

const duplicatedImages = [...lifestyleImages, ...lifestyleImages];

const LifestyleScroll = () => {
  const navigate = useNavigate();

  const colors = {
    studioWhite: "#FDFDFD", 
    midnight: "#111111",    
    slate: "#666666",       
    divider: "#EEEEEE",     
  };

  return (
    <section
      style={{ backgroundColor: "#ffffff" }}
      className="relative py-12 overflow-hidden lg:ml-[220px] w-full lg:w-[calc(100%-220px)] border-t"
    >
    
      <div className="px-6 mb-10">
        <span
          style={{ color: colors.slate }}
          className="font-black text-[9px] uppercase tracking-[0.4em] mb-2 block"
        >
          Studio Aesthetic
        </span>
        <h2
          style={{ color: colors.midnight }}
          className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic"
        >
          Menswear <span style={{ fontWeight: 300, fontStyle: "normal", color: colors.slate }}>Gallery.</span>
        </h2>
      </div>

      <div className="flex relative">
        <motion.div
          className="flex gap-6 px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedImages.map((img, index) => (
            <motion.div
              key={index}
              onClick={() => navigate("/products")} 
              whileHover={{ y: -10 }} 
              className="relative flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm border bg-gray-50 cursor-pointer group"
              style={{ borderColor: colors.divider }}
            >
              <img
                src={img.url}
                alt={`Mens Fashion ${index}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest transition-opacity">
                  View Look
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default LifestyleScroll;