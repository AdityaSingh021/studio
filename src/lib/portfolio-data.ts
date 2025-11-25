import {
  Code,
  Smartphone,
  Database,
  GitMerge,
  SquareTerminal,
  Linkedin,
  Github,
  Mail,
  GraduationCap,
  Briefcase,
  Lightbulb,
  type LucideIcon,
  BookMarked,
  Layers,
  Wrench,
  Rocket,
  Download,
} from 'lucide-react';

export const personalData = {
  name: "Aditya",
  title: "iOS Developer",
  bio: "A seasoned iOS Developer with a passion for creating user-centric mobile applications. My expertise lies in Swift and architecting complex features from conception to deployment.",
  email: "singh.adi0319@gmail.com",
  social: [
    { name: "GitHub", url: "https://github.com/AdityaSingh021", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/aditya-singh22", icon: Linkedin },
    { name: "Medium", url: "https://medium.com/@aditya877633", icon: BookMarked },
  ],
  cvUrl: "#",
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

export const projects: Project[] = [
  {
    title: "RedDoorz App (Hotel Booking Platform)",
    description: [
      "RedDoorz is a large-scale hotel booking application used across Southeast Asia, allowing users to discover budget stays, compare prices, apply promotions, and manage reservations. The app delivers a seamless booking experience with real-time availability, secure payments, and a polished, travel-friendly UI.",
    ],
    technologies: ["SwiftUI", "Combine", "CoreData", "MapKit", "MVVM", "Live Activities"],
    imageUrl: "/projects/reddoorz-app.jpeg",
    imageHint: "hotel room",
    link: "#",
  },
  {
    title: "RedSeller App (Reseller / Affiliate Platform)",
    description: [
      "RedSeller is a reseller-focused platform that enables users to promote RedDoorz properties, share deals, and earn commissions from bookings. It provides dashboards, promotional tools, and booking insights to help resellers manage performance and grow their earnings."
    ],
    technologies: ["Swift", "UIKit", "SceneKit", "Translation APIs", "REST APIs"],
    imageUrl: "/projects/redseller-app.jpeg",
    imageHint: "partner platform",
    link: "#",
  },
  {
    title: "Grow with RedDoorz App (Property Owner Platform)",
    description: [
      "Grow is an operational app designed for RedDoorz partner properties to monitor occupancy, manage billing, check earnings, and optimize hotel performance. It provides owners with real-time dashboards, live pricing tools, and operational workflows to support daily hotel management."
    ],
    technologies: ["SwiftUI", "Combine", "Core Animation", "Performance Tuning"],
    imageUrl: "/projects/grow-app.jpeg",
    imageHint: "travel rewards",
    link: "#",
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
    title: "Frameworks & APIs",
    icon: Smartphone,
    skills: [
        { name: "SwiftUI", icon: null },
        { name: "UIKit", icon: null },
        { name: "SceneKit", icon: null },
        { name: "WidgetKit", icon: null },
        { name: "ActivityKit", icon: null },
        { name: "XCTest", icon: null },
        { name: "URLSession", icon: null },
        { name: "WebSockets", icon: null },
        { name: "Push Notifications", icon: null },
        { name: "REST APIs", icon: null },
        { name: "JSON", icon: null },
    ],
  },
  {
    title: "Architecture & Data",
    icon: Layers,
    skills: [
      { name: "MVVM", icon: null },
      { name: "MVC", icon: null },
      { name: "Core Data", icon: Database },
      { name: "Firebase", icon: Database },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitMerge },
      { name: "Xcode", icon: SquareTerminal },
      { name: "TestFlight", icon: null },
      { name: "Postman", icon: null },
      { name: "App Store", icon: null },
      { name: "Provisioning profiles", icon: null },
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

export const navigationLinks = [
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Rocket },
  { name: 'Skills', href: '#skills', icon: Lightbulb },
  { name: 'Education', href: '#education', icon: GraduationCap },
];
