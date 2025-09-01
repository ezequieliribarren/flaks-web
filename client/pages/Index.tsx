import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DevelopmentHome from "@/components/DevelopmentHome";
import SocialMediaSection from "@/components/SocialMediaSection";
import AdvertisingHome from "@/components/AdvertisingHome";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RemixProcessForm from "@/components/RemixProcessForm";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DevelopmentHome />
      <SocialMediaSection />
      <AdvertisingHome />
      <RemixProcessForm />
      <Footer />
    </div>
  );
}
