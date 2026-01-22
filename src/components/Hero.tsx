import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="International students studying together"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Diagonal Navy Overlay */}
      <div 
        className="absolute inset-0 bg-navy"
        style={{
          clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground leading-tight mb-4">
            Support for International Students at Every Stage
          </h1>
          <p className="text-primary-foreground/90 text-lg mb-8">
            From pre-arrival planning to academic support, employment readiness, and community. Everything you need, in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-md px-6 py-5">
              Explore Services
            </Button>
            <Button variant="outline" className="bg-primary-foreground text-navy hover:bg-primary-foreground/90 rounded-md px-6 py-5 border-none">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
