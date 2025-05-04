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
