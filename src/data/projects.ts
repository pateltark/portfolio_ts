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
    categories: ["RAG"],
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
  },



  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    summary: "A machine learning project that estimates house prices based on property characteristics such as living area, number of bedrooms, bathrooms, location-related features, and other housing attributes.",
    description: "Estimating a property's value requires understanding how different features influence its price. This project builds a machine learning pipeline that analyzes housing data, handles missing values and outliers, and transforms raw property attributes into meaningful features. It creates additional variables such as total square footage, total bathrooms, and house age to capture relationships that may influence property prices. Recursive Feature Elimination (RFE) is then used to select relevant features before training and comparing multiple regression models. After hyperparameter tuning and evaluation, Gradient Boosting Regressor achieved the best performance, with an R² score of 0.89 on the test set.",
    categories: ["ML"],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter Notebook"
    ],
    year: 2024,
    featured: true,
    highlights: [
      "Built a complete machine learning pipeline to estimate house prices from property characteristics.",
      "Cleaned housing data by handling missing values, detecting outliers, and preparing numerical features.",
      "Created domain-specific features such as total square footage, total bathrooms, house age, and years since renovation.",
      "Applied Recursive Feature Elimination (RFE) to identify important features and reduce dimensionality.",
      "Trained and compared Linear Regression, SGD, Random Forest, Gradient Boosting, and XGBoost regression models.",
      "Used RandomizedSearchCV for hyperparameter tuning and evaluated models using RMSE, MAE, and R².",
      "Achieved an R² score of 0.89 on the test set using Gradient Boosting Regressor."
    ],
    github: "https://github.com/pateltark/House-Price-Prediction",
  },



  {
    slug: "food-demand-forecasting",
    title: "Food Demand Forecasting",
    summary: "A machine learning application that predicts food order demand for specific meals and fulfillment centers, helping businesses plan inventory, manage resources, and make better supply chain decisions.",
    description: "Meal delivery businesses need to estimate how many orders each fulfillment center will receive to plan inventory and avoid overstocking or shortages. This project uses historical order data, meal information, pricing, promotions, and weekly trends to predict future food demand. I developed a feature engineering pipeline that captures historical demand patterns through lag features, rolling statistics, seasonal information, and pricing and promotional effects. Multiple regression models were trained and evaluated, with XGBoost selected as the final model based on its prediction performance. The trained model was integrated into an interactive Streamlit application where users can select a week, meal, and fulfillment center to get an estimated order count. The application is deployed on Hugging Face Spaces.",
    categories: ["ML"],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Streamlit",
      "Hugging Face"
    ],
    year: 2026,
    featured: true,
    highlights: [
      "Built an end-to-end machine learning pipeline to forecast weekly food orders for different meals and fulfillment centers.",
      "Engineered historical demand features using previous-week demand, rolling averages, and rolling standard deviations.",
      "Incorporated seasonal patterns, meal popularity, center-specific demand, pricing differences, and promotional effects into model training.",
      "Trained and compared XGBoost Regressor and Random Forest models, achieving an R² score of approximately 0.87.",
      "Selected XGBoost as the final model based on lower RMSE and integrated it into the prediction application.",
      "Developed an interactive Streamlit application where users can select meal, fulfillment center, and week details to generate demand predictions.",
      "Deployed the application on Hugging Face Spaces for interactive access."
    ],
    github: "https://github.com/pateltark/Food-Demand-Forecasting",
  },


  {
    slug: "potato-disease-classification",
    title: "Potato Disease Classification",
    summary: "A deep learning application that analyzes potato leaf images and identifies whether a plant is healthy or affected by Early Blight or Late Blight, providing predictions with confidence scores.",
    description: "Identifying plant diseases at an early stage can help prevent crop damage and support timely agricultural decisions. This project uses deep learning to recognize common potato leaf diseases directly from images. I trained a neural network using potato leaf images selected from the PlantVillage dataset, enabling the model to distinguish between Early Blight, Late Blight, and Healthy leaves. The trained TensorFlow model is integrated into an interactive Gradio application where users can upload a leaf image and instantly receive a predicted disease class along with its confidence score. The application is deployed on Hugging Face Spaces, making the model accessible through a web interface without requiring users to run the model locally.",
    categories: ["CV"],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pillow",
      "Gradio",
      "Hugging Face Spaces"
    ],
    year: 2025,
    featured: true,
    highlights: [
      "Developed a deep learning image classification model to identify potato leaf diseases across three classes: Early Blight, Late Blight, and Healthy.",
      "Used the PlantVillage dataset, selecting potato leaf images for model training.",
      "Trained a neural network using TensorFlow and Keras to learn visual patterns associated with different leaf conditions.",
      "Achieved 99.86% classification accuracy, as reported in the project README.",
      "Integrated the trained model into a Gradio application that accepts leaf images and returns predicted classes with confidence scores.",
      "Deployed the application on Hugging Face Spaces, making disease classification accessible through a web interface."
    ],
    github: "https://github.com/pateltark/potato-disease-classification",
  },


  {
    slug: "pneumonia-detection",
    title: "Pneumonia Detection",
    summary: "A deep learning application that analyzes chest X-ray images to classify them as Normal or Pneumonia, providing prediction results with confidence scores.",
    description: "Pneumonia detection from chest X-rays involves examining medical images to identify signs of lung infection. This project uses deep learning to automate the image classification process. I collected and prepared chest X-ray images from the Kaggle dataset and trained a neural network using TensorFlow to distinguish between Normal and Pneumonia cases. The trained model was integrated into a web application where users can upload a chest X-ray and receive an instant prediction along with its confidence score. The application is deployed on Hugging Face Spaces, making the model accessible through a simple browser interface.",
    categories: ["CV"],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Pillow",
      "Gradio",
      "Hugging Face Spaces"
    ],
    year: 2026,
    featured: true,
    highlights: [
      "Developed a deep learning image classification model to distinguish between Normal and Pneumonia chest X-ray images.",
      "Used the Kaggle Chest X-ray Images dataset to prepare training data for model development.",
      "Built and trained a neural network using TensorFlow for binary image classification.",
      "Achieved a reported model accuracy of 98.34%.",
      "Integrated the trained model into an interactive application that accepts chest X-ray uploads and returns predictions with confidence scores.",
      "Deployed the application on Hugging Face Spaces for browser-based access."
    ],
    github: "https://github.com/pateltark/Pneumonia-Detection-Using-Deep-Learning",
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
