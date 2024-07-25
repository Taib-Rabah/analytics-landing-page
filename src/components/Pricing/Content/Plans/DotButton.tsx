import { CarouselApi } from "@/components/ui/carousel";
import { ComponentProps, useCallback, useEffect, useState } from "react";

export const useDotButton = (api: CarouselApi) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const handleClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  useEffect(() => {
    if (!api) return;

    const onInit = (api: NotUndefined<CarouselApi>) => {
      setScrollSnaps(api.scrollSnapList());
    };

    const onSelect = (api: NotUndefined<CarouselApi>) => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onInit(api);
    onSelect(api);

    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [api]);

  return { selectedIndex, scrollSnaps, handleClick };
};

export const DotButton = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <button
      type="button"
      className="h-7 w-7 rounded-full border-1 border-secondary-100/40 bg-transparent text-white duration-200 [box-shadow:0_0_0.5rem_rgba(0,0,0,0.3)] hocus:border-secondary-100 hocus:bg-secondary-100/20 data-active:border-white data-active:bg-secondary-100/40"
      {...props}
    >
      {children}
    </button>
  );
};
