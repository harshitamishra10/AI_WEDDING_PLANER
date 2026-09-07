// 

//import { Link } from "react-router-dom";
//import { HashLink } from "react-router-hash-link";
import { Menu } from "lucide-react";
import logo from "../../assets/logo/WEDAI.jpg";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user"); // Agar user save kiya hai to
  navigate("/login");
};
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#F7F3EC]/95 backdrop-blur-md border-b border-[#ece5d8]">
      {/* <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8"> */}
<div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="WedAI"
            className="h-16 w-auto object-contain"
          />

          <span className="text-3xl font-serif tracking-wide text-[#444]">
            WedAI
          </span>
        </Link>

        
        {/* <nav className="hidden lg:flex items-center gap-10">

          <Link
  to="/"
  className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
>
  Home
</Link>

          <Link
  to="/features"
  className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
>
  Features
</Link>

          <Link
  to="/dashboard"
  className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
>
  Dashboard
</Link>

          
          <Link
  to="/gallery"
  className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
>
  Gallery
</Link>
        
<Link
  to="/testimonials"
  className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
>
  Testimonials
</Link>

          
<Link
  to="/contact"
  className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
>
  Contact Us
</Link>
        </nav> */}
        {token && (
  <nav className="hidden lg:flex items-center gap-10">

    <Link
      to="/"
      className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
    >
      Home
    </Link>

    <Link
      to="/features"
      className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
    >
      Features
    </Link>

    <Link
      to="/dashboard"
      className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
    >
      Dashboard
    </Link>

    <Link
      to="/gallery"
      className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
    >
      Gallery
    </Link>

    <Link
      to="/testimonials"
      className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
    >
      Testimonials
    </Link>

    <Link
      to="/contact"
      className="uppercase tracking-[3px] text-[14px] text-[#444] hover:text-[#C8A96A] transition"
    >
      Contact Us
    </Link>

  </nav>
)}

        {/* Buttons */}
        {/* <div className="hidden lg:flex items-center gap-3">

          <Link
            to="/login"
            className="text-[#444] uppercase tracking-[2px] hover:text-[#C8A96A] transition"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="rounded-full border border-[#C8A96A] px-6 py-3 uppercase tracking-[2px] text-[#444] hover:bg-[#C8A96A] hover:text-white transition"
          >
            Register
          </Link>

        </div> */}
        {/* Buttons */}
<div className="hidden lg:flex items-center gap-3">

  {!token ? (
    <>
      <Link
        to="/login"
        className="text-[#444] uppercase tracking-[2px] hover:text-[#C8A96A] transition"
      >
        Sign In
      </Link>

      <Link
        to="/register"
        className="rounded-full border border-[#C8A96A] px-6 py-3 uppercase tracking-[2px] text-[#444] hover:bg-[#C8A96A] hover:text-white transition"
      >
        Register
      </Link>
    </>
  ) : (
    <button
      onClick={handleLogout}
      className="rounded-full border border-[#C8A96A] px-6 py-3 uppercase tracking-[2px] text-[#444] hover:bg-[#C8A96A] hover:text-white transition"
    >
      Logout
    </button>
  )}

</div>

        {/* Mobile Icon */}
        <button className="lg:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;
