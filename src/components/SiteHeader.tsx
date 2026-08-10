"use client";

import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import GlowLogo from "./GlowLogo";

const NAV = [
  { label: "Explore Procedures", href: "#", caret: true },
  { label: "How It Works", href: "#" },
  { label: "About Glow", href: "#" },
  { label: "Glow Stories", href: "#" },
  { label: "For Clinics", href: "#", badge: "New" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#efe7d9]/70 bg-[#fbfaf6]/92 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[80px] w-full max-w-[1440px] items-center px-[20px] sm:px-[34px] xl:h-[101px]">
        <GlowLogo />

        {/* Desktop navigation */}
        <nav className="hidden shrink-0 items-center gap-[38px] xl:ml-[56px] xl:flex min-[1330px]:ml-[116px]">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex shrink-0 items-center gap-[7px] whitespace-nowrap text-[15px] font-medium text-[#4e4945] transition-colors hover:text-[#a67c46]"
            >
              {item.label}
              {item.caret ? <ChevronDown size={16} strokeWidth={1.9} className="mt-[1px] text-[#6b645d]" /> : null}
              {item.badge ? (
                <span className="glow-badge ml-[7px] px-[11px] py-[4px] text-[12px] font-semibold leading-none">
                  {item.badge}
                </span>
              ) : null}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="ml-auto hidden shrink-0 items-center gap-[15px] xl:flex">
          <button
            type="button"
            aria-label="Search"
            className="grid size-10 place-items-center rounded-full text-[#3a342f] transition-colors hover:bg-[#f6efe3]"
          >
            <Search size={21} strokeWidth={1.9} />
          </button>
          <a
            href="#"
            className="glow-btn-ghost flex h-[50px] shrink-0 items-center justify-center whitespace-nowrap px-[30px] text-[15px] font-semibold"
          >
            Log in
          </a>
          <a
            href="#gift"
            className="glow-btn-primary ember-rim ember-rim--soft flex h-[52px] shrink-0 items-center justify-center whitespace-nowrap px-[32px] text-[15px] font-semibold"
          >
            Get Started
          </a>
        </div>

        {/* Mobile actions */}
        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label="Search"
            className="grid size-10 place-items-center rounded-full text-[#3a342f]"
          >
            <Search size={20} strokeWidth={1.9} />
          </button>
          <a
            href="#gift"
            className="glow-btn-primary ember-rim ember-rim--soft hidden h-[44px] items-center justify-center whitespace-nowrap px-[22px] text-[14px] font-semibold sm:flex"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full text-[#3a342f]"
          >
            {open ? <X size={23} strokeWidth={1.9} /> : <Menu size={23} strokeWidth={1.9} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div className="border-t border-[#efe7d9]/70 bg-[#fbfaf6] px-[20px] pb-6 pt-2 xl:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 border-b border-[#f0e9dc] py-[14px] text-[16px] font-medium text-[#4e4945]"
              >
                {item.label}
                {item.caret ? <ChevronDown size={16} strokeWidth={1.9} className="text-[#6b645d]" /> : null}
                {item.badge ? (
                  <span className="glow-badge ml-1 px-[10px] py-[4px] text-[12px] font-semibold leading-none">
                    {item.badge}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="glow-btn-ghost mt-6 flex h-[48px] items-center justify-center text-[15px] font-semibold"
          >
            Log in
          </a>
        </div>
      ) : null}
    </header>
  );
}
