import Plugin from "tailwindcss/plugin";

export default Plugin(({ addComponents, addUtilities, matchUtilities, addVariant, matchVariant, theme }) => {
  /* ---- Opposite Media Queries ---- */
  const screens = theme("screens", {} as Record<string, string>);

  for (const screenKey in screens) {
    const newKey = `-${screenKey}`;
    const newScreen = `@media (width < ${screens[screenKey]})`;
    addVariant(newKey, newScreen);
  }

  /* ---- Device That Can(t) Hover ---- */
  addVariant("can-hover", "@media (hover: hover)");
  addVariant("cant-hover", "@media (hover: none)");

  /* ---- :not() Selector ---- */
  matchVariant("not", (value) => `&:not(${value})`);

  /* ---- :hover And :focus-visible ---- */
  addVariant("-hover", "&:not(:hover)");
  addVariant("hocus", "&:where(:hover, :focus-visible)");
  addVariant("-hocus", "&:not(:hover, :focus-visible)");
  addVariant("group-hocus", ".group:where(:hover, :focus-visible) &");
  
  /* ---- ::before And ::after ---- */
  addVariant("pseudo", ["&::before", "&::after"]);

  /* ---- translate Property ---- */
  matchUtilities({
    translate: (value) => ({
      translate: value,
    }),
  }, { values: {
    0: "0 0"
  }});

  /* ---- transition duration ---- */
  addUtilities({
    ".duration-inherit": {
      "transition-duration": "inherit",
    },
  });

  /* ---- Inherit ---- */
  addUtilities({
    ".duration-inherit": {
      "transition-duration": "inherit",
      "animation-duration": "inherit",
    },
    ".delay-inherit": {
      "transition-delay": "inherit",
      "animation-delay": "inherit",
    },
  })

  /* ---- Wrapper ---- */
  addComponents({
    ".wrapper": {
      "--wrapper-px": "clamp(1rem, 0.068rem + 3.975vw, 3rem)",
      "padding-inline": "var(--wrapper-px)",
      "max-width": "calc(theme(screens.lg) + var(--wrapper-px) * 2)",
      "margin-inline": "auto",
    },
  });
});
