import { Background } from "@/components/background";
import { Selections } from "@/components/blocks/selections";
import { ReferenceImage } from "@/components/blocks/reference-image";

export const metadata = {
  title: "Selections · Nanami",
  description: "Manual archive selections. Notes in red, recs in green, links in blue.",
};

export default function SelectionsPage() {
  return (
    <Background className="via-muted to-muted/80">
      <Selections />
      <ReferenceImage />
    </Background>
  );
}
