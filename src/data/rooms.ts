export interface Room {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    imageSrc: string;
    price: string;
    capacity: string;
    size: string;
    bedType: string;
    amenities: string[];
}

export const rooms: Room[] = [
    {
        slug: "deluxe-king",
        title: "Deluxe King",
        description: "Spacious elegance with king-sized comfort and city views.",
        fullDescription: "Our Deluxe King rooms offer a perfect blend of modern luxury and rustic charm. Featuring high-quality linens, handcrafted furniture, and large windows that flood the space with natural light, these rooms provide a serene escape from the bustling heart of Kahama. Each room is equipped with state-of-the-art technology and a spa-like bathroom to ensure your stay is both productive and relaxing.",
        imageSrc: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
        price: "$150",
        capacity: "2",
        size: "35 sqm",
        bedType: "King Bed",
        amenities: ["Free Wi-Fi", "Walk-in Shower", "Mini Bar", "Coffee Maker", "Safe", "Smart TV"]
    },
    {
        slug: "twin-executive",
        title: "Twin Executive",
        description: "Perfect for colleagues or friends, featuring dual work areas.",
        fullDescription: "The Twin Executive room is designed for those who require both comfort and functionality. With two plush twin beds and dedicated ergonomic workspaces, it's the ideal choice for business travelers or friends exploring Kahama together. The contemporary design is accented by local artistry, creating an atmosphere of sophisticated chic that invites you to relax after a long day of meetings or sightseeing.",
        imageSrc: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
        price: "$180",
        capacity: "2",
        size: "40 sqm",
        bedType: "2 Twin Beds",
        amenities: ["Dual Work Desks", "Free Wi-Fi", "Rain Shower", "Mini Bar", "Espresso Machine", "Safe"]
    },
    {
        slug: "yolanda-suite",
        title: "Yolanda Suite",
        description: "Our signature suite offering a panoramic living area and luxury bath.",
        fullDescription: "Experience the pinnacle of Yolanda Hotel's hospitality in our signature Yolanda Suite. This expansive space features a separate living area with panoramic windows, a private balcony, and a master bedroom designed for ultimate rest. The opulent bathroom includes a deep soaking tub and a rainfall shower. Every detail in this suite has been curated to provide a 'Royal' experience, making it perfect for special occasions or extended stays.",
        imageSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        price: "$350",
        capacity: "3",
        size: "75 sqm",
        bedType: "King Bed + Lounge",
        amenities: ["Private Balcony", "Soaking Tub", "Butler Service", "Free Wi-Fi", "Mini Bar", "Espresso Machine", "Pillow Menu"]
    },
    {
        slug: "family-connection",
        title: "Family Connection",
        description: "Two connecting rooms providing ample space for family stays.",
        fullDescription: "Designed with families in mind, the Family Connection offers the perfect balance of proximity and privacy. These two interconnected rooms provide plenty of space for everyone to relax comfortably. With multiple bathrooms and sleeping areas, it's a seamless home-away-from-home experience. Each room features the hotel's signature rustic-chic aesthetic, ensuring a stylish and convenient stay for travelers of all ages.",
        imageSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
        price: "$280",
        capacity: "4",
        size: "70 sqm",
        bedType: "King Bed + 2 Twin Beds",
        amenities: ["Connecting Rooms", "Child-Friendly Services", "Free Wi-Fi", "Mini Bar", "Espresso Machine", "Safe", "Smart TV"]
    }
];
