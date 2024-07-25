import { decorationImage as img } from "@/content/pricing/decoration";
import Image from "next/image";

export default function Decoration() {
  return (
    <div className="polygon-up absolute inset-0 -z-top overflow-hidden bg-primary">
      <DecorationImage position="top" />
    </div>
  );
}

export function DecorationImage({ position }: { position: "top" | "bottom" }) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      className={`absolute right-0 max-w-[170%] opacity-7 ~sm/lg:~w-[50rem]/[125rem] -xs2:right-1/2 sm:max-w-none ${position === "top" ? "bottom-0 translate-[50%_50%] -xs2:translate-[50%_60%]" : "top-0 translate-[50%_-50%] -xs2:translate-[50%_-40%]"}`}
    />
  );
}
