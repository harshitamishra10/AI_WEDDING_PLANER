import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import wedding from "../../assets/images/wedding.jpg";
import engagement from "../../assets/images/engagement.jpg";
import reception from "../../assets/images/reception.jpg";
import haldi from "../../assets/images/haldi.jpg";
import mehndi from "../../assets/images/mehndi.jpeg";
import anniversary from "../../assets/images/anniversary.jpg";

// const celebrations = [
//   {
//     id: 1,
//     title: "Wedding",
//     image:
//       "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
//     description:
//       "Complete AI-powered wedding planning from venue booking to invitation cards and guest management.",

//     services: [
//       "Venue Booking",
//       "AI Budget Planner",
//       "Guest Management",
//       "Invitation Generator",
//       "Wedding Timeline",
//       "Photo Album Generator",
//     ],
//   },

//   {
//     id: 2,
//     title: "Engagement",
//     image:
//       "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900",

//     description:
//       "Plan your engagement with elegant decorations, venue suggestions and AI recommendations.",

//     services: [
//       "Ring Ceremony",
//       "Decoration",
//       "Photography",
//       "Invitation Cards",
//       "Budget Planning",
//       "Guest List",
//     ],
//   },

//   {
//     id: 3,
//     title: "Reception",
//     image:
//       "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",

//     description:
//       "Elegant reception planning including catering, stage decoration and entertainment.",

//     services: [
//       "Stage Decoration",
//       "Music",
//       "Food",
//       "Photography",
//       "Live Gallery",
//       "Guest Seating",
//     ],
//   },

//   {
//     id: 4,
//     title: "Haldi",
//     image:
//       "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900",

//     description:
//       "Traditional Haldi ceremony with floral decoration and joyful celebrations.",

//     services: [
//       "Floral Decor",
//       "Music",
//       "Photography",
//       "Food",
//       "Guest Management",
//       "Timeline",
//     ],
//   },

//   {
//     id: 5,
//     title: "Mehendi",
//     image:
//       "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb8f?w=900",

//     description:
//       "Beautiful Mehendi celebration with artists, décor and entertainment.",

//     services: [
//       "Mehendi Artists",
//       "Music",
//       "Dance",
//       "Decoration",
//       "Photography",
//       "Invitation",
//     ],
//   },

//   {
//     id: 6,
//     title: "Anniversary",
//     image:
//       "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",

//     description:
//       "Celebrate your anniversary with personalized decorations and unforgettable memories.",

//     services: [
//       "Decoration",
//       "Cake",
//       "Dinner",
//       "Photography",
//       "Invitation",
//       "Music",
//     ],
//   },
// ];
// const celebrations = [
//   {
//     id: 1,
//     title: "Wedding",
//     image: wedding,
//     description: "Complete AI-powered wedding planning.",
//   },
//   {
//     id: 2,
//     title: "Engagement",
//     image: engagement,
//     description: "Beautiful engagement ceremony planning.",
//   },
//   {
//     id: 3,
//     title: "Reception",
//     image: reception,
//     description: "Elegant reception planning and management.",
//   },
//   {
//     id: 4,
//     title: "Haldi",
//     image: haldi,
//     description: "Traditional Haldi ceremony arrangements.",
//   },
//   {
//     id: 5,
//     title: "Mehndi",
//     image: mehndi,
//     description: "Creative Mehndi celebration planning.",
//   },
//   {
//     id: 6,
//     title: "Anniversary",
//     image: anniversary,
//     description: "Celebrate your special anniversary beautifully.",
//   },
// ];
const celebrations = [
  {
    id: 1,
    title: "Wedding",
    image: wedding,
    description: "Complete AI-powered wedding planning from venue booking to invitation cards and guest management.",
    services: [
      "Venue Booking",
      "AI Budget Planner",
      "Guest Management",
      "Invitation Generator",
      "Wedding Timeline",
      "Photo Album Generator",
    ],
  },
  {
    id: 2,
    title: "Engagement",
    image: engagement,
    description: "Beautiful engagement ceremony planning with elegant decorations and AI recommendations.",
    services: [
      "Ring Ceremony",
      "Decoration",
      "Photography",
      "Invitation Cards",
      "Budget Planning",
      "Guest List",
    ],
  },
  {
    id: 3,
    title: "Reception",
    image: reception,
    description: "Elegant reception planning including catering, stage decoration and entertainment.",
    services: [
      "Stage Decoration",
      "Music",
      "Food",
      "Photography",
      "Live Gallery",
      "Guest Seating",
    ],
  },
  {
    id: 4,
    title: "Haldi",
    image: haldi,
    description: "Traditional Haldi ceremony with floral decoration and joyful celebrations.",
    services: [
      "Floral Decor",
      "Music",
      "Photography",
      "Food",
      "Guest Management",
      "Timeline",
    ],
  },
  {
    id: 5,
    title: "Mehndi",
    image: mehndi,
    description: "Beautiful Mehndi celebration with artists, décor and entertainment.",
    services: [
      "Mehndi Artists",
      "Music",
      "Dance",
      "Decoration",
      "Photography",
      "Invitation",
    ],
  },
  {
    id: 6,
    title: "Anniversary",
    image: anniversary,
    description: "Celebrate your anniversary with personalized decorations and unforgettable memories.",
    services: [
      "Decoration",
      "Cake",
      "Dinner",
      "Photography",
      "Invitation",
      "Music",
    ],
  },
];
export default function Celebrations() {
  const [selected, setSelected] = useState(celebrations[0]);

  return (
    <section className="bg-[#F7F3EC] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#C8A96A]">
            OUR CELEBRATIONS
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#3B342C]">

            Every Love Story

            <span className="text-[#C8A96A]">
              {" "}
              Deserves Perfection
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B665E]">
            Discover beautifully crafted celebrations powered by AI and
            designed to make every moment unforgettable.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {celebrations.map((item) => (

            <motion.div

              whileHover={{ y: -8 }}
              key={item.id}
              onClick={() => setSelected(item)}
              className={`cursor-pointer overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-300

              ${
                selected.id === item.id
                  ? "ring-2 ring-[#C8A96A]"
                  : ""
              }`}

            >

              <img

                src={item.image}
                className="h-72 w-full object-cover"

              />

              <div className="p-7">

                <h3 className="font-serif text-2xl text-[#3B342C]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#6B665E]">

                  {item.description.substring(0,70)}...

                </p>

                <button className="mt-6 flex items-center gap-2 text-[#C8A96A] font-medium">

                  View Details

                  <ArrowRight size={18}/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>
                {/* Details Section */}

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-24 overflow-hidden rounded-[32px] border border-[#E7DFD2] bg-white shadow-xl"
          >
            <div className="grid lg:grid-cols-2">

              {/* Left Image */}

              <div className="relative">

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full min-h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              </div>

              {/* Right Content */}

              <div className="flex flex-col justify-center p-12">

                <p className="uppercase tracking-[5px] text-[#C8A96A]">
                  AI Wedding Planner
                </p>

                <h2 className="mt-4 font-serif text-5xl leading-tight text-[#3B342C]">
                  {selected.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#6B665E]">
                  {selected.description}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">

                  {selected.services.map((service) => (

                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-2xl bg-[#F7F3EC] p-4"
                    >

                      <CheckCircle
                        className="text-[#C8A96A]"
                        size={20}
                      />

                      <span className="text-[#3B342C]">
                        {service}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="mt-12 flex flex-wrap gap-5">

                  <button className="rounded-full bg-[#C8A96A] px-8 py-4 font-medium text-white transition hover:bg-[#B69254]">
                    Book {selected.title}
                  </button>

                  <button className="rounded-full border border-[#C8A96A] px-8 py-4 font-medium text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-white">
                    Explore More
                  </button>

                </div>

                {/* Stats */}

                <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#ECE6DA] pt-8">

                  <div>
                    <h3 className="text-3xl font-semibold text-[#C8A96A]">
                      250+
                    </h3>

                    <p className="mt-2 text-sm text-[#6B665E]">
                      Weddings Planned
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold text-[#C8A96A]">
                      98%
                    </h3>

                    <p className="mt-2 text-sm text-[#6B665E]">
                      Happy Couples
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold text-[#C8A96A]">
                      AI
                    </h3>

                    <p className="mt-2 text-sm text-[#6B665E]">
                      Smart Planning
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="rounded-[32px] border border-[#E7DFD2] bg-gradient-to-r from-[#FDFBF8] to-[#F7F3EC] p-14 text-center shadow-lg">

            <p className="uppercase tracking-[5px] text-[#C8A96A]">
              Let's Make Your Dream Come True
            </p>

            <h2 className="mt-5 font-serif text-5xl text-[#3B342C]">
              Start Planning Your
              <span className="text-[#C8A96A]"> Perfect Celebration</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B665E]">
              Our AI-powered wedding planner helps you organize every detail,
              from venue booking to guest management, invitations, timelines,
              and unforgettable memories.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <button className="rounded-full bg-[#C8A96A] px-10 py-4 text-white transition hover:bg-[#B69254]">
                Book Consultation
              </button>

              <button className="rounded-full border border-[#C8A96A] px-10 py-4 text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-white">
                View Packages
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}