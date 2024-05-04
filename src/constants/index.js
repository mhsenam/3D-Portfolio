import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  shop_icon
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  // {
  //   imageUrl: nodejs,
  //   name: "Node.js",
  //   type: "Backend",
  // },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  }
];

export const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Freelancer",
    icon: 'https://media.licdn.com/dms/image/C560BAQEJe-MEhPTm7w/company-logo_200_200/0/1631379336837?e=1723075200&v=beta&t=HOoNZdIEAi0QeBHUoRbxBMATd_UMnkXqjOThy2HBYOA',
    iconBg: "#038ae3",
    date: "May 2023 - Present",
    points: [
      "I am presently engaged in advancing and refining my frontend proficiency, with a particular focus on mastering Next.js. Concurrently, I am actively involved in the development of additional e-commerce websites, tailored to meet the diverse requirements of each customer.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "SamaToos",
    icon: 'https://media.licdn.com/dms/image/D4E0BAQHVSuqg7mQfAA/company-logo_200_200/0/1704094300216/samatoos_logo?e=1723075200&v=beta&t=xgV8pasGbQUHLqNcNqol1ifa8GXST2jQTBUFu3OxEaY',
    iconBg: "#fff",
    date: "Jul 2022 - May 2023",
    points: [
      "UI Design and Implementation:Designing and implementing the user interface (UI) based on requirements and graphical designs ",
      "Web Development and Optimization: Developing and optimizing JavaScript code to improve the performance and loading speed of the website",
      "Collaborating with the development team to integrate front-end code with other parts of the system",
      "Ensuring optimal and responsive display of the site on various devices and screen sizes",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Urban Innovation Center of Mashhad",
    icon: 'https://media.licdn.com/dms/image/C4E0BAQHnovy7D_S2VA/company-logo_200_200/0/1641282731776?e=1723075200&v=beta&t=5cefO5G0eNAw98QHrtlEnIHOIW9WL30PC7L19Dsmx6M',
    iconBg: "#fff",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Using modern front-end frameworks and libraries to enhance efficiency and development speed",
      "Improving user experience by enhancing workflow and user interactions",
      "Writing code documentation to facilitate understanding and future development",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Diaco.inc",
    icon: 'https://media.licdn.com/dms/image/C4E0BAQFyyNnoUzkj5A/company-logo_200_200/0/1630619431553?e=1723075200&v=beta&t=iC7WSSh_8WeN8SAGh2fS7w3SoBIgES75Lq4uHvu3cEA',
    iconBg: "#fda800",
    date: "Sep 2018 - Mar 2022",
    points: [
      "Ensured responsive design principles for optimal display across various devices and screen sizes.",
      "Developed and optimized JavaScript code to enhance website performance and loading speed.",

    ],
  }
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  }
];

export const projects = [
  {
    iconUrl: shop_icon,
    theme: 'btn-back-black',
    name: 'E-Commerce With ',
    description: 'An fully responsive E-Commerce website with "Admin Dashboard Panel" using Payload CMS. Tools: Next.js, Tailwind, Payload CMS, Stripe.',
    link: 'https://github.com/mhsenam/ecommerce',
    s_text: 'Admin Dashboard'
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Responsive Portfolio',
    description: 'A 3D based model website created using React, React.Three, Tailwind which renders .(glb) files.',
    link: 'https://github.com/mhsenam/3D-Portfolio',
  },
];