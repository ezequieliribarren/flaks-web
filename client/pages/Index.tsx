import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialMediaSection from "@/components/SocialMediaSection";
import AdvertisingSection from "@/components/AdvertisingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <SocialMediaSection />
      <AdvertisingSection />
      <Contact />
      <Footer />
    </div>
  );
}
