import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { selections } from "@/data/selections";

export function Selections({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="container">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl">Selections</h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-sm leading-snug">
            Keep a record for the inevitable takedown. More inside.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {selections.map((item) => (
            <Link
              key={item.slug}
              href={`/selections/${item.slug}`}
              className="group relative overflow-hidden rounded-xl border bg-muted/40 p-3 transition-colors hover:bg-muted"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md bg-background">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-cover object-center opacity-80 transition group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-4 text-sm font-medium tracking-wide">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-1 line-clamp-2 text-xs leading-relaxed">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/selections"
            className="text-primary text-sm font-medium underline underline-offset-4 hover:opacity-80"
          >
            View archive
          </Link>
        </div>
      </div>
    </section>
  );
}
