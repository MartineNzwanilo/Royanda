"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ContentBlock.module.css";

interface ContentBlockProps {
    title: string;
    text: string;
    imageSrc: string;
    linkText: string;
    linkHref: string;
    reversed?: boolean; // Toggle for Zig-Zag layout
}

export default function ContentBlock({ title, text, imageSrc, linkText, linkHref, reversed }: ContentBlockProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className={`${styles.section} ${reversed ? styles.reverse : ""} ${isVisible ? styles.visible : ""}`}>

            <div className={styles.textBlock}>
                <h2 className={styles.heading}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <Link href={linkHref} className={styles.linkButton}>
                    {linkText}
                </Link>
            </div>

            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

        </section>
    );
}
