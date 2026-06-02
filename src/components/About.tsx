

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Arduino", "Raspberry Pi", "Figma", "Python", "C++", "Git",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "4+", label: "Projects Done" },
  { value: "1", label: "Competition Award" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 lg:px-14 py-16 lg:py-20 border-t border-[#e8e6e0]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* Left — photo */}
        <div className="relative flex justify-center">
          <div className="relative w-64 sm:w-72 lg:w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-[#ddd]">
            <Image
              src="/NuvathKun.jpg"
              alt="NuvathKun"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 right-4 sm:right-8 lg:right-4 bg-[#111] text-white rounded-2xl px-5 py-3 shadow-xl">
            <p className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-extrabold">🏆 3rd</p>
            <p className="text-xs text-gray-400 mt-0.5">Sumo Robot Competition</p>
          </div>
        </div>

        {/* Right — content */}
        <div className="space-y-6 mt-6 lg:mt-0">
          <div>
            <Badge variant="secondary" className="uppercase tracking-widest text-[10px] px-3 py-1 mb-4">
              About Me
            </Badge>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111] tracking-tighter leading-tight">
              Passionate about building real things
            </h2>
          </div>

          <p className="text-sm text-[#666] leading-relaxed">
            I'm Vath, a creative developer based in Cambodia. I build both software
            interfaces and physical hardware projects — from award-winning robots to
            embedded systems with Arduino and Raspberry Pi.
          </p>
          <p className="text-sm text-[#666] leading-relaxed">
            I also love UI/UX design in Figma and building clean, fast web experiences.
            Whether it's a circuit or a component, I care about making things that
            actually work well.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-extrabold text-[#111]">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-[#aaa] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#bbb] mb-3">Skills & Tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}