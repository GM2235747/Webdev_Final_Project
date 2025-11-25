import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Selections", href: "/selections" },
    { name: "Archive", href: "/archive" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "YouTube", href: "https://youtube.com/@iam_qd" },
    { name: "Archive mirror", href: "https://github.com/mbia1/nanami-archive" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Today is the day
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          In the gentle morning glow. Thoughts swirling like autumn leaves.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/selections" aria-label="View curated selections">
              Explore selections
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-dashed mt-10 pt-8 md:mt-14 md:pt-10 lg:mt-20 lg:pt-12">
        <div className="text-center space-y-2">
          <p className="font-mono text-xs text-muted-foreground tracking-widest">
            ··· ─ ─ ─ ··· ─ ─ ─ ··· / ─ ─ ─ ··· / ··─ ·─· ─ ─ ─ ─ ─ ─ ─
          </p>
          <p className="text-xs text-muted-foreground opacity-60">
            [Morse: SOS / OS / UBUNTU] · Decryption key lost · Archive continues
          </p>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 GDM · Webdev Final Project · @curate.
          </p>
          <p className="mt-2 text-xs opacity-70">
            Ever wonder why things go the way they do?
          </p>
        </div>
      </div>
    </footer>
  );
}
