import type { Image, Link, WithId } from "../types";

import { logo as logoSrc } from "../assets";
import { menu } from "./assets";

export const logo: Image = {
  src: logoSrc,
  alt: "logo",
};

export const links: WithId<Link>[] = [
  {
    id: "products",
    text: "Products",
    href: "#",
  },
  {
    id: "pricing",
    text: "Pricing",
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

export const menuIcon: Image = {
  src: menu,
  alt: "menu",
};
