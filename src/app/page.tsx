import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Selections } from "@/components/blocks/selections";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Features />
        <Selections />
      </Background>
    </>
  );
}
