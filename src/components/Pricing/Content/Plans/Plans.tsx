"use client";

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { plans } from "@/content/pricing/pricing";
import { useState } from "react";
import { DotButton, useDotButton } from "./DotButton";
import { showSinglePageToast } from "@/lib/toasts";
import { useRefsSet } from "@/app/Providers/IntersectionObserver";

export default function Plans() {
  const [api, setApi] = useState<CarouselApi>();

  const { scrollSnaps, selectedIndex, handleClick } = useDotButton(api);
  const addNode = useRefsSet();

  const scrollable = scrollSnaps.length > 1;

  const onOrderClick = () => {
    showSinglePageToast();
  };

  return (
    <Carousel
      setApi={setApi}
      className="mx-auto max-w-[calc(theme(screens.lg)+1rem*2)] lg:px-4"
      opts={{
        align: "start",
        watchDrag: scrollable,
        breakpoints: {
          // NOTE: This value is hardcoded and it refers to the "sm2" breakpoint (at least for the the time this comment was written)
          "(width < 40rem)": {
            containScroll: false,
            startIndex: 1,
            align: "center",
          },
        },
      }}
    >
      <CarouselContent className="-ml-4 -lg:select-none sm2:-ml-0 lg:-ml-20">
        {plans.map(({ id, name, users, price, mostPopular }) => (
          <CarouselItem
            key={id}
            ref={addNode({ id: `pricing-plan-${id}` })}
            className="basis-[80%] pl-4 anim-opacity-0 anim-scale-50 motion-safe:anim-just-apply motion-safe:data-intersecting:anim sm2:basis-1/2 sm2:pl-10 sm2:max-lg:pl-4 sm2:max-lg:pr-4 lg:basis-1/3 lg:pl-20"
          >
            <div
              className={`relative flex flex-col items-center rounded-[1.875rem] pb-12.5 pt-14 ${mostPopular ? "bg-white" : "bg-primary-dark"}`}
            >
              <p className={`text-7.5 font-bold ${mostPopular ? "text-primary" : "text-white"}`}>{name}</p>
              <p className="text-/4.5 text-secondary-100">up to {users} users</p>
              <span
                className={`mx-15 mb-7 mt-9.5 block h-0.25 self-stretch -xs:mx-7.5 ${mostPopular ? "bg-[#d3d9e9]" : "bg-[#2a407c]"}`}
              ></span>
              <div className="leading-none">
                <p className={`text-15 font-bold ${mostPopular ? "text-primary" : "text-white"}`}>
                  <span className="text-7.5">$</span>
                  {price}
                </p>
                <p className="text-secondary-100">per month</p>
              </div>
              <button
                onClick={onOrderClick}
                className={`mt-10 rounded-full px-20 py-4 text-white duration-200 -xs:mx-4 -xs:self-stretch -xs:px-0 ${
                  mostPopular
                    ? "bg-accent hocus:bg-accent-hover"
                    : "border-1 border-secondary-100/20 hocus:border-secondary-100 hocus:bg-secondary-100/20"
                }`}
              >
                Order
              </button>
              {mostPopular ? (
                <span
                  data-decoration
                  className="absolute right-5 top-5 cursor-default rounded-full bg-accent px-3 py-1.5 text-3 font-bold text-white"
                >
                  Most Popular
                </span>
              ) : null}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className={`mt-8 flex justify-center gap-4 ${!scrollable ? "hidden" : ""}`}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            disabled={selectedIndex === index}
            data-active={selectedIndex === index}
            key={index}
            onClick={() => handleClick(index)}
          ></DotButton>
        ))}
      </div>
    </Carousel>
  );
}
