import { WithId } from "../types";

export const title = "Pricing Plans";

export const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.";

export type Plan = {
  name: string;
  users: number;
  price: number;
  mostPopular?: boolean;
};

export const plans: WithId<Plan>[] = [
  {
    id: "starter",
    name: "Starter",
    users: 3,
    price: 29,
  },
  {
    id: "standard",
    name: "Standard",
    users: 20,
    price: 99,
    mostPopular: true,
  },
  {
    id: "premium",
    name: "Premium",
    users: 200,
    price: 299,
  }
];
