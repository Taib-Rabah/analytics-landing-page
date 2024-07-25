import { withOptions } from "tailwindcss/plugin";
import { z } from "zod";

/* ---- Utils ---- */

type GenValuesOptions = {
  from: number;
  to: number;
  step: number;
  extra?: (number | [string, string])[];
  multiplier?: number;
  direction?: -1 | 1;
  unit?: string;
};

export const genValues = ({ from, to, step, extra, multiplier, direction, unit }: GenValuesOptions) => {
  direction ??= 1;
  multiplier ??= 1;
  unit ??= "";

  const obj: Record<string, string> = {};

  for (let i = from * direction; i * direction <= to; i += step * direction) {
    const value = `${+(i * multiplier).toFixed(2)}${unit}`;
    obj[i] = value;
  }

  if (extra) {
    extra.forEach((value) => {
      if (typeof value === "number") {
        obj[value * direction] = `${value * multiplier * direction}${unit}`;
      } else {
        let [k, v] = value;
        if (direction === -1) {
          k = `-${k}`;
          v = `-${v}`;
        }
        obj[k] = v;
      }
    });
  }

  return obj;
};

/* ---- Validation ---- */

const optionsSchema = z.object({
  duration: z.string().default("700ms"),
  delay: z.string().default("0ms"),
  timing: z.string().default("ease"),
  mode: z.string().default("forwards"),
  direction: z.string().default("normal"),
  count: z.string().default("1"),
  startX: z.string().default("0"),
  endX: z.string().default("0"),
  startY: z.string().default("0"),
  endY: z.string().default("0"),
  startScaleX: z.string().default("1"),
  endScaleX: z.string().default("1"),
  startScaleY: z.string().default("1"),
  endScaleY: z.string().default("1"),
  startRotate: z.string().default("0deg"),
  endRotate: z.string().default("0deg"),
  startOpacity: z.string().default("1"),
  endOpacity: z.string().default("1"),
});

type Options = z.infer<typeof optionsSchema>;

export default withOptions((userOptions: DeepPartial<Options>) => ({ addUtilities, matchUtilities }) => {
  /* ---- Options ---- */
  const parseResult = optionsSchema.safeParse(userOptions);
  const options = parseResult.success ? parseResult.data : optionsSchema.parse({});

  /* ---- Keyframes ---- */
  const keyframes = {
    "@keyframes anim": {
      from: {
        opacity: `var(--start-opacity, ${options.startOpacity})`,
        translate: `var(--start-x, 0) var(--start-y, ${options.startY})`,
        scale: `var(--start-scale-x, 1) var(--start-scale-y, ${options.startScaleY})`,
        rotate: `var(--start-rotate, ${options.startRotate})`,
      },
      to: {
        opacity: `var(--end-opacity, ${options.endOpacity})`,
        translate: `var(--end-x, 0) var(--end-y, ${options.endY})`,
        scale: `var(--end-scale-x, 1) var(--end-scale-y, ${options.endScaleY})`,
        rotate: `var(--end-rotate, ${options.endRotate})`,
      },
    },
  };

  addUtilities(keyframes);

  /* ---- Main Utility ---- */
  addUtilities({
    ".anim": {
      "animation-name": "anim",
      "animation-duration": `var(--duration, ${options.duration})`,
      "animation-timing-function": `var(--timing, ${options.timing})`,
      "animation-delay": `var(--delay, ${options.delay})`,
      "animation-fill-mode": `var(--mode, ${options.mode})`,
      "animation-direction": `var(--direction, ${options.direction})`,
      "animation-iteration-count": `var(--count, ${options.count})`,
    },
  });

  /* ---- Apply Start Values Before Animation Delay ---- */
  addUtilities({
    ".anim-apply": {
      "animation-name": "anim",
      "animation-duration": `var(--duration, ${options.duration})`,
      "animation-timing-function": `var(--timing, ${options.timing})`,
      "animation-delay": `var(--delay, ${options.delay})`,
      "animation-fill-mode": `var(--mode, ${options.mode})`,
      "animation-direction": `var(--direction, ${options.direction})`,
      "animation-iteration-count": `var(--count, ${options.count})`,
      opacity: `var(--start-opacity, ${options.startOpacity})`,
      translate: `var(--start-x, ${options.startX}) var(--start-y, ${options.startY})`,
      scale: `var(--start-scale-x, ${options.startScaleX}) var(--start-scale-y, ${options.startScaleY})`,
      rotate: `var(--start-rotate, ${options.startRotate})`,
    },
  });

  /* ---- Only Apply Start Values---- */
  addUtilities({
    ".anim-just-apply": {
      opacity: `var(--start-opacity, ${options.startOpacity})`,
      translate: `var(--start-x, ${options.startX}) var(--start-y, ${options.startY})`,
      scale: `var(--start-scale-x, ${options.startScaleX}) var(--start-scale-y, ${options.startScaleY})`,
      rotate: `var(--start-rotate, ${options.startRotate})`,
    },
  });

  /* ---- Opacity ---- */
  const opacityValues = genValues({ from: 0, to: 100, step: 5, multiplier: 0.01 });

  matchUtilities(
    {
      "anim-opacity": (value, { modifier }) => ({
        "--start-opacity": value,
        "--end-opacity": modifier,
      }),
    },
    {
      values: opacityValues,
      modifiers: opacityValues,
    },
  );

  /* ---- Translate ---- */
  const genTranslateValues = (direction?: -1 | 1) =>
    genValues({
      from: 0,
      to: 100,
      step: 2,
      multiplier: 0.25,
      unit: "rem",
      direction,
      extra: [["full", "100%"]],
    });

  const translateValues = genTranslateValues();

  const translateModifiers = {
    ...translateValues,
    ...genTranslateValues(-1),
  };

  matchUtilities(
    {
      "anim-xy": (value, { modifier }) => ({
        "--start-x": value,
        "--start-y": value,
        "--end-x": modifier,
        "--end-y": modifier,
      }),
      "anim-x": (value, { modifier }) => ({
        "--start-x": value,
        "--end-x": modifier,
      }),
      "anim-y": (value, { modifier }) => ({
        "--start-y": value,
        "--end-y": modifier,
      }),
    },
    {
      values: translateValues,
      modifiers: translateModifiers,
      supportsNegativeValues: true,
    },
  );

  /* ---- Rotate ---- */
  const genRotateValues = (direction?: -1 | 1) =>
    genValues({
      from: 0,
      to: 360,
      step: 10,
      unit: "deg",
      direction,
      extra: [5, 10, 15, 20, 25, ["full", "360deg"]],
    });

  const rotateValues = genRotateValues();
  const rotateModifiers = {
    ...rotateValues,
    ...genRotateValues(-1),
  };

  matchUtilities(
    {
      "anim-rotate": (value, { modifier }) => ({
        "--start-rotate": value,
        "--end-rotate": modifier,
      }),
    },
    {
      values: rotateValues,
      modifiers: rotateModifiers,
      supportsNegativeValues: true,
    },
  );

  /* ---- Scale ---- */
  const scaleValues = genValues({
    from: 0,
    to: 200,
    step: 5,
    multiplier: 0.01,
    extra: [91, 92, 93, 94, 96, 97, 98, 99],
  });

  matchUtilities(
    {
      "anim-scale": (value, { modifier }) => ({
        "--start-scale-x": value,
        "--start-scale-y": value,
        "--end-scale-x": modifier,
        "--end-scale-y": modifier,
      }),
      "anim-scale-x": (value, { modifier }) => ({
        "--start-scale-x": value,
        "--end-scale-x": modifier,
      }),
      "anim-scale-y": (value, { modifier }) => ({
        "--start-scale-y": value,
        "--end-scale-y": modifier,
      }),
    },
    {
      values: scaleValues,
      modifiers: scaleValues,
      supportsNegativeValues: true,
    },
  );

  /* ---- Time ---- */
  const timeValues = genValues({ from: 0, to: 2000, step: 50, unit: "ms" });

  matchUtilities(
    {
      "anim-time": (value, { modifier }) => ({
        "--duration": value,
        "--delay": modifier,
      }),
      "anim-delay": (value) => ({
        "--delay": value,
      }),
    },
    {
      values: timeValues,
      modifiers: timeValues,
    },
  );

  /* ---- Mode ---- */
  const modeValues = {
    backwards: "backwards",
    forwards: "forwards",
    both: "both",
    none: "none",
  };

  matchUtilities(
    {
      "anim-mode": (value) => ({
        "--mode": value,
      }),
    },
    {
      values: modeValues,
    },
  );

  /* ---- Direction ---- */
  const directionValues = {
    normal: "normal",
    reverse: "reverse",
    alternate: "alternate",
    "alternate-reverse": "alternate-reverse",
  };

  matchUtilities(
    {
      "anim-direction": (value) => ({
        "--direction": value,
      }),
    },
    {
      values: directionValues,
    },
  );

  /* ---- Count ---- */
  const countValues = genValues({ from: 1, to: 10, step: 1, extra: [["infinite", "infinite"]] });

  matchUtilities(
    {
      "anim-count": (value) => ({
        "--count": value,
      }),
    },
    {
      values: countValues,
    },
  );

  /* ---- Timing ---- */
  const timingValues = {
    ease: "ease",
    linear: "linear",
    "ease-in": "ease-in",
    "ease-out": "ease-out",
    "ease-in-out": "ease-in-out",
    "step-start": "step-start",
    "step-end": "step-end",
  };

  matchUtilities(
    {
      "anim-timing": (value) => ({
        "--timing": value,
      }),
    },
    {
      values: timingValues,
    },
  );

  /* ---- Animation State ---- */
  matchUtilities(
    {
      "anim-state": (value) => ({
        "animation-play-state": value,
      }),
    },
    {
      values: {
        paused: "paused",
        running: "running",
      },
    },
  );
});
