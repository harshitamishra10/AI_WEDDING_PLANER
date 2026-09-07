import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   try {
//     const res = await axios.post(
//       "http://localhost:5000/api/auth/register",
//       {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       }
//     );

//     alert(res.data.message);

//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });

//   } catch (error) {
//     alert(error.response?.data?.message || "Registration Failed");
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Clicked");

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  console.log("Before API");

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }
    );

    console.log("After API");

    alert(res.data.message);
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Registration Failed");
  }
};
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0] pt-28 pb-16">
        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />

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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#C8A96A] text-white py-3 rounded-xl hover:bg-[#b3924f] transition"
            >
              Register
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};














