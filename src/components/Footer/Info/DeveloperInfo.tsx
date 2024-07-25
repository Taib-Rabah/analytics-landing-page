import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { twButton, Link, twPopoverContent, twGrid } from "./shared";
import { code, developerLinks, developerName, developerTools, figmaDesignFile } from "@/content/footer";
import SeparatorX from "@/components/SeparatorX/SeparatorX";

export default function DeveloperInfo() {
  return (
    <Popover>
      <PopoverTrigger className={twButton + " [--dur:5s]"}>Developer</PopoverTrigger>
      <PopoverContent className={twPopoverContent}>
        <p className="text-4.5">
          Name: <span className="font-bold">{developerName}</span>
        </p>

        <p>A front-end developer who loves what he&apos;s doing :)</p>

        <ul className={twGrid}>
          {developerLinks.map(({ id, text, href, icon }) => (
            <li key={id}>
              <Link href={href}>
                {icon}
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <SeparatorX />

        <Link href={code.href}>
          {code.icon}
          {code.text}
        </Link>

        <SeparatorX />

        <p>
          Main tools used to bring this{" "}
          <a
            href={figmaDesignFile.href}
            className="text-white underline hover:no-underline"
            target="_blank"
            data-external
          >
            design
          </a>{" "}
          to life:
        </p>

        <ul className="grid gap-3 xs2:grid-cols-2">
          {developerTools.map(({ id, text, href, icon }) => (
            <li key={id}>
              <Link href={href}>
                {icon}
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
