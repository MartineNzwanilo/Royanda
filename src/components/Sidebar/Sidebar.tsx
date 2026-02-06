"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Home", href: "/", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" },
    { label: "Rooms & Suites", href: "/rooms", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" },
    { label: "Dining", href: "/dining", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
    { label: "Amenities", href: "/amenities", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop" },
    { label: "Events", href: "/events", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" },
    { label: "Gallery", href: "/gallery", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    const [showImages, setShowImages] = useState(false);

    // Default "Video-Like" Image (Cinematic GIF/Loop)
    const defaultVideoBg = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop";

    // Synchronize image reveal with curtain meet (0.9s)
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShowImages(true), 900);
            return () => clearTimeout(timer);
        } else {
            setShowImages(false);
            setHoveredImage(null);
        }
    }, [isOpen]);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>

            {/* Background Images - Only visible AFTER curtains meet (showImages) */}
            <div className={`${styles.imageContainer} ${showImages ? styles.imagesVisible : ""}`}>
                {/* 1. Default Background */}
                <Image
                    src={defaultVideoBg}
                    alt="Ambience"
                    fill
                    className={`${styles.hoverImageBg} ${!hoveredImage ? styles.activeImage : ""}`}
                    style={{ objectFit: "cover" }}
                    priority
                />

                {/* 2. Dynamic Hover Backgrounds */}
                {menuItems.map((item) => (
                    <Image
                        key={item.href}
                        src={item.image}
                        alt=""
                        fill
                        className={`${styles.hoverImageBg} ${hoveredImage === item.image ? styles.activeImage : ""}`}
                        style={{ pointerEvents: "none", objectFit: "cover" }}
                    />
                ))}
            </div>

            {/* The Two Curtains (The "Gate") */}
            <div className={styles.curtainLeft}></div>
            <div className={styles.curtainRight}></div>

            {/* Menu Content */}
            <div className={styles.menuContent}>
                <div className={styles.container}>
                    <nav className={styles.navColumn}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.linkItem}
                                onMouseEnter={() => setHoveredImage(item.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                                onClick={onClose}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className={styles.contactInfo}>
                    <p>Kahama, Tanzania</p>
                    <p>info@yolandahotel.co.tz</p>
                </div>
            </div>
        </div>
    );
}
