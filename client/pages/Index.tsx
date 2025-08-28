import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialMediaSection from "@/components/SocialMediaSection";
import AdvertisingHome from "@/components/AdvertisingHome";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <SocialMediaSection />
      <AdvertisingHome />
      <Contact />
      <Footer />
    </div>
  );
}
