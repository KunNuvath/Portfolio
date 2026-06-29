import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  accent: string;
  badge?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Web Developer Study Dashboard",
    description:
      "A comprehensive learning dashboard built to track study hours, course progress in Node.js and Next.js, and coding statistics in real-time.",
    tags: ["Node.js", "Next.js", "Tailwind CSS", "React", "Dashboard"],
    image: "/study_dashboard.png",
    color: "from-blue-600/10 to-indigo-600/5",
    accent: "#3b82f6",
    link: "https://github.com/KunNuvath",
  },
  {
    title: "Arduino Uno",
    description:
      "Built embedded systems and hardware projects using Arduino Uno — including sensor integration, LED control, and automation circuits programmed in C++.",
    tags: ["Arduino", "C++", "Embedded Systems", "Electronics"],
    image: "/arduino_project.png",
    color: "from-[#00979C]/10 to-[#00979C]/5",
    accent: "#00979C",
    link: "https://github.com/KunNuvath",
  },
  {
    title: "Sumo Robot",
    description:
      "Designed and built a competitive Sumo Robot that earned 3rd place in a regional robotics competition. Engineered the chassis, motor control, and sensor logic for autonomous combat.",
    tags: ["Robotics", "Arduino", "Motor Control", "Competition"],
    image: "/sumo_robot.png",
    color: "from-[#e85d04]/10 to-[#e85d04]/5",
    accent: "#e85d04",
    badge: "🏆 3rd Place",
    link: "https://github.com/KunNuvath",
  },
  {
    title: "Figma UI/UX Design",
    description:
      "Crafted high-fidelity wireframes, prototypes, and design systems in Figma — focusing on clean layouts, component libraries, and user-centered interaction flows.",
    tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    image: "/figma_project.png",
    color: "from-[#a259ff]/10 to-[#a259ff]/5",
    accent: "#a259ff",
    link: "https://www.figma.com",
  },
  {
    title: "Raspberry Pi",
    description:
      "Developed projects on Raspberry Pi including a local web server, GPIO hardware control, and a Python-based automation system running on Linux.",
    tags: ["Raspberry Pi", "Python", "Linux", "GPIO"],
    image: "/raspberry_pi.png",
    color: "from-[#c51a4a]/10 to-[#c51a4a]/5",
    accent: "#c51a4a",
    link: "https://github.com/KunNuvath",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 lg:px-14 py-16 lg:py-20 border-t border-[#e8e6e0]"
    >
      {/* Heading */}
      <div className="mb-10 lg:mb-12">
        <Badge variant="secondary" className="uppercase tracking-widest text-[10px] px-3 py-1 mb-4">
          My Work
        </Badge>
        <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111] tracking-tighter">
          Featured Projects
        </h2>
        <p className="text-sm text-[#888] mt-3 max-w-md leading-relaxed">
          Hardware, robotics, design, and software — things I've built and competed with.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="group overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-52 w-full bg-[#fcfbfa] overflow-hidden border-b border-[#e8e6e0]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i < 2}
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              )}
              {project.badge && (
                <span className="absolute top-3 right-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm text-[#333] z-10">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#111] tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex self-start items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#111] text-white text-sm font-semibold transition-opacity hover:opacity-85"
                >
                  View Work
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
