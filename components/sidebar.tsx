"use client";

import { useParams } from "next/navigation";

export default function Sidebar() {
  const params = useParams();
  const pathName = params.slug ? `/${params.slug}` : "/";

  const navItems = [
    // { name: "Home", href: "/" },
    { name: "Summary", href: "/" },
    { name: "Me", href: "/me" },
    { name: "My Work", href: "/my-work" },
  ];

  return (
    <aside className="relative flex h-full flex-col justify-between border-r border-slate-200/80 px-8 py-10">
      <div className="space-y-2">
        {/* <span className="text-4xl uppercase font-bold">JARBIS</span> */}
      </div>

      <nav className="absolute left-10 top-1/2 flex items-center gap-3 text-2xl font-bold -translate-x-1/2 rotate-90">
        {navItems.map((item) => {
          const isActive: boolean = pathName === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex px-1 py-2 ${isActive ? "text-black" : "text-gray-500 hover:text-blue-500"}`}
            >
              {item.name}
            </a>
          );
        })}
      </nav>

      <div className="text-2xl font-bold">Say hi</div>
    </aside>
  );
}
