import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tark Patel — AI Engineer" },
      { name: "description", content: "Get in touch with Tark Patel about full-time AI engineering roles." },
      { property: "og:title", content: "Contact Tark Patel" },
      { property: "og:description", content: "Hiring an AI engineer? Send a message." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function ContactPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Job opportunity — ${String(f.get("name") ?? "")}`;
    const body = `${String(f.get("message") ?? "")}\n\n— ${String(f.get("name") ?? "")} (${String(f.get("email") ?? "")})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="relative">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">contact</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            Let's talk.
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Recruiter or hiring manager — tell me about the role and I'll get back within 24 hours.
          </p>
          <div className="mt-10 space-y-3">
            {[
              { href: `mailto:${PROFILE.email}`, icon: Mail, label: PROFILE.email },
              { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: PROFILE.github, icon: Github, label: "GitHub" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="panel panel-interactive flex items-center gap-4 p-4">
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><l.icon className="size-4" /></span>
                <span className="text-sm text-foreground">{l.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="panel space-y-5 p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-sm text-muted-foreground">Name</span>
              <input name="name" required maxLength={100} className={fieldClass} placeholder="Your name" />
            </label>
            <label className="block space-y-2">
              <span className="text-sm text-muted-foreground">Email</span>
              <input name="email" type="email" required maxLength={200} className={fieldClass} placeholder="you@company.com" />
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-sm text-muted-foreground">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              maxLength={2000}
              className={fieldClass}
              placeholder="Role, team and what you're looking for…"
            />
          </label>
          <Button type="submit" variant="glow" size="xl" className="w-full">
            <Send /> Send message
          </Button>
          <p className="text-center text-xs text-muted-foreground">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </div>
  );
}