import { Experience, Project, BlogPost, Education, SkillCategory } from './types';

export const PROFILE_NAME = "Shalom Ezekiel";
export const PROFILE_TITLE = "Software Engineer";
export const PROFILE_BIO = "Building scalable software applications with modern technology. Focused on performance and user experience";

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/shalom-ezekiel",
  LINKEDIN: "https://linkedin.com",
  TWITTER: "https://x.com/shalom_ezekiel",
  EMAIL: "mailto:shalomezekiel112@gmail.com"
};

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "Professional Diploma in Full-Stack Software Engineering",
    institution: "NIIT (India)",
    period: "2022 – 2024",
    achievement: "Graduated as a Professional Software Engineer with hands-on experience in web and mobile application development."
  },
  {
    id: "edu2",
    degree: "Ethical Hacking (Hands-on Training)",
    institution: "TryHackMe",
    period: "2023",
    achievement: "Specialized in penetration testing, digital forensics, and practical ethical hacking skills."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, high-performance web applications with modern architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "State Management", "Performance Optimization"],
    icon: "layout"
  },
  {
    id: "backend",
    title: "Backend Systems",
    description: "Architecting robust server-side applications and secure REST APIs.",
    skills: ["Node.js", "Express.js", "Python", "Flask", "FastAPI", "Auth & Security"],
    icon: "server"
  },
  {
    id: "database",
    title: "Data & Infrastructure",
    description: "Designing schemas and managing deployments.",
    skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "firebase", "Nginx", "Linux"],
    icon: "database"
  },
  {
    id: "security",
    title: "Security & Soft Skills",
    description: "Ethical hacking foundations and collaborative problem solving.",
    skills: ["Penetration Testing", "Digital Forensics", "GitHub/GitLab", "Team Collaboration", "Critical Thinking"],
    icon: "shield"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: "Software Engineer",
    company: "Nebula AI Solutions",
    period: "2024 - Present",
    description: [
      "Architecting scalable frontend architectures for generative AI tools.",
      "Leading a team of 5 developers in migrating legacy monoliths to micro-frontends.",
      "Implemented real-time collaboration features using WebSockets and CRDTs."
    ]
  },
  {
    id: '2',
    role: "Frontend Developer",
    company: "TechFlow Systems",
    period: "2021 - 2024",
    description: [
      "Developed award-winning e-commerce platforms using Next.js and Tailwind.",
      "Reduced page load times by 40% through advanced caching strategies and bundle optimization.",
      "Created a reusable component library used across 12 different internal products."
    ]
  },
  {
    id: '3',
    role: "Junior Web Developer",
    company: "Creative Spark",
    period: "2019 - 2021",
    description: [
      "Collaborated with designers to translate Figma designs into pixel-perfect React components.",
      "Maintained and improved existing client websites built on various CMS platforms."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "lazzipay",
    description: " is a voice-first accessibility layer for fintech apps. It helps users execute banking actions safely through voice commands, without ever handling money directly",
    techStack: ["React-typescript", "Redis", "FastAPI", "IoT"],
    imageUrl: "/images/LazziPay.png",
    link: "https://lazzi-pay.vercel.app/"
  }, 
  {
    id: 'p2',
    title: "CUSUB",
    description: "Optimize your subscriptions spot redundancies and control costs instantly.",
    techStack: ["React","TypeScript","Tailwind CSS","FastAPI / Node.js","PostgreSQL","Redis ","WebSockets","Docker / Kubernetes"
,],
    imageUrl: "images/Cusub.png",
    link: "https://cusub.vercel.app/"
  },
  {
    id: 'p3',
    title: "Rach.finance",
    description: "Boraderless payments powered by blockchain  send, receive, and trade crypto globally  p2p  .",
    techStack: ["React", "blockchain", "solidity","goland"],
    imageUrl: "images/Rach-finance.png",
    link: "https://www.rach.finance/"
  },
  {
    id: 'p4',
    title: "delivery-platform",
    description: "A custom delivery platform that streamlines order management and real-time tracking for logistics companies.",
    techStack: ["python", "javascript", "tailwind CSS","postgresql"],
    imageUrl: "images/delivery-platform.png",
    link: "https://delivery-platform-nine.vercel.app/"
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: "The Death of the Loading Spinner",
    excerpt: "Why optimistic UI and skeleton screens are mandatory in 2026.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    tags: ["UX", "Performance"],
    content: "In the era of instant gratification, the loading spinner is a relic of the past. Users expect immediate feedback. Optimistic UI updates, where the interface anticipates a successful server response, are no longer optional—they are the standard.\n\nCombined with skeleton screens that map out the content layout before data arrives, we can reduce the perceived latency to near zero. This post explores how to implement these patterns using React Suspense and modern state management libraries."
  },
  {
    id: 'b2',
    title: "Gemini 2.5: A Developer's Perspective",
    excerpt: "Exploring the new multimodal capabilities and how to leverage them in React apps.",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    tags: ["AI", "Gemini"],
    content: "Google's Gemini 2.5 has shifted the paradigm for frontend developers. It's not just about text completion anymore; it's about multimodal interaction. We can now stream audio, video, and code generation in real-time directly to the client.\n\nIn this article, I'll walk through building a 'Vision-to-UI' tool that takes a sketch uploaded by a user and converts it into a Tailwind CSS component using the Gemini Vision capabilities. The latency improvements in 2.5 make this viable for production workflows."
  },
  {
    id: 'b3',
    title: "Why I Switched to Bun",
    excerpt: "Reflecting on a year of using Bun as my primary runtime and package manager.",
    date: "Aug 15, 2025",
    readTime: "4 min read",
    tags: ["Backend", "Tooling"],
    content: "Speed matters. Not just for the end-user, but for the developer experience. After a year of using Bun exclusively for my side projects and increasingly for production microservices, I can't go back to Node.js for new projects.\n\nThe instant startup times, the built-in bundler, and the seamless TypeScript support out of the box have saved me countless hours of configuration. Here are the benchmarks from my latest project migration."
  }
];

export const SKILLS = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "Gemini API",
  "Docker",
  "AWS",
  "PostgreSQL"
];

// System instruction for the AI assistant
export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for Shalom Ezekiel's (showzy.dev) portfolio website. 
Your goal is to answer questions about Shalom's professional background, skills, and projects based on the following context.
Be professional, concise, and slightly witty. 
If asked about something not in the context, politely say you only know about Shalom's professional life.

Context:
Name: ${PROFILE_NAME}
Nickname: showzy.dev
Title: ${PROFILE_TITLE}
Bio: ${PROFILE_BIO}
Skills: ${SKILLS.join(', ')}
Education: ${JSON.stringify(EDUCATION)}
Detailed Skills: ${JSON.stringify(SKILL_CATEGORIES)}
Experience: ${JSON.stringify(EXPERIENCES)}
Projects: ${JSON.stringify(PROJECTS)}
Socials: ${JSON.stringify(SOCIAL_LINKS)}
`;