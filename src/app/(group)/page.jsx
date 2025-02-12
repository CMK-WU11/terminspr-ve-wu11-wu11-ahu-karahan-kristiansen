import Image from "next/image";
import splash from "@/assets/images/splash-image.jpg"
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (

    <div className="welcome-main">
      <section className="welcome-section">

        <div className="logo">
          <p>Landrup<br/><span>Dans</span></p>
        </div>

        <LinkButton link='/aktiviteter' linktext="Kom i gang"/>

      </section>


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
    </div>
  );
}