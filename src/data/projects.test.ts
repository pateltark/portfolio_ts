import { describe, expect, it } from "vitest";
import { PROJECTS, filterProjects, getProject } from "./projects";

describe("project filtering", () => {
  it("shows only projects in the chosen category", () => {
    const rag = filterProjects(PROJECTS, "RAG");
    expect(rag.length).toBeGreaterThan(0);
    expect(rag.every((p) => p.categories.includes("RAG"))).toBe(true);
    expect(rag.length).toBeLessThan(PROJECTS.length);
  });

  it("matches search text against tech used", () => {
    const results = filterProjects(PROJECTS, "All", "yolov8");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((p) => p.tech.includes("YOLOv8"))).toBe(true);
  });

  it("has unique project links", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(getProject("project-1")?.title).toBe("Project 1");
  });
});
