import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { CATEGORY_META } from "./category-icon";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = CATEGORY_META[project.categories[0] ?? "ML"].icon;
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="panel panel-interactive group relative flex h-full flex-col overflow-hidden p-6"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary">
          <Icon className="size-5" />
        </span>
        <span className="text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")} · {project.year}
        </span>
      </div>
      <h3 className="mt-6 flex items-center gap-2 text-base font-semibold text-foreground">
        {project.title}
        <ArrowUpRight className="size-4 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.categories.map((c) => (
          <span key={c} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
            {c}
          </span>
        ))}
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="chip !py-0.5 !text-[11px]">{t}</span>
        ))}
      </div>
    </Link>
  );
}
