import Hero from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock/ContentBlock";

export default function EventsPage() {
    return (
        <main>
            <Hero
                accent="Hello"
                title="Events"
                subtitle="Unforgettable Moments"
                imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
            />

            <section style={{ padding: "4rem 0" }}>
                <ContentBlock
                    title="Corporate Excellence"
                    text="From executive board meetings to grand corporate galas, Yolanda Hotel provides the perfect blend of technological sophistication and royal hospitality. Our versatile spaces are designed to inspire productivity and impress your guests."
                    imageSrc="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
                    linkText="Plan Meeting"
                    linkHref="#"
                    reversed={false}
                />

                <ContentBlock
                    title="Grand Celebrations"
                    text="Make your most important moments truly unforgettable. Weddings, anniversaries, and milestones deserve the majestic backdrop of our grand ballroom and the meticulous attention of our celebratory events team."
                    imageSrc="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop"
                    linkText="Inquire Now"
                    linkHref="#"
                    reversed={true}
                />
            </section>
        </main>
    );
}
