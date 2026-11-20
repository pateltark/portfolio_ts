import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.title}
        </p>
        <div className="flex items-center gap-2">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground">
            <Github className="size-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground">
            <Linkedin className="size-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
