import { Sparkles, Video, Tag } from "lucide-react";

const announcements = [
  {
    icon: Sparkles,
    text: "New: Pre-Arrival Packages Now Available!",
    highlight: "New:",
  },
  {
    icon: Video,
    text: "Webinar: Free UK Orientation Webinar – Register Now!",
    highlight: "Webinar:",
  },
  {
    icon: Tag,
    text: "Offer: Save 20% on Employment Packages",
    highlight: "Offer:",
  },
];

const AnnouncementBar = () => {
  return (
    <div className="bg-light-blue border-t-4 border-gold py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
          {announcements.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                <item.icon className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <p className="text-sm text-navy">
                <span className="font-semibold text-gold">{item.highlight}</span>{" "}
                {item.text.replace(item.highlight, "").trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
