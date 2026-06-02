import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/Statcard";

const avatarColors = ["bg-blue-200", "bg-rose-200", "bg-emerald-200"];

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-14 py-12 lg:py-20 items-center">
      {/* ── Left ── */}
      <div className="space-y-6 text-center lg:text-left">
        <Badge variant="secondary" className="uppercase tracking-widest text-[10px] px-3 py-1">
          UI/UX · Web Dev
        </Badge>

        <div className="font-[family-name:var(--font-syne)]">
          <p className="text-base sm:text-lg text-[#888] mb-1">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111] leading-none tracking-tighter">
            Vath
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#444] mt-2 tracking-tight">
            Creative Developer
          </h2>
        </div>

        <p className="text-sm text-[#666] leading-relaxed max-w-md mx-auto lg:mx-0">
          A developer focused on creating user-friendly interfaces and building
          real hardware projects — from robotics to embedded systems.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button size="lg" className="rounded-md w-full sm:w-auto">
            Let's Work Together
          </Button>
        </div>

        {/* Avatars */}
        <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
          <div className="flex">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-[#f5f4f0] ${color} ${
                  i !== 0 ? "-ml-2.5" : ""
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#888]">+20 happy clients</span>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] flex items-center justify-center">
        {/* Decorative rings */}
        <div className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] lg:w-[300px] lg:h-[300px] rounded-full border-[16px] sm:border-[20px] border-[#e8e6e0]" />
        <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] lg:w-[360px] lg:h-[360px] rounded-full border border-dashed border-[#d4d1cb]" />

        {/* Circle photo */}
        <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
          <Image
            src="/NuvathKun.jpg"
            alt="NuvathKun"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Floating stat cards — hidden on small, shown md+ */}
        <div className="hidden md:block absolute top-4 -left-4 lg:-left-8">
          <StatCard label="Shipped Orders" value="42" badge="+18.2%" sub="than last week" />
        </div>
        <div className="hidden md:block absolute top-4 -right-4 lg:-right-8">
          <StatCard label="Total Revenue" value="$90" badge="↑ 15%" period="30 Days" />
        </div>
        <div className="hidden md:block absolute bottom-24 -left-4 lg:-left-8">
          <StatCard label="Ratings" value="8.14" badge="+18.2%" period="Last 6 months" />
        </div>
        <div className="hidden md:block absolute bottom-8 -right-4 lg:-right-8">
          <StatCard label="Total Income" value="$120" badge="+25.2%" sub="Last week" />
        </div>
      </div>
    </section>
  );
}