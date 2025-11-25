import {
  Code,
  Smartphone,
  Server,
  Database,
  GitMerge,
  SquareTerminal,
  Linkedin,
  Github,
  Mail,
  GraduationCap,
  Award,
  Briefcase,
  Lightbulb,
  type LucideIcon,
  Star,
  Trophy,
  Rocket
} from 'lucide-react';

export const personalData = {
  name: "Aditya",
  title: "iOS Developer",
  bio: "A passionate iOS Developer with a knack for creating elegant, efficient, and user-friendly applications. Experienced in building features from the ground up and working in fast-paced, collaborative environments.",
  email: "aditya.dev@example.com",
  social: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ],
  cvUrl: "/aditya-resume.pdf"
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: LucideIcon;
}

export const experiences: Experience[] = [
  {
    company: "RedDoorz",
    role: "iOS Developer",
    period: "2022 - Present",
    description: [
      "Engineered and maintained features for the RedDoorz iOS application, focusing on scalability and user experience.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Worked extensively with Swift, SwiftUI, and UIKit to build a seamless user interface.",
      "Integrated REST APIs to connect the application to backend services.",
    ],
    technologies: ["Swift", "SwiftUI", "UIKit", "REST APIs", "Combine"],
    icon: Briefcase,
  },
  // Add other relevant positions here if available
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Hotel Booking App",
    description: "A personal project to replicate and improve upon core hotel booking functionalities. Focused on a clean user interface and smooth user experience.",
    technologies: ["SwiftUI", "Combine", "CoreData", "MapKit"],
    imageUrl: "https://picsum.photos/seed/hotelApp/600/400",
    imageHint: "hotel booking",
    link: "https://github.com"
  },
  {
    title: "RedSeller Partner Platform",
    description: "A platform for RedDoorz partners to manage their properties. Implemented features for real-time updates and analytics.",
    technologies: ["Swift", "UIKit", "Firebase", "REST APIs"],
    imageUrl: "https://picsum.photos/seed/redseller/600/400",
    imageHint: "partner platform",
  },
  {
    title: "Travel and Rewards App",
    description: "A concept app for a travel and rewards program. Designed and developed a proof-of-concept with a focus on engagement and gamification.",
    technologies: ["SwiftUI", "Lottie", "Core Animation", "Node.js"],
    imageUrl: "https://picsum.photos/seed/growtravel/600/400",
    imageHint: "travel rewards",
  },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; icon: LucideIcon | null }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Swift", icon: null },
      { name: "Java", icon: null },
      { name: "Python", icon: null },
    ],
  },
  {
    title: "Technologies & Frameworks",
    icon: Smartphone,
    skills: [
      { name: "SwiftUI", icon: null },
      { name: "UIKit", icon: null },
      { name: "Combine", icon: null },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    title: "Databases & Backend",
    icon: Server,
    skills: [
      { name: "Firebase", icon: Database },
      { name: "CoreData", icon: null },
      { name: "Node.js", icon: null },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: SquareTerminal,
    skills: [
      { name: "Git", icon: GitMerge },
      { name: "Xcode", icon: null },
      { name: "Jira", icon: null },
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  coursework: string[];
  icon: LucideIcon;
}

export const education: Education[] = [
  {
    institution: "NIET Greater Noida",
    degree: "Bachelor of Technology in Computer Science",
    period: "2018 - 2022",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Machine Learning"],
    icon: GraduationCap,
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    title: "LeetCode Problem Solver",
    description: "Consistently solved 500+ problems on LeetCode, focusing on Data Structures and Algorithms.",
    icon: Star,
  },
  {
    title: "CodeChef Global Rank",
    description: "Achieved a global ranking in the top tier in various monthly competitive programming contests on CodeChef.",
    icon: Trophy,
  },
  {
    title: "Project Showcase Winner",
    description: "Awarded first place in the annual university project showcase for an innovative machine learning application.",
    icon: Award,
  },
];

export const navigationLinks = [
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Rocket },
  { name: 'Skills', href: '#skills', icon: Lightbulb },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Achievements', href: '#achievements', icon: Award },
];
