import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Users,
  CalendarHeart,
  CheckCircle2,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Static data                                                         */
/* ------------------------------------------------------------------ */


const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@wedai.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Office", value: "New Delhi, India" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat, 10AM – 7PM" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];
const weddingTypes = [
  "Destination Wedding",
  "Traditional Wedding",
  "Royal Wedding",
  "Beach Wedding",
  "Garden Wedding",
  "Custom",
];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  weddingDate: "",
  location: "",
  guestCount: "",
  weddingType: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/* Animation variants                                                  */
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

const leftCardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/* Reusable input wrapper                                              */
/* ------------------------------------------------------------------ */

function FormField({ label, error, children }) {
  return (
    <motion.div variants={fieldVariants} className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#3B342C]">{label}</label>
      {children}
      {error && <span className="text-xs text-[#B3564A]">{error}</span>}
    </motion.div>
  );
}

const inputBaseClass =
  "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[#3B342C] placeholder-[#6B665E]/60 outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(200,169,106,0.15)]";

/* ------------------------------------------------------------------ */
/* Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.weddingDate) newErrors.weddingDate = "Wedding date is required.";
    if (!formData.location.trim()) newErrors.location = "Wedding location is required.";
    if (!formData.guestCount.trim()) newErrors.guestCount = "Guest count is required.";
    if (!formData.weddingType) newErrors.weddingType = "Please select a wedding type.";
    if (!formData.message.trim()) newErrors.message = "Please add a short message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7F3EC] via-[#FBF8F2] to-[#F7F3EC] py-28"
    >
      {/* Ambient gold glow blur circles */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E7DFD2]/40 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7DFD2] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96A] shadow-sm">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#3B342C] sm:text-4xl lg:text-5xl">
            Contact Our{" "}
            <span className="text-[#C8A96A]">Wedding Experts</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B665E] sm:text-lg">
            Have questions or need personalized wedding planning assistance?
            Our team is here to help you create your perfect celebration.
          </p>
        </motion.div>

        {/* Main Layout: 40% left, 60% right */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* LEFT SIDE — Contact Info Card (40%) */}
          <motion.div
            variants={leftCardVariants}
            className="flex flex-col lg:w-[40%]"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#E7DFD2] bg-white/70 p-8 shadow-lg shadow-[#3B342C]/5 backdrop-blur-xl sm:p-10"
            >
              {/* Soft glowing background */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#C8A96A]/15 blur-[80px]" />

              {/* Floating decoration */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-white/60"
              >
                <Sparkles className="h-5 w-5 text-[#C8A96A]" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-[#3B342C]">
                  Let's Talk Weddings
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B665E]">
                  Reach out anytime — our wedding experts typically respond
                  within a few hours.
                </p>

                {/* Contact details */}
                <div className="mt-8 flex flex-col gap-5">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30">
                        <Icon className="h-4.5 w-4.5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#6B665E]">
                          {label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-[#3B342C]">
                          {value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mt-8 h-px w-full bg-[#E7DFD2]" />

                {/* Social links */}
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-wider text-[#6B665E]">
                    Follow Us
                  </p>
                  <div className="mt-4 flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        aria-label={label}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DFD2] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(200,169,106,0.35)]"
                      >
                        <Icon className="h-4 w-4 text-[#6B665E] transition-colors duration-300 hover:text-[#C8A96A]" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — Contact Form (60%) */}
          <motion.div variants={rightCardVariants} className="flex flex-col lg:w-[60%]">
            <div className="relative overflow-hidden rounded-[30px] border border-[#E7DFD2] bg-white p-8 shadow-lg shadow-[#3B342C]/5 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* -------------------- Success State -------------------- */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96A] shadow-md shadow-[#C8A96A]/30"
                    >
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-[#3B342C]">
                      Thank You!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6B665E]">
                      Thank you! Our wedding planner will contact you soon.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleReset}
                      className="mt-8 rounded-full border border-[#E7DFD2] bg-white px-6 py-3 text-sm font-semibold text-[#3B342C] shadow-sm transition-colors duration-300 hover:border-[#C8A96A]/40 hover:text-[#C8A96A]"
                    >
                      Send Another Inquiry
                    </motion.button>
                  </motion.div>
                ) : (
                  /* -------------------- Form State -------------------- */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6"
                  >
                    <motion.div
                      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                      {/* Full Name */}
                      <FormField label="Full Name" error={errors.fullName}>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("fullName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Aarav & Siya"
                          className={`${inputBaseClass} ${
                            errors.fullName
                              ? "border-[#B3564A]/60"
                              : focusedField === "fullName"
                              ? "border-[#C8A96A]"
                              : "border-[#E7DFD2]"
                          }`}
                        />
                      </FormField>

                      {/* Email */}
                      <FormField label="Email Address" error={errors.email}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="you@example.com"
                          className={`${inputBaseClass} ${
                            errors.email
                              ? "border-[#B3564A]/60"
                              : focusedField === "email"
                              ? "border-[#C8A96A]"
                              : "border-[#E7DFD2]"
                          }`}
                        />
                      </FormField>

                      {/* Phone */}
                      <FormField label="Phone Number" error={errors.phone}>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+91 98765 43210"
                          className={`${inputBaseClass} ${
                            errors.phone
                              ? "border-[#B3564A]/60"
                              : focusedField === "phone"
                              ? "border-[#C8A96A]"
                              : "border-[#E7DFD2]"
                          }`}
                        />
                      </FormField>

                      {/* Wedding Date */}
                      <FormField label="Wedding Date" error={errors.weddingDate}>
                        <input
                          type="date"
                          name="weddingDate"
                          value={formData.weddingDate}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("weddingDate")}
                          onBlur={() => setFocusedField(null)}
                          className={`${inputBaseClass} ${
                            errors.weddingDate
                              ? "border-[#B3564A]/60"
                              : focusedField === "weddingDate"
                              ? "border-[#C8A96A]"
                              : "border-[#E7DFD2]"
                          }`}
                        />
                      </FormField>

                      {/* Wedding Location */}
                      <FormField label="Wedding Location" error={errors.location}>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("location")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Jaipur, India"
                          className={`${inputBaseClass} ${
                            errors.location
                              ? "border-[#B3564A]/60"
                              : focusedField === "location"
                              ? "border-[#C8A96A]"
                              : "border-[#E7DFD2]"
                          }`}
                        />
                      </FormField>

                      {/* Guest Count */}
                      <FormField label="Guest Count" error={errors.guestCount}>
                        <div className="relative">
                          <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B665E]" />
                          <input
                            type="number"
                            min="1"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("guestCount")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="e.g. 250"
                            className={`${inputBaseClass} pl-11 ${
                              errors.guestCount
                                ? "border-[#B3564A]/60"
                                : focusedField === "guestCount"
                                ? "border-[#C8A96A]"
                                : "border-[#E7DFD2]"
                            }`}
                          />
                        </div>
                      </FormField>
                    </motion.div>

                    {/* Wedding Type */}
                    <FormField label="Wedding Type" error={errors.weddingType}>
                      <div className="relative">
                        <CalendarHeart className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B665E]" />
                        <select
                          name="weddingType"
                          value={formData.weddingType}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("weddingType")}
                          onBlur={() => setFocusedField(null)}
                          className={`${inputBaseClass} appearance-none pl-11 ${
                            errors.weddingType
                              ? "border-[#B3564A]/60"
                              : focusedField === "weddingType"
                              ? "border-[#C8A96A]"
                              : "border-[#E7DFD2]"
                          }`}
                        >
                          <option value="">Select wedding type</option>
                          {weddingTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </FormField>

                    {/* Message */}
                    <FormField label="Message" error={errors.message}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        placeholder="Tell us about your dream wedding..."
                        className={`${inputBaseClass} resize-none ${
                          errors.message
                            ? "border-[#B3564A]/60"
                            : focusedField === "message"
                            ? "border-[#C8A96A]"
                            : "border-[#E7DFD2]"
                        }`}
                      />
                    </FormField>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#C8A96A] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-[#C8A96A]/30 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(200,169,106,0.55)] sm:w-auto sm:self-start"
                    >
                      Send Inquiry
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
