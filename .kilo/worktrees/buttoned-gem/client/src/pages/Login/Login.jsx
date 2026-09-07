import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save token
      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      // Login ke baad Home page
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0] pt-28 pb-16">
        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#C8A96A] text-white py-3 rounded-xl hover:bg-[#b3924f] transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#C8A96A] font-semibold">
              Register
            </Link>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}