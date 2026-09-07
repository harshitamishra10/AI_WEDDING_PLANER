import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DashboardPreview from "./Home/DashboardPreview";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <DashboardPreview />
      <Footer />
    </>
  );
}