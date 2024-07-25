import Image from "next/image";
import Link from "next/link";
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";

import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

import { menuIcon, links } from "@/content/header";
import { showSinglePageToast } from "@/lib/toasts";

const initActiveLinkId = links[0].id;

export default function MobileNav() {
  const activeLinkState = useState(initActiveLinkId);

  return (
    <Sheet>
      <SheetTrigger className="ml-auto p-2 md2:hidden">
        <Image src={menuIcon.src} alt={menuIcon.alt} className="w-6" />
      </SheetTrigger>
      <SheetContent className="border-secondary-100 bg-primary pt-12 text-white">
        <VisuallyHidden asChild>
          <SheetTitle>Navbar Menu</SheetTitle>
        </VisuallyHidden>
        <VisuallyHidden asChild>
          <SheetDescription>Links to navigate the website</SheetDescription>
        </VisuallyHidden>
        <ul className="group">
          <Links activeLinkState={activeLinkState} />
          <Buttons />
        </ul>
      </SheetContent>
    </Sheet>
  );
}

/* ---- Links ---- */

type LinksProps = {
  activeLinkState: [string, Dispatch<SetStateAction<string>>];
};

function Links({ activeLinkState: [activeLinkId, setActiveLinkId] }: LinksProps) {
  const handleClick = (id: string) => {
    setActiveLinkId(id);
    showSinglePageToast();
  };

  return links.map(({ id, text, href }) => (
    <li key={id}>
      <SheetClose asChild>
        <Link
          href={href}
          scroll={false}
          onClick={() => handleClick(id)}
          className={`relative grid grid-cols-[auto_1fr] items-center py-1 duration-200 after:ml-2 after:h-[0.0625rem] after:rounded-full after:content-empty hocus:text-white hocus:after:bg-white ${activeLinkId === id ? "text-white after:bg-white" : "text-secondary-100 after:bg-white/20"}`}
        >
          {text}
          {activeLinkId === id ? (
            <motion.span
              aria-hidden
              layoutId="dot"
              transition={{ duration: 0.2 }}
              className="absolute -left-4 h-2 w-2 rounded-full bg-white"
            ></motion.span>
          ) : null}
        </Link>
      </SheetClose>
    </li>
  ));
}

/* ---- Buttons ---- */

function Buttons() {
  const handleClick = () => {
    showSinglePageToast();
  };

  return (
    <>
      <li>
        <SheetClose asChild>
          <Button onClick={handleClick} className="mb-4 mt-8 block">
            Sign In
          </Button>
        </SheetClose>
      </li>
      <li>
        <SheetClose asChild>
          <Button onClick={handleClick}>Sign Up</Button>
        </SheetClose>
      </li>
    </>
  );
}

function Button({ className, children, ...props }: ComponentProps<"button">) {
  const twButton =
    "rounded-full border-1 border-secondary-100 w-full py-1 text-secondary-100 duration-200  hocus:bg-secondary-100/20 hocus:text-white";
  return (
    <button className={cn(twButton, className)} {...props}>
      {children}
    </button>
  );
}
