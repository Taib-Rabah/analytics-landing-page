"use client";

import { title, description } from "@/content/pricing/pricing";
import Plans from "./Plans/Plans";
import { useRefsSet } from "@/app/Providers/IntersectionObserver";

export default function Content() {
  const addNode = useRefsSet();

  return (
    <div className="sm:text-center">
      <div className="group wrapper" ref={addNode({ id: "pricing-content" })}>
        <p className="text-balance font-bold text-white anim-opacity-0 ~xs/sm:~text-7.5/10 -sm:-anim-x-20 motion-safe:anim-just-apply motion-safe:group-data-intersecting:anim sm:-anim-y-20">
          {title}
        </p>
        <p className="mx-auto mb-20 max-w-[40rem] text-secondary-100 anim-opacity-0 -anim-x-20 ~xs/sm:~text-4/4.5 ~xs/sm:~mt-4/7.5 motion-safe:anim-just-apply motion-safe:group-data-intersecting:anim">
          {description}
        </p>
      </div>
      <Plans />
    </div>
  );
}
