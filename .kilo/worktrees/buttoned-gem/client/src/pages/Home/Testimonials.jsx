import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, Sparkles, Heart, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Aarav & Siya",
    location: "Jaipur, India",
    date: "February 2026",
    review:
      "WedAI handled everything—from planning our ceremonies to organizing vendors and guest lists. It felt like having a personal wedding planner available 24/7.",
    avatar:
      "https://w0.peakpx.com/wallpaper/765/964/HD-wallpaper-as-name-a-s-love-keychain-as-love-keychain-letter-as.jpg",
  },
  {
    id: 2,
    name: "Rohan & Ananya",
    location: "Goa, India",
    date: "December 2025",
    review:
      "The AI Wedding Timeline saved us so much time. Every event was perfectly scheduled, and our families stayed updated without any confusion.",
    avatar:
      "https://i.pinimg.com/236x/3f/36/7b/3f367bc7f5821122f105934b7f7b2226.jpg",
  },
  {
    id: 3,
    name: "Kabir & Meera",
    location: "Udaipur, India",
    date: "January 2026",
    review:
      "Budget Planner and Venue Recommendations were our favorite features. WedAI helped us create our dream wedding without overspending.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8v5eFRVORroXu0RvU_rB8KljFSokCmu8W5VCgQN8V5y6QvduSyA0b4Q-&s=10",
  },
];

const stats = [
  { icon: Star, target: 4.9, decimals: 1, suffix: "/5", label: "Average Rating" },
  { icon: Heart, target: 10000, suffix: "+", label: "Happy Couples" },
  { icon: Users, target: 25000, suffix: "+", label: "Wedding Events Planned" },
];

/* ------------------------------------------------------------------ */
/* Animation variants                                                 */
/* ------------------------------------------------------------------ */

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
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/* Animated Counter                                                    */
/* ------------------------------------------------------------------ */

function AnimatedCounter({ target, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Star Rating                                                         */
/* ------------------------------------------------------------------ */

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#C8A96A] text-[#C8A96A]" />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonial Card                                                    */
/* ------------------------------------------------------------------ */



function TestimonialCard({ testimonial, isCenter }) {
  const navigate = useNavigate();

  const { id, name, location, date, review, avatar } = testimonial;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: isCenter ? 1.06 : 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      // onClick={() => navigate(`/testimonial/${id}`)}
      onClick={() => {
  navigate(`/testimonial/${id}`);
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 0);
}}
      className={`group relative flex cursor-pointer flex-col rounded-[28px] border p-8 shadow-lg backdrop-blur-xl transition-shadow duration-300 sm:p-10 ${
        isCenter
          ? "z-10 border-[#C8A96A]/40 bg-white/90 shadow-2xl shadow-[#C8A96A]/20 lg:scale-105"
          : "border-[#E7DFD2] bg-white/80 shadow-[#3B342C]/5 lg:scale-95"
      }`}
    >
      {/* Glow behind the center card */}
      {isCenter && (
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-[#C8A96A]/20 blur-[50px]"
        />
      )}

      <Quote className="h-8 w-8 text-[#C8A96A]/30" />

      <p className="mt-4 flex-1 text-base leading-relaxed text-[#3B342C] sm:text-lg">
        “{review}”
      </p>

      <div className="mt-6">
        <StarRating />
      </div>

      <div className="mt-6 h-px w-full bg-[#E7DFD2]" />

      <div className="mt-6 flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-14 w-14 rounded-full border-2 border-[#E7DFD2] object-cover"
        />

        <div>
          <p className="font-serif text-lg font-semibold text-[#3B342C]">
            {name}
          </p>

          <p className="text-sm text-[#6B665E]">
            {location}
          </p>

          <p className="text-xs uppercase tracking-wider text-[#C8A96A]">
            {date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
/* ------------------------------------------------------------------ */
/* Mobile Carousel                                                     */
/* ------------------------------------------------------------------ */

function MobileCarousel() {
  const [index, setIndex] = useState(0);

  const paginate = (newIndex) => {
    const total = testimonials.length;
    setIndex(((newIndex % total) + total) % total);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) paginate(index + 1);
    else if (info.offset.x > 80) paginate(index - 1);
  };

  return (
    <div className="relative w-full lg:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="cursor-grab active:cursor-grabbing"
        >
          <TestimonialCard testimonial={testimonials[index]} isCenter />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-[#C8A96A]" : "w-2 bg-[#E7DFD2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Section                                                        */
/* ------------------------------------------------------------------ */

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"
    >
      {/* Ambient soft gold/cream glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E7DFD2]/40 blur-[110px]" />

      {/* Floating floral-inspired abstract circles */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] top-24 h-20 w-20 rounded-full border border-[#C8A96A]/20"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-1/2 h-14 w-14 rounded-full border border-[#C8A96A]/20"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-24 left-[20%] h-10 w-10 rounded-full border border-[#C8A96A]/20"
      />

      {/* Sparkle decorations */}
      <Sparkles className="pointer-events-none absolute left-[15%] top-40 h-5 w-5 text-[#C8A96A]/40" />
      <Sparkles className="pointer-events-none absolute right-[18%] top-72 h-4 w-4 text-[#C8A96A]/30" />
      <Sparkles className="pointer-events-none absolute bottom-40 right-[25%] h-6 w-6 text-[#C8A96A]/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          variants={headingVariants}
          className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DFD2] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96A] shadow-sm">
            Love Stories
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#3B342C] sm:text-4xl lg:text-5xl">
            Trusted by Couples{" "}
            <span className="text-[#C8A96A]">Around the World</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B665E] sm:text-lg">
            Thousands of couples have planned their dream weddings with
            WedAI. From timelines to budgets and guest management, our AI
            makes every celebration stress-free and unforgettable.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={gridVariants}
          className="mx-auto mb-20 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map(({ icon: Icon, target, decimals, suffix, label }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              className="flex flex-col items-center rounded-[28px] border border-[#E7DFD2] bg-white/80 px-6 py-8 text-center shadow-lg shadow-[#3B342C]/5 backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8A96A]">
                <Icon className="h-5 w-5 fill-white text-white" />
              </div>
              <p className="mt-4 font-serif text-3xl font-bold text-[#3B342C]">
                <AnimatedCounter
                  target={target}
                  decimals={decimals || 0}
                  suffix={suffix}
                />
              </p>
              <p className="mt-1 text-sm text-[#6B665E]">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={gridVariants}
          className="hidden items-center gap-8 lg:grid lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              isCenter={index === 1}
            />
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <MobileCarousel />

        {/* Bottom CTA */}
        <motion.div
          variants={headingVariants}
          className="mt-24 flex flex-col items-center text-center"
        >
          <h3 className="font-serif text-2xl font-bold text-[#3B342C] sm:text-3xl">
            Ready to Start Your Wedding Journey?
          </h3>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-[#C8A96A] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.5)]"
            >
              Plan My Wedding
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-[#E7DFD2] bg-white px-8 py-3.5 text-sm font-semibold text-[#3B342C] shadow-sm transition-colors duration-300 hover:border-[#C8A96A]/40 hover:text-[#C8A96A]"
            >
              Book Free Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
