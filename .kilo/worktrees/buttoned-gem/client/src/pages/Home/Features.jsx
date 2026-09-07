import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Images,
  Video,
  Wallet,
  MapPinned,
  Users,
  Heart,
  Sparkles,
  Clock,
  X,
} from "lucide-react";

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

const cardGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    icon: CalendarDays,
    title: "AI Wedding Timeline",
    description:
      "Automatically generates a complete wedding schedule based on your events and preferences.",
    details:
      "Our AI studies your ceremony style, guest count, and vendor availability to build a minute-by-minute timeline — from the first haldi ritual to the last dance. It automatically flags scheduling conflicts, suggests buffer time between events, and adjusts the plan instantly if a vendor's timing changes.",
    image:
      // "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
      "https://images.template.net/449110/Wedding-Planner-Timeline-Template-edit-online.png"
  },
  {
    icon: Images,
    title: "Smart Album Layout",
    description:
      "AI designs elegant album layouts with beautiful memories arranged automatically.",
    details:
      "Upload your raw wedding photos and let AI curate them into a beautifully paced album — grouping moments by ceremony, mood, and color palette. Layouts are fully editable, so you can rearrange, resize, or swap any photo before printing.",
    image:
      // "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1000&q=80"
      // 
      "https://i.pinimg.com/736x/e7/93/04/e793048489925cc3dc7e6208f0b4a353.jpg",
  },
  {
    icon: Video,
    title: "AI Video Planning",
    description:
      "Generate cinematic wedding video timelines and smart editing suggestions.",
    details:
      "Get a shot-list and highlight-reel structure generated from your wedding schedule, plus AI-suggested cuts for cinematic pacing — from the entry to the vows to the reception dance floor.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Wallet,
    title: "Budget Planner",
    description:
      "Track wedding expenses and receive AI-powered budget recommendations.",
    details:
      "Set your total budget and let AI allocate it across venue, catering, decor, and photography based on your priorities. Real-time tracking flags overspending early, and smart suggestions help you save without compromising on the moments that matter most.",
    image:
      // "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=1000&q=80",
      "https://www.tungstenringsco.com/images/iStock-1170926401-500x333.jpg",
  },
  {
    icon: MapPinned,
    title: "Venue Recommendations",
    description:
      "Receive personalized venue suggestions based on budget, location and guest count.",
    details:
      "Tell us your city, guest count, and style — indoor, outdoor, palace, or beach — and AI shortlists venues that fit your budget and date availability, complete with photos, capacity, and estimated costs.",
    image:
      // "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
      "https://govindaresorts.com/wp-content/uploads/Destination-Wedding-Venue-Recommendation.jpg",
  },
  {
    icon: Users,
    title: "Guest Management",
    description:
      "Manage invitations, RSVP tracking and guest lists effortlessly.",
    details:
      "Send digital invitations, track RSVPs in real time, and manage seating arrangements from one dashboard. AI groups guests by relationship and preferences to help you plan a seating chart everyone will enjoy.",
    image:
      // "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      "https://www.friartux.com/on/demandware.static/-/Sites-FriarTux-Library/default/dw8b75face/images/blog/blog2383/wedding-invites-tables2.jpg",
  },
];

const stats = [
  { icon: Heart, value: "500+", label: "Happy Couples" },
  { icon: Images, value: "1000+", label: "Albums Generated" },
  { icon: Sparkles, value: "98%", label: "Client Satisfaction" },
  { icon: Clock, value: "24/7", label: "AI Assistance" },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <motion.section
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.1 }}
      // variants={sectionVariants}
      // className="relative w-full overflow-hidden bg-linear-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"
      
  id="features"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={sectionVariants}
  className="relative w-full overflow-hidden bg-linear-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"

    >
      {/* Ambient soft gold/cream glows — consistent with Hero */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E7DFD2]/40 blur-[110px]" />

      {/* Centered content wrapper */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          className="mx-auto mb-20 flex max-w-4xl flex-col items-center justify-center text-center"
        >
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#3B342C] sm:text-4xl lg:text-5xl">
            Everything You Need
            <br />
            to Plan Your{" "}
            <span className="text-[#C8A96A]">
              Perfect Wedding
            </span>
          </h2>
          <motion.p
            variants={headingVariants}
            className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-[#6B665E] sm:text-lg"
          >
            Powered by Artificial Intelligence to simplify planning, automate
            wedding management, and create unforgettable memories.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid — centered, equal sizing, consistent style */}
        <motion.div
          variants={cardGridVariants}
          className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const { icon: Icon, title, description } = feature;
            return (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => setSelectedFeature(feature)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedFeature(feature);
                }}
                className="group relative flex h-full w-full max-w-90 cursor-pointer flex-col overflow-hidden rounded-[28px] border border-[#E7DFD2] bg-white p-10 shadow-lg shadow-[#3B342C]/5 transition-colors duration-300 hover:border-[#C8A96A]/40"
              >
                {/* soft gold glow that grows on hover — behind content, same stacking context */}
                <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-[#C8A96A]/0 opacity-0 blur-xl transition-all duration-300 group-hover:bg-[#C8A96A]/10 group-hover:opacity-100" />

                {/* card content sits above the glow */}
                <div className="relative z-10 flex flex-1 flex-col">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30"
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  <h3 className="mt-8 font-serif text-xl font-semibold text-[#3B342C]">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#6B665E]">
                    {description}
                  </p>

                  <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#C8A96A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Details →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={cardGridVariants}
          className="mt-28 grid w-full grid-cols-2 gap-6 sm:mt-32 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col items-center overflow-hidden rounded-[28px] border border-[#E7DFD2] bg-white px-6 py-10 text-center shadow-lg shadow-[#3B342C]/5 transition-all duration-300 hover:border-[#C8A96A]/40 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96A]">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <p className="mt-4 font-serif text-2xl font-bold text-[#3B342C] sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-[#6B665E] sm:text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#3B342C]/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-[#E7DFD2] bg-white shadow-2xl shadow-[#3B342C]/20"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedFeature(null)}
                aria-label="Close"
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image */}
              <div className="relative h-56 w-full sm:h-64">
                <img
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B342C]/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                  <selectedFeature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mt-6 font-serif text-2xl font-bold text-[#3B342C] sm:text-3xl">
                  {selectedFeature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#6B665E]">
                  {selectedFeature.details}
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedFeature(null)}
                  className="mt-8 flex items-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
                >
                  Got it
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
