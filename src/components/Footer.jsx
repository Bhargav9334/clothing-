import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const colors = {
    studioWhite: "#FDFDFD",
    midnight: "#111111",
    slate: "#666666",
    divider: "#EEEEEE",
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <footer
      style={{
        backgroundColor: "#FDFDFD",
      }}
      className="relative overflow-hidden border-t pt-20 pb-8 lg:ml-[220px] w-full lg:w-[calc(100%-220px)] font-jakarta"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* MAIN GRID */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10 mb-20 text-center sm:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >

          {/* BRAND */}
          <motion.div
            className="flex flex-col items-center sm:items-start gap-6"
            variants={itemVariants}
          >

            <Link to="/">
              <motion.h2
                style={{
                  color: colors.midnight,
                }}
                className="text-4xl font-black italic tracking-[-0.08em] uppercase"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Sattiyas
                <motion.span
                  className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  .
                </motion.span>
              </motion.h2>
            </Link>

            <motion.p
              style={{
                color: colors.slate,
              }}
              className="text-[11px] font-bold leading-relaxed max-w-[240px] uppercase tracking-wider opacity-80"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 0.8,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              Discover endless delights for the modern masculine lifestyle.
              Your one-stop premium clothing destination.
            </motion.p>

            {/* PAYMENT */}
            <motion.div
              className="flex items-center gap-4 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500 bg-white/70 backdrop-blur-xl border border-black/5 px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-2"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-4"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-3"
              />
            </motion.div>
          </motion.div>

          {/* SHOP */}
          <motion.div
            className="flex flex-col items-center sm:items-start gap-5"
            variants={itemVariants}
          >

            <motion.h4
              style={{
                color: colors.midnight,
                borderColor: colors.midnight,
              }}
              className="text-[10px] font-black uppercase tracking-[0.35em] border-b-2 w-fit pb-2"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              Shop
            </motion.h4>

            <ul className="flex flex-col items-center sm:items-start gap-3">
              {[
                {
                  label: "All Collection",
                  to: "/products",
                },
                {
                  label: "New Drops",
                  to: "/products?category=New%20Drops",
                },
                {
                  label: "My Wishlist",
                  to: "/wishlist",
                },
                {
                  label: "Shopping Bag",
                  to: "/cart",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    style={{
                      color: colors.midnight,
                    }}
                    className="text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 relative group hover:tracking-[0.18em]"
                  >

                    <span className="relative z-10">
                      {item.label}
                    </span>

                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                      initial={{
                        width: 0,
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SUPPORT */}
          <motion.div
            className="flex flex-col items-center sm:items-start gap-5"
            variants={itemVariants}
          >

            <motion.h4
              style={{
                color: colors.midnight,
                borderColor: colors.midnight,
              }}
              className="text-[10px] font-black uppercase tracking-[0.35em] border-b-2 w-fit pb-2"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              Support
            </motion.h4>

            <ul className="flex flex-col items-center sm:items-start gap-3">
              {[
                {
                  label: "Contact Us",
                  to: "/contact",
                },
                {
                  label: "Checkout",
                  to: "/checkout",
                },
                {
                  label: "Help Center",
                  to: "#",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    style={{
                      color: colors.midnight,
                    }}
                    className="text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 relative group hover:tracking-[0.18em]"
                  >

                    <span className="relative z-10">
                      {item.label}
                    </span>

                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                      initial={{
                        width: 0,
                      }}
                      whileHover={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* STORE INFO */}
          <motion.div
            className="flex flex-col items-center sm:items-start gap-5"
            variants={itemVariants}
          >

            <motion.h4
              style={{
                color: colors.midnight,
                borderColor: colors.midnight,
              }}
              className="text-[10px] font-black uppercase tracking-[0.35em] border-b-2 w-fit pb-2"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.5,
              }}
            >
              Store Info
            </motion.h4>

            <div className="flex flex-col items-center sm:items-start gap-4">
              {[
                {
                  icon: Phone,
                  text: "+91 98765 43210",
                },
                {
                  icon: Mail,
                  text: "hello@sattiyas.com",
                },
                {
                  icon: MapPin,
                  text: "Johari Bazar, Jaipur",
                  isLocation: true,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center sm:items-start gap-3 text-center sm:text-left"
                  whileHover={{
                    x: 6,
                    scale: 1.01,
                  }}
                >

                  <item.icon
                    size={14}
                    style={{
                      color: colors.midnight,
                    }}
                    className="shrink-0 mt-0.5"
                  />

                  <span
                    style={{
                      color: colors.midnight,
                    }}
                    className={`text-[11px] font-extrabold tracking-wider ${
                      item.isLocation
                        ? "uppercase"
                        : ""
                    }`}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
{/* BOTTOM */}
<motion.div
  className="relative z-10 pt-10 border-t flex flex-col items-center justify-between gap-8 md:flex-row"
  style={{
    borderColor: colors.divider,
  }}
  initial={{
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
  }}
  transition={{
    delay: 0.5,
  }}
>

  {/* COPYRIGHT */}
  <p
    style={{
      color: colors.slate,
    }}
    className="text-[10px] font-black uppercase tracking-[0.2em] text-center opacity-60"
  >
    Copyright &copy; {currentYear} Sattiyas.
    All rights reserved.
  </p>

  {/* RIGHT SECTION */}
  <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10 lg:pr-[180px]">

    {/* POLICY */}
    <motion.div
      className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] font-black uppercase tracking-widest"
      style={{
        color: colors.midnight,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {[
        "Privacy Policy",
        "Terms of Use",
      ].map((item, idx) => (
        <motion.div
          key={idx}
          variants={linkVariants}
        >
          <Link
            to="#"
            className="transition-all relative group"
          >

            <span>{item}</span>

            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-red-500"
              initial={{
                width: 0,
              }}
              whileHover={{
                width: "100%",
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>

    {/* SOCIAL */}
    <motion.div
      className="flex items-center justify-center gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {[
        Instagram,
        Facebook,
        Twitter,
        Youtube,
      ].map((Icon, idx) => (
        <motion.a
          key={idx}
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: colors.midnight,
          }}
          className="group relative transition-all duration-500 bg-white/80 backdrop-blur-2xl border border-black/5 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.06)] flex items-center justify-center w-[56px] h-[56px] overflow-hidden"
          whileHover={{
            scale: 1.15,
            y: -5,
            rotate: 8,
            color: "#e57361",
          }}
          whileTap={{
            scale: 0.9,
          }}
          variants={linkVariants}
        >

          {/* INNER LIGHT */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-white/40 to-transparent" />

          {/* ICON */}
          <Icon
            size={20}
            strokeWidth={2.2}
            className="relative z-10"
          />
        </motion.a>
      ))}
    </motion.div>
  </div>
</motion.div>
  </div>
    </footer>
  );
};
export default Footer;