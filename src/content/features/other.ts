import { Image, WithId } from "../types";
import screen01 from "./assets/screen-01.webp";
import screen02 from "./assets/screen-02.webp";
import screen03 from "./assets/screen-03.webp";

export type Card = {
  title: string;
  description: string;
  image: Image;
};

export const cards: WithId<Card>[] = [
  {
    id: "automated-reports",
    title: "Automated Reports & Widget Alerts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    image: {
      src: screen01,
      alt: "screen-01",
    },
  },
  {
    id: "customizable",
    title: "Fully customizable to address your needs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    image: {
      src: screen02,
      alt: "screen-02",
    },
  },
  {
    id: "pre-built-templates",
    title: "Pre-built Dashboard Templates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    image: {
      src: screen03,
      alt: "screen-03",
    },
  },
];
