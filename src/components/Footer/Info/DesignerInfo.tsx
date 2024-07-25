import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Link, twButton, twGrid, twPopoverContent } from "./shared";
import { designer } from "@/content/footer";
import SeparatorX from "@/components/SeparatorX/SeparatorX";

export default function DesignerInfo() {
  return (
    <Popover>
      <PopoverTrigger className={twButton}>Designer</PopoverTrigger>
      <PopoverContent className={twPopoverContent}>
        <p className="text-4.5 text-secondary-100">
          Designer: <span className="font-bold">{designer.name}</span>
        </p>

        <ul className={twGrid}>
          {designer.links.map(({ id, text, href, icon }) => (
            <li key={id}>
              <Link href={href}>
                {icon}
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <SeparatorX />

        <Link href={designer.designFile.href}>
          {designer.designFile.icon}
          {designer.designFile.text}
        </Link>
      </PopoverContent>
    </Popover>
  );
}
