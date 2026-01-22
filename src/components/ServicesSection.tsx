import { Compass, GraduationCap, Briefcase, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    iconBg: "bg-light-blue",
    iconColor: "text-navy",
    title: "Orientation Services",
    description: "Learn more about your journey with a comprehensive guide to quality.",
    cta: "View Packages",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-light-blue",
    iconColor: "text-navy",
    title: "Academic Support",
    description: "Hire vetted mentors for enhanced, enlightened study knowledge.",
    cta: "Hire a Mentor",
  },
  {
    icon: Briefcase,
    iconBg: "bg-light-blue",
    iconColor: "text-navy",
    title: "Employment",
    description: "Prepare for UK employers with easy, part or expert corporate.",
    cta: "Build Employability",
  },
  {
    icon: BookOpen,
    iconBg: "bg-light-blue",
    iconColor: "text-navy",
    title: "Training & Courses",
    description: "Learn more services and certifications to boost your career.",
    cta: "Explore Training",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Choose the support that fits your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light-blue rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 border-2 border-gold/30`}>
                <service.icon className={`w-10 h-10 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-navy mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {service.description}
              </p>

              {/* CTA Button */}
              <Button className="bg-navy text-primary-foreground hover:bg-navy-dark rounded-md text-sm px-4 py-2 flex items-center gap-2">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
