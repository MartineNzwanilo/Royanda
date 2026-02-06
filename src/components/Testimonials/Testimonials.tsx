"use client";
import { useState } from "react";
import styles from "./Testimonials.module.css";

const reviews = [
    {
        text: "An absolute gem in Kahama. The attention to detail is unmatched, from the architecture to the service. Truly a 5-star experience.",
        author: "Sarah Mitchell, London"
    },
    {
        text: "The Angel Roofbar offers the best views in the city. Dining under the stars here was the highlight of our trip.",
        author: "David & Elena, Italy"
    },
    {
        text: "Simply the best hotel in the region. The rooms are spacious, modern, and incredibly comfortable.",
        author: "James Obi, Tanzania"
    }
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section className={styles.section}>
            <h4 className={styles.heading}>Guest Experiences</h4>

            <div className={styles.carousel}>
                <p className={styles.quote}>"{reviews[active].text}"</p>
                <p className={styles.author}>— {reviews[active].author}</p>
            </div>

            <div className={styles.controls}>
                {reviews.map((_, i) => (
                    <div
                        key={i}
                        className={`${styles.dot} ${active === i ? styles.active : ""}`}
                        onClick={() => setActive(i)}
                    />
                ))}
            </div>
        </section>
    );
}
