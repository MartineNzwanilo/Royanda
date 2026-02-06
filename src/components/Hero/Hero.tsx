"use client";
import { useRef } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle?: string;
    imageSrc: string; // Dynamic hero image
}

export default function Hero({ title, subtitle, imageSrc }: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);

    const scrollToNext = () => {
        if (heroRef.current) {
            const nextSection = heroRef.current.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.overlay}></div>

            {/* Background Image */}
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    quality={90}
                />
            </div>

            <div className={styles.content}>
                {subtitle && <span className={styles.subheading}>{subtitle}</span>}
                <h1 className={`${styles.headingMain} ${styles.headingScript}`}>{title}</h1>
            </div>

            <button
                className={styles.scrollButton}
                onClick={scrollToNext}
                aria-label="Scroll to next section"
            >
                <div className={styles.arrow}></div>
            </button>
        </section>
    );
}
