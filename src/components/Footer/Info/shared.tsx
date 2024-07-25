import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const twButton =
  "animate-border bg-primary rounded-md border border-secondary-200 px-6 py-2 text-secondary-100 hocus:bg-primary-dark duration-200 hocus:text-white data-[state='open']:text-white data-[state='open']:bg-primary-darken ";

export const twPopoverContent =
  "mx-2 flex w-[430px] max-w-[calc(100dvw-1rem)] flex-col gap-3 rounded-md border-secondary-200 bg-primary-darken text-secondary-100";

export const twGrid = "grid xs:grid-cols-2 gap-3";

export function Link({ children, className, ...props }: ComponentProps<"a">) {
  const twBase =
    "flex cursor-pointer gap-2  border border-secondary-200 *: px-3 rounded-md py-2 text-4.5 text-secondary-100 duration-200 hocus:bg-secondary-100/15 hocus:text-white";
  return (
    <a data-external target="_blank" className={cn(twBase, className)} {...props}>
      {children}
    </a>
  );
}
