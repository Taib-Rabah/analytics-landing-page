"use client";

import Links from "./Links";
import Logo from "./Logo";
import Socials from "./Socials";
import { usePathname } from "next/navigation";
import { DecorationImages } from "@/content/footer/decoration";
import Info from "./Info";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden bg-primary">
      {DecorationImages[pathname]}
      <div className="wrapper relative flex flex-col gap-8 before:absolute before:top-0 before:h-0.25 before:w-[calc(100%-var(--wrapper-px)*2)] before:bg-[#2a407c] before:content-empty ~xs/md3:~py-10/15 -2xs:flex-wrap -2xs:justify-center -2xs:gap-4">
        <div className="flex justify-between self-stretch">
          <Logo />
          <Links />
          <Socials />
        </div>
        <Info />
      </div>
    </footer>
  );
}
