import { Bot, Brain, Cpu, Database, Eye, MessageSquareText, Workflow, type LucideIcon } from "lucide-react";
import type { Category } from "@/data/projects";

export const CATEGORY_META: Record<Category, { icon: LucideIcon; label: string }> = {
  ML: { icon: Cpu, label: "Machine Learning" },
  DL: { icon: Brain, label: "Deep Learning" },
  CV: { icon: Eye, label: "Computer Vision" },
  NLP: { icon: MessageSquareText, label: "NLP & LLMs" },
  RAG: { icon: Database, label: "RAG Systems" },
  "Agentic AI": { icon: Bot, label: "Agentic AI" },
  MLOps: { icon: Workflow, label: "MLOps" },
};
