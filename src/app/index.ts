import {
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const navLinks = [
  {
    label: "Home",
    href: "/",
    sections: [
      { label: "About", href: "#about" },
      { label: "Languages", href: "#languages" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
  },
  // {
  //     label: 'Contact Me',
  //     href: '/contact-me'
  // }
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/omar-diab-756b0b306/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/omar-diab/",
    icon: FaGithubAlt,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/omardiab.10/",
    icon: FaInstagram,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/905316440760",
    icon: FaWhatsapp,
  },
];

export const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Bootstrap" },
  { name: "Git - GitHub" },
  { name: "Pugjs" },
  { name: "Sass" },
  { name: "Gulpjs" },
  { name: "Jest" },
  { name: "TailwindCss" },
  { name: "TypeScript" },
  { name: "Reactjs" },
  { name: "Nextjs" },
  { name: "Redux" },
  { name: "C++" },
  { name: "Python" },
  { name: "Postgres" },
  { name: "Prisma" },
  { name: "Postman" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Proficient" },
  { name: "Turkish", level: "Intermediate" },
  { name: "Spainish", level: "A1" },
];

export const experience = [
  {
    company: "E+plus, Egypt, Remote",
    position: "Front End Developer - Internship",
    date: "August 2024 - October 2024",
  },
];

export const education = [
  {
    degree: "Bachelor’s Degree in Software Engineering",
    school: "İstinye Üniversitesi, Türkiye",
    date: "October 2023 — June 2027",
  },
];

export const projects = [
  {
    id: 1,
    title: "Room",
    description: "Built with Next.js",
    tools: ["Nextjs", "TypeScript", "TailwindCss", "Clerk", "Shadcn UI"],
    link: "https://room-black-kappa.vercel.app/",
    image: "/assets/projects/room.png",
    categories: ["Nextjs"],
  },
  {
    id: 2,
    title: "Camp Traveler",
    description: "Built with Next.js",
    tools: ["Nextjs", "TypeScript", "TailwindCss"],
    link: "https://camptraveler.od-works.shop/",
    image: "/assets/projects/camp-traveler.png",
    categories: ["Nextjs"],
  },
  {
    id: 3,
    title: "Book Store",
    description: "Built with Next.js",
    tools: ["Nextjs", "Flowbite", "TailwindCss"],
    link: "https://book-store.od-works.shop/",
    image: "/assets/projects/book-store.png",
    categories: ["Nextjs"],
  },
  {
    id: 4,
    title: "3D iPhone",
    description: "Built with Reactjs",
    tools: ["Reactjs", "Three.js", "GSAP", "TailwindCss"],
    link: "https://3d-iphone.od-works.shop/",
    image: "/assets/projects/3d-iphone.png",
    categories: ["Reactjs"],
  },
  {
    id: 5,
    title: "NewTube",
    description: "Built with Reactjs",
    tools: ["Reactjs", "Material UI 5", "RapidAPI", "TailwindCss"],
    link: "https://newtube.od-works.shop/",
    image: "/assets/projects/newtube.png",
    categories: ["Reactjs"],
  },
  {
    id: 6,
    title: "OD Shop",
    description: "Built with Reactjs",
    tools: ["Reactjs"],
    link: "https://od-shop.od-works.shop/",
    image: "/assets/projects/od-shop.png",
    categories: ["Reactjs"],
  },
];
