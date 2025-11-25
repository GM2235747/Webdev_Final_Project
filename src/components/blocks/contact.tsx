import React from "react";

import Link from "next/link";

// Icons removed; using plain text links to reduce noise and avoid drawing attention.

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Archive location",
    content: (
      <p className="text-muted-foreground mt-3">
        Distributed backups
        <br />
        FLAC preferred, MP3 acceptable
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="mt-3">
        <div>
          <p className="">General inquiries</p>
          <Link
            href="mailto:gdmagbitang@gmail.com"
            className="text-muted-foreground hover:text-foreground"
          >
            gdmagbitang@gmail.com
          </Link>
        </div>
        <div className="mt-1 text-muted-foreground text-xs">
          <p className="">Reply not guaranteed. Manual inbox.</p>
        </div>
      </div>
    ),
  },
  {
    title: "References (links & labels obfuscated)",
    content: (
      <div className="mt-3 space-y-1 text-xs">
        <div>
          <Link
            href="https://www.youtube.com/@iam_qd"
            className="text-muted-foreground hover:text-foreground break-all"
          >
            https://www.youtube.com/@iam_qd
          </Link>
        </div>
        <div>
          <Link
            href="https://myanimelist.net/profile/iam_dq"
            className="text-muted-foreground hover:text-foreground break-all"
          >
            https://myanimelist.net/profile/iam_dq
          </Link>
        </div>
        <div>
          <Link
            href="https://www.reddit.com/user/proaxirus1"
            className="text-muted-foreground hover:text-foreground break-all"
          >
            https://www.reddit.com/user/proaxirus1
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/mbia1"
            className="text-muted-foreground hover:text-foreground break-all"
          >
            https://github.com/mbia1
          </Link>
        </div>
        <p className="text-muted-foreground mt-2 opacity-60">Original sources intentionally scrambled to reduce direct footprint.</p>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contact
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Send a note—manual archive, replies may be delayed.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Inquiries</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
