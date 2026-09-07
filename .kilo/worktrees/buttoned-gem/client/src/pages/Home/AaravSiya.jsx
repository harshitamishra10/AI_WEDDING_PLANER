import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Calendar, Users } from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const testimonials = [
  {
    id: 1,
    name: "Aarav & Siya",
    location: "Jaipur, India",
    date: "February 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJHW33oIyRqXBYeOzjMRQmOx2uUCjWDmEqMuBRmDxj3qUFXOIE1xXUbjx&s=10",
    gallery: [
      "https://www.shaadidukaan.com/vogue/wp-content/uploads/2025/04/%F0%9F%8C%9F-A-Moment-of-Serenity-%F0%9F%8C%9F.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0IbSSsqE71F_HbtSwmHq-2b5Ze57v8EcinTNfrK3KytPzpBsgoYdeuqM&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzkTRZkXom_gbN91STujJmVKKIDiiGWgkS8UEjqq7FNxvATdnTYP2t9Wn&s=10",
    ],
    story:
      "WedAI made our wedding planning effortless. From selecting the venue to managing guests and vendors, every step was beautifully organized.",
    review:
      "The AI planner, guest management and budget tracker saved us so much time. Everything felt stress-free and magical.",
    venue: "Fairmont Jaipur",
    guests: "320 Guests",
    planner: "Priya Sharma",
  },
  {
  id: 2,
  name: "Rohan & Ananya",
  location: "Goa, India",
  date: "December 2025",
  image: "https://img.magnific.com/premium-photo/young-couple-love-beach-february-14-st-valentine-s-day-sunset-goa-india-vacation-trip-travel-new-year-tropical-country-freedom-concept_175356-2737.jpg",
  gallery: [
    "https://travools.com/images/trip/1633081112_6156d718d9f09_banner.jfif",
    "https://i.pinimg.com/236x/47/ea/84/47ea84531da247f19d2faaab27a4103a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRJzb-HfDcTmapfUrXNRCGXj3MonQcAtTsDOZ2olbayw9x3E1fyDBFxyr&s=10",
  ],
  story:
    "WedAI made our beach wedding in Goa completely stress-free. Every event was perfectly planned and our guests had an amazing experience.",
  review:
    "The AI Timeline and Guest Management features were outstanding. We enjoyed every moment without worrying about the arrangements.",
  venue: "Taj Exotica Goa",
  guests: "250 Guests",
  planner: "Anjali Mehta",
},

{
  id: 3,
  name: "Kabir & Meera",
  location: "Udaipur, India",
  date: "January 2026",
  image: "https://www.japjitravel.com/blog/wp-content/uploads/2026/02/couple-Historical-sites-udaipur-edited.jpg",
  gallery: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JdibL9NyCBS9dOKwxHetYKPTYObdwMob1kMnO1wfQim_XNRlbycIHX6B&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5Qgv59K813D7iAhmLYJIDl_hezZ-CdgcBA_x2dtDi3YHuOxlTNL2mBn3&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppQ_y0ywwA3wAgXDOMvpt8LpGNfCB6psFtmbcAdbaSXyWHyBOI8j-fOA&s=10",
  ],
  story:
    "Our royal wedding in Udaipur became unforgettable with WedAI. From venue selection to budget management, everything was perfectly organized.",
  review:
    "The Budget Planner and Venue Recommendation features helped us create our dream wedding without exceeding our budget.",
  venue: "The Oberoi Udaivilas",
  guests: "400 Guests",
  planner: "Rahul Verma",
},
{
  id: 2,
  name: "Rohan & Ananya",
  location: "Goa, India",
  date: "December 2025",
  image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
  gallery: [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
  ],
  story:
    "WedAI made our beach wedding in Goa completely stress-free. Every event was perfectly planned and our guests had an amazing experience.",
  review:
    "The AI Timeline and Guest Management features were outstanding. We enjoyed every moment without worrying about the arrangements.",
  venue: "Taj Exotica Goa",
  guests: "250 Guests",
  planner: "Anjali Mehta",
},

{
  id: 3,
  name: "Kabir & Meera",
  location: "Udaipur, India",
  date: "January 2026",
  image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200",
  gallery: [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800",
  ],
  story:
    "Our royal wedding in Udaipur became unforgettable with WedAI. From venue selection to budget management, everything was perfectly organized.",
  review:
    "The Budget Planner and Venue Recommendation features helped us create our dream wedding without exceeding our budget.",
  venue: "The Oberoi Udaivilas",
  guests: "400 Guests",
  planner: "Rahul Verma",
},
];

export default function TestimonialDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const testimonial = testimonials.find(
    (item) => item.id === Number(id)
  );

  if (!testimonial)
    return (
      <div className="p-20 text-center">
        Testimonial not found
      </div>
    );
  return (
  <>
    <Navbar />

    <section className="bg-[#F8F5F0] min-h-screen">

      {/* Hero */}

      <div className="relative h-[500px]">

        <img
          src={testimonial.image}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute left-8 top-8 bg-white rounded-full px-4 py-2"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="absolute bottom-12 left-12 text-white">

          <h1 className="text-5xl font-bold">
            {testimonial.name}
          </h1>

          <div className="flex gap-6 mt-4">

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {testimonial.location}
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {testimonial.date}
            </div>

          </div>

        </div>

      </div>

      {/* Story */}

      <div className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-8">
          Their Love Story
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          {testimonial.story}
        </p>

        {/* Wedding Details */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white rounded-3xl p-8 shadow">

            <MapPin className="text-[#C8A96A]" />

            <h3 className="mt-4 font-semibold">
              Venue
            </h3>

            <p>{testimonial.venue}</p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow">

            <Users className="text-[#C8A96A]" />

            <h3 className="mt-4 font-semibold">
              Guests
            </h3>

            <p>{testimonial.guests}</p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow">

            <Star className="text-[#C8A96A]" />

            <h3 className="mt-4 font-semibold">
              Planner
            </h3>

            <p>{testimonial.planner}</p>

          </div>

        </div>

        {/* Gallery */}

        <h2 className="text-4xl font-bold mt-20 mb-8">
          Wedding Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonial.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-3xl h-72 w-full object-cover"
            />
          ))}

        </div>

        {/* Review */}

        <div className="mt-20 bg-white rounded-3xl p-10 shadow">

          <h2 className="text-3xl font-bold mb-6">
            Their Experience
          </h2>

          <p className="text-lg italic leading-8">
            "{testimonial.review}"
          </p>

        </div>

      </div>

    </section>

    <Footer />
  </>
);
  
}
