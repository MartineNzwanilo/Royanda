"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import styles from "./GalleryGrid.module.css";

interface GalleryImage {
    id: string;
    src: string;
    category: string;
    title: string;
}

interface GalleryGridProps {
    images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const categories = ["All", ...Array.from(new Set(images.map(img => img.category)))];

    const filteredImages = useMemo(() => {
        return filter === "All" ? images : images.filter(img => img.category === filter);
    }, [filter, images]);

    return (
        <div className={styles.galleryWrapper}>
            {/* Filter Buttons */}
            <div className={styles.filters}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {filteredImages.map(img => (
                    <div
                        key={img.id}
                        className={styles.imageItem}
                        onClick={() => setSelectedImage(img)}
                    >
                        <div className={styles.imageInner}>
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.gridImage}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.imageCat}>{img.category}</span>
                                <h3 className={styles.imageTitle}>{img.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                    <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <div className={styles.lightboxImageWrapper}>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className={styles.lightboxInfo}>
                            <span className={styles.lightboxCat}>{selectedImage.category}</span>
                            <h3 className={styles.lightboxTitle}>{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
