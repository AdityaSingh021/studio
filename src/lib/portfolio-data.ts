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
import { PlaceHolderImages } from './placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

export const personalData = {
  name: "Aditya",
  title: "iOS Developer",
  bio: "A seasoned iOS Developer with a passion for creating user-centric mobile applications. My expertise lies in Swift and architecting complex features from conception to deployment.",
  email: "aditya.dev@example.com",
  social: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ],
  cvUrl: "#",
  imageUrl: heroImage?.imageUrl || "https://storage.googleapis.com/aai-web-samples/aditya-portrait.jpg",
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
  }
];

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  link?: string;
}

const hotelAppImage = PlaceHolderImages.find(img => img.id === 'hotel-app');
const partnerPlatformImage = PlaceHolderImages.find(img => img.id === 'partner-platform');
const rewardsAppImage = PlaceHolderImages.find(img => img.id === 'rewards-app');


export const projects: Project[] = [
  {
    title: "RedDoorz – Hotel Booking App",
    description: [
      "Built and maintained a scalable Swift/SwiftUI MVVM app, improving structure, development speed, and overall maintainability.",
      "Added Live Activities and performed performance tuning with Instruments, improving responsiveness and reducing crashes."
    ],
    technologies: ["SwiftUI", "Combine", "CoreData", "MapKit", "MVVM", "Live Activities"],
    imageUrl: hotelAppImage?.imageUrl || "https://picsum.photos/seed/hotelApp/600/400",
    imageHint: hotelAppImage?.imageHint || "hotel booking",
  },
  {
    title: "RedSeller – Partner Platform",
    description: [
      "Integrated Apple’s native translation APIs and delivered SceneKit-based 3D features to enhance speed and user engagement.",
      "Collaborated with cross-functional teams to ship consistent, well-documented features across platforms."
    ],
    technologies: ["Swift", "UIKit", "SceneKit", "Translation APIs", "REST APIs"],
    imageUrl: partnerPlatformImage?.imageUrl || "https://picsum.photos/seed/redseller/600/400",
    imageHint: partnerPlatformImage?.imageHint || "partner platform",
  },
  {
    title: "Grow – Travel and Rewards App",
    description: [
      "Developed reusable SwiftUI modules and custom animations to ensure UI consistency and reduce repeated effort across apps.",
      "Improved cold-start performance and optimized SDK initialization for faster app launches."
    ],
    technologies: ["SwiftUI", "Combine", "Core Animation", "Performance Tuning"],
    imageUrl: rewardsAppImage?.imageUrl || "https://picsum.photos/seed/growtravel/600/400",
    imageHint: rewardsAppImage?.imageHint || "travel rewards",
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
    ],
  },
  {
    title: "Databases & Backend",
    icon: Server,
    skills: [
      { name: "Firebase", icon: Database },
      { name: "CoreData", icon: null },
      { name: "Realm", icon: null },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: SquareTerminal,
    skills: [
      { name: "Git & GitHub", icon: GitMerge },
      { name: "Xcode", icon: null },
      { name: "Jira", icon: null },
      { name: "CI/CD", icon: null },
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
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Software Engineering"],
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
    title: "Hackathon Winner",
    description: "Won 1st place in the annual company-wide hackathon for developing an innovative internal tool.",
    icon: Trophy,
  },
  {
    title: "App Store Feature",
    description: "A personal project was featured on the App Store's 'New Apps We Love' section.",
    icon: Star,
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to several popular open-source iOS libraries and frameworks.",
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
