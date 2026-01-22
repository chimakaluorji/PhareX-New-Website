import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementBar from "@/components/AnnouncementBar";
import ServicesSection from "@/components/ServicesSection";
import FeaturedSection from "@/components/FeaturedSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnnouncementBar />
        <ServicesSection />
        <FeaturedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
