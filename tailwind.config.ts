import type { Config } from "tailwindcss";

/* ---- Plugins ---- */
import twAnimate from "tailwindcss-animate";
import fluid, { extract } from "fluid-tailwind";
import myPlugin from "./tailwind.plugin";
import myAnimationPlugin from "./tailwind.animation-plugin";

/* ---- Presets ---- */
import myPreset from "./tailwind.preset";

/* ---- Utils ---- */
const pxToRem = (px: number) => `${px / 16}rem`;

const addBoolData = (name: string) => ({
  [name]: `${name}="true"`,
  [`not-${name}`]: `${name}="false"`,
});

const config = {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    extract,
  },
  prefix: "",
  theme: {
    // Roboto is the only font that is being used in this project
    fontFamily: {},
    // Same for font weights
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    screens: {
      "2xs": pxToRem(280), // 17.5rem
      xs: pxToRem(375), // 23.4375rem
      xs2: pxToRem(460), // 28.75rem
      sm: pxToRem(540), // 33.75rem
      sm2: pxToRem(640), // 40rem
      md: pxToRem(768), // 48rem
      md2: pxToRem(876), // 54.75rem
      md3: pxToRem(960), // 60rem
      lg: pxToRem(1180), // 73.75rem
      xl: pxToRem(1440), // 90rem
      "2xl": pxToRem(1600), // 100rem
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      data: {
        ...addBoolData("active"),
        ...addBoolData("scrolled"),
        ...addBoolData("intersecting"),
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
          darken: "hsl(var(--primary-darken))",
          light: "hsl(var(--primary-light))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "var(--accent-hover, #d11067)",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        slideRight: {
          from: { translate: "-15%" },
          to: { translate: "0%" },
        },

        slideLeft: {
          from: { translate: "15%" },
          to: { translate: "0%" },
        },

        slideDown: {
          from: { translate: "0 -100%" },
          to: { translate: "0 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        fadeIn: "fadeIn 500ms ease-in-out",
        slideRight: "slideRight 500ms ease-in-out",
        slideLeft: "slideLeft 500ms ease-in-out",
        slideDown: "slideDown 500ms ease-in-out",
      },
    },
  },
  plugins: [fluid, twAnimate, myAnimationPlugin, myPlugin],
  presets: [myPreset],
} satisfies Config;

export default config;
