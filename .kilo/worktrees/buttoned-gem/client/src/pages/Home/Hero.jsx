// import { motion } from "framer-motion";
// //import heroBg from "../../assets/images/Hero/weddingVenue.jpg";
// import left from "../../assets/images/left.jpg";
// import center from "../../assets/images/center.jpg";
// import right from "../../assets/images/right.jpg";

// const Hero = () => {
//   return (
//     <section
//   id="home"
//   className="relative min-h-screen bg-[#F7F3EC] overflow-hidden"
// >
    
//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black/50"></div> */}
//       <div className="absolute inset-0 bg-white/30"></div>

// <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/70 to-transparent"></div>

// <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#EFD9C1]/40 blur-[130px]"></div>

// <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F7D6D0]/40 blur-[130px]"></div>
// {/* Content */}
// <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-8">
//       {/* Content */}
//       {/* <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center"> */}
//       {/* <div className="absolute inset-0 bg-white/30"></div>

// <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/70 to-transparent"></div>

// <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#EFD9C1]/40 blur-[130px]"></div>

// <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F7D6D0]/40 blur-[130px]"></div> */}

//         {/* <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-2xl text-white" */}
//           {/* <motion.div
//   initial={{
//     opacity: 0,
//     x: -100,
//     filter: "blur(15px)",
//   }}
//   animate={{
//     opacity: 1,
//     x: 0,
//     filter: "blur(0px)",
//   }}
//   transition={{
//     duration: 1.5,
//     ease: "easeOut",
//   }}
//   className="max-w-xl"
// >

// <p className="mb-5 uppercase tracking-[6px] text-[#B88A44] font-medium">
// AI Powered Wedding Planning
// </p>

// <h1 className="text-6xl font-serif font-semibold leading-tight text-[#1F2937]">
// Plan Your
// <br />
// Dream Wedding
// <br />
// with AI
// </h1>

//           <p className="mt-8 text-lg leading-8 text-gray-600">
//             Plan your perfect wedding with the power of AI. Get personalized timelines, stunning album layouts, intelligent video planning, and smart recommendations—all designed to match your style. Save time, reduce stress, and enjoy a seamless wedding planning experience from start to finish.
//           </p>


//           <div className="mt-10 flex gap-5">
//             <button className="px-8 py-4 rounded-full bg-[#C8A96A] hover:bg-[#b8934c] transition">
//               Get Started
//             </button>

//             <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-[#C8A96A] hover:text-white transition">
//               Learn More
//             </button>
//           </div>
//         </motion.div> */}
//         <>
//   {/* Images */}
//   <div className="mx-auto mt-28 flex max-w-7xl gap-6 px-6">

//     <img
//       src={left}
//       className="h-[520px] w-1/3 object-cover"
//       alt="Left Wedding"
//     />

//     <img
//       src={center}
//       className="h-[520px] w-1/3 object-cover"
//       alt="Center Wedding"
//     />

//     <img
//       src={right}
//       className="h-[520px] w-1/3 object-cover"
//       alt="Right Wedding"
//     />

//   </div>

//   {/* Floating Card */}

//   <motion.div
//     initial={{ opacity: 0, y: 80 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1 }}
//     className="absolute left-1/2 top-[390px] -translate-x-1/2 bg-white px-24 py-20 shadow-2xl"
//   >

//     <p className="uppercase tracking-[5px] text-[#B88A44] text-center">
//       AI Powered Wedding Planner
//     </p>

//     <h1 className="mt-6 text-center text-6xl font-serif leading-tight text-[#3f3d36]">

//       Plan Your Dream
//       <br />
//       Wedding
//       <br />
//       with AI

//     </h1>

//     <div className="mt-10 flex justify-center">

//       <button className="border-b border-[#C8A96A] pb-2 uppercase tracking-[3px]">
//         Get Started
//       </button>

//     </div>

//   </motion.div>
// </>

//       </div>
//     </section>
//   );
// };

// export default Hero;
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