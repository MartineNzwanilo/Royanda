import Image from "next/image";
import Link from "next/link";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
    title: string;
    description: string;
    imageSrc: string;
    price?: string;
    capacity?: string;
    slug: string;
}

export default function RoomCard({ title, description, imageSrc, price, capacity, slug }: RoomCardProps) {
    return (
        <Link href={`/rooms/${slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.details}>
                    {capacity && <span>{capacity} Guests</span>}
                    {price && <span>From {price}</span>}
                </div>

                <span className={styles.action}>View Details</span>
            </div>
        </Link>
    );
}
