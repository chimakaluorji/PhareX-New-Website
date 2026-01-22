import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-1 h-8 bg-gold rounded-full" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">
              Not sure where to start?
            </h2>
            <div className="w-1 h-8 bg-gold rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-navy text-primary-foreground hover:bg-navy-dark rounded-full px-6 py-5 flex items-center gap-2">
              Book 1-o-1 Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-full px-6 py-5 flex items-center gap-2">
              Join Group Session
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full px-6 py-5 flex items-center gap-2">
              Free Webinars
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
