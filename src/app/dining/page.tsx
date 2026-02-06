import Hero from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock/ContentBlock";

export default function DiningPage() {
    return (
        <main>
            <Hero
                accent="Experience"
                title="Angel Roofbar & Dining"
                subtitle="Culinary Excellence with a View"
                imageSrc="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
            />

            <ContentBlock
                title="A Culinary Journey"
                text="Experience the fusion of traditional Tanzanian spices with modern international cuisine. Our chefs carefully select local ingredients to create dishes that tell a story of refined taste."
                imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                linkText="View Menu"
                linkHref="#"
                reversed={false}
            />

            <ContentBlock
                title="The Roofbar"
                text="As the sun sets over Kahama, our Roofbar comes alive. Enjoy signature cocktails and a curated wine list in an atmosphere of chic sophistication."
                imageSrc="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop"
                linkText="Book a Table"
                linkHref="#"
                reversed={true}
            />
        </main>
    );
}
