import Image from "next/image";
import Logo from "./img/Logo.png"

export default function Home() {
  return (
    <main>
      <Image src={Logo} alt="Logo" width={500} height={500}/>
    </main>
  );
}