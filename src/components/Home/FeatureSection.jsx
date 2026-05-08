import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const colors = {
    studioWhite: "#FDFDFD", 
    midnight: "#111111",    
    slate: "#666666",       
    divider: "#EEEEEE",    
  };

  return (
    <section
      className="min-h-screen flex items-center overflow-hidden font-jakarta relative border-b"
      style={{
        backgroundColor: "#ffffff",
        borderColor: colors.divider,
        marginLeft: window.innerWidth >= 1024 ? "220px" : "0",
        width: window.innerWidth >= 1024 ? "calc(100% - 220px)" : "100%",
      }}
    >
      <div
        className="absolute top-0 right-0 w-1/4 h-full -z-10 hidden xl:block"
        style={{ backgroundColor: colors.studioWhite }}
      />

      <div className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] relative flex-shrink-0"
        >
          <div
            className="absolute -inset-4 border rounded-[2.5rem] -rotate-3 pointer-events-none z-0"
            style={{ borderColor: colors.midnight + "08" }}
          />
          <div
            className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full z-0 opacity-10 shadow-xl"
            style={{ backgroundColor: colors.midnight }}
          />

          <div
            className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => navigate("/products")}
          >
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury Men's Fashion"
              className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-all duration-1000 group-hover:scale-105 grayscale-[10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{ backgroundColor: colors.midnight }}
            className="absolute top-6 -left-4 z-20 text-white px-4 py-3 rounded-xl shadow-2xl hidden sm:block"
          >
            <div className="flex items-center gap-1 mb-1.5">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  size={8}
                  fill="#ffffff"
                  color="#ffffff"
                />
              ))}
            </div>
            <p className="text-[8px] font-black uppercase tracking-[0.2em] leading-tight">
              Studio <br /> Craftsmanship
            </p>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-[55%] flex flex-col items-start overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div
              className="w-8 h-[1.5px]"
              style={{ backgroundColor: colors.midnight }}
            />
            <span
              style={{ color: colors.slate }}
              className="text-[9px] font-black tracking-[0.4em] uppercase"
            >
              Premium Selection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: colors.midnight }}
            className="text-[clamp(32px,5vw,52px)] font-black italic tracking-tighter leading-[1] mb-6 uppercase break-words w-full"
          >
            Mastering The <br />
            <span style={{ color: colors.slate }} className="font-light not-italic opacity-80">
              Modern Wardrobe.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ color: colors.slate }}
            className="text-[13px] sm:text-[14px] leading-relaxed mb-8 max-w-lg font-medium opacity-70"
          >
            Our collection redefines contemporary elegance. Designed with
            precision and crafted from the finest materials, every piece offers
            a timeless silhouette for the discerning gentleman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <motion.button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => navigate("/products")}
              whileTap={{ scale: 0.96 }}
              style={{ backgroundColor: colors.midnight }}
              className="group flex items-center gap-5 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:opacity-80 shadow-xl active:scale-95"
            >
              <span>Explore Collection</span>
              <MoveRight
                size={16}
                className={`transition-transform duration-300 ${hovered ? "translate-x-2" : ""}`}
              />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-3 gap-4 py-8 border-t"
            style={{ borderColor: colors.divider }}
          >
            {[
              { val: "Italian", label: "Pure Fabrics" },
              { val: "Limited", label: "Bespoke Run" },
              { val: "2026", label: "Current Drop" },
            ].map((stat, i) => (
              <div key={i}>
                <p
                  style={{ color: colors.midnight }}
                  className="font-black italic text-xl mb-1 tracking-tighter"
                >
                  {stat.val}
                </p>
                <p
                  style={{ color: colors.slate }}
                  className="text-[8px] uppercase tracking-widest font-bold opacity-60"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: colors.studioWhite,
              borderColor: colors.divider,
            }}
            className="w-full overflow-hidden py-3 rounded-lg border"
          >
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[
                "Bespoke Finish",
                "Limited Run",
                "Urban Minimalist",
                "Studio Edition",
              ].map((t, i) => (
                <span
                  key={i}
                  style={{ color: colors.midnight }}
                  className="text-[8px] font-black uppercase tracking-[0.3em] flex items-center gap-3 opacity-40"
                >
                  {t} <span style={{ color: colors.midnight }}>✦</span>
                </span>
              ))}

              {[
                "Bespoke Finish",
                "Limited Run",
                "Urban Minimalist",
                "Studio Edition",
              ].map((t, i) => (
                <span
                  key={`repeat-${i}`}
                  style={{ color: colors.midnight }}
                  className="text-[8px] font-black uppercase tracking-[0.3em] flex items-center gap-3 opacity-40"
                >
                  {t} <span style={{ color: colors.midnight }}>✦</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;