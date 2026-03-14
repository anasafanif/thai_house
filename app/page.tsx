import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookNow from "@/components/BookNow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <BookNow />
      <Footer />
    </>
  );
}
