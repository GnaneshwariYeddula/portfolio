export const personalInfo = {
  name: "Ganeshwari Yeddula",
  officialName: "Yeddula Gnaneshwari",
  tagline: "Full-Stack MERN Developer & AI Web Designer",
  roleStatus: "Seeking SDE Internships & Full-Time Roles",
  location: "Andhra Pradesh, India",
  email: "gnaneshwariyeddula0806@gmail.com",
  phone: "+91 9398966108",
  phoneRaw: "9398966108",
  github: "https://github.com/GnaneshwariYeddula",
  linkedin: "https://www.linkedin.com/in/gnaneshwariyeddula/",
  avatar: "/profile.jpeg",
  cgpa: "8.57",
  college: "Chaitanya Bharathi Institute of Technology (CBIT), JNTUA",
  degree: "B.Tech — Computer Science & Engineering",
  graduationYear: "2023 – 2027",
  oneLiner: "Building resilient MERN applications with AI workflows and exploring the frontiers of Quantum Science.",
  languages: ["English", "Telugu (Native)"],
  interests: ["Generative AI", "Quantum Science & Qiskit", "Full-Stack MERN", "IoT & Embedded Systems"]
};

export const stats = [
  { label: "B.Tech CGPA", value: "8.57", sub: "CBIT, JNTUA", icon: "GraduationCap" },
  { label: "Patent Filed", value: "01", sub: "TRATAYANTRA IoT", icon: "Award" },
  { label: "MERN Projects", value: "6+", sub: "Production & Academic", icon: "Code2" },
  { label: "Core Interests", value: "AI + Quantum", sub: "Science & Web", icon: "Atom" },
];

export const skillCategories = [
  {
    title: "Front-End",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI/UX"]
  },
  {
    title: "Back-End & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "Django"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "MySQL", "Firebase", "AWS Basics"]
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C", "SQL"]
  },
  {
    title: "AI & Quantum Science",
    highlight: true,
    skills: [
      "AI Web Prototyping",
      "Prompt Engineering",
      "NLP (NPTEL Elite)",
      "Quantum Qubits & Gates",
      "Beginner Qiskit"
    ]
  },
  {
    title: "Developer Tools",
    skills: ["Git & GitHub", "VS Code", "Postman", "Vite"]
  }
];

export const projects = [
  {
    id: "tratayantra",
    title: "TRATAYANTRA (Gas Leakage Detection & Auto-Shutoff)",
    category: "IoT & Full-Stack",
    featured: true,
    badge: "Patent Filed",
    badgeType: "patent",
    tech: ["ESP32", "MQ-6 Sensor", "Django", "Firebase", "Servo Motor"],
    githubUrl: "https://github.com/GnaneshwariYeddula",
    points: [
      "Engineered IoT gas-leak detection with auto servo shutoff valve.",
      "Integrated Django & Firebase for instant cloud hazard alerts.",
      "National patent filed for industrial & household safety system."
    ]
  },
  {
    id: "archaeology-platform",
    title: "Archaeology Discovery Platform",
    category: "MERN Stack",
    featured: true,
    badge: "In Progress",
    badgeType: "progress",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/GnaneshwariYeddula",
    points: [
      "Community platform for archaeologists to publish discoveries & research.",
      "Designed REST APIs for threaded discussion posts and researcher profiles.",
      "End-to-end architecture: product design, MongoDB modeling, and React UI."
    ]
  },
  {
    id: "student-portal",
    title: "Student Academic Portal",
    category: "MERN Stack",
    featured: true,
    badge: "Completed",
    badgeType: "success",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/GnaneshwariYeddula/student-portal",
    points: [
      "Full-stack academic portal managing student records, grades & certificates.",
      "Built complete CRUD REST API endpoints with schema validation in MongoDB.",
      "Designed modular React frontend with responsive grade management tables."
    ]
  },
  {
    id: "realtime-chat-collab",
    title: "Real-Time Chat & Collaboration Hub",
    category: "MERN & WebSockets",
    featured: true,
    badge: "Internship Project",
    badgeType: "info",
    tech: ["React.js", "Socket.io", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/GnaneshwariYeddula/ChatApp",
    secondaryGithubUrl: "https://github.com/GnaneshwariYeddula/realtime-collab-editor",
    points: [
      "Delivered during 8-week MERN internship with live WebSockets.",
      "Real-time bidirectional messaging, online presence & multi-user sync.",
      "Clean dark UI with low-latency socket communication."
    ]
  },
  {
    id: "cbit-library-hub",
    title: "CBIT Library Resource Hub",
    category: "Front-End",
    featured: false,
    badge: "Academic",
    badgeType: "neutral",
    tech: ["TypeScript", "React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/GnaneshwariYeddula/cbit-library-hub",
    points: [
      "Digital catalog for engineering textbooks and conference papers.",
      "Fast book search and filter by author, ISBN, and department."
    ]
  },
  {
    id: "skyora-weather",
    title: "Skyora Weather App",
    category: "Web App",
    featured: false,
    badge: "API Integration",
    badgeType: "neutral",
    tech: ["React.js", "OpenWeather API", "Geolocation"],
    githubUrl: "https://github.com/GnaneshwariYeddula/skyora-weather-app",
    points: [
      "Live weather telemetry with dynamic atmospheric condition UI.",
      "Geolocation support and multi-day predictive forecast cards."
    ]
  }
];

export const experience = {
  role: "MERN Stack Web Development Intern",
  duration: "8 Weeks",
  type: "Internship Sprint",
  highlights: [
    "Delivered 3 full-stack apps end-to-end: Weather App, Real-Time Chat App, and Collaborative Real-Time Tool using MongoDB, Express.js, React.js, and Node.js.",
    "Engineered and connected REST APIs from React front-ends to Express/Node back-ends with MongoDB persistence.",
    "Independently handled requirements, cross-stack debugging, integration, and testing in an 8-week cycle."
  ]
};

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Chaitanya Bharathi Institute of Technology (CBIT), JNTUA",
    year: "2023 – 2027",
    score: "CGPA: 8.57",
    highlight: "Top Academic Standing"
  },
  {
    degree: "Senior Secondary (Intermediate CBSE)",
    institution: "CBSE Board",
    year: "Completed",
    score: "77.4%",
    highlight: "Mathematics & Sciences"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "State Board",
    year: "Completed",
    score: "97.8%",
    highlight: "Distinction (Top 1%)"
  }
];

export const certifications = [
  {
    title: "Natural Language Processing (NLP)",
    issuer: "NPTEL, IIT Kharagpur",
    badge: "Elite Grade",
    icon: "Brain"
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
    badge: "Certified",
    icon: "FileCode"
  },
  {
    title: "Introduction to SQL",
    issuer: "Coursera",
    badge: "Certified",
    icon: "Database"
  },
  {
    title: "AWS Cloud Technology Workshop",
    issuer: "Reshapp Software",
    badge: "Workshop",
    icon: "Cloud"
  },
  {
    title: "Drone Technology",
    issuer: "Garuda Aerospace",
    badge: "Workshop",
    icon: "Cpu"
  },
  {
    title: "Quantum Science & Qiskit",
    issuer: "Self-Driven Research",
    badge: "Exploring",
    icon: "Atom"
  }
];
