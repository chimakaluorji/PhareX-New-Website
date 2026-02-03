import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Compass, Home, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const packages = [
  {
    icon: Compass,
    name: "Pre-Arrival Package",
    tagline: "Practical guidance before you arrive,",
    description: "so you make confident decisions and avoid costly mistakes.",
    originalPrice: "from",
    price: "£79",
    features: [
      "University and city guidance",
      "UK employment landscape and HMRC basics",
      "Budgeting, banking, and credit guidance",
      "Accommodation guidance and scam awareness",
      "UK systems, culture, and expectations",
      "Embedded consultation and follow-up and answers",
    ],
  },
  {
    icon: Home,
    name: "Arrival Package",
    tagline: "Settle, Stabilise, and Start Strong",
    description: "Support for your first months in the UK to help you settle, work smart, and build a routine.",
    originalPrice: "£95m",
    price: "£89",
    features: [
      "Accommodation search guidance",
      "Employment readiness and CV support",
      "Job search strategy support",
      "NHS, banking, and NI number guidance",
      "Tenant rights awareness",
      "Life structuring and mental wellness support",
      "Embedded consultation and cadence",
    ],
  },
  {
    icon: GraduationCap,
    name: "Post-Arrival / Pre-Graduation Package",
    tagline: "Prepare for Life After Study",
    description: "Guidance for final-year students and graduates to plan the next step with clarity.",
    originalPrice: "£99",
    price: "£99",
    features: [
      "Post-study and work visa route awareness",
      "Internship and work experience guidance",
      "Job market and interview preparation",
      "Life structuring for final-year balance",
      "Mental wellness and transition support",
      "Strategic consultation and follow-up",
    ],
  },
];

const OrientationServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center overflow-hidden">
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
                Orientation Services
              </h1>
              <p className="text-xl text-gold font-semibold mb-4">
                Your Foundation for Settling, Studying, and Thriving in the UK
              </p>
              <p className="text-primary-foreground/90">
                Get package support tailored to your stage, avoid costly mistakes, and thrive from day one. You'll get 
                affordable 1-to-1 and small-group guidance from trusted advisors.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy text-center mb-12">
              Choose the Right Orientation Package for Your Needs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-light-blue rounded-2xl p-6 flex flex-col border border-border hover:shadow-lg transition-shadow"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gold-light rounded-full flex items-center justify-center border-4 border-gold/30">
                      <pkg.icon className="w-10 h-10 text-navy" />
                    </div>
                  </div>

                  {/* Package Name */}
                  <h3 className="text-xl font-serif font-bold text-navy text-center mb-3 italic">
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-muted-foreground text-sm mb-4">
                    <span className="font-medium text-navy">{pkg.tagline}</span>
                    <br />
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-sm text-muted-foreground">Starting at </span>
                    <span className="text-muted-foreground line-through text-sm">{pkg.originalPrice}</span>
                    <span className="text-2xl font-bold text-gold ml-2">{pkg.price}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-gold mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Add to Basket Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-gold text-gold hover:bg-gold hover:text-accent-foreground rounded-md flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Basket
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-8">
                Not sure which package is for you?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-navy-dark text-primary-foreground hover:bg-primary border border-primary-foreground/30 rounded-full px-6 py-5 flex items-center gap-2">
                  Book 1-o-1 Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-full px-6 py-5 flex items-center gap-2">
                  Join Group Session
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full px-6 py-5 flex items-center gap-2">
                  Free Webinars (Every 5 Weeks)
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrientationServices;
