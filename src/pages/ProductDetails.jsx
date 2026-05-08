import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  ArrowLeft,
  Truck,
  RefreshCcw,
  Star,
  CreditCard,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, addToWishlist } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");

  const colors = {
    studioWhite: "#FDFDFD",
    midnight: "#111111",
    slate: "#666666",
    divider: "#EEEEEE",
  };

  const allProducts = [
    {
      id: 1,
      name: "Street Oversized Tee",
      category: "Oversized T-Shirts",
      parentCategory: "Top Wear",
      price: "1,499",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800",
      desc: "Premium heavy-weight cotton fabric with a perfect boxy fit.",
    },
    {
      id: 2,
      name: "Premium Cotton Shirt",
      category: "Premium Cotton Shirts",
      parentCategory: "Top Wear",
      price: "2,199",
      img: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=800",
      desc: "100% Breathable cotton designed for a sharp look.",
    },
    {
      id: 7,
      name: "Graphic Street Tee",
      category: "Graphic Tees",
      parentCategory: "Top Wear",
      price: "1,299",
      img: "https://images.unsplash.com/photo-1554568212-3c16f5c75050?q=80&w=800",
      desc: "Limited edition screen-printed artwork.",
    },
    {
      id: 9,
      name: "Studio Zip Hoodie",
      category: "Hoodies & Jackets",
      parentCategory: "Top Wear",
      price: "3,299",
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
      desc: "Heavyweight fleece for maximum warmth and style.",
    },
    {
      id: 3,
      name: "Vintage Baggy Jeans",
      category: "Baggy Jeans",
      parentCategory: "Bottom Wear",
      price: "3,499",
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800",
      desc: "Classic wide-leg denim with a vintage wash.",
    },
    {
      id: 4,
      name: "Tactical Cargo Pants",
      category: "Cargo Pants",
      parentCategory: "Bottom Wear",
      price: "2,899",
      img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=800",
      desc: "Utility design with reinforced stitching.",
    },
    {
      id: 10,
      name: "Essential Street Kit",
      category: "Streetwear Essentials",
      parentCategory: "Trending",
      price: "1,799",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
      desc: "Must-have pieces for the current season.",
    },
    {
      id: 11,
      name: "Limited Drop Tee",
      category: "New Drops",
      parentCategory: "Trending",
      price: "1,599",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      desc: "Freshly arrived from our studio.",
    },
    {
      id: 5,
      name: "Signature Best Seller",
      category: "Best Sellers",
      parentCategory: "Trending",
      price: "1,899",
      img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800",
      desc: "The item everyone is talking about.",
    },
  ];

  useEffect(() => {
    const foundProduct = allProducts.find(
      (p) => String(p.id) === String(id)
    );

    if (foundProduct) {
      setProduct(foundProduct);
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center font-black uppercase text-gray-400">
        Product Not Found
      </div>
    );

  return (
    <div className="min-h-screen lg:ml-[220px] bg-[#FDFDFD] font-jakarta flex flex-col pt-16 lg:pt-20 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-12 flex flex-col justify-center py-6 lg:py-10 relative z-10">

        {/* BACK BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          style={{ color: colors.slate }}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={14} />
          Back to {product.parentCategory}
        </motion.button>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full lg:w-[45%] flex justify-center"
          >
            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              style={{
                backgroundColor: colors.studioWhite,
                borderColor: colors.divider,
              }}
              className="group relative w-full max-w-[420px] lg:max-w-none aspect-[4/5] rounded-[2.5rem] overflow-hidden border shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >

              {/* IMAGE */}
              <motion.img
                src={product.img}
                alt={product.name}
                whileHover={{
                  scale: 1.1,
                  rotate: -1,
                }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover transition-all duration-1000"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* FLOAT LIGHT */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* CATEGORY */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-6 left-6"
              >
                <span className="bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.3em] shadow-lg border border-white/40">
                  {product.category}
                </span>
              </motion.div>

              {/* FLOATING INFO */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 right-6 bg-white/60 backdrop-blur-2xl px-5 py-4 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-white/40"
              >
                <p className="text-[8px] uppercase tracking-[0.3em] font-black text-gray-400 mb-1">
                  Studio Quality
                </p>

                <p className="text-[10px] font-black uppercase">
                  Premium Fabric
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="w-full lg:w-[55%] flex flex-col justify-center"
          >

            {/* RATING */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    fill={colors.midnight}
                    color={colors.midnight}
                  />
                ))}
              </div>

              <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">
                Premium {product.parentCategory} Collection
              </span>
            </div>

            {/* TITLE */}
            <h1
              style={{ color: colors.midnight }}
              className="text-4xl lg:text-7xl font-black uppercase italic leading-[0.95] mb-4 tracking-tighter"
            >
              {product.name}
              <span className="opacity-40">.</span>
            </h1>

            {/* PRICE */}
            <p className="text-2xl lg:text-4xl font-black mb-6 tracking-tighter drop-shadow-sm">
              ₹{product.price}
            </p>

            {/* DESCRIPTION */}
            <p className="text-[13px] lg:text-sm leading-relaxed mb-10 max-w-lg font-medium text-gray-500">
              {product.desc}
            </p>

            {/* SIZE */}
            <div className="mb-10">
              <h4 className="text-[9px] font-black uppercase tracking-widest mb-4 text-gray-400">
                Select Size
              </h4>

              <div className="flex items-center justify-between w-full lg:max-w-md">

                {/* SIZE BUTTONS */}
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <motion.button
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        backgroundColor:
                          selectedSize === size
                            ? colors.midnight
                            : "transparent",
                        color:
                          selectedSize === size
                            ? "#fff"
                            : colors.midnight,
                        borderColor:
                          selectedSize === size
                            ? colors.midnight
                            : colors.divider,
                      }}
                      className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border-2 text-[10px] font-black transition-all duration-300 hover:shadow-lg"
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">

                  {/* CART */}
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => addToCart(product)}
                    style={{
                      backgroundColor: colors.midnight,
                    }}
                    className="p-4 rounded-full text-white shadow-2xl"
                  >
                    <ShoppingBag size={18} />
                  </motion.button>

                  {/* WISHLIST */}
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => addToWishlist(product)}
                    style={{
                      borderColor: colors.divider,
                    }}
                    className="p-4 rounded-full border-2 text-gray-300 hover:text-black bg-white shadow-lg"
                  >
                    <Heart size={18} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* BUY BUTTON */}
            <motion.button
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              style={{
                backgroundColor: colors.midnight,
              }}
              className="group relative overflow-hidden w-full lg:max-w-md py-4 lg:py-5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.28)] transition-all duration-500"
            >

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-1000" />

              <CreditCard size={18} />

              Buy it Now
            </motion.button>

            {/* FEATURES */}
            <div
              style={{ borderColor: colors.divider }}
              className="pt-8 mt-8 border-t grid grid-cols-2 gap-5"
            >

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3"
              >
                <Truck size={16} />

                <p className="text-[8px] font-black uppercase tracking-widest">
                  Free Shipping
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3"
              >
                <RefreshCcw size={16} />

                <p className="text-[8px] font-black uppercase tracking-widest">
                  Easy Return
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;