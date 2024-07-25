import { Image, WithId } from "../types";

import { clock, rocket, computer } from "./assets";

export type Card = {
  title: string;
  description: string;
  icon: Image;
  twDelayClass?: string;
};

export const title = "Main Features";

export const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.";

export const cards: WithId<Card>[] = [
  {
    id: "planning",
    title: "Monitoring 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.",
    icon: {
      src: clock,
      alt: "clock",
    },
  },
  {
    id: "computer",
    title: "Widget System",
    description:
      "Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar.",
    icon: {
      src: computer,
      alt: "computer",
    },
    twDelayClass: "anim-delay-100"
  },
  {
    id: "speed",
    title: "Best Performance",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.",
    icon: {
      src: rocket,
      alt: "rocket",
    },
    twDelayClass: "anim-delay-200"
  },
];
