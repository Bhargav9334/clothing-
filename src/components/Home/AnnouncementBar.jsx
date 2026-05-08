import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const AnnouncementBar = () => {
  const navigate = useNavigate(); 
  const text = "New Drop: Season 01 Studio Collection";

  const colors = {
    studioWhite: "#FDFDFD", 
    midnight: "#111111",    
    slate: "#666666",       
    divider: "#EEEEEE",     
  };

  const handleNavigation = () => {
    navigate("/products?category=trending"); 
  };

  return (
    <div
      onClick={handleNavigation} 
      className="relative flex overflow-hidden py-4 border-b select-none group cursor-pointer z-50 transition-colors hover:bg-[#1a1a1a]"
      style={{
        backgroundColor: colors.midnight,
        borderColor: "rgba(255,255,255,0.1)",
        marginLeft: window.innerWidth >= 1024 ? "220px" : "0",
        width: window.innerWidth >= 1024 ? "calc(100% - 220px)" : "100%",
      }}
    >
      <div className="flex whitespace-nowrap animate-slow-marquee group-hover:[animation-play-state:paused]">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-10">
            <Star
              size={12}
              style={{ color: "#FFFFFF", fill: "#FFFFFF" }}
              className="group-hover:rotate-90 transition-transform duration-700 opacity-30"
            />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] leading-none"
              style={{ color: "#FFFFFF" }}
            >
              {text}
              <span
                className="ml-6 font-black italic tracking-widest opacity-50"
                style={{ color: "#FFFFFF" }}
              >
                Sattiyas.
              </span>
            </span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slow-marquee {
          animation: slow-marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default AnnouncementBar;