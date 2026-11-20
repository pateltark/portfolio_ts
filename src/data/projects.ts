export const CATEGORIES = ["ML", "DL", "CV", "NLP", "RAG", "Agentic AI", "MLOps"] as const;
export type Category = (typeof CATEGORIES)[number];

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  categories: Category[];
  tech: string[];
  year: number;
  featured?: boolean;
  highlights: string[];
  github?: string;
  demo?: string;
  // Optional demo video: a YouTube / Loom / Vimeo link, or a file like "/videos/demo.mp4" in public/.
  video?: string;
}

// HOW TO EDIT: each { ... } block below is one project card.
// - slug: the web address (e.g. /projects/my-rag-bot) — lowercase, dashes, unique
// - categories: pick from CATEGORIES above; tech: tools shown as tags
// - featured: true shows it on the home page; github / demo / video are optional
// - video: YouTube/Loom/Vimeo link, or "/videos/demo.mp4" (put the file in public/videos/)
export const PROJECTS: Project[] = [

  {
    slug: "denseparse",
    title: "DenseParse",
    summary: "An end-to-end, production-grade RAG copilot for querying large PDF documents with hybrid retrieval, semantic caching, and source-grounded answers.",
    description: "Built a complete Retrieval-Augmented Generation (RAG) system that transforms large, multi-page PDF documents into an intelligent question-answering service. Implemented dense vector search with pgvector and HNSW, sparse keyword retrieval, and Reciprocal Rank Fusion (RRF) to improve retrieval quality. Integrated Redis semantic caching to reduce repeated query latency and LLM costs. Developed REST APIs using FastAPI, containerized the application with Docker, and deployed it on AWS ECS.",
    categories: ["RAG", "Generative AI", "Backend Development"],
    tech: [
      "Python",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "HNSW",
      "Redis",
      "Groq API",
      "BAAI/bge-base-en-v1.5",
      "Docker",
      "AWS ECS"
    ],
    year: 2026,
    featured: true,
    highlights: [
      "Implemented hybrid retrieval combining dense vector search and sparse keyword search using RRF.",
      "Optimized semantic query caching with Redis for faster repeated responses.",
      "Built PDF ingestion, chunking, embedding, and indexing pipelines.",
      "Generated context-grounded answers with document source references.",
      "Containerized and deployed the application on AWS ECS."
    ],
    github: "https://github.com/pateltark/DenseParse",
  },


  {
    slug: "ai-incident",
    title: "AI Incident",
    summary: "An AI-powered system that investigates application failures by analyzing logs, tracing error patterns, gathering supporting evidence, and generating reports with possible root causes and recommended fixes.",
    description: "When an application encounters errors or performance issues, developers often have to manually search through large volumes of logs to understand what went wrong. AI Incident automates this investigation process. It collects logs from local application files or AWS CloudWatch, normalizes them, and stores them in ClickHouse. When an incident occurs, an AI agent investigates the affected service by analyzing error rates, latency spikes, and newly occurring error patterns through structured tools. Using the collected evidence, it generates an investigation report explaining what happened, potential root causes, and recommended solutions with confidence levels, helping developers troubleshoot application issues more efficiently.",
    categories: ["Agentic AI"],
    tech: [
      "Python",
      "LangGraph",
      "Pydantic",
      "Groq API",
      "GPT-OSS-20B",
      "ClickHouse",
      "PostgreSQL",
      "AWS CloudWatch"
    ],
    year: 2026,
    featured: true,
    highlights: [
      "Automated application log collection from local files and AWS CloudWatch, with normalization and centralized storage in ClickHouse.",
      "Built an incident investigation agent that examines application failures, error-rate increases, latency spikes, and new error patterns.",
      "Developed structured investigation tools to collect relevant logs and supporting evidence for each incident.",
      "Integrated LangGraph to coordinate investigation steps and manage the agent's state throughout the workflow.",
      "Used Groq-powered LLM reasoning to analyze collected evidence and identify potential root causes.",
      "Generated structured investigation reports containing incident symptoms, supporting evidence, recommended fixes, and confidence levels.",
      "Used PostgreSQL to maintain service metadata and ClickHouse to handle application log data."
    ],
    github: "https://github.com/pateltark/ai-incident",
  }

];

export function filterProjects(projects: Project[], category: Category | "All", query = ""): Project[] {
  const q = query.trim().toLowerCase();
  return projects.filter((p) => {
    if (category !== "All" && !p.categories.includes(category)) return false;
    if (!q) return true;
    return [p.title, p.summary, ...p.tech].some((s) => s.toLowerCase().includes(q));
  });
}

export function countByCategory(projects: Project[]): Record<Category, number> {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c, 0])) as Record<Category, number>;
  for (const p of projects) for (const c of p.categories) counts[c] += 1;
  return counts;
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
