import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { EXPERIENCE, PROFILE, SKILLS } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tark Patel — AI Engineer" },
      { name: "description", content: "Background, experience and technical skills of Tark Patel, AI engineer specialising in agents, RAG and computer vision." },
      { property: "og:title", content: "About Tark Patel" },
      { property: "og:description", content: "Experience, skills and approach of an AI engineer who ships." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">about</p>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              Hi, I'm {PROFILE.name.split(" ")[0]}.
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm an AI engineer who turns research ideas into reliable products — from fine-tuned models and
                vision pipelines to retrieval systems and autonomous agents.
              </p>
              <p>
                I care about the unglamorous parts: clean data, honest evaluation, latency and cost. That's what
                makes AI useful outside a notebook.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="chip bg-card"><MapPin className="size-3.5" /> {PROFILE.location}</span>
              {PROFILE.resumeUrl && (
                <Button asChild variant="hollow" className="rounded-md">
                  <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer"><Download /> Resume</a>
                </Button>
              )}
              <Button asChild variant="glow" className="rounded-md">
                <Link to="/contact">Contact me <ArrowRight /></Link>
              </Button>
            </div>
          </div>
          <div className="panel relative grid aspect-square place-items-center overflow-hidden bg-secondary/60">
            <span className="text-7xl font-semibold text-primary">{PROFILE.initials}</span>
            <span className="absolute bottom-5 left-5 text-xs text-muted-foreground">Add your photo here</span>
          </div>
        </div>

        <section className="mt-28">
          <SectionHeading eyebrow="experience" title="Where I've worked" />
          <ol className="mt-12 space-y-4">
            {EXPERIENCE.map((e) => (
              <li key={e.role + e.period} className="panel grid gap-4 p-7 md:grid-cols-[200px_1fr]">
                <span className="text-sm font-medium text-primary">{e.period}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {e.role} <span className="text-muted-foreground">· {e.org}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3"><span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28">
          <SectionHeading eyebrow="toolkit" title="Skills & stack" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g) => (
              <div key={g.group} className="panel p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
