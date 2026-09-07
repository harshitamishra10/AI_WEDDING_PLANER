// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Heart, ArrowRight, Sparkles } from "lucide-react";

// // // import ceremony1 from "../../assets/gallery/ceremony1.jpg";
// // // import ceremony2 from "../../assets/gallery/ceremony2.jpg";
// // // import ceremony3 from "../../assets/gallery/ceremony3.jpg";
// // // import ceremony4 from "../../assets/gallery/ceremony4.jpg";
// // // import ceremony5 from "../../assets/gallery/ceremony5.jpg";
// // // import ceremony6 from "../../assets/gallery/ceremony6.jpg";
// // // import ceremony7 from "../../assets/gallery/ceremony7.jpg";
// // // import ceremony8 from "../../assets/gallery/ceremony8.jpg";
// // // import ceremony9 from "../../assets/gallery/ceremony9.jpg";

// // // import decor from "../../assets/gallery/decor.jpg";
// // // import decor1 from "../../assets/gallery/decor1.jpg";
// // // import decor2 from "../../assets/gallery/decor2.jpg";
// // // import decor3 from "../../assets/gallery/decor3.jpg";
// // // import decor4 from "../../assets/gallery/decor4.jpg";

// // // import venue1 from "../../assets/gallery/venue1.jpg";
// // // import venue2 from "../../assets/gallery/venue2.jpg";
// // // import venue3 from "../../assets/gallery/venue3.jpg";
// // // import venue4 from "../../assets/gallery/venue4.jpg";
// // // import venue5 from "../../assets/gallery/venue5.jpg";
// // // import venue6 from "../../assets/gallery/venue6.jpg";

// // //  const galleryImages = [
// // //   // Ceremony
// // //   { id: 1, category: "Ceremony", image: ceremony1 },
// // //   { id: 2, category: "Ceremony", image: ceremony2 },
// // //   { id: 3, category: "Ceremony", image: ceremony3 },
// // //   { id: 4, category: "Ceremony", image: ceremony4 },
// // //   { id: 5, category: "Ceremony", image: ceremony5 },
// // //   { id: 6, category: "Ceremony", image: ceremony6 },
// // //   { id: 7, category: "Ceremony", image: ceremony7 },
// // //   { id: 8, category: "Ceremony", image: ceremony8 },
// // //   { id: 9, category: "Ceremony", image: ceremony9 },

// // //   // Decor
// // //   { id: 10, category: "Decor", image: decor },
// // //   { id: 11, category: "Decor", image: decor1 },
// // //   { id: 12, category: "Decor", image: decor2 },
// // //   { id: 13, category: "Decor", image: decor3 },
// // //   { id: 14, category: "Decor", image: decor4 },

// // //   // Venues
// // //   { id: 15, category: "Venues", image: venue1 },
// // //   { id: 16, category: "Venues", image: venue2 },
// // //   { id: 17, category: "Venues", image: venue3 },
// // //   { id: 18, category: "Venues", image: venue4 },
// // //   { id: 19, category: "Venues", image: venue5 },
// // //   { id: 20, category: "Venues", image: venue6 },
// // // ];

// // // const categories = [
// // //   "All",
// // //   "Ceremony",
// // //   "Decor",
// // //   "Venues",
// // // ];

// // // const sectionVariants = {
// // //   hidden: { opacity: 0, y: 60 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
// // //   },
// // // };

// // // const headingVariants = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // };

// // // const gridVariants = {
// // //   hidden: {},
// // //   visible: {
// // //     transition: { staggerChildren: 0.1, delayChildren: 0.1 },
// // //   },
// // // };

// // // const cardVariants = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // //   exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
// // // };

// // // export default function Gallery() {
// // //   const [activeCategory, setActiveCategory] = useState("All");

// // //   const filteredImages =
// // //     activeCategory === "All"
// // //       ? galleryImages
// // //       : galleryImages.filter((img) => img.category === activeCategory);

// // //   return (
// // //     <motion.section
// // //       id="gallery"
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.1 }}
// // //       variants={sectionVariants}
// // //       className="relative w-full overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#312E81] py-28"
// // //     >
// // //       {/* Ambient glow orbs — consistent with Hero/Features/Dashboard */}
// // //       <motion.div
// // //         animate={{ opacity: [0.2, 0.4, 0.2] }}
// // //         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// // //         className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#7C3AED]/25 blur-[120px]"
// // //       />
// // //       <motion.div
// // //         animate={{ opacity: [0.3, 0.15, 0.3] }}
// // //         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
// // //         className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-[#EC4899]/20 blur-[120px]"
// // //       />
// // //       <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FACC15]/10 blur-[110px]" />

// // //       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
// // //         {/* Heading */}
// // //         <motion.div
// // //           variants={headingVariants}
// // //           className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center"
// // //         >
// // //           <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-pink-200 backdrop-blur-md">
// // //             📸 Wedding Gallery
// // //           </span>
// // //           <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
// // //             Beautiful Wedding
// // //             <br />
// // //             Memories{" "}
// // //             <span className="bg-linear-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
// // //               Powered by AI
// // //             </span>
// // //           </h2>
// // //           <motion.p
// // //             variants={headingVariants}
// // //             className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
// // //           >
// // //             Explore stunning wedding moments, beautifully organized with
// // //             AI-generated album layouts and smart memories.
// // //           </motion.p>
// // //         </motion.div>

// // //         {/* Category Filter */}
// // //         <motion.div
// // //           variants={headingVariants}
// // //           className="mb-14 flex flex-wrap items-center justify-center gap-3"
// // //         >
// // //           {categories.map((category) => {
// // //             const isActive = activeCategory === category;
// // //             return (
// // //               <motion.button
// // //                 key={category}
// // //                 onClick={() => setActiveCategory(category)}
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className={`rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300 ${
// // //                   isActive
// // //                     ? "border-transparent bg-linear-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-lg shadow-purple-900/30"
// // //                     : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:text-white"
// // //                 }`}
// // //               >
// // //                 {category}
// // //               </motion.button>
// // //             );
// // //           })}
// // //         </motion.div>

// // //         {/* Gallery Grid */}
// // //         <motion.div
// // //           layout
// // //           variants={gridVariants}
// // //           className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
// // //         >
// // //           <AnimatePresence mode="popLayout">
// // //             {filteredImages.map((item) => (
// // //               <motion.div
// // //                 key={item.id}
// // //                 layout
// // //                 variants={cardVariants}
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 exit="exit"
// // //                 whileHover={{ y: -10, scale: 1.02 }}
// // //                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
// // //                 className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-md"
// // //               >
// // //                 <motion.img
// // //                   src={item.image}
// // //                   alt={`${item.category} wedding moment`}
// // //                   className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
// // //                 />

// // //                 {/* Dark overlay */}
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

// // //                 {/* Hover content */}
// // //                 <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
// // //                   <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
// // //                     <Heart className="h-3 w-3 text-[#EC4899]" />
// // //                     AI Curated
// // //                   </span>
// // //                   <button className="flex w-fit items-center gap-1.5 rounded-full bg-linear-to-r from-[#7C3AED] to-[#EC4899] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]">
// // //                     View Album
// // //                     <ArrowRight className="h-3.5 w-3.5" />
// // //                   </button>
// // //                 </div>

// // //                 {/* Category label (always visible, top-left) */}
// // //                 <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
// // //                   {item.category}
// // //                 </span>
// // //               </motion.div>
// // //             ))}
// // //           </AnimatePresence>
// // //         </motion.div>

// // //         {/* Bottom CTA */}
// // //         <motion.div
// // //           variants={headingVariants}
// // //           className="mt-20 flex justify-center"
// // //         >
// // //           <div className="group relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-lg shadow-black/20 backdrop-blur-md sm:p-14">
// // //             <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#7C3AED]/20 blur-[100px]" />

// // //             <div className="relative z-10 flex flex-col items-center">
// // //               <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#7C3AED] to-[#EC4899] shadow-lg shadow-purple-900/30">
// // //                 <Sparkles className="h-6 w-6 text-white" />
// // //               </div>

// // //               <h3 className="text-2xl font-bold text-white sm:text-3xl">
// // //                 Ready to Create Your Dream Album?
// // //               </h3>
// // //               <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400">
// // //                 Let AI organize your wedding memories into elegant albums and
// // //                 unforgettable stories.
// // //               </p>

// // //               <motion.button
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="mt-8 flex items-center gap-2 rounded-full bg-linear-to-r from-[#7C3AED] to-[#EC4899] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
// // //               >
// // //                 Generate Album
// // //                 <ArrowRight className="h-4 w-4" />
// // //               </motion.button>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </motion.section>
// // //   );
// // // }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

import ceremony1 from "../../assets/gallery/ceremony1.jpg";
import ceremony2 from "../../assets/gallery/ceremony2.jpg";
import ceremony3 from "../../assets/gallery/ceremony3.jpg";
import ceremony4 from "../../assets/gallery/ceremony4.jpg";
import ceremony5 from "../../assets/gallery/ceremony5.jpg";
import ceremony6 from "../../assets/gallery/ceremony6.jpg";
import ceremony7 from "../../assets/gallery/ceremony7.jpg";
import ceremony8 from "../../assets/gallery/ceremony8.jpg";
import ceremony9 from "../../assets/gallery/ceremony9.jpg";

import decor from "../../assets/gallery/decor.jpg";
import decor1 from "../../assets/gallery/decor1.jpg";
import decor2 from "../../assets/gallery/decor2.jpg";
import decor3 from "../../assets/gallery/decor3.jpg";
import decor4 from "../../assets/gallery/decor4.jpg";

import venue1 from "../../assets/gallery/venue1.jpg";
import venue2 from "../../assets/gallery/venue2.jpg";
import venue3 from "../../assets/gallery/venue3.jpg";
import venue4 from "../../assets/gallery/venue4.jpg";
import venue5 from "../../assets/gallery/venue5.jpg";
import venue6 from "../../assets/gallery/venue6.jpg";

 const galleryImages = [
  // Ceremony
  { id: 1, category: "Ceremony", image: ceremony1 },
  { id: 2, category: "Ceremony", image: ceremony2 },
  { id: 3, category: "Ceremony", image: ceremony3 },
  { id: 4, category: "Ceremony", image: ceremony4 },
  { id: 5, category: "Ceremony", image: ceremony5 },
  { id: 6, category: "Ceremony", image: ceremony6 },
  { id: 7, category: "Ceremony", image: ceremony7 },
  { id: 8, category: "Ceremony", image: ceremony8 },
  { id: 9, category: "Ceremony", image: ceremony9 },

  // Decor
  { id: 10, category: "Decor", image: decor },
  { id: 11, category: "Decor", image: decor1 },
  { id: 12, category: "Decor", image: decor2 },
  { id: 13, category: "Decor", image: decor3 },
  { id: 14, category: "Decor", image: decor4 },

  // Venues
  { id: 15, category: "Venues", image: venue1 },
  { id: 16, category: "Venues", image: venue2 },
  { id: 17, category: "Venues", image: venue3 },
  { id: 18, category: "Venues", image: venue4 },
  { id: 19, category: "Venues", image: venue5 },
  { id: 20, category: "Venues", image: venue6 },
];

const categories = [
  "All",
  "Ceremony",
  "Decor",
  "Venues",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <motion.section
      id="gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"
    >
      {/* Ambient soft gold/cream glows — consistent with Hero */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[120px]"
      />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E7DFD2]/40 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DFD2] bg-white px-4 py-1.5 text-sm font-medium text-[#C8A96A] shadow-sm">
            📸 Wedding Gallery
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#3B342C] sm:text-4xl lg:text-5xl">
            Beautiful Wedding
            <br />
            Memories{" "}
            <span className="text-[#C8A96A]">
              Powered by AI
            </span>
          </h2>
          <motion.p
            variants={headingVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B665E] sm:text-lg"
          >
            Explore stunning wedding moments, beautifully organized with
            AI-generated album layouts and smart memories.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={headingVariants}
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-[#C8A96A] text-white shadow-md shadow-[#C8A96A]/30"
                    : "border-[#E7DFD2] bg-white text-[#6B665E] hover:border-[#C8A96A]/40 hover:text-[#3B342C]"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          variants={gridVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#E7DFD2] bg-white shadow-lg shadow-[#3B342C]/5"
              >
                <motion.img
                  src={item.image}
                  alt={`${item.category} wedding moment`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B342C]/70 via-[#3B342C]/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    <Heart className="h-3 w-3 text-[#C8A96A]" />
                    AI Curated
                  </span>
                  <button className="flex w-fit items-center gap-1.5 rounded-full bg-[#C8A96A] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]">
                    View Album
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Category label (always visible, top-left) */}
                <span className="absolute left-4 top-4 rounded-full border border-[#E7DFD2] bg-white/90 px-3 py-1 text-xs font-medium text-[#3B342C] backdrop-blur-md">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={headingVariants}
          className="mt-20 flex justify-center"
        >
          <div className="group relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#E7DFD2] bg-white p-10 text-center shadow-lg shadow-[#3B342C]/5 sm:p-14">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#3B342C] sm:text-3xl">
                Ready to Create Your Dream Album?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B665E]">
                Let AI organize your wedding memories into elegant albums and
                unforgettable stories.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex items-center gap-2 rounded-full bg-[#C8A96A] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.5)]"
              >
                Generate Album
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

