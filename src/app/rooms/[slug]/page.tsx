import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import { rooms } from "@/data/rooms";
import styles from "./RoomDetail.module.css";

interface RoomPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
    const { slug } = await params;
    const room = rooms.find((r) => r.slug === slug);

    if (!room) {
        notFound();
    }

    return (
        <div className={styles.roomDetail}>
            <Hero
                accent="Hello"
                title={room.title}
                subtitle="Distinctive Luxury"
                imageSrc={room.imageSrc}
            />

            <section className={styles.contentSection}>
                <div className={styles.mainInfo}>
                    <Link href="/rooms" className={styles.backLink}>
                        ← Back to Rooms
                    </Link>

                    <h2>A Sanctuary of Calm</h2>
                    <p className={styles.description}>
                        {room.fullDescription}
                    </p>

                    <div className={styles.specs}>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Capacity</span>
                            <span className={styles.specValue}>{room.capacity} Guests</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Size</span>
                            <span className={styles.specValue}>{room.size}</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Bed Type</span>
                            <span className={styles.specValue}>{room.bedType}</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>View</span>
                            <span className={styles.specValue}>City Skyline / Garden</span>
                        </div>
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.amenitiesBox}>
                        <h3>Room Amenities</h3>
                        <ul className={styles.amenitiesList}>
                            {room.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                        <button className={styles.bookingCTA}>Book This Room</button>
                    </div>
                </aside>
            </section>
        </div>
    );
}
