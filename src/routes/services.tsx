import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { SERVICES } from "@/data/profile";

const STEPS = [
  { t: "Discovery call", d: "We map the problem, data and what success looks like." },
  { t: "Prototype", d: "A working proof-of-concept in 1–2 weeks, tested on your data." },
  { t: "Build & evaluate", d: "Production-grade system with evals, guardrails and monitoring." },
  { t: "Ship & hand over", d: "Deployment, documentation and support for your team." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI Engineering Services — Tark Patel" },
      { name: "description", content: "Freelance AI engineering: agents, RAG assistants, computer vision, custom ML models, LLM fine-tuning and MLOps." },
      { property: "og:title", content: "Hire Tark Patel for AI projects" },
      { property: "og:description", content: "Agents, RAG, computer vision, fine-tuning and MLOps — from prototype to production." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">services</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">
          AI that works in production, not just in demos.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          I help startups and teams design, build and ship AI systems end-to-end.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="panel panel-interactive p-7">
              <span className="text-xs font-semibold text-primary">0{i + 1}</span>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => <span key={t} className="chip !text-[11px]">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-28">
          <SectionHeading eyebrow="process" title="How we'll work together" />
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="relative border-t border-input pt-6">
                <span className="absolute -top-1.5 left-0 size-3 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground">step {i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="panel mt-28 grid items-center gap-8 p-10 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Have a project in mind?</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Free 30-min discovery call", "Fixed-scope or monthly", "NDA friendly"].map((x) => (
                <li key={x} className="flex items-center gap-2"><Check className="size-4 text-primary" /> {x}</li>
              ))}
            </ul>
          </div>
          <Button asChild variant="glow" size="xl">
            <Link to="/contact">Start a project <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
