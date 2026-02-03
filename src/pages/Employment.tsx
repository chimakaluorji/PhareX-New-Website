import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Target, Search, FileText, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const features = [
  {
    icon: Briefcase,
    title: "Structured Work Placements",
    description: "Gain 1-3 months of paid or unpaid UK work experience across sectors like care, admin, business tech, comms.",
  },
  {
    icon: Target,
    title: "Sector-Specific Placements",
    description: "Choose placements aligned with your career interests, in sectors like healthcare, admin, business, tech, and community.",
  },
  {
    icon: Search,
    title: "Smart Application Guidance",
    description: "Learn how to search, tailor applications, and impress UK employers quickly.",
  },
  {
    icon: FileText,
    title: "CV Enhancement Sessions",
    description: "Receive expert CV feedback and learn how to showcase your skills and experiences to meet UK standards.",
  },
  {
    icon: Shield,
    title: "DBS Assistance If Needed",
    description: "Get support with the DBS process if your work placement requires a background check.",
  },
  {
    icon: Users,
    title: "Trusted Employer Referrals",
    description: "Get referred to reputable UK employers and recruitment partners for better placement opportunities.",
  },
];

const Employment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[450px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Students collaborating"
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground leading-tight mb-2">
                Employment Package
              </h1>
              <p className="text-xl text-gold font-semibold mb-4">
                UK Work Experience and Employability Accelerator
              </p>
              <p className="text-primary-foreground/90 mb-8">
                Gain 1-3 months UK work experience and learn how the job market 
                actually operates. Meet UK standards through training, strategy 
                and structured, sector-specific placements. While employment is not 
                guaranteed, you'll know how to navigate the UK job market with confidence.
              </p>
              <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-md px-6 py-5">
                Build UK Work Experience
              </Button>
            </div>
          </div>
        </section>

        {/* Disclaimer Bar */}
        <div className="bg-light-blue py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              PhareX does not guarantee job placement. Our role is to prepare you for the UK job market, support your readiness, 
              and connect you with opportunities.
            </p>
          </div>
        </div>

        {/* What's Included Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12">
              What's Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-light-blue rounded-xl p-6 flex gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-lg flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-light-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-4">
              Build UK work experience and get ahead.
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-2xl mx-auto">
              *While we offer exhaustive support, we do not guarantee job placement. The goal is real-world readiness, 
              not absolute promises. All placements depend on availability and local requirements.
            </p>
            <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-full px-8 py-5 flex items-center gap-2 mx-auto">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-8 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-navy font-semibold">MOMENTUS CARE</span>
              <span className="text-navy font-semibold">FIRST TASK</span>
              <span className="text-navy font-semibold">Solko Tech</span>
              <span className="text-navy font-semibold">COMMUNITY INDE</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Employment;
