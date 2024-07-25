import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function SeparatorX({ className, ...props }: Omit<ComponentProps<"span">, "children">) {
  const twBase =
    "pointer-events-none my-2 grid h-0.25 grid-cols-[1fr_auto_1fr] place-content-center gap-4 rounded-full before:my-auto before:h-0.25 before:rounded-full before:bg-secondary-100/30 before:content-empty after:my-auto after:h-0.25 after:rounded-full after:bg-secondary-100/30 after:content-empty";

  return (
    <span aria-hidden className={cn(twBase, className)} {...props}>
      <span className="block h-2 w-2 rounded-full bg-secondary-100" />
    </span>
  );
}
