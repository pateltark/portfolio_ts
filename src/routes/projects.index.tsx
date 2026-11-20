import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "@/components/site/project-card";
import { CATEGORY_META } from "@/components/site/category-icon";
import { CATEGORIES, PROJECTS, countByCategory, filterProjects, type Category } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Tark Patel, AI Engineer" },
      { name: "description", content: `${PROJECTS.length} AI projects across machine learning, deep learning, computer vision, RAG and agentic AI.` },
      { property: "og:title", content: "AI Projects — Tark Patel" },
      { property: "og:description", content: "Browse ML, DL, CV, RAG and agentic AI projects, filterable by domain." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [category, setCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const counts = countByCategory(PROJECTS);

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if ((CATEGORIES as readonly string[]).includes(hash)) setCategory(hash as Category);
  }, []);

  const results = useMemo(() => filterProjects(PROJECTS, category, query), [category, query]);
  const tabs: (Category | "All")[] = ["All", ...CATEGORIES];

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">project index</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          {PROJECTS.length} projects across the AI stack. Filter by domain or search by tool.
        </p>

        <div className="sticky top-16 z-30 -mx-5 mt-10 border-b border-border bg-background/95 px-5 py-4 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {tabs.map((t) => {
                const active = category === t;
                const Icon = t === "All" ? null : CATEGORY_META[t].icon;
                return (
                  <button
                    key={t}
                    onClick={() => setCategory(t)}
                    className={cn(
                      "flex shrink-0 items-center gap-2 rounded-md border px-4 py-2 text-sm transition",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                    )}
                  >
                    {Icon && <Icon className="size-3.5" />}
                    {t}
                    <span className={cn("text-xs", active ? "opacity-70" : "opacity-50")}>
                      {t === "All" ? PROJECTS.length : counts[t]}
                    </span>
                  </button>
                );
              })}
            </div>
            <label className="relative block lg:w-64">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools, e.g. PyTorch"
                className="h-10 w-full rounded-md border border-input bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </label>
          </div>
        </div>

        {results.length === 0 ? (
          <p className="py-24 text-center text-sm text-muted-foreground">No projects match — try another filter.</p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <ProjectCard key={p.slug} project={p} index={PROJECTS.indexOf(p)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
