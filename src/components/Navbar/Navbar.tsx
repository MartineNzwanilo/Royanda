"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
                {/* Left: Hamburger (Icon Only) */}
                <div
                    className={`${styles.hamburger} ${isOpen ? styles.open : ""} ${isOpen ? styles.hamburgerOpen : ""}`}
                    onClick={toggleMenu}
                >
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>

                {/* Center: Brand/Logo */}
                <div className={styles.logoBlock}>
                    <Link href="/" className={styles.logoText}>Yolanda</Link>
                </div>

                {/* Right: Actions */}
                <div className={styles.actions}>
                    <button className={styles.bookBtn}>Book Now</button>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            <Sidebar isOpen={isOpen} onClose={closeMenu} />
        </>
    );
}
