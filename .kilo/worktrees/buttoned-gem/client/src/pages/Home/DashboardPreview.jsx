import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Images,
  Wallet,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import venue from "../../assets/dashboard/venueee.jpg";
import bride from "../../assets/dashboard/Bride.jpg";
import couple from "../../assets/dashboard/couple.jpg";
import couple2 from "../../assets/dashboard/couple2.jpg";
const dashboardImages = [
  venue,
  bride,
  couple,
  couple2,
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

const leftCardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const bottomGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const bottomCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tasks = [
  "Timeline Generated",
  "Budget Planned",
  "Guest List Ready",
  "Venue Selected",
  "Album Layout Ready",
  "Video Planning",
];

const recommendations = [
  { icon: Sparkles, title: "Elegant Sunset Theme" },
  { icon: Star, title: "Royal Floral Decoration" },
  { icon: Images, title: "Premium Photography Package" },
  { icon: Sparkles, title: "Luxury Stage Design" },
];

const bottomStats = [
  { icon: Wallet, label: "Budget", value: "₹14.8L", sub: "95% Planned" },
  { icon: Users, label: "Guests", value: "480 Guests", sub: "320 Confirmed" },
  { icon: Calendar, label: "Timeline", value: "18 Events", sub: "Ready" },
];

function ProgressBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setWidth(82), 200);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-center justify-between text-sm text-[#6B665E]">
        <span>Overall Progress</span>
        <span className="font-semibold text-[#3B342C]">{width}%</span>
      </div>
      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#F7F3EC]">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="h-full rounded-full bg-[#C8A96A]"
        />
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <motion.section
      initial="hidden"
       id="workflow"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"
    >
      {/* Ambient soft gold/cream glows — consistent with Hero/Footer */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E7DFD2]/40 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DFD2] bg-white px-4 py-1.5 text-sm font-medium text-[#C8A96A] shadow-sm">
            ✨ AI Dashboard Preview
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#3B342C] sm:text-4xl lg:text-5xl">
            Experience Your{" "}
            <span className="text-[#C8A96A]">
              Wedding Dashboard
            </span>{" "}
            Planning Dashboard
          </h2>
          <motion.p
            variants={headingVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B665E] sm:text-lg"
          >
            Manage every part of your wedding with one intelligent AI dashboard.
          </motion.p>
        </motion.div>

        {/* Main Layout: 60% left, 40% right */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* LEFT SIDE — 60% */}
          <motion.div
            variants={leftCardVariants}
            className="flex flex-col gap-8 lg:w-[60%]"
          >
            {/* Wedding Progress Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-[28px] border border-[#E7DFD2] bg-white p-8 shadow-lg shadow-[#3B342C]/5 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-semibold text-[#3B342C]">
                  Wedding Progress
                </h3>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="mt-6">
                <ProgressBar />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tasks.map((task) => (
                  <div
                    key={task}
                    className="flex items-center gap-2.5 rounded-2xl border border-[#E7DFD2] bg-[#F7F3EC] px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#C8A96A]" />
                    <span className="text-sm text-[#6B665E]">{task}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Calendar Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col gap-6 rounded-[28px] border border-[#E7DFD2] bg-white p-8 shadow-lg shadow-[#3B342C]/5 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)] sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#6B665E]">
                    Wedding Date
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#3B342C]">
                    14 February 2027
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-[#E7DFD2] sm:h-10 sm:w-px" />

              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B665E]">
                  Upcoming Event
                </p>
                <p className="mt-1 text-lg font-semibold text-[#3B342C]">
                  Venue Visit
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — 40% */}
          <motion.div
            variants={rightCardVariants}
            className="flex flex-col gap-8 lg:w-[40%]"
          >
            {/* AI Recommendations Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-[28px] border border-[#E7DFD2] bg-white p-8 shadow-lg shadow-[#3B342C]/5 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)]"
            >
              <h3 className="font-serif text-xl font-semibold text-[#3B342C]">
                AI Recommendations
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {recommendations.map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                      <Icon className="h-4.5 w-4.5 text-white" />
                    </div>
                    <span className="text-sm text-[#6B665E]">{title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Album Preview Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex-1 rounded-[28px] border border-[#E7DFD2] bg-white p-8 shadow-lg shadow-[#3B342C]/5 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)]"
            >
              <h3 className="font-serif text-xl font-semibold text-[#3B342C]">
                Album Preview
              </h3>

            
              <div className="grid grid-cols-2 gap-4">
  {dashboardImages.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl h-40 border border-[#E7DFD2]"
    >
      <img
        src={img}
        alt={`Wedding ${index + 1}`}
        className="w-full h-full object-cover transition duration-500 hover:scale-110"
      />
    </div>
  ))}
</div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
              >
                View Album
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          variants={bottomGridVariants}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {bottomStats.map(({ icon: Icon, label, value, sub }) => (
            <motion.div
              key={label}
              variants={bottomCardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex items-center gap-4 rounded-[28px] border border-[#E7DFD2] bg-white p-7 shadow-lg shadow-[#3B342C]/5 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.25)]"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B665E]">
                  {label}
                </p>
                <p className="mt-1 text-xl font-bold text-[#3B342C]">{value}</p>
                <p className="mt-0.5 text-xs text-[#6B665E]">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
