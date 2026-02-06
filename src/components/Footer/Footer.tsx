import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>

                {/* Brand & Newsletter */}
                <div className={styles.brandColumn}>
                    <span className={styles.logoText}>Yolanda</span>
                    <p className={styles.address}>
                        123 Luxury Avenue, Kahama<br />
                        Shinyanga, Tanzania<br />
                        +255 123 456 789
                    </p>

                    <div className={styles.newsletter}>
                        <label className={styles.newsletterLabel}>Subscribe to our newsletter</label>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Your email address" className={styles.input} />
                            <button className={styles.submitBtn}>Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className={styles.linksColumn}>
                    <div className={styles.list}>
                        <h4 className={styles.listHeading}>Menu</h4>
                        <Link href="/rooms" className={styles.link}>Rooms & Suites</Link>
                        <Link href="/dining" className={styles.link}>Dining</Link>
                        <Link href="/amenities" className={styles.link}>Wellness</Link>
                        <Link href="/events" className={styles.link}>Events</Link>
                        <Link href="/gallery" className={styles.link}>Gallery</Link>
                    </div>

                    <div className={styles.list}>
                        <h4 className={styles.listHeading}>Social</h4>
                        <a href="#" className={styles.link}>Instagram</a>
                        <a href="#" className={styles.link}>Facebook</a>
                        <a href="#" className={styles.link}>LinkedIn</a>
                    </div>
                </div>

            </div>

            <div className={styles.bottomSection}>
                <span>© {new Date().getFullYear()} Yolanda Hotel</span>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                    <span>Designed with Passion</span>
                </div>
            </div>
        </footer>
    );
}
