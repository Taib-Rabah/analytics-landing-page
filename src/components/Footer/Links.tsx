"use client";

import { links } from "@/content/footer";
import { showSinglePageToast } from "@/lib/toasts";
import Link from "next/link";

export default function Links() {
  const handleClick = () => {
    showSinglePageToast();
  };

  return (
    <nav className="-md2:hidden">
      <ul className="flex">
        {links.map(({ id, text, href }) => (
          <li key={id}>
            <Link
              onClick={handleClick}
              scroll={false}
              href={href}
              className="px-4 py-2 text-secondary-100 duration-200 hocus:text-white"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
