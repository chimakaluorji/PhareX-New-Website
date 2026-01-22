import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImage from "@/assets/featured-consultation.jpg";

const FeaturedSection = () => {
  return (
    <section className="py-12 bg-gold-light">
      <div className="container mx-auto px-4">
        <div className="bg-cream rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border-l-4 border-gold">
          {/* Content */}
          <div className="flex-1">
            <span className="text-sm font-semibold text-gold mb-2 block">
              Featured This Month
            </span>
            <h3 className="text-2xl font-serif font-bold text-navy mb-2">
              Employment Package{" "}
              <span className="text-gold">UK Work Experience Accelerator</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Prepare to UK standards with structured training and experiential experience. 
              No job guaranteed, you near prep.
            </p>
            <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-md px-6 py-2 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-80 h-48 rounded-xl overflow-hidden">
            <img
              src={featuredImage}
              alt="Consultation session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
