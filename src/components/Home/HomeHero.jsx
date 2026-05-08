import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Urban Streetwear",
    subtitle: "New Drop 2026",
    description:
      "Premium oversized tees and baggy cargos designed for the modern street aesthetic.",
    image: "hero.jpg",
    hotProduct: { id: 1 },
  },
  {
    id: 2,
    title: "Old Money Style",
    subtitle: "Timeless Classics",
    description:
      "Sophisticated linen shirts and tailored chinos for that quiet luxury look.",
    image: "hero.jpg",
    hotProduct: { id: 2 },
  },
  {
    id: 3,
    title: "The Winter Edit",
    subtitle: "Premium Layers",
    description:
      "Handcrafted leather jackets and wool blends to keep you warm and sharp.",
    image: "hero.jpg",
    hotProduct: { id: 4 },
  },
];

const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // 🔥 Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // 🔁 Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden font-jakarta lg:ml-[220px]"
    >
      {/* 🔝 Progress Bar */}
      <motion.div
        key={index}
        className="absolute top-0 left-0 h-[2px] bg-black z-50"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
      />

      {/* 🌄 BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Parallax Image */}
          <motion.img
            src={slides[index].image}
            alt=""
            style={{ x, y }}
            className="w-full h-full object-cover scale-110"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* 💎 Floating Light */}
          <motion.div
            className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 🧾 CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-2xl"
          >
            {/* Subtitle */}
            <motion.div
              className="mb-4 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-6 h-[2px] bg-black" />
              <span className="text-xs tracking-[0.3em] text-gray-500 uppercase font-bold">
                {slides[index].subtitle}
              </span>
            </motion.div>

            {/* 💎 Cinematic Title */}
            <motion.h1 className="mb-6">
              {slides[index].title.split(" ").map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="block text-[clamp(40px,8vw,80px)] font-black italic leading-[0.9]"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm text-gray-500 mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {slides[index].description}
            </motion.p>

            {/* 🔘 Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Magnetic Button */}
              <motion.button
                onClick={() => navigate("/products")}
                className="relative bg-black text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0px,0px)";
                }}
              >
                <span className="flex items-center gap-2">
                  Shop Collection <ArrowRight size={14} />
                </span>
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                onClick={() =>
                  navigate(`/product/${slides[index].hotProduct.id}`)
                }
                className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 text-black"
                whileHover={{ x: 8 }}
              >
                <ShoppingBag size={14} /> Featured Item
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-8 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}>
            <motion.div
              className="h-[3px] bg-black rounded"
              animate={{
                width: index === i ? 24 : 8,
                opacity: index === i ? 1 : 0.3,
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;