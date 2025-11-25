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
  title: "Senior iOS Developer",
  bio: "A seasoned Senior iOS Developer with over 5 years of experience in creating robust, scalable, and user-centric mobile applications. My expertise lies in Swift, SwiftUI, and architecting complex features from conception to deployment. I thrive in collaborative, fast-paced environments, transforming ideas into high-quality software solutions.",
  email: "aditya.dev@example.com",
  social: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ],
  cvUrl: "#"
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
      "Led the development of key features for the flagship RedDoorz iOS app, improving user engagement by 20%.",
      "Architected and implemented a new modular design system using SwiftUI, reducing development time for new features by 30%.",
      "Mentored junior developers, conducted code reviews, and established best practices for a growing mobile team.",
      "Optimized app performance, reducing crash rates by 50% and improving overall app responsiveness.",
    ],
    technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "XCTest", "REST APIs", "CI/CD"],
    icon: Briefcase,
  },
  {
    company: "Tech Solutions Inc.",
    role: "Software Engineer - iOS",
    period: "2020 - 2022",
    description: [
        "Developed and maintained iOS applications for various clients in the e-commerce and fintech sectors.",
        "Collaborated with UX/UI designers to translate wireframes into high-quality, pixel-perfect user interfaces.",
        "Integrated third-party SDKs and APIs, including payment gateways and analytics services.",
        "Wrote unit and UI tests to ensure code quality and application stability."
    ],
    technologies: ["Swift", "UIKit", "CoreData", "Objective-C", "Alamofire", "Fastlane"],
    icon: Briefcase,
  }
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
    description: "A full-featured hotel booking application with a focus on a clean, intuitive user interface and a seamless booking experience from search to confirmation.",
    technologies: ["SwiftUI", "Combine", "CoreData", "MapKit", "MVVM"],
    imageUrl: "https://picsum.photos/seed/hotelApp/600/400",
    imageHint: "hotel booking",
    link: "https://github.com"
  },
  {
    title: "RedSeller Partner Platform",
    description: "An enterprise-grade B2B platform for RedDoorz partners to manage properties, track analytics, and handle real-time inventory updates.",
    technologies: ["Swift", "UIKit", "Firebase", "REST APIs", "Charts"],
    imageUrl: "https://picsum.photos/seed/redseller/600/400",
    imageHint: "partner platform",
  },
  {
    title: "Travel and Rewards App",
    description: "A proof-of-concept for a travel rewards program, featuring gamification elements, user profiles, and a loyalty points system to enhance user engagement.",
    technologies: ["SwiftUI", "Lottie", "Core Animation", "Node.js", "GraphQL"],
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
      { name: "Objective-C", icon: null },
      { name: "Python", icon: null },
      { name: "Java", icon: null },
    ],
  },
  {
    title: "Technologies & Frameworks",
    icon: Smartphone,
    skills: [
      { name: "SwiftUI", icon: null },
      { name: "UIKit", icon: null },
      { name: "Combine", icon: null },
      { name: "XCTest", icon: null },
      { name: "REST APIs", icon: null },
      { name: "Core Animation", icon: null },
    ],
  },
  {
    title: "Databases & Backend",
    icon: Server,
    skills: [
      { name: "Firebase", icon: Database },
      { name: "CoreData", icon: null },
      { name: "Realm", icon: null },
      { name: "Node.js", icon: null },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: SquareTerminal,
    skills: [
      { name: "Git & GitHub", icon: GitMerge },
      { name: "Xcode", icon: null },
      { name: "Jira", icon: null },
      { name: "Fastlane", icon: null },
      { name: "Jenkins", icon: null },
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
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Software Engineering", "Machine Learning"],
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
    title: "Top 5% on LeetCode",
    description: "Consistently ranked in the top 5% of users by solving over 500+ algorithmic problems.",
    icon: Star,
  },
  {
    title: "CodeChef Competition Winner",
    description: "Achieved first place in the monthly CodeChef long challenge, competing against thousands of programmers globally.",
    icon: Trophy,
  },
  {
    title: "Published App on App Store",
    description: "Successfully launched a personal app on the Apple App Store, reaching over 10k downloads in the first three months.",
    icon: Rocket,
  },
];

export const navigationLinks = [
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Rocket },
  { name: 'Skills', href: '#skills', icon: Lightbulb },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Achievements', href: '#achievements', icon: Award },
];
