// 
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// //import AaravSiya from "./pages/AaravSiya";
// import AaravSiya from "./pages/Home/AaravSiya";
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/testimonial/:id" element={<AaravSiya />} />
//     </Routes>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import AaravSiya from "./pages/Home/AaravSiya";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/testimonial/:id" element={<AaravSiya />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AaravSiya from "./pages/Home/AaravSiya";

import FeaturesPage from "./pages/FeaturesPage";
import GalleryPage from "./pages/GalleryPage";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";




function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/features" element={<ProtectedRoute><FeaturesPage /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/gallery" element={<ProtectedRoute><GalleryPage /></ProtectedRoute>} />
      <Route path="/testimonials" element={<ProtectedRoute><TestimonialsPage/></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />

      <Route path="/testimonial/:id" element={<ProtectedRoute><AaravSiya /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;