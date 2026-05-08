import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, CreditCard } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: 1,
    name: "Oversized Studio Tee",
    price: "₹1,499",
    category: "Top Wear",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000",
    description: "Heavyweight 240 GSM cotton with a signature boxy fit. Designed for the ultimate streetwear silhouette.",
  },
  {
    id: 3,
    name: "Vintage Baggy Denim",
    price: "₹3,499",
    category: "Bottom Wear",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000",
    description: "Classic wide-leg denim with a vintage heavy wash and reinforced stitching for a timeless look.",
  },
  {
    id: 9,
    name: "Essential Noir Hoodie",
    price: "₹2,999",
    category: "Top Wear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000",
    description: "Premium fleece-lined hoodie with a structured hood and minimalist aesthetic.",
  },
  {
    id: 10,
    name: "Tactical Cargo Pants",
    price: "₹2,899",
    category: "Bottom Wear",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000",
    description: "Multi-pocket utility design crafted from durable ripstop fabric. Engineered for movement.",
  },
];

const ClothingShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const colors = {
    studioWhite: "#FDFDFD",
    midnight: "#111111",    
    slate: "#666666",       
    divider: "#EEEEEE",     
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <section
      style={{ backgroundColor: colors.studioWhite }}
      className="relative flex flex-col lg:flex-row overflow-hidden font-jakarta lg:ml-[220px] w-full lg:w-[calc(100%-220px)] min-h-screen lg:min-h-[600px]"
    >
     
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-2/5 flex flex-col justify-between py-12 md:py-16 px-6 md:px-10 lg:px-14 border-r z-20"
        style={{ borderColor: colors.divider }}
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-[1.5px]"
              style={{ backgroundColor: colors.midnight }}
            />
            <span
              style={{ color: colors.slate }}
              className="font-black text-[9px] uppercase tracking-[0.4em]"
            >
              The New Standard
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none italic mb-5" style={{ color: colors.midnight }}>
            Premium <br />{" "}
            <span>Clothing.</span>
          </h2>
          <p
            style={{ color: colors.slate }}
            className="text-[11px] font-bold uppercase tracking-widest max-w-[260px] leading-relaxed opacity-80"
          >
            Studio-grade garments engineered for the modern lifestyle.
          </p>
        </div>

        <div className="hidden lg:block mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="border-l-2 pl-6"
              style={{ borderColor: colors.midnight }}
            >
              <span
                style={{ color: colors.slate }}
                className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 block"
              >
                {collections[activeIndex].category}
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2" style={{ color: colors.midnight }}>
                {collections[activeIndex].name}
              </h3>
              <p
                style={{ color: colors.slate }}
                className="text-[11px] font-medium leading-relaxed max-w-xs mb-6"
              >
                {collections[activeIndex].description}
              </p>

              <div className="flex flex-col gap-4">
                <span className="font-black text-2xl tracking-tighter" style={{ color: colors.midnight }}>
                  {collections[activeIndex].price}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => addToCart(collections[activeIndex])}
                    style={{ backgroundColor: colors.divider }}
                    className="text-black p-4 rounded-full hover:bg-black hover:text-white transition-all shadow-sm active:scale-90"
                  >
                    <ShoppingBag size={18} />
                  </button>

                  <button
                    onClick={() => handleBuyNow(collections[activeIndex])}
                    style={{ backgroundColor: colors.midnight }}
                    className="flex-1 py-4 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2 hover:opacity-80 transition-all active:scale-95 shadow-lg"
                  >
                    <CreditCard size={16} /> Buy it Now
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 lg:mt-12 hidden sm:block">
          <button
            onClick={() => navigate("/products")}
            className="group flex flex-col items-start gap-1.5"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: colors.midnight }}>
              View Full Collection
            </span>
            <div
              className="w-10 h-[1.5px] group-hover:w-20 transition-all duration-500"
              style={{ backgroundColor: colors.midnight }}
            />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-3/5 h-[550px] sm:h-[650px] lg:h-auto relative z-10 overflow-hidden group"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={collections[activeIndex].image}
              alt={collections[activeIndex].name}
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05]"
            />
           
            <div 
              className="absolute inset-0 lg:hidden" 
              style={{ background: `linear-gradient(to top, ${colors.studioWhite} 20%, transparent 70%)` }}
            />

            <div className="absolute bottom-28 left-0 right-0 p-6 sm:p-10 lg:hidden z-20">
              <span
                style={{ color: colors.slate }}
                className="text-[10px] font-black uppercase tracking-[0.3em] mb-1 block"
              >
                {collections[activeIndex].category}
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4" style={{ color: colors.midnight }}>
                {collections[activeIndex].name}
              </h3>
              <div className="flex flex-col gap-3">
                <span className="font-black text-xl" style={{ color: colors.midnight }}>
                  {collections[activeIndex].price}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(collections[activeIndex])}
                    style={{ backgroundColor: "#FFFFFF" }}
                    className="text-black p-4 rounded-full shadow-xl active:scale-95 transition-transform border border-black/5"
                  >
                    <ShoppingBag size={20} />
                  </button>
                  <button
                    onClick={() => handleBuyNow(collections[activeIndex])}
                    style={{ backgroundColor: colors.midnight }}
                    className="flex-1 py-4 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl active:scale-95 transition-transform"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 left-0 right-0 lg:left-8 lg:right-auto z-30 px-6 lg:px-0">
          <div className="flex flex-row overflow-x-auto no-scrollbar lg:flex-wrap justify-start gap-2 pb-2">
            {collections.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(i)}
                style={{
                  backgroundColor:
                    activeIndex === i
                      ? colors.midnight
                      : `rgba(255, 255, 255, 0.8)`,
                  borderColor:
                    activeIndex === i
                      ? colors.midnight
                      : colors.divider,
                  color: activeIndex === i ? "#FFFFFF" : colors.midnight,
                }}
                className={`px-5 py-2.5 border rounded-full text-[9px] font-black uppercase tracking-widest transition-all flex-shrink-0 active:scale-95 shadow-sm ${
                  activeIndex === i ? "scale-105" : "backdrop-blur-md"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClothingShowcase;