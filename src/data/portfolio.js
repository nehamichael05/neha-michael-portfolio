export const person = {
  name: "Neha Michael",
  role: "Computer Science Student | Cloud Computing",
  tagline: "I like building projects that solve real problems and explaining them in plain words.",
  location: "Chennai, India",
  email: "nehamichael05@gmail.com",
  github: "https://github.com/nehamichael05",
  linkedin: "https://www.linkedin.com/in/neha-michael-62b478286/",
  bio: "Final-year Computer Science student at SRM Institute of Science and Technology, specializing in cloud computing. I have built a smart waste bin system, a grocery management app and a traffic prediction model, and I co-authored a published research paper.",
  avatarInitials: "NM",
}

export const skills = [
  { category: "Languages", items: ["Python", "C", "C++", "Java", "JavaScript"] },
  { category: "Cloud", items: ["Microsoft Azure", "AWS", "Firebase"] },
  { category: "Web", items: ["React", "Node.js", "Express.js", "HTML", "CSS"] },
  { category: "Data & ML", items: ["SQL", "MongoDB", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "CatBoost", "Power BI"] },
  { category: "Tools", items: ["Git", "GitHub"] },
]

export const projects = [
  {
    id: 1,
    title: "AI-Integrated Digital Twin for Smart Waste Bins",
    description: "Tracks the fill level of 10 garbage bins in Chennai in real time. Sensors send readings through a Flask API to Firebase, and a Random Forest model predicts overflows and ranks bins by priority, reaching 95.78% accuracy.",
    tags: ["Python", "Flask", "Firebase", "Random Forest", "IoT"],
    github: "",
    live: "",
    color: "from-emerald-500 to-teal-600",
    emoji: "🗑️",
  },
  {
    id: 2,
    title: "Real-Time Traffic Prediction Framework",
    description: "A machine learning framework that predicts urban traffic congestion. I compared XGBoost, CatBoost and Random Forest models and built Power BI dashboards so the patterns are easy to read. This work led to a published research paper.",
    tags: ["Python", "XGBoost", "CatBoost", "Pandas", "Power BI"],
    github: "",
    live: "",
    color: "from-sky-500 to-blue-600",
    emoji: "🚦",
  },
  {
    id: 3,
    title: "FreshMart Grocery Management System",
    description: "A grocery store app in plain JavaScript with separate screens for customers, staff and admin. It covers inventory, billing with barcode simulation, suppliers and sales charts built with Chart.js.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/nehamichael05/FreshMart",
    live: "",
    color: "from-violet-500 to-purple-600",
    emoji: "🛒",
  },
]

export const experience = [
  {
    company: "Cognifyz Technologies",
    role: "Web Development Intern",
    period: "Jun 2025 — Jul 2025",
    description: "Completed web development assignments end to end, worked with the team on new features and debugged issues as they came up.",
  },
  {
    company: "ICAFT (Peer-Reviewed Paper)",
    role: "Co-Author",
    period: "2025",
    description: "Co-authored a paper on real-time traffic prediction and route optimization using a custom hybrid XatBoost algorithm, which reached 85.6% prediction accuracy.",
  },
]

export const stats = [
  { label: "Projects Built",      value: "3"    },
  { label: "Cloud Certificates",  value: "2"    },
  { label: "Published Paper",     value: "1"    },
  { label: "Graduating",          value: "2027" },
]
