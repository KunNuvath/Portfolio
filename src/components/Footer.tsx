export default function Footer() {
  return (
    <footer className="border-t border-[#e8e6e0] px-8 lg:px-14 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-[family-name:var(--font-syne)] font-black text-sm text-[#111]">
        Kun Nuvath
      </p>
      <p className="text-xs text-[#bbb]">
        © {new Date().getFullYear()} Vath. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}