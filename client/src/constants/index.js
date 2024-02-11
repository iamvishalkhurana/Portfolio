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
  link,
  mongodb,
  haweli,
  simsun,
  git,
  jobit,
  tripguide,
  threejs,
  cpp,
  python,
  gradup,
  socket,
  portfolio,
} from "../assets";

const navLinks = [
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DSA Enthusiast ",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "socket",
    icon: socket,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "GradUp",
    icon: gradup,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Tailwind CSS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked with GradUp's parent company Teksila Pvt Limited to complete frontend projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D-Portfolio",
    description:
      "You'll find a curated collection of my work of web development projects. I strive to create visually stunning and functionally robust solutions that leave a lasting impression.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/iamvishalkhurana/Portfolio",
  },
  {
    name: "The Haweli Resorts",
    description:
      "Worked as a Frontend developer to help team deploy user friendly and responsive frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: haweli,
    source_code_link: "https://www.thehaweliresorts.in/",
  },
  {
    name: "Simsun Electric",
    description:
      "Developed responsive Frontend using react and tailwind working for GradUp's parent company, Teksila Pvt Limited",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: simsun,
    source_code_link: "https://www.simsunelectric.in/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
