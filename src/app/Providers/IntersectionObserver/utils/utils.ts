import { Exit } from "./types";

export const boolToStr = (bool: boolean | undefined, defaultValue?: boolean): string => (bool === undefined ? boolToStr(defaultValue) : bool ? "true" : "false");

export const strToBool = (str: string | undefined, defaultValue: boolean): boolean =>
  str === undefined ? defaultValue : str === "true";

export const strToNum = (str: string | undefined, defaultValue: number): number =>
  str === undefined ? defaultValue : Number(str);

export const numToStr = (num: number | undefined, defaultValue: string): string =>
  num === undefined ? defaultValue : num.toString();

export const strToExit = (str: string | undefined, defaultValue: Exit) =>
  str === undefined
    ? defaultValue
    : ["top", "bottom", "both", "none"].includes(str)
      ? (str as Exit)
      : defaultValue;
