import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import View from '../components/View';
import New from '../components/New';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <View />
      <New />
      <Testimonials />
      <Footer />
    </>
  );
}
