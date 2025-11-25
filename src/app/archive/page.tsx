import { Background } from "@/components/background";
import { ColorCodedText } from "@/components/color-coded-text";
import { selections } from "@/data/selections";

export const metadata = {
  title: "Archive · Nanami",
  description: "Manual playlist archive snapshot. Encryption fragments, takedown preparedness.",
};

export default function ArchivePage() {
  return (
    <Background className="via-muted to-muted/80">
      {/* Added extra top padding to avoid navbar overlap */}
      <section className="container pt-48 pb-32 lg:pt-56 lg:pb-40">
        <h1 className="text-2xl md:text-4xl tracking-tight">Archive</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
          Objective: classify playlists, keep record of uploaded songs for inevitable takedown. Decrypted titles where recoverable. AES-encrypted titles retain lost keys. Notes in gray, recs in green, links in blue.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selections.map((s) => (
            <a
              key={s.slug}
              href={`/selections/${s.slug}`}
              className="group rounded-lg border bg-muted/40 p-4 transition-colors hover:bg-muted"
            >
              <h2 className="text-sm font-semibold tracking-wide">
                {s.title}
              </h2>
              <p className="text-muted-foreground mt-2 line-clamp-3 text-xs leading-relaxed">
                {s.summary}
              </p>
              {s.tracklist && (
                <div className="mt-3 max-h-32 overflow-hidden rounded border bg-background p-2">
                  <ol className="space-y-0.5 text-[10px] font-mono">
                    {s.tracklist.slice(0, 5).map((t, i) => (
                      <li key={i}>
                        <ColorCodedText text={t} />
                      </li>
                    ))}
                  </ol>
                  <div className="text-[10px] text-muted-foreground opacity-50 mt-1">
                    + snapshot ({s.tracklist.length} total)
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="mt-16 text-[10px] text-muted-foreground opacity-60 space-y-1">
          <p>Color system: <span className="text-muted-foreground">gray = note</span>, <span className="text-green-500">green = recommendation</span>, <span className="text-blue-500">blue = link</span>.</p>
          <p>Encryption: Some titles use AES-128 CBC; keys intentionally discarded.</p>
          <p>No algorithm. Manual indexing. High bitrate preferred (lost often).</p>
        </div>
      </section>
    </Background>
  );
}