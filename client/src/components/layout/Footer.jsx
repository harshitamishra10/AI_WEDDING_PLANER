import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import wedding from "../../assets/images/wedding.jpg";
import engagement from "../../assets/images/engagement.jpg";
import reception from "../../assets/images/reception.jpg";
import haldi from "../../assets/images/haldi.jpg";
import mehndi from "../../assets/images/mehndi.jpeg";
import anniversary from "../../assets/images/anniversary.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const quickLinks = [
  "Home",
  "Features",
  "Workflow",
  "Gallery",
  "Testimonials",
  "Contact",
];

const aiServices = [
  "AI Wedding Timeline",
  "Album Generator",
  "Venue Suggestions",
  "Budget Planning",
  "Guest Management",
  "Video Planner",
];

const legalLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cookies Policy",
];
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] border-t border-[#E7DFD2]"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-20 h-80 w-80 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E7DFD2]/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Instagram Gallery */}

        <div className="mb-24">

          <p className="text-center uppercase tracking-[4px] text-[#C8A96A]">
            Wedding Moments
          </p>

          <h2 className="mt-3 text-center font-serif text-5xl text-[#3B342C]">
            Memories We Create
          </h2>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

            {[wedding, engagement, reception, haldi, mehndi, anniversary].map(
              (img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </motion.div>
              )
            )}

          </div>

        </div>

        {/* Footer Grid */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Logo & About */}

<motion.div variants={columnVariants} className="lg:col-span-2">

  <h2 className="font-serif text-4xl text-[#3B342C]">
    Wed<span className="text-[#C8A96A]">AI</span>
  </h2>

  <p className="mt-6 max-w-sm leading-8 text-[#6B665E]">
    Plan your dream wedding with Artificial Intelligence.
    From venue booking and guest management to invitations,
    timelines and unforgettable memories — everything in one place.
  </p>

  <div className="mt-8 flex gap-4">

    {socialLinks.map(({ icon: Icon, href }, index) => (

      <motion.a
        key={index}
        href={href}
        whileHover={{ y: -4 }}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#C8A96A] hover:text-white"
      >
        <Icon size={18} />
      </motion.a>

    ))}

  </div>

</motion.div>

{/* Quick Links */}

<motion.div variants={columnVariants}>

  <h3 className="font-semibold uppercase tracking-[3px] text-[#3B342C]">
    Quick Links
  </h3>

  <ul className="mt-8 space-y-4">

    {quickLinks.map((item) => (

      <li key={item}>

        <a
          href="#"
          className="text-[#6B665E] transition hover:text-[#C8A96A]"
        >
          {item}
        </a>

      </li>

    ))}

  </ul>

</motion.div>

{/* AI Services */}

<motion.div variants={columnVariants}>

  <h3 className="font-semibold uppercase tracking-[3px] text-[#3B342C]">
    AI Services
  </h3>

  <ul className="mt-8 space-y-4">

    {aiServices.map((item) => (

      <li
        key={item}
        className="flex items-center gap-2 text-[#6B665E]"
      >

        <ArrowRight
          size={16}
          className="text-[#C8A96A]"
        />

        {item}

      </li>

    ))}

  </ul>

</motion.div>

{/* Contact */}

<motion.div variants={columnVariants}>

  <h3 className="font-semibold uppercase tracking-[3px] text-[#3B342C]">
    Contact
  </h3>

  <div className="mt-8 space-y-5">

    <div className="flex items-center gap-3">

      <Mail className="text-[#C8A96A]" size={18} />

      <span className="text-[#6B665E]">
        support@wedai.com
      </span>

    </div>

    <div className="flex items-center gap-3">

      <Phone className="text-[#C8A96A]" size={18} />

      <span className="text-[#6B665E]">
        +91 98765 43210
      </span>

    </div>

    <div className="flex items-center gap-3">

      <MapPin className="text-[#C8A96A]" size={18} />

      <span className="text-[#6B665E]">
        New Delhi, India
      </span>

    </div>

  </div>

</motion.div>

</div>

        {/* Newsletter */}

        <motion.div
          variants={columnVariants}
          className="mt-20 rounded-[30px] border border-[#E7DFD2] bg-white p-10 shadow-lg"
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <p className="uppercase tracking-[4px] text-[#C8A96A]">
                Newsletter
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#3B342C]">
                Stay Inspired
              </h2>

              <p className="mt-3 max-w-xl text-[#6B665E]">
                Get wedding inspiration, AI planning tips and exclusive offers delivered directly to your inbox.
              </p>

            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-xl gap-4"
            >

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-[#E7DFD2] px-6 py-4 outline-none"
              />

              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-[#C8A96A] px-8 py-4 text-white transition hover:bg-[#B69254]"
              >

                {subscribed ? "Subscribed" : "Subscribe"}

                <Send size={18} />

              </button>

            </form>

          </div>

        </motion.div>

        {/* Divider */}

        <motion.div
          variants={columnVariants}
          className="mt-20 h-px w-full bg-[#E7DFD2]"
        />

        {/* Bottom Footer */}

        <motion.div
          variants={columnVariants}
          className="mt-8 flex flex-col items-center justify-between gap-5 lg:flex-row"
        >
          <p className="text-sm text-[#6B665E]">
            © 2026 <span className="font-semibold text-[#3B342C]">WedAI</span>.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            {legalLinks.map((item) => (

              <a
                key={item}
                href="#"
                className="text-sm text-[#6B665E] transition hover:text-[#C8A96A]"
              >
                {item}
              </a>

            ))}

          </div>

        </motion.div>

      </div>
    </motion.footer>
  );
}
