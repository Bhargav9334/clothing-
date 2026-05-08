import React, { useState, useRef, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useCart } from "../../context/CartContext";

/* ---------------- DATA ---------------- */

const products = [
  {
    id: 1,
    name: "Street Oversized Tee",
    price: 1499,
    discount: 20,
    category: "Oversized T-Shirts",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=100",
  },
  {
    id: 2,
    name: "Premium Cotton Shirt",
    price: 2199,
    discount: 15,
    category: "Premium Cotton Shirts",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c717658?w=800&q=100",
  },
  {
    id: 3,
    name: "Baggy Blue Jeans",
    price: 3499,
    discount: 10,
    category: "Baggy Jeans",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=100",
  },
  {
    id: 4,
    name: "Urban Cargo Pants",
    price: 2899,
    discount: 25,
    category: "Cargo Pants",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=100",
  },
  {
    id: 5,
    name: "Old Money Polo",
    price: 1899,
    discount: 5,
    category: "Old Money Aesthetic",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=100",
  },
  {
    id: 9,
    name: "Essential Noir Hoodie",
    price: 2999,
    discount: 12,
    category: "Oversized T-Shirts",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=100",
  },
];

const categories = [
  "All",
  "Oversized T-Shirts",
  "Premium Cotton Shirts",
  "Baggy Jeans",
  "Cargo Pants",
];

/* ---------------- CARD ---------------- */

const ProductCard = forwardRef(
  ({ product, isActive, onHover, onLeave }, ref) => {
    const navigate = useNavigate();
    const { addToCart, addToWishlist, wishlist } = useCart();

    const isInWishlist = wishlist.some(
      (item) => item.id === product.id
    );

    const discountedPrice = Math.round(
      product.price * (1 - product.discount / 100)
    );

    return (
      <motion.div
        ref={ref}
        layout
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          scale: isActive ? 1.08 : 0.94,
          y: isActive ? -8 : 0,
          zIndex: isActive ? 10 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[260px] group relative cursor-pointer snap-center"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <div className="relative rounded-[2rem] overflow-hidden border bg-white transition-all duration-500 hover:border-black/20 shadow-sm hover:shadow-2xl">

          {/* IMAGE */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src={product.image}
              className="w-full h-full object-cover transition-all duration-700 grayscale-[10%] group-hover:grayscale-0"
              whileHover={{ scale: 1.05 }}
            />

            {/* Discount */}
            <span className="absolute top-4 left-4 text-white bg-black text-[8px] px-2 py-1 rounded-md font-black uppercase">
              -{product.discount}%
            </span>

            {/* Wishlist */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm ${
                isInWishlist
                  ? "bg-black text-white"
                  : "bg-white/80 text-black"
              }`}
            >
              <Heart
                size={14}
                fill={isInWishlist ? "currentColor" : "none"}
              />
            </button>

            {/* Add To Cart */}
            <motion.div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="w-full bg-black text-white py-3 rounded-full text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} />
                Add to bag
              </button>
            </motion.div>
          </div>

          {/* DETAILS */}
          <div className="p-5">
            <div className="flex justify-between mb-1">
              <span className="text-[8px] uppercase text-gray-400 tracking-widest">
                {product.category}
              </span>

              <div className="flex items-center text-[9px] font-bold">
                <Star size={10} />
                {product.rating}
              </div>
            </div>

            <h3 className="font-bold text-[12px] mb-3 group-hover:opacity-60">
              {product.name}
            </h3>

            <div className="flex justify-between items-end">
              <div>
                <span className="font-black text-sm">
                  ₹{discountedPrice}
                </span>

                <div className="text-[9px] line-through opacity-40">
                  ₹{product.price}
                </div>
              </div>

              <div className="w-8 h-8 border rounded-full flex items-center justify-center group-hover:bg-black transition">
                <ArrowRight
                  size={14}
                  className="group-hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProductCard.displayName = "ProductCard";

/* ---------------- MAIN ---------------- */

export default function FeaturedItems() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const filtered = products.filter(
    (p) =>
      activeCategory === "All" ||
      p.category === activeCategory
  );

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="lg:ml-[220px] pt-24 pb-20 px-6 bg-[#FDFDFD]">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs text-gray-400 uppercase mb-2">
              Studio Selects
            </p>

            <h2 className="text-5xl font-black italic">
              Featured Pieces
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="btn"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="btn"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase font-bold border ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <motion.div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 pt-6"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.1}
        >
          <AnimatePresence>
            {filtered.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                isActive={activeIndex === i}
                onHover={() => setActiveIndex(i)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </AnimatePresence>

          {/* VIEW ALL */}
          <div
            onClick={() => navigate("/products")}
            className="w-[220px] flex items-center justify-center border-2 border-dashed rounded-2xl cursor-pointer hover:bg-black hover:text-white transition"
          >
            <ArrowRight />
          </div>
        </motion.div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .btn {
          width: 45px;
          height: 45px;
          border: 1px solid #eee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn:hover {
          background: black;
          color: white;
        }
      `}</style>
    </section>
  );
}