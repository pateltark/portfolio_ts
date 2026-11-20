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
  summary: "An agentic AI-powered incident investigation system that analyzes application logs, gathers evidence, identifies potential root causes, and generates actionable investigation reports.",
  description: "Built an AI-powered incident investigation workflow using LangGraph and Pydantic. The system collects application logs from local log files or AWS CloudWatch, parses and normalizes log events, and stores them in ClickHouse with service metadata maintained in PostgreSQL. During an investigation, the agent uses structured evidence-collection tools to analyze error rates, latency spikes, and new error patterns. Integrated Groq-powered LLM reasoning to generate evidence-grounded investigation reports containing symptoms, potential root causes, recommended solutions, and confidence levels.",
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
    "Designed a stateful incident investigation workflow using LangGraph and Pydantic.",
    "Built log collection and normalization supporting local application logs and AWS CloudWatch.",
    "Integrated ClickHouse for log storage and PostgreSQL for service metadata.",
    "Implemented structured tools for collecting error-rate, latency, and error-pattern evidence.",
    "Generated structured incident reports with potential root causes, recommended solutions, and confidence levels."
  ],
  github: "https://github.com/pateltark/ai-incident",
},

  {
    slug: "project-2",
    title: "Project 2",
    summary: "One-line summary of Project 2 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 2 here.",
    categories: ["RAG", "NLP"],
    tech: ["LlamaIndex", "Qdrant", "Next.js"],
    year: 2025,
    featured: true,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-3",
    title: "Project 3",
    summary: "One-line summary of Project 3 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 3 here.",
    categories: ["CV", "DL"],
    tech: ["YOLOv8", "PyTorch", "TensorRT"],
    year: 2025,
    featured: true,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-4",
    title: "Project 4",
    summary: "One-line summary of Project 4 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 4 here.",
    categories: ["ML"],
    tech: ["XGBoost", "Scikit-learn", "Pandas"],
    year: 2025,
    featured: true,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  
  {
    slug: "project-6",
    title: "Project 6",
    summary: "One-line summary of Project 6 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 6 here.",
    categories: ["DL", "NLP"],
    tech: ["Hugging Face", "QLoRA", "vLLM"],
    year: 2025,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-7",
    title: "Project 7",
    summary: "One-line summary of Project 7 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 7 here.",
    categories: ["CV"],
    tech: ["OpenCV", "MediaPipe"],
    year: 2025,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-8",
    title: "Project 8",
    summary: "One-line summary of Project 8 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 8 here.",
    categories: ["MLOps"],
    tech: ["MLflow", "Kubernetes", "GitHub Actions"],
    year: 2025,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-9",
    title: "Project 9",
    summary: "One-line summary of Project 9 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 9 here.",
    categories: ["Agentic AI", "RAG"],
    tech: ["LangGraph", "GPT-4o", "FastAPI"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-10",
    title: "Project 10",
    summary: "One-line summary of Project 10 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 10 here.",
    categories: ["RAG", "NLP"],
    tech: ["LlamaIndex", "Qdrant", "Next.js"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-11",
    title: "Project 11",
    summary: "One-line summary of Project 11 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 11 here.",
    categories: ["CV", "DL"],
    tech: ["YOLOv8", "PyTorch", "TensorRT"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-12",
    title: "Project 12",
    summary: "One-line summary of Project 12 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 12 here.",
    categories: ["ML"],
    tech: ["XGBoost", "Scikit-learn", "Pandas"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-13",
    title: "Project 13",
    summary: "One-line summary of Project 13 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 13 here.",
    categories: ["Agentic AI"],
    tech: ["OpenAI Agents SDK", "Docker"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-14",
    title: "Project 14",
    summary: "One-line summary of Project 14 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 14 here.",
    categories: ["DL", "NLP"],
    tech: ["Hugging Face", "QLoRA", "vLLM"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-15",
    title: "Project 15",
    summary: "One-line summary of Project 15 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 15 here.",
    categories: ["CV"],
    tech: ["OpenCV", "MediaPipe"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-16",
    title: "Project 16",
    summary: "One-line summary of Project 16 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 16 here.",
    categories: ["MLOps"],
    tech: ["MLflow", "Kubernetes", "GitHub Actions"],
    year: 2024,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-17",
    title: "Project 17",
    summary: "One-line summary of Project 17 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 17 here.",
    categories: ["Agentic AI", "RAG"],
    tech: ["LangGraph", "GPT-4o", "FastAPI"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-18",
    title: "Project 18",
    summary: "One-line summary of Project 18 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 18 here.",
    categories: ["RAG", "NLP"],
    tech: ["LlamaIndex", "Qdrant", "Next.js"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-19",
    title: "Project 19",
    summary: "One-line summary of Project 19 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 19 here.",
    categories: ["CV", "DL"],
    tech: ["YOLOv8", "PyTorch", "TensorRT"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-20",
    title: "Project 20",
    summary: "One-line summary of Project 20 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 20 here.",
    categories: ["ML"],
    tech: ["XGBoost", "Scikit-learn", "Pandas"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-21",
    title: "Project 21",
    summary: "One-line summary of Project 21 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 21 here.",
    categories: ["Agentic AI"],
    tech: ["OpenAI Agents SDK", "Docker"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-22",
    title: "Project 22",
    summary: "One-line summary of Project 22 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 22 here.",
    categories: ["DL", "NLP"],
    tech: ["Hugging Face", "QLoRA", "vLLM"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-23",
    title: "Project 23",
    summary: "One-line summary of Project 23 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 23 here.",
    categories: ["CV"],
    tech: ["OpenCV", "MediaPipe"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
  {
    slug: "project-24",
    title: "Project 24",
    summary: "One-line summary of Project 24 — what it does and why it matters.",
    description: "Describe the problem, your approach and the outcome of Project 24 here.",
    categories: ["MLOps"],
    tech: ["MLflow", "Kubernetes", "GitHub Actions"],
    year: 2023,
    highlights: ["Key result or metric", "Another highlight"],
    github: "https://github.com/",
  },
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
