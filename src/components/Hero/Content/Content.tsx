"use client";

import { description, mainImage, secondaryImage, title } from "@/content/hero";
import Image from "next/image";
import TryForFreeBtn from "./TryForFreeBtn";
import useIOGlobal from "@/app/Providers/IntersectionObserver/hooks/useRefsSet";

export default function Content() {
  const addNode = useIOGlobal();

  return (
    <div className="wrapper relative flex -md2:flex-col -md2:items-center sm2:max-md2:text-center xl:*:shrink-0">
      <div
        ref={addNode({ id: "hero-content-left" })}
        className="group max-w-[34.5rem] ~xs/md:~mt-4/8 md2:~md2/xl:~max-w-[25rem]/[34.5rem]"
      >
        <p className="text-balance font-bold leading-[1.2] text-white anim-opacity-0 -anim-x-90 ~md2/xl:~text-9/12.5 -md:~2xs/md:~text-7/12.5 motion-safe:anim-just-apply motion-safe:group-data-intersecting:anim-apply md:max-md2:text-12.5">
          {title}
        </p>
        <p className="mt-4 text-4.5 text-secondary-100 anim-opacity-0 -anim-x-90 anim-delay-50 ~xs/md:~mb-4/12.5 motion-safe:anim-just-apply motion-safe:motion-safe:group-data-intersecting:anim-apply">
          {description}
        </p>
        <TryForFreeBtn />
      </div>
      <div
        ref={addNode({ id: "hero-content-right" })}
        className="anim-opacity-0 anim-scale-75 -md2:order-first motion-safe:anim-just-apply motion-safe:data-intersecting:anim-apply md:right-0 md2:absolute md2:~md2/xl:~w-[32rem]/[50rem] md2:~md2/xl:~translate-y-[0rem]/[-4rem] md2:~lg/xl:~translate-x-32/60 md2:max-xl:right-0 xl:translate-x-60"
      >
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          className="mx-auto rounded-[1.875rem] shadow-[0_1.125rem_3.125rem_-0.9375rem_rgba(25,42,89,0.2)] -md2:w-[min(100%,37.5rem)]"
        />
        <Image
          src={secondaryImage.src}
          alt={secondaryImage.alt}
          className="absolute top-1/2 w-[45%] -translate-y-1/2 translate-x-[-20%] rounded-[2rem] shadow-[0_1.2rem_3.3375rem_-1rem_rgba(25,42,89,0.2)] -md2:hidden"
        />
      </div>
    </div>
  );
}
