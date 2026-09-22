interface CoreService {
  title: string;
  description: string;
  technologies: string[];
}

export const coreServicesData: CoreService[] = [
  {
    title: "Fullstack Web Apps",
    description:
      " High-performance fullstack web applications built for unmatched speed, scalability, and seamless user experiences.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "SSR"],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile app development that prioritizes user retention and flawless functionality across all devices.",
    technologies: ["React Native", "Expo"],
  },
  {
    title: "AI Agents & Workflows",
    description:
      "Implementing intelligent AI agents and autonomous agentic workflows to automate digital services and transform user experiences.",
    technologies: [
      "OpenAI",
      "Mastra",
      "Agno",
      "Arcade",
      "Composio",
      "CopilotKit",
    ],
  },
];
