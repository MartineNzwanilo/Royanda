import Hero from "@/components/Hero/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import styles from "./Gallery.module.css";

const galleryImages = [
    {
        id: "1",
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
        category: "Hotel",
        title: "Exterior"
    },
    {
        id: "2",
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
        category: "Rooms",
        title: "Deluxe Suite"
    },
    {
        id: "3",
        src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
        category: "Dining",
        title: "Royal Lounge"
    },
    {
        id: "4",
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
        category: "Amenities",
        title: "Poolside"
    },
    {
        id: "5",
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
        category: "Hotel",
        title: "Lobby"
    },
    {
        id: "6",
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        category: "Rooms",
        title: "Presidential Suite"
    },
    {
        id: "7",
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
        category: "Amenities",
        title: "Spa & Wellness"
    },
    {
        id: "8",
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
        category: "Rooms",
        title: "Executive Room"
    },
];

export default function GalleryPage() {
    return (
        <main className={styles.galleryPage}>
            <Hero
                accent="The Collection"
                title="Gallery"
                imageSrc="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop"
            />

            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <span className={styles.scriptAccent}>The Collection</span>
                        <h2 className={styles.title}>Moments of Luxury</h2>
                        <p className={styles.description}>
                            Explore the elegant spaces and detailed craftsmanship that define the Yolanda Hotel experience.
                        </p>
                    </div>

                    <GalleryGrid images={galleryImages} />
                </div>
            </section>
        </main>
    );
}
