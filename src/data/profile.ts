// Personal details shown across the site. Edit freely.
export const PROFILE = {
  name: "Tark Patel",
  initials: "TP",
  title: "AI Engineer",
  tagline: "I build AI agents, RAG systems and vision models that move from notebook to production.",
  location: "India · open to remote",
  email: "tarkpatidar@gmail.com",
  github: "https://github.com/pateltark",
  linkedin: "https://www.linkedin.com/",
  // Add a link to your resume PDF to show the "Download resume" button.
  resumeUrl: "",
  availability: "Open to full-time roles & freelance projects",
};

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "SQL", "C++"] },
  { group: "ML / DL", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face"] },
  { group: "LLMs & Agents", items: ["LangGraph", "LlamaIndex", "OpenAI", "vLLM", "LoRA / QLoRA"] },
  { group: "Vision", items: ["OpenCV", "YOLO", "MediaPipe", "Segment Anything"] },
  { group: "Data & Vector", items: ["Qdrant", "pgvector", "Pinecone", "Postgres", "Spark"] },
  { group: "MLOps", items: ["Docker", "Kubernetes", "MLflow", "FastAPI", "AWS / GCP"] },
];

// Placeholder experience — replace with your own roles.
export const EXPERIENCE: { role: string; org: string; period: string; points: string[] }[] = [
  { role: "AI Engineer", org: "Company Name", period: "2024 — Present", points: ["What you built and the impact it had", "A second key achievement"] },
  { role: "Machine Learning Engineer", org: "Company Name", period: "2022 — 2024", points: ["What you built and the impact it had", "A second key achievement"] },
  { role: "B.Tech, Computer Science", org: "University Name", period: "2018 — 2022", points: ["Specialisation, thesis or honours"] },
];

export const SERVICES: { title: string; body: string; tags: string[] }[] = [
  { title: "AI Agents & Automation", body: "Tool-using agents that plan, act and hand off to humans — for support, sales, research and internal ops.", tags: ["LangGraph", "Function calling", "Evals"] },
  { title: "RAG & Knowledge Assistants", body: "Chat with your documents: hybrid search, reranking and cited answers your team can trust.", tags: ["Vector DBs", "Reranking", "Guardrails"] },
  { title: "Computer Vision", body: "Detection, segmentation and OCR pipelines, optimised for cloud or edge devices.", tags: ["YOLO", "Segmentation", "Edge"] },
  { title: "Custom ML Models", body: "Forecasting, classification and recommendation models with clear, explainable outputs.", tags: ["Tabular", "Time series", "SHAP"] },
  { title: "LLM Fine-tuning", body: "Adapt open models to your domain and tone, then serve them fast and affordably.", tags: ["LoRA", "vLLM", "Distillation"] },
  { title: "MLOps & Deployment", body: "Take models from notebook to production with monitoring, CI/CD and cost control.", tags: ["Docker", "K8s", "MLflow"] },
];
