"use client";

import { logo } from "@/content/footer";
import { scrollToTop } from "@/lib/client-side";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link scroll={false} href="/" onClick={scrollToTop}>
      <Image src={logo.src} alt={logo.alt} className="~2xs/xs:~w-[7.5rem]/[8.75rem]" />
    </Link>
  );
}
