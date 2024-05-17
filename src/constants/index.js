import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fasinii,
  andela,
  aws,
  freelance,
  carrent,
  healthcare,
  metaversus,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Practitioner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Google Cloud Practitioner",
    company_name: "Google Andela Developer Program - Africa.",
    icon: andela,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Andela GADS Program training in three phases under the guidance of various senior Andela developers",
      "Learned scripting to handle different operations such as launching an infastructure with bash scripts",
       "Designed and engineered different applications deployed under the Google Cloud Platform",
      "leveraged different tools in GCP such as Cloudrun, Google Kubernetes Engine.",
    ],
  },
  {
    title: "DevOps Practitioner",
    company_name: "aws",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "June 2022 - Dec 2022",
    points: [
      "Designed and engineered the infrastructure of an ephemeral full-stack micro-blogging platform built and deployed using the Amazon Web Services cloud services",
      "Generated detailed reports to highlight App performance and usage metrics throughout the project",
      "Implementing application infastructures with Docker and worked with Docker images to ensure cross-deployments.",
      "Deployed website under react and flask frameworks to handle interactions between users interacting on the platform",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2023 - June 2023",
    points: [
      "Developed websites and applications for different clients based on requirements.",
      "Collaborating with clients to create high-quality applications and software products.",
      "Focused on increasing client site results by tailoring sites to better match SEO semantics while keeping note of customer needs",
      "Maintained responsive design on client apps to encourage user satisfaction and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Fasinii LTD",
    icon: fasinii,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Patz proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like PatzPaul does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After PatzPaul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Collaborated in a platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.fasinii.com/",
  },
  {
    name: "Health AI",
    description:
      "Web application that enables users to search and diagnose themselves, based on personalized treatment information and pre exesting conditions estimated to determine the best recommendation and for further diagnostics locate available specialists and healthcares based on their current location with the aid of a LLM trained AI Health Jarvis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/PatzPaul/JamboMedics",
  },
  {
    name: "Metaversus",
    description:
      "A comprehensive Meta like platform that allows users to socialize virtually in any preconcieved location of their choosing in the virtual world. hotels,stadiums,betelgeuse's solar region, and casual backalleys you name it with more curated recommendations for popular destinations still to come.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link: "https://metaversus4patz.web.app/job",
  },
];

export { services, technologies, experiences, testimonials, projects };
