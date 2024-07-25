import { Config } from "tailwindcss";

const sizes = (() => {
  const sizes: Record<string, string> = {};

  // 1px
  sizes[0.25] = "0.0625rem";

  // 2px to 400px with step of 2px
  Array.from({ length: 100 }).map((_, i) => {
    sizes[i + 1] = `${(i + 1) / 4}rem`;
    sizes[i + 0.5] = `${(i + 0.5) / 4}rem`;
  });

  // tw has from 1/2 to 1/6 && 1/12 by default
  sizes["1/7"] = "14.285714%";
  sizes["1/8"] = "12.5%";
  sizes["1/9"] = "11.111111%";
  sizes["1/10"] = "10%";
  sizes["1/11"] = "9.090909%";
  return sizes;
})();

const borderWidth = {
  1: "0.0625rem",
  2: "0.125rem",
  3: "0.1875rem",
  4: "0.25rem",
  5: "0.3125rem",
  6: "0.375rem",
  7: "0.4375rem",
  8: "0.5rem",
  9: "0.5625rem",
};

const opacity = {
  1: "0.01",
  2: "0.02",
  3: "0.03",
  4: "0.04",
  5: "0.05",
  6: "0.06",
  7: "0.07",
  8: "0.08",
  9: "0.09",
};

const config: Partial<Config> = {
  theme: {
    extend: {
      spacing: sizes,
      fontSize: sizes,
      borderWidth,
      opacity,
      zIndex: {
        top: "999",
      },
      content: {
        empty: "''",
        star: "'*'",
      },
    },
  },
};

export default config;
