"use client";

import { DesktopNav, MobileNav } from "./Nav";
import useScrolled from "./hooks/useScrolled";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const scrolled = useScrolled();
  const inHomePage = usePathname() === "/";

  return (
    <header
      data-scrolled={scrolled}
      className={`fixed left-0 top-0 z-10 w-full duration-200 -md2:bg-primary-dark/[0.95] -md2:py-4 -md2:shadow-[0_0.25rem_0.25rem_0rem_#12214daa] -md2:backdrop-blur-sm ${scrolled || !inHomePage ? "bg-primary-dark/[0.95] py-4 shadow-[0_0.25rem_0.25rem_0rem_#12214daa] backdrop-blur-sm" : "~xs/lg:~py-4/8"}`}
    >
      <div className="wrapper flex items-center">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
