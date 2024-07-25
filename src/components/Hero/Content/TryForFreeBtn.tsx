"use client";

import { button } from "@/content/hero";
import { showSinglePageToast } from "@/lib/toasts";
import Link from "next/link";

export default function TryForFreeBtn() {
  const handleClick = () => {
    showSinglePageToast();
  };
  return (
    <Link
      scroll={false}
      href={button.href}
      onClick={handleClick}
      className="inline-block rounded-full bg-accent text-center text-white transition-colors duration-200 motion-safe:group-data-intersecting:anim-apply motion-safe:anim-just-apply anim-opacity-0 -anim-x-90 anim-delay-100 ~xs/sm:~py-2/3.5 -sm2:w-full hocus:bg-accent-hover sm2:px-20"
    >
      {button.text}
    </Link>
  );
}
