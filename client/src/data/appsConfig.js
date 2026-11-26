import AboutMe from "../apps/AboutMe";
import Projects from "../apps/Projects";
import Skills from "../apps/Skills";
import Contact from "../apps/Contact";

const appsConfig = [
  {
    id: "about",
    label: "About Me",
    icon: "🙋",
    component: AboutMe,
    defaultSize: { width: 520, height: 400 },
    defaultPosition: { x: 100, y: 80 },
  },
  {
    id: "projects",
    label: "Projects",
    icon: "🗂️",
    component: Projects,
    defaultSize: { width: 600, height: 460 },
    defaultPosition: { x: 160, y: 100 },
  },
  {
    id: "skills",
    label: "Skills",
    icon: "🛠️",
    component: Skills,
    defaultSize: { width: 480, height: 380 },
    defaultPosition: { x: 200, y: 120 },
  },
  {
    id: "contact",
    label: "Contact",
    icon: "📬",
    component: Contact,
    defaultSize: { width: 420, height: 340 },
    defaultPosition: { x: 240, y: 140 },
  },
];

export default appsConfig;
