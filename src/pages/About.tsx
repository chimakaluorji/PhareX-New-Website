import { Link } from "react-router-dom";
import { ArrowRight, Compass, Heart, Lightbulb, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeroImage from "@/assets/about-hero.jpg";
import founderImage from "@/assets/founder-rajesh.jpg";
import teamImage from "@/assets/team-photo.jpg";

const valueCards = [
  {
    icon: Compass,
    title: "Clear Guidance",
    description: "Learn more exam walks, roadblocked, and oriented in fluny.",
    cta: "View Packages",
    link: "/services",
  },
  {
    icon: Heart,
    title: "Ethical Support",
    description: "Rooted by reaching trust and land, see reprimention. I foil chomining.",
    cta: "Hire a Mentor",
    link: "/mentors",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "Host marne ooo to job ante hunts. - sark as fittih any to colaneepates.",
    cta: "Build Employability",
    link: "/employment",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Learn laai exart saicai yourib, Trock, and eagetron to for to Have nacations.",
    cta: "Explore Training",
    link: "/training",
  },
];

const storyPoints = [
  "Research funding constituents for the janu site ago - while maving to moulp volumes with serforemd brcain.",
  "Confusing job rules and that fleerption to they ter ab+ phenex phile ole apal at meepint job thei see lastut.",
  "Housing searns and agrely from too hiaonity, tiealt senviced, and a penas, and haniagrong and much many.",
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy-light overflow-hidden">
          <div className="container mx-auto px-4 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6 z-10">
                <h1 className="font-playfair text-4xl lg:text-5xl font-bold">
                  Welcome to Phare<span className="text-gold">X</span>
                </h1>
                <p className="text-xl text-cream font-medium">
                  Your trusted partner for navigating life as an international student in the UK.
                </p>
                <p className="text-cream/80">
                  At PhareX, we understand the challenges of studying in a new country.
                  We provide practical guidance, ethical support, and reliable resources
                  to help you succeed academically and personally.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src={aboutHeroImage}
                  alt="International students collaborating"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gold"></div>
                <h2 className="font-playfair text-3xl lg:text-4xl text-navy font-bold">
                  Our Mission
                </h2>
                <div className="h-px w-16 bg-gold"></div>
              </div>
              <p className="text-navy/70 max-w-2xl mx-auto">
                Empowering international students to thrive academically, professionally, and personally in the UK.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-navy-light/10 rounded-full flex items-center justify-center">
                    <card.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl text-navy font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-navy/60 text-sm mb-4">{card.description}</p>
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-1 text-navy font-medium text-sm border border-navy rounded-full px-4 py-2 hover:bg-navy hover:text-white transition-colors"
                  >
                    {card.cta}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-playfair text-3xl text-navy font-bold">Our Story</h2>
                  <span className="text-2xl">📝</span>
                </div>
                <p className="text-navy/70 mb-4">
                  It from a recade ago oprivans from Oslapilo ser India kuaw'han international student as an international stat.
                </p>
                <ul className="space-y-3 mb-6">
                  {storyPoints.map((point, index) => (
                    <li key={index} className="flex gap-2 text-navy/70 text-sm">
                      <span className="text-gold mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-cream rounded-xl p-8">
                <div className="text-gold text-6xl font-serif leading-none mb-4">"</div>
                <blockquote className="text-navy italic text-lg mb-6">
                  I started PhareX to ensure that no one feels lost or unprepared like I did. To be the reliable guide I wished for back then.
                </blockquote>
                <div className="text-gold text-6xl font-serif leading-none text-right mb-6">"</div>
                <div className="flex items-center gap-4">
                  <img
                    src={founderImage}
                    alt="Rajesh Kumar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-playfair font-bold text-navy">Rajesh Kumar</p>
                    <p className="text-gold text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-playfair text-3xl text-navy font-bold">Meet Our Team</h2>
                <span className="text-2xl">✨</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={teamImage}
                  alt="PhareX Team"
                  className="w-full object-cover h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
