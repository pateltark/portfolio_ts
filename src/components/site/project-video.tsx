// Renders a project demo video. Accepts:
//  - YouTube link  (youtube.com/watch?v=… or youtu.be/…)
//  - Loom link     (loom.com/share/…)
//  - Vimeo link    (vimeo.com/…)
//  - A direct file (/videos/demo.mp4 placed in the public/ folder, or any .mp4/.webm URL)

function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url, "https://example.com");
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (host.endsWith("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return url;
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "loom.com") return `https://www.loom.com/embed/${u.pathname.split("/").pop()}`;
    if (host === "vimeo.com") return `https://player.vimeo.com/video/${u.pathname.split("/").pop()}`;
  } catch {
    /* fall through */
  }
  return null;
}

export function ProjectVideo({ src, title }: { src: string; title: string }) {
  const embed = toEmbedUrl(src);
  return (
    <div className="panel mt-10 overflow-hidden">
      <div className="aspect-video w-full bg-secondary">
        {embed ? (
          <iframe
            src={embed}
            title={`${title} demo video`}
            className="size-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <video src={src} controls preload="metadata" className="size-full" />
        )}
      </div>
    </div>
  );
}
