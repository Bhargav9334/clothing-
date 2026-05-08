import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MoveRight, Focus, ShieldCheck, Zap, Scissors } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();

  const colors = {
    studioWhite: "#FDFDFD",
    midnight: "#111111", 
    slate: "#666666",      
    divider: "#EEEEEE",    
  };

  return (
    <div className="min-h-screen lg:ml-[220px] bg-white text-black font-jakarta overflow-hidden">
      
      <section 
        className="relative h-[90vh] flex flex-col justify-center px-6 md:px-16 border-b"
        style={{ borderColor: colors.divider, backgroundColor: colors.studioWhite }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span style={{ color: colors.slate }} className="text-[10px] font-black uppercase tracking-[0.8em] mb-8 block opacity-60">
            Archive 01 // Sattiyas Studio
          </span>
          <h1 style={{ color: colors.midnight }} className="text-[clamp(45px,10vw,120px)] font-black uppercase leading-[0.85] tracking-tighter mb-10 italic">
            DEFINING <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${colors.midnight}` }}>MASCULINITY.</span>
          </h1>
          <p style={{ color: colors.slate }} className="text-lg md:text-xl max-w-xl font-medium leading-snug tracking-tight opacity-80">
            Sattiyas is the uniform for the modern renegade. We don't build for the masses. We engineer for the individual who demands presence.
          </p>
          
          <button 
            onClick={() => navigate("/products")}
            style={{ backgroundColor: colors.midnight }}
            className="mt-10 px-10 py-4 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:opacity-80 transition-all shadow-xl active:scale-95"
          >
            Explore Collection
          </button>
        </motion.div>

        <div className="absolute right-[-2%] bottom-5 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[22vw] font-black leading-none uppercase">SATTIYAS</h2>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 border-b" style={{ borderColor: colors.divider }}>
        <div className="p-10 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r" style={{ borderColor: colors.divider }}>
          <Focus size={32} style={{ color: colors.midnight }} className="mb-8" />
          <h2 style={{ color: colors.midnight }} className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
            THE ART OF <br/> CONSTRUCTION<span>.</span>
          </h2>
          <div className="space-y-6 text-sm md:text-base font-medium tracking-wide" style={{ color: colors.slate }}>
            <p>
              Traditional fashion is dead. We replaced it with architecture you can wear. 
              Our obsession starts with the thread count and ends with the silhouette. 
            </p>
            <p>
              Every drop is a limited statement. This is exclusive craftsmanship from Jaipur, 
              meticulously designed for a global stage.
            </p>
          </div>
          <motion.button 
            onClick={() => navigate("/products?category=New%20Drops")}
            whileHover={{ x: 10 }}
            style={{ color: colors.midnight }}
            className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group w-fit"
          >
            Discover the Process <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="relative h-[600px] lg:h-auto overflow-hidden bg-zinc-100">
          <img 
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop" 
            alt="High Definition Men Fashion" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: colors.divider }}>
          {[
            { icon: <Zap size={20}/>, label: "ENGINEERING", val: "240GSM+ COTTON", desc: "Heavyweight fabrics engineered to hold structural shape." },
            { icon: <Scissors size={20}/>, label: "SILHOUETTE", val: "ARCHITECTURAL CUTS", desc: "Tailored to enhance the masculine frame and posture." },
            { icon: <ShieldCheck size={20}/>, label: "HERITAGE", val: "JAIPUR ROOTS", desc: "Where heritage craftsmanship meets modern brutalist design." }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-12 hover:bg-zinc-50 transition-colors duration-500 cursor-pointer group"
              onClick={() => navigate("/products")}
            >
              <div style={{ color: colors.midnight }} className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <p style={{ color: colors.slate }} className="text-[10px] font-black tracking-[0.4em] mb-4 opacity-60">{item.label}</p>
              <h4 style={{ color: colors.midnight }} className="text-xl font-black uppercase mb-4 italic leading-tight">{item.val}</h4>
              <p style={{ color: colors.slate }} className="text-xs leading-relaxed opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 text-center relative border-t" style={{ borderColor: colors.divider }}>
        <h2 style={{ color: colors.midnight }} className="text-6xl md:text-[10vw] font-black uppercase tracking-[0.2em] mb-16 opacity-[0.03] absolute inset-0 flex items-center justify-center pointer-events-none">
          JOIN US
        </h2>
        <div className="relative z-10">
          <h3 style={{ color: colors.midnight }} className="text-4xl md:text-6xl font-black uppercase italic mb-12 tracking-tighter">
            READY TO <br /> ENTER THE ARCHIVE?
          </h3>
          <button 
            onClick={() => navigate("/products")}
            style={{ backgroundColor: colors.midnight }}
            className="text-white px-16 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:opacity-90 transition-all shadow-2xl active:scale-95"
          >
            Shop the Drops
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;