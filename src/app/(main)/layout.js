import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Nav />
        </>
    );
}
