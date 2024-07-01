// Import images
import Hero_person from "./assets/images/Hero/person.png";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";
import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";
import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// Import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

// Define types for the data structure
interface NavItem {
  link: string;
  icon: any; // Replace 'any' with specific React component type if possible
}

interface HeroContent {
  count: string;
  text: string;
}

interface HeroData {
  title: string;
  firstName: string;
  lastName: string;
  btnText: string;
  image: string;
  heroContent: HeroContent[];
}

interface Skill {
  name: string;
  para: string;
  logo: string;
}

interface SkillsData {
  title: string;
  subtitle: string;
  skillsContent: Skill[];
  icon: any; // Replace 'any' with specific React component type if possible
}

interface Service {
  title: string;
  para: string;
  logo: string;
}

interface ServicesData {
  title: string;
  subtitle: string;
  serviceContent: Service[];
}

interface Project {
  title: string;
  image: string;
}

interface ProjectsData {
  title: string;
  subtitle: string;
  image: string;
  projectContent: Project[];
}

interface Testimonial {
  review: string;
  img: string;
  name: string;
}

interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonialsContent: Testimonial[];
}

interface HiremeData {
  title: string;
  subtitle: string;
  image1: string;
  image2: string;
  para: string;
  btnText: string;
}

interface ContactData {
  title: string;
  subtitle: string;
  socialMedia: {
    text: string;
    icon: any; // Replace 'any' with specific React component type if possible
    link: string;
  }[];
}

interface FooterData {
  text: string;
}

// Define content object with TypeScript types
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ] as NavItem[],
  hero: {
    title: "Web Developer",
    firstName: "Jhon",
    lastName: "Doe",
    btnText: "Work with me",
    image: Hero_person,
    heroContent: [
      {
        count: "8+",
        text: "Years of Experience in Music Production",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ] as HeroContent[],
  } as HeroData,
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skillsContent: [
      {
        name: "Managerial",
        para: "Leadership, Communication, Team Handling, People Skill.",
        logo: figma,
      },
      {
        name: "Analytical",
        para: "Data Analyst, Logical Thinking, Quantitative Research, Data & Insights, Market Research",
        logo: nodejs,
      },
      {
        name: "Methodical",
        para: "Project Management, Presentation and Team Player",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ] as Skill[],
    icon: MdArrowForward,
  } as SkillsData,
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    serviceContent: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ] as Service[],
  } as ServicesData,
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    projectContent: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ] as Project[],
  } as ProjectsData,
  testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonialsContent: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ] as Testimonial[],
  } as TestimonialsData,
  hireme: {
    title: "Work with Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  } as HiremeData,
  contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    socialMedia: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 9649659090",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ] as ContactData['socialMedia'],
  } as ContactData,
  footer: {
    text: "All © Copy Right Reserved 2022",
  } as FooterData,
};
