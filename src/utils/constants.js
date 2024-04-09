import {
  FaHtml5,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiExpress,
  SiPostman,
  SiNextdotjs,
  SiLeetcode,
  SiSolidity,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiGooglecloud,
  SiAmazonaws,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
} from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "MERN",
    icon: FaHashnode,
  },
  {
    interest: "Blockchain",
    icon: FcElectronics,
  },
  {
    interest: "New Technologies",
    icon: GiArchiveResearch,
  },
  {
    interest: "Growth",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Gaming",
    icon: BsRobot,
  },
  {
    interest: "Travelling",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Solidity",
    icon: SiSolidity,
  },
  {
    name: "Google CLoud",
    icon: SiGooglecloud,
  },
  {
    name: "Amazon AWS",
    icon: SiAmazonaws,
  },
];

export const workData = [
  {
    company: "Rootkit Consultancy Services",
    designation: "Software Developer",
    duration: "August 2023 - January 2024",
    companyImg: "rootkit.jpeg",
    description: (
      <>
        <ul>
          <li>
          Developed Node.js, Firebase backend with Schedulers for maintaining database.
          </li>
          <li>
          Facilitated integration of API’s with native Android and IOS apps, ensuring smooth functionality & user experience.
          </li>
          <li>
          Utilized JIRA software to conduct comprehensive testing, resulting in a 20% reduction in bug occurrence and a 30%
increase in overall application stability.</li>
          <li>
          Collaborated with client teams to deliver tailored IT solutions, leading to a 20% increase in client approval ratings.
          </li>
          <li>
          TECH STACK: React.js, Next.js Node.js, Firebase, JIRA
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "ISKCON, Pune",
    designation: "Full Stack Developer Intern",
    duration: "July 2023 - December 2023",
    companyImg: "iskcon.jpeg",
    description: (
      <>
        <ul>
          <li>
          Developed a React Native App from native development to Expo framework and reducing setup time by 50%.
          </li>
          <li>
          Developed Login and registration pages with phone OTP verification using Firebase.
          </li>
          <li>
          Developed reusable UI react native components with state management and API integrations leading to a 25% reduction
in development time for subsequent features and enhancements.
          </li>
          <li>
          Implemented key optimizations to the Node.js backend, resulting in an increase in application performance.
          </li>
          <li>
          TECH STACK: React Native, Tailwind, EXPO, Express.js, Node.js, MongoDB, Firebase
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "PROJECT",
    title: "NLC Website and App",
    image: "nlc-website",
    link: "https://www.nlcbharat.net/",
    source: "https://github.com/Rahul99sh/Nlc-Admin",
  },
  {
    type: "PROJECT",
    title: "Volstory App",
    image: "volstory",
    link: null,
    source: "https://github.com/xVaINx/volstory_reactNative_app",
  },
  {
    type: "PROJECT",
    title: "EduUpdates App",
    image: "edupdates-app",
    link: "https://play.google.com/store/apps/details?id=com.edu.edupdates",
    source: "https://github.com/xVaINx/info_news_app",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/xVaINx/portfolio-website",
  },
  {
    type: "WEB-APP",
    title: "Demo Bank Website",
    image: "bank-website",
    link: "https://sweet-pony-b3142a.netlify.app",
    source: "https://github.com/xVaINx/Bank_deom_website",
  },
  {
    type: "WEB-APP",
    title: "Crowdfunding App",
    image: "crowdfunding-app",
    link: "https://fantastic-licorice-2e93b3.netlify.app/",
    source: "https://github.com/xVaINx/Crowdfunding_web_app",
  },
  {
    type: "WEB-APP",
    title: "Chess Game",
    image: "chess-game", 
    link: null,
    source: "https://github.com/xVaINx/javascript-chess-game",
  },
  {
    type: "WEB-APP",
    title: "Crypto Transfer APP",
    image: "crypto-transfer",
    link: null,
    source: "https://github.com/xVaINx/Crypto_transfer_webapp",
  },
  {
    type: "WEB-APP",
    title: "Prompt Website",
    image: "prompt-website",
    link: null,
    source: "https://github.com/xVaINx/prompt_website",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/xVaINx",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/ayushhh_k/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/ayush-kumar-211a0220b/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/ayushhh_k",
    icon: FaTwitter,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://codeforces.com/profile/ayushsp19",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
  {
    href: "https://leetcode.com/ayushsp19/",
    icon: SiLeetcode,
    backgroundColor: "social.leetcode",
    hoverColor: "social.leetcodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
