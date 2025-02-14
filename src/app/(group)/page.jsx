import Image from "next/image";
import splash from "@/assets/images/splash-image.jpg"
import LinkButton from "@/components/LinkButton";
import "@/styles/welcome-page-style.scss"

export default function Home() {
  return (

    <main className="welcome-main">
      <section className="welcome-section">

        <div className="logo">
          <p>Landrup<br/><span>Dans</span></p>
        </div>


      </section>

      <LinkButton link='/aktiviteter' linktext="Kom i gang" className="fade-in"/>

      <Image
        alt="splash image"
        src={splash}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: "-2"
        }}
      />
    </main>
  );
}