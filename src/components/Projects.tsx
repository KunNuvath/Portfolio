
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Arduino Uno",
    description:
      "Built embedded systems and hardware projects using Arduino Uno — including sensor integration, LED control, and automation circuits programmed in C++.",
    tags: ["Arduino", "C++", "Embedded Systems", "Electronics"],
    icon: "🔌",
    color: "from-[#00979C]/10 to-[#00979C]/5",
    accent: "#00979C",
    demo: "#",
    github: "#",
  },
  {
    title: "Sumo Robot",
    description:
      "Designed and built a competitive Sumo Robot that earned 3rd place in a regional robotics competition. Engineered the chassis, motor control, and sensor logic for autonomous combat.",
    tags: ["Robotics", "Arduino", "Motor Control", "Competition"],
    icon: "🤖",
    color: "from-[#e85d04]/10 to-[#e85d04]/5",
    accent: "#e85d04",
    badge: "🏆 3rd Place",
    demo: "#",
    github: "#",
  },
  {
    title: "Figma UI/UX Design",
    description:
      "Crafted high-fidelity wireframes, prototypes, and design systems in Figma — focusing on clean layouts, component libraries, and user-centered interaction flows.",
    tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    icon: "🎨",
    color: "from-[#a259ff]/10 to-[#a259ff]/5",
    accent: "#a259ff",
    demo: "#",
    github: "#",
  },
  {
    title: "Raspberry Pi",
    description:
      "Developed projects on Raspberry Pi including a local web server, GPIO hardware control, and a Python-based automation system running on Linux.",
    tags: ["Raspberry Pi", "Python", "Linux", "GPIO"],
    icon: "🍓",
    color: "from-[#c51a4a]/10 to-[#c51a4a]/5",
    accent: "#c51a4a",
    demo: "#",
    github: "#",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="group overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top color band with icon */}
            <div className={`relative h-36 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <span className="text-6xl">{project.icon}</span>
              {project.badge && (
                <span className="absolute top-3 right-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm text-[#333]">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#111] tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <Button size="sm" variant="default" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}