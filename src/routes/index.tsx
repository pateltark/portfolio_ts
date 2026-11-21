import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { CATEGORY_META } from "@/components/site/category-icon";
import { CATEGORIES, PROJECTS, countByCategory } from "@/data/projects";
import { PROFILE, SERVICES } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tark Patel — AI Engineer | Agents, RAG & Computer Vision" },
      { name: "description", content: `${PROFILE.tagline} Explore ${PROJECTS.length}+ projects across ML, deep learning, CV, RAG and agentic AI.` },
      { property: "og:title", content: "Tark Patel — AI Engineer" },
      { property: "og:description", content: PROFILE.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);
  const counts = countByCategory(PROJECTS);
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr]">
         <div className="flex flex-col">
          <span className="chip w-fit bg-card">
            <span className="size-1.5 rounded-full bg-signal" />
            {PROFILE.availability}
          </span>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] text-foreground sm:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">{PROFILE.title}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{PROFILE.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="glow" size="xl">
              <Link to="/projects">
                Explore {PROJECTS.length} projects <ArrowRight />
              </Link>
            </Button>
            {PROFILE.resumeUrl ? (
              <Button asChild variant="hollow" size="xl">
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer"><Download /> Download resume</a>
              </Button>
            ) : (
              <Button asChild variant="hollow" size="xl">
                <Link to="/services"><Sparkles /> Hire me for a project</Link>
              </Button>
            )}
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: `${PROJECTS.length}+`, v: "AI projects shipped" },
              { k: `${CATEGORIES.length}`, v: "AI domains" },
              { k: `${PROJECTS.filter((p) => p.demo || p.github).length}`, v: "Open source / live demos" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
         </div>
          <TerminalCard />
        </div>
      </section>

      {/* Domains */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="expertise" title="Where I work across the AI stack">
          From classic machine learning to autonomous agents — click a domain to see the projects.
        </SectionHeading>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            const { icon: Icon, label } = CATEGORY_META[c];
            return (
              <Link key={c} to="/projects" hash={c} className="panel panel-interactive group flex items-center gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition ">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{label}</span>
                  <span className="text-xs text-muted-foreground">{counts[c]} projects</span>
                </span>
              </Link>
            );
          })}
          <Link to="/projects" className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-input p-5 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="featured" title="Selected work" />
          <Button asChild variant="hollow" className="rounded-md">
            <Link to="/projects">All projects <ArrowRight /></Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} index={PROJECTS.indexOf(p)} />
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="for teams & founders" title={<>Need AI built? Let's ship it.</>}>
            I take on freelance projects alongside full-time opportunities.
          </SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="bg-card p-7">
                <span className="text-xs font-semibold text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="panel relative overflow-hidden bg-secondary/60 p-10 text-center sm:p-14">
          <p className="eyebrow">next step</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold text-foreground sm:text-4xl">
            Hiring or building something with AI?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Whether it's a full-time role or a project, I reply within 24 hours.
          </p>
          <Button asChild variant="glow" size="xl" className="mt-8">
            <Link to="/contact">Get in touch <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function TerminalCard() {
  const lines = [
    { p: "$", t: "eval --latest", c: "text-foreground" },
    { p: "›", t: "faithfulness ........ 0.91", c: "text-primary" },
    { p: "›", t: "latency p95 ........ 640ms", c: "text-primary" },
    { p: "$", t: "deploy --prod", c: "text-foreground" },
    { p: "✓", t: "shipped to production", c: "text-signal" },
  ];
  return (
    <div className="panel hidden overflow-hidden lg:block">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">pipeline</span>
      </div>
      <div className="space-y-2.5 p-6 font-mono text-sm">
        {lines.map((l, i) => (
          <p key={i}>
            <span className="mr-3 text-muted-foreground">{l.p}</span>
            <span className={l.c}>{l.t}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
