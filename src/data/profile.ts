// Personal details shown across the site. Edit freely.
export const PROFILE = {
  name: "Tark Patel",
  initials: "TP",
  title: "AI Engineer",
  tagline: "I build AI agents, RAG systems and vision models that move from notebook to production.",
  location: "India · open to remote",
  email: "tarkpatidar@gmail.com",
  github: "https://github.com/pateltark",
  linkedin: "https://www.linkedin.com/in/tark-patel",
  // Add a link to your resume PDF to show the "Download resume" button.
  resumeUrl: "",
  availability: "Open to full-time roles",
};

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "SQL", "C++"] },
  { group: "ML / DL", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face"] },
  { group: "LLMs & Agents", items: ["LangGraph", "LlamaIndex", "OpenAI", "vLLM", "LoRA / QLoRA"] },
  { group: "Vision", items: ["OpenCV", "YOLO", "MediaPipe", "Segment Anything"] },
  { group: "Data & Vector", items: ["Redis", "Qdrant", "pgvector", "Pinecone", "Postgres", "FalcorDB (Graph DB)", "CrateDB"] },
  { group: "MLOps", items: ["Docker", "Kubernetes", "MLflow", "FastAPI", "AWS", "CICD (Github Actions)"] },
];

// Placeholder experience — replace with your own roles.
export const EXPERIENCE: { role: string; org: string; period: string; points: string[] }[] = [
  {
    role: "AI Engineer", org: "Avea Media Labs", period: "2025 — Present", points: [
      "Developed and deployed local AI applications using LLMs, fine-tuned models, custom tools, and multi-database architectures for real-time data retrieval and automation.",
      "Optimized inference latency and concurrent request handling using vLLM, integrating scalable AI pipelines with MQTT, PostgreSQL, Redis, Graph Db and vector search."
    ]
  },
  // { role: "Machine Learning Engineer", org: "Company Name", period: "2022 — 2024", points: ["What you built and the impact it had", "A second key achievement"] },
  // { role: "B.Tech, Computer Science", org: "University Name", period: "2018 — 2022", points: ["Specialisation, thesis or honours"] },
];
