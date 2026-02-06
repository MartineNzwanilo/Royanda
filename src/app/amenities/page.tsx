import Hero from "@/components/Hero/Hero";
import ContentBlock from "@/components/ContentBlock/ContentBlock";

export default function AmenitiesPage() {
    return (
        <main>
            <Hero
                accent="Hello"
                title="Amenities"
                subtitle="Designed for Your Comfort"
                imageSrc="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"
            />

            <ContentBlock
                title="Wellness & Spa"
                text="Rejuvenate your body and mind in our exclusive spa. Offering a range of treatments from massages to facials, it's the perfect escape."
                imageSrc="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop"
                linkText="Book Treatment"
                linkHref="#"
                reversed={false}
            />

            <ContentBlock
                title="Business Center"
                text="Stay connected with our fully equipped business center. High-speed internet, printing services, and meeting rooms are available for your convenience."
                imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                linkText="Inquire Now"
                linkHref="#"
                reversed={true}
            />
        </main>
    );
}
