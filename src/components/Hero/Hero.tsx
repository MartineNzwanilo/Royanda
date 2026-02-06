"use client";
import { useRef } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle?: string;
    accent?: string; // New: Script-font accent (e.g., "Welcome to")
    imageSrc: string; // Dynamic hero image
}

export default function Hero({ title, subtitle, accent, imageSrc }: HeroProps) {
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
                {accent && <span className={styles.headingScript}>{accent}</span>}
                <h1 className={styles.headingMain}>{title}</h1>
                {subtitle && <span className={styles.subheading}>{subtitle}</span>}
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
