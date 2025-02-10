import "@/styles/globals.scss"

import Image from "next/image";
import splash from "@/assets/images/splash-image.jpg"

export default function Home() {
  return (
    <main>

      <p>Test</p>

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