import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORY_META } from "@/components/site/category-icon";
import { ProjectVideo } from "@/components/site/project-video";
import { PROJECTS, getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — Tark Patel" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.title} — Tark Patel, AI Engineer` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Tark Patel` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="text-3xl font-semibold text-foreground">Project not found</h1>
      <Button asChild variant="hollow" className="mt-6 rounded-md">
        <Link to="/projects">Back to projects</Link>
      </Button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const i = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length]!;
  const Icon = CATEGORY_META[project.categories[0] ?? "ML"].icon;

  return (
    <article className="relative">
      <div className="mx-auto max-w-4xl px-5 py-16">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs text-muted-foreground transition hover:text-foreground">
          <ArrowLeft className="size-3.5" /> All projects
        </Link>
        <div className="mt-10 flex items-center gap-4">
          <span className="grid size-14 place-items-center rounded-xl bg-secondary text-primary">
            <Icon className="size-6" />
          </span>
          <span className="text-xs text-muted-foreground">
            #{String(i + 1).padStart(2, "0")} · {project.year}
          </span>
        </div>
        <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <Button asChild variant="hollow" className="rounded-md">
              <a href={project.github} target="_blank" rel="noreferrer"><Github /> Source code</a>
            </Button>
          )}
          {project.demo && (
            <Button asChild variant="glow" className="rounded-md">
              <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink /> Live demo</a>
            </Button>
          )}
        </div>

        {project.video && <ProjectVideo src={project.video} title={project.title} />}

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_260px]">
          <div className="panel p-8">
            <p className="eyebrow">overview</p>
            <p className="mt-4 leading-relaxed text-foreground/90">{project.description}</p>
            <p className="eyebrow mt-10">highlights</p>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-foreground/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" /> {h}
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="panel p-6">
              <p className="eyebrow">domain</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.categories.map((c) => (
                  <span key={c} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{c}</span>
                ))}
              </div>
            </div>
            <div className="panel p-6">
              <p className="eyebrow">stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </aside>
        </div>

        <Link to="/projects/$slug" params={{ slug: next.slug }} className="panel panel-interactive mt-14 flex items-center justify-between p-6">
          <span>
            <span className="eyebrow">next project</span>
            <span className="mt-1 block text-lg text-foreground">{next.title}</span>
          </span>
          <ArrowRight className="size-5 text-primary" />
        </Link>
      </div>
    </article>
  );
}
