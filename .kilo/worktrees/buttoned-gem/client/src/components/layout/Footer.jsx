// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //   Mail,
// // //   Phone,
// // //   MapPin,
// // //   Sparkles,
// // //   Send,
// // //   ArrowRight,
// // // } from "lucide-react";

// // // import {
// // //   FaFacebookF,
// // //   FaInstagram,
// // //   FaLinkedinIn,
// // //   FaTwitter,
// // //   FaYoutube,
// // // } from "react-icons/fa";

// // // const containerVariants = {
// // //   hidden: { opacity: 0, y: 60 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       duration: 0.8,
// // //       ease: "easeOut",
// // //       staggerChildren: 0.15,
// // //     },
// // //   },
// // // };

// // // const columnVariants = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.6, ease: "easeOut" },
// // //   },
// // // };

// // // const socialLinks = [
// // //   { icon: FaFacebookF, label: "Facebook", href: "#" },
// // //   { icon: FaInstagram, label: "Instagram", href: "#" },
// // //   { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
// // //   { icon: FaTwitter, label: "Twitter", href: "#" },
// // //   { icon: FaYoutube, label: "YouTube", href: "#" },
// // // ];

// // // const quickLinks = ["Home", "Features", "Workflow", "Gallery", "Testimonials", "Contact"];

// // // const aiServices = [
// // //   "AI Wedding Timeline",
// // //   "Album Layout Generator",
// // //   "Video Planning",
// // //   "Venue Suggestions",
// // //   "Budget Planning",
// // //   "Guest Management",
// // // ];

// // // const legalLinks = ["Privacy Policy", "Terms & Conditions", "Cookies Policy"];

// // // export default function Footer() {
// // //   const [email, setEmail] = useState("");
// // //   const [subscribed, setSubscribed] = useState(false);

// // //   const handleSubscribe = (e) => {
// // //     e.preventDefault();
// // //     if (!email) return;
// // //     setSubscribed(true);
// // //     setEmail("");
// // //     setTimeout(() => setSubscribed(false), 3000);
// // //   };

// // //   return (
// // //     <motion.footer
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.15 }}
// // //       variants={containerVariants}
// // //       className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#312E81] px-6 pt-16 pb-8 sm:px-10 lg:px-16"
// // //     >
// // //       {/* Ambient glow orbs */}
// // //       <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#7C3AED]/30 blur-[100px]" />
// // //       <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#EC4899]/25 blur-[100px]" />
// // //       <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/10 blur-[120px]" />

// // //       <div className="relative mx-auto max-w-7xl">
// // //         {/* Main Grid */}
// // //         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
// // //           {/* LEFT SECTION — Logo, tagline, socials */}
// // //           <motion.div variants={columnVariants} className="lg:col-span-1 sm:col-span-2">
// // //             <div className="flex items-center gap-2">
// // //               <span className="text-3xl">💍</span>
// // //               <h2 className="bg-gradient-to-r from-white via-white to-pink-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
// // //                 WedAI
// // //               </h2>
// // //             </div>
// // //             <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
// // //               Plan your dream wedding with the power of Artificial Intelligence.
// // //             </p>

// // //             <div className="mt-6 flex flex-wrap gap-3">
// // //               {socialLinks.map(({ icon: Icon, label, href }) => (
// // //                 <motion.a
// // //                   key={label}
// // //                   href={href}
// // //                   aria-label={label}
// // //                   whileHover={{ scale: 1.15, rotate: 8 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
// // //                   className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_0_rgba(124,58,237,0)] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
// // //                 >
// // //                   <Icon className="h-4 w-4 text-gray-300 transition-colors duration-300 group-hover:text-white" />
// // //                 </motion.a>
// // //               ))}
// // //             </div>
// // //           </motion.div>

// // //           {/* Quick Links */}
// // //           <motion.div variants={columnVariants}>
// // //             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
// // //               Quick Links
// // //             </h3>
// // //             <ul className="mt-5 space-y-3">
// // //               {quickLinks.map((link) => (
// // //                 <li key={link}>
// // //                   <motion.a
// // //                     href="#"
// // //                     whileHover={{ x: 6 }}
// // //                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // //                     className="inline-block text-sm text-gray-400 transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#EC4899] hover:to-[#7C3AED]"
// // //                   >
// // //                     {link}
// // //                   </motion.a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </motion.div>

// // //           {/* AI Services */}
// // //           <motion.div variants={columnVariants}>
// // //             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
// // //               AI Services
// // //             </h3>
// // //             <ul className="mt-5 space-y-3">
// // //               {aiServices.map((service) => (
// // //                 <li key={service}>
// // //                   <motion.a
// // //                     href="#"
// // //                     whileHover={{ x: 6 }}
// // //                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // //                     className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
// // //                   >
// // //                     <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#EC4899] transition-transform duration-300 group-hover:translate-x-1" />
// // //                     <span>{service}</span>
// // //                   </motion.a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </motion.div>

// // //           {/* Contact */}
// // //           <motion.div variants={columnVariants}>
// // //             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
// // //               Contact
// // //             </h3>
// // //             <ul className="mt-5 space-y-4">
// // //               <li className="flex items-center gap-3">
// // //                 <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
// // //                   <Mail className="h-3.5 w-3.5 text-[#FACC15]" />
// // //                 </span>
// // //                 <a
// // //                   href="mailto:support@wedai.com"
// // //                   className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
// // //                 >
// // //                   support@wedai.com
// // //                 </a>
// // //               </li>
// // //               <li className="flex items-center gap-3">
// // //                 <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
// // //                   <Phone className="h-3.5 w-3.5 text-[#FACC15]" />
// // //                 </span>
// // //                 <a
// // //                   href="tel:+919876543210"
// // //                   className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
// // //                 >
// // //                   +91 9876543210
// // //                 </a>
// // //               </li>
// // //               <li className="flex items-center gap-3">
// // //                 <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
// // //                   <MapPin className="h-3.5 w-3.5 text-[#FACC15]" />
// // //                 </span>
// // //                 <span className="text-sm text-gray-400">New Delhi, India</span>
// // //               </li>
// // //             </ul>
// // //           </motion.div>

// // //           {/* Newsletter */}
// // //           <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-1">
// // //             <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white">
// // //               <Sparkles className="h-3.5 w-3.5 text-[#FACC15]" />
// // //               Stay Updated
// // //             </h3>
// // //             <p className="mt-5 text-sm text-gray-400">
// // //               Get AI wedding tips and inspiration in your inbox.
// // //             </p>
// // //             <form onSubmit={handleSubscribe} className="mt-4">
// // //               <div className="flex flex-col gap-3">
// // //                 <input
// // //                   type="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   placeholder="Enter your email"
// // //                   className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 backdrop-blur-md outline-none transition-all duration-300 focus:border-[#EC4899]/50 focus:shadow-[0_0_20px_rgba(236,72,153,0.35)]"
// // //                 />
// // //                 <motion.button
// // //                   type="submit"
// // //                   whileHover={{ scale: 1.03 }}
// // //                   whileTap={{ scale: 0.97 }}
// // //                   className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EC4899] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
// // //                 >
// // //                   {subscribed ? "Subscribed!" : "Subscribe"}
// // //                   <Send className="h-3.5 w-3.5" />
// // //                 </motion.button>
// // //               </div>
// // //             </form>
// // //           </motion.div>
// // //         </div>

// // //         {/* Divider */}
// // //         <motion.div
// // //           variants={columnVariants}
// // //           className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
// // //         />

// // //         {/* Bottom Bar */}
// // //         <motion.div
// // //           variants={columnVariants}
// // //           className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"
// // //         >
// // //           <p className="text-xs text-gray-500">
// // //             © 2026 WedAI. All rights reserved.
// // //           </p>
// // //           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
// // //             {legalLinks.map((link) => (
// // //               <a
// // //                 key={link}
// // //                 href="#"
// // //                 className="text-xs text-gray-500 transition-colors duration-300 hover:text-white"
// // //               >
// // //                 {link}
// // //               </a>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </motion.footer>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Sparkles,
// //   Send,
// //   ArrowRight,
// // } from "lucide-react";

// // import {
// //   FaFacebookF,
// //   FaInstagram,
// //   FaLinkedinIn,
// //   FaTwitter,
// //   FaYoutube,
// // } from "react-icons/fa";

// // import wedding from "../../assets/images/wedding.jpg";
// // import engagement from "../../assets/images/engagement.jpg";
// // import reception from "../../assets/images/reception.jpg";
// // import haldi from "../../assets/images/haldi.jpg";
// // import mehndi from "../../assets/images/mehndi.jpeg";
// // import anniversary from "../../assets/images/anniversary.jpg";

// // {/* Wedding Gallery */}

// // <div className="mb-24">

// //   <h2 className="mb-14 text-center font-serif text-5xl text-[#3B342C]">
// //     Wedding Moments
// //   </h2>

// //   <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">

// //     {[wedding, engagement, reception, haldi, mehndi, anniversary].map(
// //       (img, index) => (
// //         <div
// //           key={index}
// //           className="group overflow-hidden rounded-2xl"
// //         >
// //           <img
// //             src={img}
// //             alt=""
// //             className="h-60 w-full object-cover duration-500 group-hover:scale-110"
// //           />
// //         </div>
// //       )
// //     )}

// //   </div>

// // </div>

// // const containerVariants = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.8,
// //       ease: "easeOut",
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // const columnVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // };

// // const socialLinks = [
// //   { icon: FaFacebookF, label: "Facebook", href: "#" },
// //   { icon: FaInstagram, label: "Instagram", href: "#" },
// //   { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
// //   { icon: FaTwitter, label: "Twitter", href: "#" },
// //   { icon: FaYoutube, label: "YouTube", href: "#" },
// // ];

// // const quickLinks = ["Home", "Features", "Workflow", "Gallery", "Testimonials", "Contact"];

// // const aiServices = [
// //   "AI Wedding Timeline",
// //   "Album Layout Generator",
// //   "Video Planning",
// //   "Venue Suggestions",
// //   "Budget Planning",
// //   "Guest Management",
// // ];

// // const legalLinks = ["Privacy Policy", "Terms & Conditions", "Cookies Policy"];

// // export default function Footer() {
// //   const [email, setEmail] = useState("");
// //   const [subscribed, setSubscribed] = useState(false);

// //   const handleSubscribe = (e) => {
// //     e.preventDefault();
// //     if (!email) return;
// //     setSubscribed(true);
// //     setEmail("");
// //     setTimeout(() => setSubscribed(false), 3000);
// //   };

// //   return (
// //     <motion.footer
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.15 }}
// //       variants={containerVariants}
// //       className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] px-6 pt-16 pb-8 sm:px-10 lg:px-16 border-t border-[#E7DFD2]"
// //     >
// //       {/* Ambient soft gold/cream glows */}
// //       <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#C8A96A]/15 blur-[100px]" />
// //       <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-[100px]" />
// //       <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7DFD2]/30 blur-[120px]" />

// //       <div className="relative mx-auto max-w-7xl">
// //         {/* Main Grid */}
// //         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
// //           {/* LEFT SECTION — Logo, tagline, socials */}
// //           <motion.div variants={columnVariants} className="lg:col-span-1 sm:col-span-2">
// //             <div className="flex items-center gap-2">
// //               <span className="text-3xl">💍</span>
// //               <h2 className="font-serif text-2xl font-bold tracking-tight text-[#3B342C]">
// //                 WedAI
// //               </h2>
// //             </div>
// //             <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6B665E]">
// //               Plan your dream wedding with the power of Artificial Intelligence.
// //             </p>

// //             <div className="mt-6 flex flex-wrap gap-3">
// //               {socialLinks.map(({ icon: Icon, label, href }) => (
// //                 <motion.a
// //                   key={label}
// //                   href={href}
// //                   aria-label={label}
// //                   whileHover={{ scale: 1.15, rotate: 8 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
// //                   className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DFD2] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(200,169,106,0.35)]"
// //                 >
// //                   <Icon className="h-4 w-4 text-[#6B665E] transition-colors duration-300 group-hover:text-[#C8A96A]" />
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* Quick Links */}
// //           <motion.div variants={columnVariants}>
// //             <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3B342C]">
// //               Quick Links
// //             </h3>
// //             <ul className="mt-5 space-y-3">
// //               {quickLinks.map((link) => (
// //                 <li key={link}>
// //                   <motion.a
// //                     href="#"
// //                     whileHover={{ x: 6 }}
// //                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //                     className="inline-block text-sm text-[#6B665E] transition-colors duration-300 hover:text-[#C8A96A]"
// //                   >
// //                     {link}
// //                   </motion.a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* AI Services */}
// //           <motion.div variants={columnVariants}>
// //             <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3B342C]">
// //               AI Services
// //             </h3>
// //             <ul className="mt-5 space-y-3">
// //               {aiServices.map((service) => (
// //                 <li key={service}>
// //                   <motion.a
// //                     href="#"
// //                     whileHover={{ x: 6 }}
// //                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //                     className="group flex items-center gap-2 text-sm text-[#6B665E] transition-colors duration-300 hover:text-[#3B342C]"
// //                   >
// //                     <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#C8A96A] transition-transform duration-300 group-hover:translate-x-1" />
// //                     <span>{service}</span>
// //                   </motion.a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Contact */}
// //           <motion.div variants={columnVariants}>
// //             <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3B342C]">
// //               Contact
// //             </h3>
// //             <ul className="mt-5 space-y-4">
// //               <li className="flex items-center gap-3">
// //                 <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E7DFD2] bg-white shadow-sm">
// //                   <Mail className="h-3.5 w-3.5 text-[#C8A96A]" />
// //                 </span>
// //                 <a
// //                   href="mailto:support@wedai.com"
// //                   className="text-sm text-[#6B665E] transition-colors duration-300 hover:text-[#3B342C]"
// //                 >
// //                   support@wedai.com
// //                 </a>
// //               </li>
// //               <li className="flex items-center gap-3">
// //                 <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E7DFD2] bg-white shadow-sm">
// //                   <Phone className="h-3.5 w-3.5 text-[#C8A96A]" />
// //                 </span>
// //                 <a
// //                   href="tel:+919876543210"
// //                   className="text-sm text-[#6B665E] transition-colors duration-300 hover:text-[#3B342C]"
// //                 >
// //                   +91 9876543210
// //                 </a>
// //               </li>
// //               <li className="flex items-center gap-3">
// //                 <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E7DFD2] bg-white shadow-sm">
// //                   <MapPin className="h-3.5 w-3.5 text-[#C8A96A]" />
// //                 </span>
// //                 <span className="text-sm text-[#6B665E]">New Delhi, India</span>
// //               </li>
// //             </ul>
// //           </motion.div>

// //           {/* Newsletter */}
// //           <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-1">
// //             <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#3B342C]">
// //               <Sparkles className="h-3.5 w-3.5 text-[#C8A96A]" />
// //               Stay Updated
// //             </h3>
// //             <p className="mt-5 text-sm text-[#6B665E]">
// //               Get AI wedding tips and inspiration in your inbox.
// //             </p>
// //             <form onSubmit={handleSubscribe} className="mt-4">
// //               <div className="flex flex-col gap-3">
// //                 <input
// //                   type="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   placeholder="Enter your email"
// //                   className="w-full rounded-full border border-[#E7DFD2] bg-white px-4 py-2.5 text-sm text-[#3B342C] placeholder-[#6B665E]/60 outline-none transition-all duration-300 focus:border-[#C8A96A]/60 focus:shadow-[0_0_15px_rgba(200,169,106,0.25)]"
// //                 />
// //                 <motion.button
// //                   type="submit"
// //                   whileHover={{ scale: 1.03 }}
// //                   whileTap={{ scale: 0.97 }}
// //                   className="flex items-center justify-center gap-2 rounded-full bg-[#C8A96A] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(200,169,106,0.5)]"
// //                 >
// //                   {subscribed ? "Subscribed!" : "Subscribe"}
// //                   <Send className="h-3.5 w-3.5" />
// //                 </motion.button>
// //               </div>
// //             </form>
// //           </motion.div>
// //         </div>

// //         {/* Divider */}
// //         <motion.div
// //           variants={columnVariants}
// //           className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#E7DFD2] to-transparent"
// //         />

// //         {/* Bottom Bar */}
// //         <motion.div
// //           variants={columnVariants}
// //           className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"
// //         >
// //           <p className="text-xs text-[#6B665E]">
// //             © 2026 WedAI. All rights reserved.
// //           </p>
// //           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
// //             {legalLinks.map((link) => (
// //               <a
// //                 key={link}
// //                 href="#"
// //                 className="text-xs text-[#6B665E] transition-colors duration-300 hover:text-[#3B342C]"
// //               >
// //                 {link}
// //               </a>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </motion.footer>
// //   );
// // }
//  import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Sparkles,
//   Send,
//   ArrowRight,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// import wedding from "../../assets/images/wedding.jpg";
// import engagement from "../../assets/images/engagement.jpg";
// import reception from "../../assets/images/reception.jpg";
// import haldi from "../../assets/images/haldi.jpg";
// import mehndi from "../../assets/images/mehndi.jpeg";
// import anniversary from "../../assets/images/anniversary.jpg";

// const containerVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.15,
//     },
//   },
// };

// const columnVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const socialLinks = [
//   { icon: FaFacebookF, href: "#" },
//   { icon: FaInstagram, href: "#" },
//   { icon: FaLinkedinIn, href: "#" },
//   { icon: FaTwitter, href: "#" },
//   { icon: FaYoutube, href: "#" },
// ];

// const quickLinks = [
//   "Home",
//   "Features",
//   "Workflow",
//   "Gallery",
//   "Testimonials",
//   "Contact",
// ];

// const aiServices = [
//   "AI Wedding Timeline",
//   "Album Generator",
//   "Venue Suggestions",
//   "Budget Planning",
//   "Guest Management",
//   "Video Planner",
// ];

// const legalLinks = [
//   "Privacy Policy",
//   "Terms & Conditions",
//   "Cookies Policy",
// ];
// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();

//     if (!email) return;

//     setSubscribed(true);
//     setEmail("");

//     setTimeout(() => {
//       setSubscribed(false);
//     }, 3000);
//   };

//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] border-t border-[#E7DFD2]"
//     >
//       {/* Background Glow */}
//       <div className="absolute -top-20 left-20 h-80 w-80 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E7DFD2]/40 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-6 py-20">

//         {/* Instagram Gallery */}

//         <div className="mb-24">

//           <p className="text-center uppercase tracking-[4px] text-[#C8A96A]">
//             Wedding Moments
//           </p>

//           <h2 className="mt-3 text-center font-serif text-5xl text-[#3B342C]">
//             Memories We Create
//           </h2>

//           <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

//             {[wedding, engagement, reception, haldi, mehndi, anniversary].map(
//               (img, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -8 }}
//                   className="group overflow-hidden rounded-3xl"
//                 >
//                   <img
//                     src={img}
//                     alt=""
//                     className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
//                   />
//                 </motion.div>
//               )
//             )}

//           </div>

//         </div>

//         {/* Footer Grid */}

//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
//         {/* Logo & About */}

// <motion.div variants={columnVariants} className="lg:col-span-2">

//   <h2 className="font-serif text-4xl text-[#3B342C]">
//     Wed<span className="text-[#C8A96A]">AI</span>
//   </h2>

//   <p className="mt-6 max-w-sm leading-8 text-[#6B665E]">
//     Plan your dream wedding with Artificial Intelligence.
//     From venue booking and guest management to invitations,
//     timelines and unforgettable memories — everything in one place.
//   </p>

//   <div className="mt-8 flex gap-4">

//     {socialLinks.map(({ icon: Icon, href }, index) => (

//       <motion.a
//         key={index}
//         href={href}
//         whileHover={{ y: -4 }}
//         className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#C8A96A] hover:text-white"
//       >
//         <Icon size={18} />
//       </motion.a>

//     ))}

//   </div>

// </motion.div>

// {/* Quick Links */}

// <motion.div variants={columnVariants}>

//   <h3 className="font-semibold uppercase tracking-[3px] text-[#3B342C]">
//     Quick Links
//   </h3>

//   <ul className="mt-8 space-y-4">

//     {quickLinks.map((item) => (

//       <li key={item}>

//         <a
//           href="#"
//           className="text-[#6B665E] transition hover:text-[#C8A96A]"
//         >
//           {item}
//         </a>

//       </li>

//     ))}

//   </ul>

// </motion.div>

// {/* AI Services */}

// <motion.div variants={columnVariants}>

//   <h3 className="font-semibold uppercase tracking-[3px] text-[#3B342C]">
//     AI Services
//   </h3>

//   <ul className="mt-8 space-y-4">

//     {aiServices.map((item) => (

//       <li
//         key={item}
//         className="flex items-center gap-2 text-[#6B665E]"
//       >

//         <ArrowRight
//           size={16}
//           className="text-[#C8A96A]"
//         />

//         {item}

//       </li>

//     ))}

//   </ul>

// </motion.div>

// {/* Contact */}
// {/* 
// <motion.div variants={columnVariants}>

//   <h3 className="font-semibold uppercase tracking-[3px] text-[#3B342C]">
//     Contact
//   </h3>

//   <div className="mt-8 space-y-5">

//     <div className="flex items-center gap-3">

//       <Mail className="text-[#C8A96A]" size={18} />

//       <span className="text-[#6B665E]">
//         support@wedai.com
//       </span>

//     </div>

//     <div className="flex items-center gap-3">

//       <Phone className="text-[#C8A96A]" size={18} />

//       <span className="text-[#6B665E]">
//         +91 98765 43210
//       </span>

//     </div>

//     <div className="flex items-center gap-3">

//       <MapPin className="text-[#C8A96A]" size={18} />

//       <span className="text-[#6B665E]">
//         New Delhi, India
//       </span>

//     </div>

//   </div>

// </motion.div>

// </div> */}
// <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

//   {/* Logo */}
//   <motion.div>
//     ...
//   </motion.div>

//   {/* Quick Links */}
//   <motion.div>
//     ...
//   </motion.div>

//   {/* AI Services */}
//   <motion.div>
//     ...
//   </motion.div>

//   {/* Contact */}
//   <motion.div>
//     ...
//   </motion.div>

// </div>   {/* <-- This closes the grid */}

// {/* Newsletter */}
// <motion.div>
//   ...
// </motion.div>
// {/* Newsletter */}

// <motion.div
//   variants={columnVariants}
//   className="mt-20 rounded-[30px] border border-[#E7DFD2] bg-white p-10 shadow-lg"
// >

//   <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

//     <div>

//       <p className="uppercase tracking-[4px] text-[#C8A96A]">
//         Newsletter
//       </p>

//       <h2 className="mt-3 font-serif text-4xl text-[#3B342C]">
//         Stay Inspired
//       </h2>

//       <p className="mt-3 max-w-xl text-[#6B665E]">
//         Get wedding inspiration, AI planning tips and exclusive offers delivered directly to your inbox.
//       </p>

//     </div>

//     <form
//       onSubmit={handleSubscribe}
//       className="flex w-full max-w-xl gap-4"
//     >

//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         className="flex-1 rounded-full border border-[#E7DFD2] px-6 py-4 outline-none"
//       />

//       <button
//         type="submit"
//         className="flex items-center gap-2 rounded-full bg-[#C8A96A] px-8 py-4 text-white transition hover:bg-[#B69254]"
//       >

//         {subscribed ? "Subscribed" : "Subscribe"}

//         <Send size={18} />

//       </button>

//     </form>

//   </div>

// </motion.div>
//         {/* Divider */}

//         <motion.div
//           variants={columnVariants}
//           className="mt-20 h-px w-full bg-[#E7DFD2]"
//         />

//         {/* Bottom Footer */}

//         <motion.div
//           variants={columnVariants}
//           className="mt-8 flex flex-col items-center justify-between gap-5 lg:flex-row"
//         >
//           <p className="text-sm text-[#6B665E]">
//             © 2026 <span className="font-semibold text-[#3B342C]">WedAI</span>.
//             All Rights Reserved.
//           </p>

//           <div className="flex flex-wrap items-center gap-6">

//             {legalLinks.map((item) => (

//               <a
//                 key={item}
//                 href="#"
//                 className="text-sm text-[#6B665E] transition hover:text-[#C8A96A]"
//               >
//                 {item}
//               </a>

//             ))}

//           </div>

//         </motion.div>

//       </div>
//     </motion.footer>
//   );
// }
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
