import Image from "next/image";
// Removed Link usage; cards now static.

// Removed ChevronRight icon (no interactive link).

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Tracklists against inevitable takedown",
    image: "/kyora-12.jpg",
    rationale: "Snapshot before disappearance. Manual index over time.",
  },
  {
    title: "Notes in red, recs in green, links in blue",
    image: "/kyora-13.jpg",
    rationale: "Color legend omitted in UI; retained in source logic.",
  },
  {
    title: "Encrypted titles. Lost keys.",
    image: "/kyora-14.jpg",
    rationale: "AES-128 CBC naming. Keys intentionally discarded.",
  },
  {
    title: "Ambient / library pieces (clean)",
    image: "/kyora-15.jpg",
    rationale: "Low noise listening set. Minimal commentary.",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container mx-auto">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            UPLOADED 2022. TAKEN DOWN 2023.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Preservation over presentation
          </h2>
          <p className="text-muted-foreground leading-snug">
            Manual curation. Color-coded notes. Archive for when playlists disappear.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center ps-0 pt-0"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority={true}
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6">
                    <div className="space-y-2">
                      <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-snug">
                        {item.rationale}
                      </p>
                    </div>
                  </div>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
