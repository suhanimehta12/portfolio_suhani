// ─── SCREENSHOTS IMPORTS (VITE SAFE) ─────────────────────────
import video1 from "./assets/screenshots/video-1.png";
import vision1 from "./assets/screenshots/vision-1.png";
import hr1 from "./assets/screenshots/hr-1.png";

// ─── PERSONAL ───────────────────────────────────────────────
export const personal = {
  name: "Suhani Mehta",
  title: "Data Science & AI Enthusiast",
  tagline:
    "Building intelligent systems across AI, Machine Learning, and full-stack development.",
  bio:
    "I am passionate about data science, machine learning, and AI-driven applications. I enjoy building end-to-end AI pipelines that solve real-world problems using NLP, computer vision, and predictive analytics. I am actively exploring opportunities in AI/ML and software development.",
  email: "suhanimehta2812@gmail.com",
  linkedin: "https://www.linkedin.com/in/suhanimehta28122003",
  location: "Ontario, Canada",
  resumeLink: "/resume.pdf",
};

// ─── SOCIAL ─────────────────────────────────────────────────
export const social = {
  github: [
    "https://github.com/suhanimehta12",
    "https://github.com/Suhanimeh",
  ],
  linkedin: "https://www.linkedin.com/in/suhanimehta28122003",
};

// ─── SKILLS ─────────────────────────────────────────────────
export const skills = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Java"],
  },
  {
    category: "AI / ML",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "BLIP",
      "OpenCV",
      "NLP",
    ],
  },
  {
    category: "Data Science",
    items: [
      "EDA",
      "Data Cleaning",
      "Feature Engineering",
      "Data Visualization",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Computer Vision",
    items: [
      "Image Processing",
      "Segmentation",
      "Object Detection",
      "Video Frames",
      "Filters",
    ],
  },
  {
    category: "Full Stack",
    items: ["React", "Tailwind CSS", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Indexing",
      "Stored Procedures",
    ],
  },
  {
    category: "Deployment",
    items: ["Vercel", "Render", "Streamlit", "GitHub", "Docker"],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "AI Video Caption Generator",
    description: "AI system that generates captions from videos using BLIP.",
    techStack: ["FastAPI", "Python", "BLIP", "OpenCV", "PyTorch", "JS"],
    features: [
      "Video upload",
      "Key frame extraction",
      "AI caption generation",
      "Confidence scoring",
    ],
    github: "https://github.com/suhanimehta12/video-captioning-app",
    live: "https://glistening-bavarois-f92dd1.netlify.app/",
    backend: "https://video-captioning-app-pgo9.onrender.com",
    screenshots: [video1],
    featured: true,
  },

  {
    id: 2,
    title: "Comment Moderation System",
    description:
      "NLP system for toxicity, spam, and sentiment detection.",
    techStack: ["FastAPI", "Python", "scikit-learn", "React"],
    features: [
      "Toxicity detection",
      "Spam classification",
      "Sentiment analysis",
      "History tracking",
    ],
    github: "https://github.com/suhanimehta12/ai-comment-moderation",
    live: "https://ai-comment-moderation-43h1.vercel.app/",
    screenshots: [vision1],
    featured: true,
  },

  {
    id: 3,
    title: "Vision Studio",
    description:
      "Image captioning + OpenCV filters + NLP evaluation system.",
    techStack: ["React", "FastAPI", "PyTorch", "OpenCV"],
    features: [
      "Image captioning",
      "Image filters",
      "NLP evaluation",
      "Feedback system",
    ],
    github: "https://github.com/suhanimehta12/image-caption-filtering",
    screenshots: [vision1],
    featured: true,
  },

  {
    id: 4,
    title: "HR Navigator - Workforce Intelligence Platform",
    description:
      "AI-powered HR analytics system for hiring, attrition & promotion prediction.",
    techStack: ["Streamlit", "Python", "scikit-learn", "Pandas"],
    features: [
      "Hiring prediction",
      "Attrition analysis",
      "Promotion scoring",
      "Dashboards",
    ],
    github: "https://github.com/suhanimehta12/hr-navigation-tool",
    screenshots: [hr1],
    featured: true,
  },

  {
    id: 5,
    title: "EasyPass - Password Manager",
    description:
      "Secure password manager with encryption & authentication.",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    features: [
      "Authentication",
      "Encrypted storage",
      "User dashboard",
      "Stripe integration",
    ],
    github:
      "https://github.com/Suhanimeh/tmp_js_password_manager",
    featured: true,
  },

  {
    id: 6,
    title: "Neurodiagnostic Assistant",
    description:
      "AI-based MRI tumor detection and segmentation system.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Keras"],
    features: [
      "Tumor detection",
      "Segmentation",
      "CNN classification",
      "Volume estimation",
    ],
    github:
      "https://github.com/suhanimehta12/Neurodiagnostic-Decision-Support-System",
    featured: true,
  },
];

// ─── EXPERIENCE ─────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Data Scientist",
    company: "SSM Infotech Solutions Pvt. Ltd.",
    location: "Remote",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Built ML models for HR analytics (attrition, recruitment, promotion).",
      "Performed EDA, preprocessing, feature engineering.",
      "Evaluated models using accuracy, precision, recall, F1-score.",
      "Built Streamlit dashboards for insights.",
      "Built AI pipelines using BLIP + OpenCV.",
      "Worked with PyTorch, HuggingFace, Pandas, NumPy.",
    ],
  },

  {
    id: 2,
    role: "Research Assistant",
    company: "Humber Polytechnic",
    location: "Ontario, Canada",
    period: "Mar 2026 – Present",
    bullets: [
      "Collected and cleaned datasets for research.",
      "Performed EDA and trend analysis.",
      "Built dashboards and reports.",
      "Ensured data quality and documentation.",
      "Collaborated for insights and findings.",
    ],
  },
];

// ─── EDUCATION ─────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree:
      "Post Graduation in Information Technology Solutions",
    school: "Humber Polytechnic, Toronto, Canada",
    period: "Sept 2025 – Present",
  },
  {
    id: 2,
    degree:
      "B.Tech in Artificial Intelligence and Data Science",
    school: "Sarvajanik University, Surat, India",
    period: "June 2021 – May 2025",
  },
];