"use client";

import { logo } from "@/content/header";
import { scrollToTop } from "@/lib/client-side";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" scroll={false} onClick={scrollToTop}>
      <Image src={logo.src} alt={logo.alt} className="~xs/md2:~w-40/45" />
    </Link>
  );
}
