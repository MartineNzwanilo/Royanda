import Hero from "@/components/Hero/Hero";
import RoomCard from "@/components/RoomCard/RoomCard";
import { rooms } from "@/data/rooms";

export default function RoomsPage() {
    return (
        <main>
            <Hero
                title="Rooms & Suites"
                subtitle="Distinctive Luxury"
                imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
            />

            <section style={{ padding: "6rem 5vw" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                    gap: "3rem",
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}>
                    {rooms.map((room) => (
                        <RoomCard key={room.slug} {...room} />
                    ))}
                </div>
            </section>
        </main>
    );
}
