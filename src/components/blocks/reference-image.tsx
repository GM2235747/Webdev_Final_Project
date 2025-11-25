import Image from "next/image";

// Single passive reference image; not an endorsement list.
export function ReferenceImage() {
  return (
    <section className="container max-w-3xl py-12">
      <div className="space-y-4">
        <h2 className="text-foreground text-3xl tracking-tight lowercase">nanami mai</h2>
        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
          archival reference image. no sponsorship. no partners. preserved for context.
        </p>
        <div className="mt-6 w-fit">
          <Image
            src="/investors/mai.jpg"
            alt="nanami mai reference"
            width={220}
            height={220}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
