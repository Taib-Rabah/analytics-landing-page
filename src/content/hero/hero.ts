import { Image, WithId } from "../types";
import heroImg from "./assets/hero-image.webp";
import heroImg2 from "./assets/hero-image-2.webp";

export const title: string = "Monitor your business on real-time dashboard";

export const description: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.";

export const button = {
  text: "Try for Free",
  href: "/",
};

export const mainImage: WithId<Image> = {
  id: "hero-image",
  src: heroImg,
  alt: "Hero Image",
};
export const secondaryImage: WithId<Image> = {
  id: "hero-image-2",
  src: heroImg2,
  alt: "Hero Image 2",
};
