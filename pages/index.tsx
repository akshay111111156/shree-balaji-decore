import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import New from '../components/New';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { useEffect } from "react";
import { requestNotificationPermission } from "../lib/notifications";

export default function Home() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <New />
      <Testimonials />
      <Footer />
    </>
  );
}
