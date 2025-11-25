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
    title: "RedDoorz – Hotel Booking App",
    description: [
      "Contributed to the development of the RedDoorz App, a travel-platform used by thousands of users to discover, book and manage budget-hotel stays across Southeast Asia.",
      "Collaborated with product, design and backend teams to enhance UI/UX, optimize performance for mobile devices, enable localization across markets (Indonesia, Philippines, etc.), and maintain strong app stability and scalability."
    ],
    technologies: ["SwiftUI", "Combine", "CoreData", "MapKit", "MVVM", "Live Activities"],
    imageUrl: "https://picsum.photos/seed/hotelApp/600/400",
    imageHint: "hotel booking",
  },
  {
    title: "RedSeller – Partner Platform",
    description: [
      "Developed core features for the RedSeller reseller application used by RedDoorz partners to promote hotel rooms, track bookings, and monitor earnings."
    ],
    technologies: ["Swift", "UIKit", "SceneKit", "Translation APIs", "REST APIs"],
    imageUrl: "https://picsum.photos/seed/redseller/600/400",
    imageHint: "partner platform",
  },
  {
    title: "Grow with RedDoorz",
    description: [
      "Contributed to the development of the Grow with RedDoorz app, a property-owner platform enabling hotel partners to monitor performance, manage billing/payments and optimize operations.",
      "Implemented key features such as a daily/monthly performance dashboard (gross revenue, occupancy, average room rate), live pricing requests, and booking check-in/out flows.",
      "Collaborated with cross-functional teams (backend, design, product) to deliver localized UX, support multi-property owners, and ensure stable performance across mobile platforms."
    ],
    technologies: ["SwiftUI", "Combine", "Core Animation", "Performance Tuning"],
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
