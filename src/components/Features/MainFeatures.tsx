"use client";

import { useRefsSet } from "@/app/Providers/IntersectionObserver";
import { cards, description, title } from "@/content/features/main";
import Image from "next/image";

export default function MainFeatures() {
  const addNode = useRefsSet();

  return (
    <div ref={addNode({ id: "main-features" })} className="group wrapper mt-7.5 sm:text-center">
      <p className="text-balance font-bold text-primary anim-opacity-0 -anim-y-14 ~xs/sm:~text-7.5/10 motion-safe:anim-just-apply motion-safe:group-data-intersecting:anim">
        {title}
      </p>
      <p className="mx-auto max-w-[66.25rem] text-secondary-100 anim-opacity-0 -anim-x-10 ~xs/sm:~text-3.5/4.5 ~xs/sm:~mt-5/7.5 motion-safe:anim-just-apply motion-safe:group-data-intersecting:anim">
        {description}
      </p>
      <div className="grid place-items-center gap-x-5 gap-y-10 ~xs/sm:~mt-10/20 sm2:grid-cols-2 md3:grid-cols-3">
        {cards.map(({ id, title, description, icon, twDelayClass }) => (
          <div
            key={id}
            ref={addNode({ id: `main-features-card-${id}` })}
            className={`flex anim-opacity-0 -anim-x-20 ~2xs/sm:~gap-x-4/8 motion-safe:anim-just-apply motion-safe:data-intersecting:anim sm:max-w-[23.75rem] sm:flex-col sm:items-center md3:[&:nth-last-child(1):nth-child(3n+1)]:col-span-3 sm2:max-md3:[&:nth-last-child(1):nth-child(odd)]:col-span-2 ${twDelayClass}`}
          >
            <Image src={icon.src} alt={icon.alt} className="~2xs/sm:~w-10/15 -sm:self-start" />
            <div className="">
              <p className="font-bold text-primary ~2xs/sm:~mb-2/4 sm:mt-6.5">{title}</p>
              <p className="text-secondary-100 sm:px-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
