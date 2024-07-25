import { ComponentProps, Dispatch, SetStateAction, useState } from "react";
import NextLink from "next/link";

import { motion } from "framer-motion";

import { links } from "@/content/header";
import { cn } from "@/lib/utils";

import { showSinglePageToast } from "@/lib/toasts";
import type { Link, WithId } from "@/content/types";

const initActiveLinkId = links[0].id;

export default function DesktopNav() {
  const activeLinkState = useState(initActiveLinkId);

  return (
    <ul className="flex grow items-center ~md2/lg:~ml-8/25 -md2:hidden">
      <Links activeLinkState={activeLinkState} />
      <Buttons />
    </ul>
  );
}

/* ---- Links ---- */

type LinksProps = {
  activeLinkState: [string, Dispatch<SetStateAction<string>>];
};

function Links({ activeLinkState }: LinksProps) {
  return (
    <>
      {links.map((props) => (
        <li key={props.id}>
          <Link {...props} activeLinkState={activeLinkState} />
        </li>
      ))}
    </>
  );
}

type LinkProps = WithId<Link> & {
  activeLinkState: [string, Dispatch<SetStateAction<string>>];
};

function Link({ id, href, text, activeLinkState: [activeLinkId, setActiveLinkId] }: LinkProps) {
  const handleClick = (id: string) => {
    setActiveLinkId(id);
    showSinglePageToast();
  };

  const isActive = activeLinkId === id;

  return (
    <NextLink
      href={href}
      scroll={false}
      data-active={isActive}
      onClick={() => handleClick(id)}
      className="relative inline-block px-[--px] text-secondary-100 duration-200 [--px:1rem] data-active:text-white hocus:text-white"
    >
      {text}
      {isActive ? (
        <motion.span
          aria-hidden
          layoutId="underline"
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute bottom-0 left-[--px] h-0.5 w-[calc(100%-var(--px)*2)] rounded-full bg-white"
        ></motion.span>
      ) : null}
    </NextLink>
  );
}

/* ---- Buttons ---- */

function Buttons() {
  const handleClick = () => {
    showSinglePageToast();
  };

  return (
    <>
      <li className="ml-auto">
        <Button onClick={handleClick} className="-hocus:border-transparent">
          Sign In
        </Button>
      </li>
      <li className="ml-4">
        <Button onClick={handleClick}>Sign Up</Button>
      </li>
    </>
  );
}

function Button({ className, children, ...props }: ComponentProps<"button">) {
  const twButton =
    "rounded-full border-1 border-secondary-100 ~md2/lg:~px-8/13 ~md2/lg:~py-1.5/2.5 leading-none text-secondary-100 duration-200 hocus:bg-secondary-100/20 hocus:text-white";
  return (
    <button className={cn(twButton, className)} {...props}>
      {children}
    </button>
  );
}
