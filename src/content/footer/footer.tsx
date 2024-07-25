import { Image, Link, WithId } from "../types";

import { grayLogo } from "../assets";
import {
  Dribble,
  Facebook,
  Figma,
  Github,
  Instagram,
  NextJS,
  SASS,
  ShadcnUI,
  TailwindCSS,
  Telegram,
  Twitter,
} from "./Icons";
import React from "react";

export const logo: Image = {
  src: grayLogo,
  alt: "logo",
};

export const links: WithId<Link>[] = [
  {
    id: "product",
    text: "Product",
    href: "#",
  },
  {
    id: "pricing",
    text: "Pricing Plans",
    href: "#",
  },
  {
    id: "faq",
    text: "FAQ",
    href: "#",
  },
  {
    id: "blog",
    text: "Blog",
    href: "#",
  },
];

type Social = {
  href: string;
  icon: React.ReactNode;
};

export const socials: WithId<Social>[] = [
  {
    id: "facebook",
    href: "#",
    icon: <Facebook />,
  },
  {
    id: "twitter",
    href: "#",
    icon: <Twitter />,
  },
  {
    id: "instagram",
    href: "#",
    icon: <Instagram />,
  },
];

/* ---- Designer Info ---- */

export const designerName = "Valery Zanimanski";

export const designerLinks: WithId<Link & { icon: React.ReactNode }>[] = [
  {
    id: "figma",
    text: "Figma",
    href: "https://www.figma.com/@zanimanski",
    icon: <Figma />,
  },
  {
    id: "dribble",
    text: "Dribble",
    href: "https://dribbble.com/zanimanski",
    icon: <Dribble />,
  },
  {
    id: "twitter",
    text: "Twitter",
    href: "https://twitter.com/zanimanski",
    icon: <Twitter />,
  },
];

export const figmaDesignFile = {
  href: "https://www.figma.com/community/file/905814382591046401/analytics-landing-page-design",
  text: "Figma Design File",
  icon: <Figma />,
};

export const designer = {
  name: designerName,
  links: designerLinks,
  designFile: figmaDesignFile,
};

/* ---- Developer Info ---- */

export const developerName = "Taib Rabah";

export const developerLinks: WithId<Link & { icon: React.ReactNode }>[] = [
  {
    id: "github",
    text: "GitHub",
    href: "https://github.com/Taib-Rabah",
    icon: <Github />,
  },
  {
    id: "telegram",
    text: "Telegram",
    href: "https://t.me/y_o_5",
    icon: <Telegram />,
  },
];

export const code: Link & { icon: React.ReactNode } = {
  text: "Code on GitHub",
  href: "https://github.com/Taib-Rabah/analytics-landing-page",
  icon: <Github />,
}

export const developerTools: WithId<Link & { icon: React.ReactNode }>[] = [
  {
    id: "nextjs",
    text: "Next.js 14 (TS)",
    href: "https://nextjs.org/",
    icon: <NextJS />,
  },
  {
    id: "tailwindcss",
    text: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: <TailwindCSS />,
  },
  {
    id: "sass",
    text: "SASS (SCSS)",
    href: "https://sass-lang.com/",
    icon: <SASS />,
  },
  {
    id: "shadcn",
    text: "Shadcn UI",
    href: "https://ui.shadcn.com/",
    icon: <ShadcnUI />,
  },
];
