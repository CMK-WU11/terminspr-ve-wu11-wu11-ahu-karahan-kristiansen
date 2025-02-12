import Nav from "@/components/Nav";

export default function MainLayout({ children }) {
    return (
        <main className="main-spacing">
            {children}
            <Nav />
        </main>
    );
}