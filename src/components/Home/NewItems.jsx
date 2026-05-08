import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 6,
    name: "Midnight Boxy Hoodie",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000",
  },
  {
    id: 7,
    name: "Acid Wash Graphic Tee",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000",
  },
  {
    id: 8,
    name: "Utility Cargo Joggers",
    price: "₹2,999",
    image: "",
  },
  {
    id: 9,
    name: "Vintage Flannel Shirt",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000",
  },
  {
    id: 10,
    name: "Heavyweight Boxy Tee",
    price: "₹1,699",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000",
  },
];


const NewItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4.5);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const colors = {
    studioWhite: "#FDFDFD", 
    midnight: "#111111",    
    slate: "#666666",       
    divider: "#EEEEEE",     
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1.2);
      else if (window.innerWidth < 1024) setItemsPerPage(2.5);
      else setItemsPerPage(4.5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - Math.floor(itemsPerPage))
      setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        marginLeft: window.innerWidth >= 1024 ? "220px" : "0",
        width: window.innerWidth >= 1024 ? "calc(100% - 220px)" : "100%",
      }}
      className="relative min-h-screen flex flex-col justify-center py-14 px-6 md:px-12 lg:px-16 overflow-hidden font-jakarta"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div
          className="flex flex-row justify-between items-end mb-10 border-b pb-6"
          style={{ borderColor: colors.divider }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-5 h-[2px]"
                style={{ backgroundColor: colors.midnight }}
              ></span>
              <p
                style={{ color: colors.slate }}
                className="font-black tracking-[0.3em] text-[10px] uppercase"
              >
                Fresh Drop
              </p>
            </div>
            <h2
              style={{ color: colors.midnight }}
              className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter"
            >
              New{" "}
              <span style={{ fontWeight: 300, fontStyle: "normal", color: colors.slate }} className="italic">
                Items.
              </span>
            </h2>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              style={{ borderColor: colors.divider }}
              className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-black hover:text-white transition-all active:scale-90 disabled:opacity-30 disabled:pointer-events-none"
              disabled={currentIndex === 0}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              style={{ borderColor: colors.divider }}
              className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-black hover:text-white transition-all active:scale-90 disabled:opacity-30 disabled:pointer-events-none"
              disabled={
                currentIndex >= products.length - Math.floor(itemsPerPage)
              }
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20 overflow-hidden"
        >
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * 24}px)`,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {products.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-[80%] sm:min-w-[calc(40%-12px)] lg:min-w-[calc(22%-18px)] group"
              >
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ backgroundColor: colors.studioWhite }}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-black/5 shadow-sm group-hover:shadow-md transition-all cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  />

                  <div className="absolute bottom-0 left-0 w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                      style={{ backgroundColor: colors.midnight }}
                      className="w-full text-white py-3 rounded-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:opacity-90 active:scale-95 shadow-lg transition-all"
                    >
                      <ShoppingBag size={14} /> Quick Add
                    </button>
                  </div>
                </div>

                <div
                  className="mt-4 px-1 flex justify-between items-start cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <h3
                    style={{ color: colors.midnight }}
                    className="text-[11px] font-bold uppercase truncate pr-2 group-hover:opacity-60 transition-opacity"
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{ color: colors.midnight }}
                    className="font-black text-sm tracking-tighter"
                  >
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pt-12 border-t"
          style={{ borderColor: colors.divider }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span
              style={{ color: colors.slate }}
              className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-60"
            >
              Industry Staples
            </span>
            <div
              className="flex-1 h-[1px]"
              style={{ backgroundColor: colors.divider }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewItems;