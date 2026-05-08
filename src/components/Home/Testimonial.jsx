// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Aaryan Sharma",
//     location: "Mumbai, India",
//     text: "The oversized tees from Sattiyas are game changers. The fabric quality and fit are exactly what a modern streetwear enthusiast needs. Highly recommended for elite style.",
//     image: "/customer1.png",
//   },
//   {
//     id: 2,
//     name: "James Wilson",
//     location: "London, UK",
//     text: "Found my go-to destination for Old Money aesthetics. Their linen shirts and tailored chinos are premium. Exceptional shopping experience and fast delivery.",
//     image: "/customer2.png",
//   },
//   {
//     id: 3,
//     name: "Vikram Rathore",
//     location: "Jaipur, India",
//     text: "Sattiyas delivers what they promise. Being a long-term customer, I can vouch for their consistency in design and premium masculine fits. Best in the market.",
//     image: "/customer3.png",
//   },
// ];

// const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   const colors = {
//     studioWhite: "#FDFDFD", 
//     midnight: "#111111",    
//     slate: "#666666",      
//     divider: "#EEEEEE",   
//   };

//   const nextSlide = useCallback(() => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   }, []);

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   return (
//     <section
//       style={{
//         backgroundColor: "#ffffff",
//         borderColor: colors.divider,
//       }}
//       className="relative py-24 px-6 md:px-12 overflow-hidden font-jakarta border-t lg:ml-[220px] w-full lg:w-[calc(100%-220px)]"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <span
//               className="w-5 h-[1.5px]"
//               style={{ backgroundColor: colors.midnight }}
//             ></span>
//             <p
//               style={{ color: colors.slate }}
//               className="font-black text-[9px] uppercase tracking-[0.4em]"
//             >
//               Testimonials
//             </p>
//           </div>
//           <h2
//             style={{ color: colors.midnight }}
//             className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none"
//           >
//             What Our <span style={{ fontWeight: 300, fontStyle: "normal", color: colors.slate }}>People Say.</span>
//           </h2>
//         </motion.div>

//         <div className="relative min-h-[320px] flex flex-col items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9, x: 20 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 1.1, x: -20 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="px-4 md:px-20"
//             >
//               <div className="flex justify-center mb-8">
//                 <Quote
//                   size={28}
//                   style={{
//                     color: colors.midnight,
//                   }}
//                   className="rotate-180 opacity-10"
//                 />
//               </div>

//               <p
//                 style={{ color: colors.midnight }}
//                 className="text-sm md:text-lg lg:text-xl leading-[1.8] mb-12 font-medium italic tracking-tight opacity-80"
//               >
//                 "{testimonials[index].text}"
//               </p>

//               <div className="flex flex-col items-center">
//                 <div
//                   style={{ borderColor: colors.divider }}
//                   className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border mb-5 shadow-sm p-1 bg-white"
//                 >
//                   <img
//                     src={testimonials[index].image}
//                     alt={testimonials[index].name}
//                     className="w-full h-full object-cover rounded-full grayscale"
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${testimonials[index].name}&background=111111&color=ffffff`;
//                     }}
//                   />
//                 </div>

//                 <h4
//                   style={{ color: colors.midnight }}
//                   className="text-xs md:text-sm font-black uppercase tracking-[0.2em]"
//                 >
//                   {testimonials[index].name}
//                 </h4>
//                 <div className="flex items-center gap-2 mt-1.5">
//                   <span
//                     className="w-3 h-[1px]"
//                     style={{ backgroundColor: colors.midnight }}
//                   ></span>
//                   <p
//                     style={{ color: colors.slate }}
//                     className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60"
//                   >
//                     {testimonials[index].location}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           <div className="absolute w-full flex justify-between top-1/2 -translate-y-1/2 pointer-events-none">
//             <button
//               onClick={prevSlide}
//               style={{ color: colors.midnight }}
//               className="pointer-events-auto p-2 hover:opacity-50 transition-opacity hidden md:block"
//             >
//               <ArrowLeft size={22} strokeWidth={2} />
//             </button>
//             <button
//               onClick={nextSlide}
//               style={{ color: colors.midnight }}
//               className="pointer-events-auto p-2 hover:opacity-50 transition-opacity hidden md:block"
//             >
//               <ArrowRight size={22} strokeWidth={2} />
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center gap-3 mt-16">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className="group py-3 px-1"
//             >
//               <div
//                 className="h-[1.5px] transition-all duration-700 rounded-full"
//                 style={{
//                   width: index === i ? "48px" : "16px",
//                   backgroundColor:
//                     index === i ? colors.midnight : "#DDD",
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;