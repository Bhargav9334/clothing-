import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ArrowLeft,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Gift,
  Minus,
  Plus,
} from "lucide-react";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { cart } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [giftWrap, setGiftWrap] =
    useState(false);

  const [donation, setDonation] =
    useState(false);

  // UNIQUE PRODUCTS
  const uniqueCart = [
    ...new Map(
      cart.map((item) => [item.id, item])
    ).values(),
  ];

  // SIZE STATE
  const [sizes, setSizes] = useState(
    uniqueCart.reduce((acc, item) => {
      acc[item.id] = "M";
      return acc;
    }, {})
  );

  // QUANTITY STATE
  const [quantities, setQuantities] =
    useState(
      uniqueCart.reduce((acc, item) => {
        acc[item.id] =
          cart.filter(
            (cartItem) =>
              cartItem.id === item.id
          ).length || 1;

        return acc;
      }, {})
    );

  // SUBTOTAL
  const subtotal = uniqueCart.reduce(
    (total, item) => {
      const cleanPrice = parseInt(
        String(
          item.price || "0"
        ).replace(/[^\d]/g, "")
      );

      return (
        total +
        cleanPrice *
          (quantities[item.id] || 1)
      );
    },
    0
  );

  const giftCharge = giftWrap ? 199 : 0;

  const donationCharge = donation
    ? 49
    : 0;

  const grandTotal =
    subtotal +
    giftCharge +
    donationCharge;

  // EMPTY CART
  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center lg:ml-[220px] bg-[#FDFDFD]">
        <h2 className="text-sm font-black uppercase tracking-widest text-gray-300 mb-6">
          Your bag is empty
        </h2>

        <button
          onClick={() =>
            navigate("/products")
          }
          className="px-8 py-4 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:ml-[220px] bg-[#F8F8F8] font-jakarta pt-24 pb-20 px-4 sm:px-6 md:px-12 relative overflow-hidden overflow-y-auto custom-scrollbar">

      {/* BG */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* BACK */}
        <motion.button
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          onClick={() =>
            navigate(-1)
          }
          className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest mb-10 opacity-50 hover:opacity-100 transition-all duration-300"
        >
          <ArrowLeft size={14} />
          Back to Bag
        </motion.button>

        <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-start w-full">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex-1 space-y-12 w-full min-w-0"
          >

            {/* CONTACT */}
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.35em] mb-8 flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  01
                </span>

                Contact Details
              </h2>

              <input
                type="email"
                placeholder="Email Address for Invoice"
                className="w-full rounded-[1.7rem] px-5 md:px-6 py-4 md:py-5 text-sm md:text-xs outline-none border border-black/10 bg-white shadow-sm"
              />
            </section>

            {/* SHIPPING */}
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.35em] mb-8 flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  02
                </span>

                Shipping Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-[1.7rem] px-5 md:px-6 py-4 md:py-5 text-sm md:text-xs outline-none border border-black/10 bg-white shadow-sm"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-[1.7rem] px-5 md:px-6 py-4 md:py-5 text-sm md:text-xs outline-none border border-black/10 bg-white shadow-sm"
                />

                <input
                  type="text"
                  placeholder="Address / House No."
                  className="sm:col-span-2 w-full rounded-[1.7rem] px-5 md:px-6 py-4 md:py-5 text-sm md:text-xs outline-none border border-black/10 bg-white shadow-sm"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-[1.7rem] px-5 md:px-6 py-4 md:py-5 text-sm md:text-xs outline-none border border-black/10 bg-white shadow-sm"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full rounded-[1.7rem] px-5 md:px-6 py-4 md:py-5 text-sm md:text-xs outline-none border border-black/10 bg-white shadow-sm"
                />
              </div>
            </section>

            {/* PAYMENT */}
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.35em] mb-8 flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  03
                </span>

                Payment Method
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

                {/* CARD */}
                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  onClick={() =>
                    setPaymentMethod("card")
                  }
                  className={`w-full min-h-[120px] md:min-h-[140px] p-5 md:p-7 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 flex items-center gap-4 justify-center ${
                    paymentMethod === "card"
                      ? "border-black bg-white shadow-xl"
                      : "border-black/10 bg-white/70"
                  }`}
                >
                  <CreditCard size={20} />

                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Card / UPI
                  </span>
                </motion.div>

                {/* COD */}
                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  onClick={() =>
                    setPaymentMethod("cod")
                  }
                  className={`w-full min-h-[120px] md:min-h-[140px] p-5 md:p-7 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 flex items-center gap-4 justify-center ${
                    paymentMethod === "cod"
                      ? "border-black bg-white shadow-xl"
                      : "border-black/10 bg-white/70"
                  }`}
                >
                  <Truck size={20} />

                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Cash on Delivery
                  </span>
                </motion.div>
              </div>
            </section>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="w-full xl:w-[520px] shrink-0 min-w-0"
          >

            <div className="overflow-hidden p-5 sm:p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-black/5 relative xl:sticky xl:top-28 bg-white/95 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

              <h2 className="text-[14px] font-black uppercase mb-8 tracking-[0.25em] border-b border-black/10 pb-6">
                Order Summary
              </h2>

              {/* PRODUCTS */}
              <div className="space-y-5 max-h-none xl:max-h-[75vh] overflow-visible xl:overflow-y-auto pr-0 xl:pr-2 custom-scrollbar">

                {uniqueCart.map(
                  (item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{
                        y: -4,
                      }}
                      className="border border-black/5 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                    >

                      <div className="flex flex-col sm:flex-row gap-5">

                        {/* IMAGE */}
                        <div className="w-full sm:w-24 h-[240px] sm:h-28 rounded-[1.5rem] overflow-hidden bg-[#f4f4f4] shrink-0">

                          <img
                            src={
                              item.img ||
                              item.image ||
                              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=100"
                            }
                            className="w-full h-full object-cover"
                            alt={
                              item.name
                            }
                          />
                        </div>

                        {/* DETAILS */}
                        <div className="flex-1">

                          <p className="text-[16px] sm:text-[13px] font-black uppercase mb-2 leading-tight">
                            {item.name}
                          </p>

                          <p className="text-[13px] font-black opacity-60 mb-5">
                            {item.price}
                          </p>

                          {/* SIZE */}
                          <div className="flex items-center gap-2 mb-5 flex-wrap justify-start">

                            {[
                              "S",
                              "M",
                              "L",
                              "XL",
                            ].map(
                              (
                                size
                              ) => (
                                <button
                                  key={
                                    size
                                  }
                                  onClick={() =>
                                    setSizes(
                                      {
                                        ...sizes,
                                        [item.id]:
                                          size,
                                      }
                                    )
                                  }
                                  className={`w-12 h-12 md:w-11 md:h-11 rounded-full text-[11px] md:text-[10px] font-black border transition-all duration-300 ${
                                    sizes[
                                      item
                                        .id
                                    ] ===
                                    size
                                      ? "bg-black text-white border-black shadow-lg"
                                      : "bg-white border-black/10"
                                  }`}
                                >
                                  {
                                    size
                                  }
                                </button>
                              )
                            )}
                          </div>

                          {/* QUANTITY */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                            <div className="w-full sm:w-fit flex items-center justify-center gap-5 border border-black/10 rounded-full px-5 py-3 bg-[#fcfcfc]">

                              <button
                                onClick={() =>
                                  setQuantities(
                                    {
                                      ...quantities,
                                      [item.id]:
                                        quantities[
                                          item
                                            .id
                                        ] >
                                        1
                                          ? quantities[
                                              item
                                                .id
                                            ] -
                                            1
                                          : 1,
                                    }
                                  )
                                }
                              >
                                <Minus
                                  size={
                                    15
                                  }
                                />
                              </button>

                              <span className="text-[13px] font-black min-w-[16px] text-center">
                                {
                                  quantities[
                                    item
                                      .id
                                  ]
                                }
                              </span>

                              <button
                                onClick={() =>
                                  setQuantities(
                                    {
                                      ...quantities,
                                      [item.id]:
                                        quantities[
                                          item
                                            .id
                                        ] +
                                        1,
                                    }
                                  )
                                }
                              >
                                <Plus
                                  size={
                                    15
                                  }
                                />
                              </button>
                            </div>

                            <span className="text-[14px] font-black italic">
                              ₹
                              {parseInt(
                                String(
                                  item.price
                                ).replace(
                                  /[^\d]/g,
                                  ""
                                )
                              ) *
                                quantities[
                                  item
                                    .id
                                ]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* GIFT */}
              <motion.div
                whileHover={{
                  y: -2,
                }}
                onClick={() =>
                  setGiftWrap(
                    !giftWrap
                  )
                }
                className={`mt-8 mb-5 border rounded-[2rem] p-5 cursor-pointer transition-all ${
                  giftWrap
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white/60"
                }`}
              >
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        giftWrap
                          ? "bg-white/10"
                          : "bg-black/5"
                      }`}
                    >
                      <Gift
                        size={18}
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest">
                        Premium Gift Wrap
                      </p>

                      <p className="text-[9px] opacity-60 mt-1">
                        Luxury packaging &
                        message card
                      </p>
                    </div>
                  </div>

                  <span className="text-[12px] font-black italic">
                    + ₹199
                  </span>
                </div>
              </motion.div>

              {/* DONATION */}
              <motion.div
                whileHover={{
                  y: -2,
                }}
                onClick={() =>
                  setDonation(
                    !donation
                  )
                }
                className={`mb-8 border rounded-[2rem] p-5 cursor-pointer transition-all ${
                  donation
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white/60"
                }`}
              >
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        donation
                          ? "bg-white/10"
                          : "bg-black/5"
                      }`}
                    >
                      ❤️
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest">
                        Donate For Children
                      </p>

                      <p className="text-[9px] opacity-60 mt-1">
                        Support education &
                        meals
                      </p>
                    </div>
                  </div>

                  <span className="text-[12px] font-black italic">
                    + ₹49
                  </span>
                </div>
              </motion.div>

              {/* TOTAL */}
              <div className="space-y-5 mb-8">

                <div className="flex justify-between text-[10px] font-bold uppercase opacity-60">
                  <span>
                    Subtotal
                  </span>

                  <span className="font-black">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex justify-between text-[10px] font-bold uppercase opacity-60">
                  <span>
                    Shipping
                  </span>

                  <span className="italic">
                    Complimentary
                  </span>
                </div>

                <div className="flex justify-between text-[10px] font-bold uppercase opacity-60">
                  <span>
                    Gift Wrap
                  </span>

                  <span>
                    {giftWrap
                      ? `₹${giftCharge}`
                      : "Not Added"}
                  </span>
                </div>

                <div className="flex justify-between text-[10px] font-bold uppercase opacity-60">
                  <span>
                    Donation
                  </span>

                  <span>
                    {donation
                      ? `₹${donationCharge}`
                      : "Not Added"}
                  </span>
                </div>

                <div className="pt-6 border-t border-black/10 flex justify-between items-center">

                  <span className="text-[13px] font-black uppercase italic">
                    Grand Total
                  </span>

                  <span className="text-3xl md:text-4xl font-black italic tracking-tight">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="w-full py-5 bg-black text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] md:tracking-[0.3em] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              >
                Complete Order
              </motion.button>

              {/* FEATURES */}
              <div className="mt-8 pt-8 border-t border-black/10 space-y-4">

                <div className="flex items-center gap-3 opacity-60">
                  <ShieldCheck
                    size={15}
                  />

                  <span className="text-[8px] font-bold uppercase tracking-widest">
                    Studio Secured SSL
                    Payment
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <CheckCircle2
                    size={15}
                  />

                  <span className="text-[8px] font-bold uppercase tracking-widest">
                    Authenticity Assured
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;