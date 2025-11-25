import { notFound } from "next/navigation";

import { Background } from "@/components/background";
import { ReferenceImage } from "@/components/blocks/reference-image";
import { getSelection } from "@/data/selections";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sel = getSelection(slug);
  if (!sel) return { title: "Selection · Nanami" };
  return {
    title: `${sel.title} · Nanami`,
    description: sel.summary,
  };
}

export default async function SelectionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sel = getSelection(slug);
  if (!sel) return notFound();
  return (
    <Background className="via-muted to-muted/80">
      {/* Added extra top padding to avoid navbar overlap */}
      <section className="container pt-48 pb-32 lg:pt-56 lg:pb-40">
        <h1 className="text-2xl md:text-4xl tracking-tight">{sel.title}</h1>
        <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
          {sel.summary}
        </p>
        <div className="mt-8">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-md border bg-background">
            {/* cover image optional */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sel.cover}
              alt={sel.title}
              className="h-full w-full object-cover object-center opacity-90"
            />
          </div>
        </div>
        {sel.notes && (
          <div className="mt-10 space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Notes
            </h2>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              {sel.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        )}
        {sel.tracklist && (
          <div className="mt-12 space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tracklist (snapshot)</h2>
            <ol className="space-y-1 text-xs font-mono text-muted-foreground max-w-xl">
              {sel.tracklist.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ol>
            <p className="text-[10px] text-muted-foreground opacity-60">Color code: red = note, green = rec, blue = link (not styled here).</p>
          </div>
        )}
        <div className="mt-16">
          <ReferenceImage />
        </div>
      </section>
    </Background>
  );
}