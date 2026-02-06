import Hero from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock/ContentBlock";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>

      <Hero
        title="Welcome to Yolanda Hotel"
        subtitle=""
        // Using a more "Royal" cinematic shot
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
      />

      <ContentBlock
        title="Rooms & Suites"
        text="Experience unparalleled comfort in our thoughtfully designed rooms. Combining local materials with modern amenities, each space is a sanctuary of calm."
        imageSrc="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
        linkText="View Rooms"
        linkHref="/rooms"
        reversed={false}
      />

      <ContentBlock
        title="Dining Experience"
        text="Savor the flavors of Tanzania mixed with international cuisine. Our rooftop dining offers breathtaking views and a culinary journey like no other."
        imageSrc="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
        linkText="Discover Dining"
        linkHref="/dining"
        reversed={true}
      />

      <ContentBlock
        title="Events & Meetings"
        text="From intimate gatherings to grand celebrations, Yolanda Hotel provides the perfect backdrop for your most memorable events."
        imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
        linkText="Plan Your Event"
        linkHref="/events"
        reversed={false}
      />

      {/* New Testimonials Section */}
      <Testimonials />
    </main>
  );
}
