import { motion } from "framer-motion";

import left from "../../assets/images/left.jpg";
import center from "../../assets/images/center.jpg";
import right from "../../assets/images/right.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F3EC] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#F7F3EC] to-[#FAF7F2]"></div>

      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#EFD9C1]/40 blur-[130px]"></div>

      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#F7D6D0]/40 blur-[130px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Images */}
        <div className="grid grid-cols-3 gap-6">

          <img
            src={left}
            alt="Wedding"
            className="h-[520px] w-full rounded-md object-cover"
          />

          <img
            src={center}
            alt="Wedding"
            className="h-[520px] w-full rounded-md object-cover"
          />

          <img
            src={right}
            alt="Wedding"
            className="h-[520px] w-full rounded-md object-cover"
          />

        </div>

        {/* Floating Card */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative -mt-24 mx-auto max-w-4xl bg-white px-16 py-16 shadow-2xl"
        >

          <p className="text-center uppercase tracking-[5px] text-[#B88A44]">
            AI Powered Wedding Planner
          </p>

          <h1 className="mt-6 text-center font-serif text-6xl leading-tight text-[#3d3d3d]">

            Plan Your Dream
            <br />
            Wedding
            <br />
            with AI

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-gray-500">

            Plan your perfect wedding with AI. Manage guests, vendors,
            timelines, albums and every wedding detail from one beautiful
            dashboard.

          </p>

          <div className="mt-10 flex justify-center gap-6">

            <button className="rounded-full bg-[#C6A46B] px-8 py-3 text-white transition hover:bg-[#b48f52]">
              Get Started
            </button>

            <button className="rounded-full border border-[#C6A46B] px-8 py-3 text-[#C6A46B] transition hover:bg-[#C6A46B] hover:text-white">
              Learn More
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;