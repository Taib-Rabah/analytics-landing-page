"use client";

import { socials } from "@/content/footer";
import showInfoToast from "@/lib/toasts/infoToast";
import Link from "next/link";

export default function Socials() {
  const handleClick = () => {
    showInfoToast("Don't leave :)", { duration: 6000, id: "socials" });
  };
  return (
    <ul className="flex ~2xs/xs:~gap-6/10">
      {socials.map(({ id, href, icon }) => (
        <li key={id}>
          <Link
            scroll={false}
            href={href}
            onClick={handleClick}
            className="text-secondary-100 duration-200 hocus:text-white"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
