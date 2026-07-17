import AceTernityLogo from "@/components/logos/aceternity";
import { SiKotlin, SiJetpackcompose, SiMaterialdesign, SiGooglegemini, SiRetropie } from "react-icons/si";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  kotlin: {
    title: "Kotlin",
    bg: "#7F52FF",
    fg: "#fff",
    icon: <SiKotlin />,
  },
  jetpackCompose: {
    title: "Jetpack Compose",
    bg: "#4285F4",
    fg: "#fff",
    icon: <SiJetpackcompose />,
  },
  materialDesign: {
    title: "Material Design 3",
    bg: "#757575",
    fg: "#fff",
    icon: <SiMaterialdesign />,
  },
  gemini: {
    title: "Gemini API",
    bg: "#1A73E8",
    fg: "#fff",
    icon: <SiGooglegemini />,
  },
  retrofit: {
    title: "Retrofit",
    bg: "#48B983",
    fg: "#fff",
    icon: <SiRetropie />,
  },
  okhttp: {
    title: "OkHttp",
    bg: "#F5A623",
    fg: "#fff",
    icon: <SiKotlin />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "visionops",
    category: "AI / Computer Vision",
    title: "VisionOps",
    src: "/assets/projects-screenshots/visionops/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://github.com/Arsh-sudo",
    github: "https://github.com/Arsh-sudo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI Factory Safety Sentinel
          </TypographyP>
          <TypographyP className="font-mono">
            Real-time AI safety monitoring system for industrial environments.
            Built using Gemini 2.0 Flash Multimodal API to detect PPE violations
            and unauthorized zone intrusions. Integrated Twilio SMS alerts for
            instant notifications and a Streamlit dashboard for live monitoring.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
    
  },
  {
    id: "iot-candle",
    category: "IoT / Hardware",
    title: "IoT Remote-Controlled Candle",
    src: "/assets/projects-screenshots/iotcandle/landing.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://github.com/Arsh-sudo",
    github: "https://github.com/Arsh-sudo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cloud-connected smart light with real-time remote control
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered a dual-microcontroller architecture separating Wi-Fi/cloud
            communication (ESP32) from hardware execution (Arduino Nano). Implemented
            PWM-based dimming and toggle control via the Blynk mobile app over Wi-Fi,
            with Li-Po battery integration for a portable form factor.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "apkguard",
    category: "Cybersecurity / AI",
    title: "APKGuard",
    src: "/assets/projects-screenshots/apkguard/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://apk-guard.vercel.app",
    github: "https://github.com/Arsh-sudo/APKGuard",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            GenAI-powered Android threat intelligence in under 90 seconds
          </TypographyP>
          <TypographyP className="font-mono">
            India saw a 200%+ rise in fake banking APKs in 2023-24. APKGuard reverse-engineers
            any APK, extracts 80+ features, scores it 0-100 using an XGBoost ML classifier
            (92.5% accuracy), and uses Llama 3.2 to explain WHY it's malicious in plain English.
            Built for the PSB Cybersecurity, Fraud & AI Hackathon 2026 (Bank of India × IIT Hyderabad).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "remind",
    category: "AI / Multi-Agent Systems",
    title: "REMIND",
    src: "/assets/projects-screenshots/remind/remind.png",
    screenshots: ["remind.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://remix-researchmind-180858939674.asia-southeast1.run.app/",
    github: "https://github.com/Arsh-sudo/ReMind",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Agent Research System
          </TypographyP>
          <TypographyP className="font-mono">
            A multi-agent AI architecture that delegates complex research tasks to
            specialized, autonomous agents, generating highly structured, verified
            reports complete with a computed Trust Score.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "terra",
    category: "Full-Stack / Sustainability",
    title: "TERRA",
    src: "/assets/projects-screenshots/terra/terra.png",
    screenshots: ["terra.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react, 
        PROJECT_SKILLS.framerMotion, 
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase
      ],
    },
    live: "https://carbon-footprint-tracker-180858939674.asia-southeast1.run.app/",
    github: "https://github.com/Arsh-sudo/TERRA---Carbon-Footprint-Tracker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Carbon Footprint Tracker
          </TypographyP>
          <TypographyP className="font-mono">
            An interactive dashboard that lets users monitor daily carbon emissions
            and visualize actionable insights to reduce their environmental impact.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "heartspace",
    category: "Mobile / Privacy",
    title: "Heartspace",
    src: "/assets/projects-screenshots/heartspace/heartspace.png",
    screenshots: ["heartspace.png"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "https://github.com/Arsh-sudo",
    github: "https://github.com/Arsh-sudo/heartspace",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Secure, privacy-focused messaging app
          </TypographyP>
          <TypographyP className="font-mono">
            A secure, privacy-focused mobile app for encrypted messaging and
            interactive custom voice notes, built natively in Kotlin.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "matchday",
    category: "AI / Stadium Operations",
    title: "Matchday AI",
    src: "/assets/projects-screenshots/matchday/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.kotlin,
        PROJECT_SKILLS.jetpackCompose,
        PROJECT_SKILLS.materialDesign,],
      backend: [PROJECT_SKILLS.python,PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.retrofit,
        PROJECT_SKILLS.okhttp,],
    },
    live: "https://github.com/Arsh-sudo",
    github: "https://github.com/Arsh-sudo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Unified Operations Brain for FIFA World Cup 2026
          </TypographyP>
          <TypographyP className="font-mono">
            Enterprise-grade tactical command center for stadium operations managers.
            Aggregates live crowd telemetry, predictive logistics, IoT sensor outputs,
            and incident flows into one workspace. Features Gemini-powered Fan Concierge,
            hardware sensor integration (accelerometer, barometer, light), and real-time
            sustainability monitoring. Built with Kotlin, Jetpack Compose, and Material 3.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "devmemory",
    category: "AI / Developer Tools",
    title: "DevMemory",
    src: "/assets/projects-screenshots/devmemory/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node, PROJECT_SKILLS.docker],
    },
    live: "https://github.com/Arsh-sudo",
    github: "https://github.com/Arsh-sudo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Persistent memory layer for your development team
          </TypographyP>
          <TypographyP className="font-mono">
            DevMemory ingests GitHub PRs, commits, and code changes into a graph database,
            mapping author relationships and architectural decisions. Features hybrid semantic
            search, an interactive 2D force-directed knowledge graph, and a human-in-the-loop
            reinforcement loop. New engineers can query the codebase on day one without
            interrupting senior team members.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
