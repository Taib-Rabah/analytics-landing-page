"use client";

import { useRefsSet } from "@/app/Providers/IntersectionObserver";
import { cards } from "@/content/features/other";
import Image from "next/image";

export default function OtherFeatures() {
  const addNode = useRefsSet();

  return (
    <div className="overflow-x-clip">
      <div className="wrapper flex flex-col ~2xs/sm:~gap-10/25 ~xs/md:~mt-12/32">
        {cards.map(({ id, title, description, image }, cardIndex) => (
          <div
            key={id}
            className="flex justify-center ~xs/sm:~gap-7.5/12 -md3:flex-col sm:items-center sm:max-md3:text-center md3:justify-between"
          >
            <div
              ref={addNode({ id: `other-features-card-content-${id}` })}
              className={`flex flex-col anim-opacity-0 ~xs/sm:~gap-5/7.5 motion-safe:anim-just-apply motion-safe:data-intersecting:anim md3:~md3/lg:~max-w-[25rem]/[30rem] ${cardIndex % 2 === 1 ? "anim-x-40" : "-anim-x-40"}`}
            >
              <p className="text-balance font-bold leading-[1.2] text-primary ~2xs/sm:~text-6/10">{title}</p>
              <p className="text-secondary-100 ~2xs/sm:~text-3.5/4.5 -md3:max-w-[45rem]">{description}</p>
            </div>
            <Image
              ref={addNode({ id: `other-features-card-image-${id}` })}
              src={image.src}
              alt={image.alt}
              className={`shadow-[0_1.125rem_3.125rem_-0.9375rem_rgba(25,42,89,0.2)] anim-opacity-0 anim-scale-75 ~2xs/sm:~rounded-[1rem]/[2rem] ~md3/2xl:~w-[28rem]/[37.5rem] -sm:w-full motion-safe:anim-just-apply motion-safe:data-intersecting:anim ${cardIndex % 2 === 1 ? "md3:order-first" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
