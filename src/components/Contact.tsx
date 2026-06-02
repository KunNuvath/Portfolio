"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "nokvathboy@gmail.com",
    href: "mailto:nokvathboy@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/vath",
    href: "https://github.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/vath",
    href: "https://www.linkedin.com/in/kun-nuvath-48755b317/",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="contact"
      className="px-4 sm:px-8 lg:px-14 py-16 lg:py-20 border-t border-[#e8e6e0]"
    >
      <div className="mb-10 lg:mb-12">
        <Badge variant="secondary" className="uppercase tracking-widest text-[10px] px-3 py-1 mb-4">
          Get In Touch
        </Badge>
        <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111] tracking-tighter">
          Let's work together
        </h2>
        <p className="text-sm text-[#888] mt-3 max-w-md leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Contact info */}
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              <Card className="flex items-center gap-4 p-4 sm:p-5 hover:shadow-md transition-shadow cursor-pointer mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0efeb] flex items-center justify-center text-[#555] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-[#aaa]">{item.label}</p>
                  <p className="text-sm font-medium text-[#111]">{item.value}</p>
                </div>
              </Card>
            </a>
          ))}

          <div className="flex items-center gap-2 pt-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[#888]">Available for freelance work</span>
          </div>
        </div>

        {/* Form */}
        <Card className="p-5 sm:p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-xs text-[#aaa] uppercase tracking-wider">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg px-4 py-3 text-sm text-[#111] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-[#aaa] uppercase tracking-wider">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg px-4 py-3 text-sm text-[#111] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-[#aaa] uppercase tracking-wider">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg px-4 py-3 text-sm text-[#111] placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#111]/10 transition resize-none"
            />
          </div>
          <Button size="lg" className="w-full rounded-md" onClick={handleSubmit}>
            {sent ? "Message Sent ✓" : "Send Message"}
          </Button>
        </Card>
      </div>
    </section>
  );
}