import Image from "next/image";

import { decorationImage as img } from "@/content/hero/decoration";

export default function Decoration() {
  return (
    <div aria-hidden className="polygon-down absolute inset-0 -z-top overflow-hidden bg-primary">
      <Image
        src={img.src}
        alt={img.alt}
        className="absolute left-0 top-0 opacity-7 translate-[-15%_-39%] ~md/2xl:~w-[22rem]/[41.25rem] -md:hidden"
      />

      <Image
        src={img.src}
        alt={img.alt}
        className="absolute right-0 top-0 max-w-[140%] opacity-7 translate-[25%_-3%] ~md/2xl:~w-[45rem]/[90rem] -md:right-1/2 -md:translate-[50%_-3%]"
      />
    </div>
  );
}
