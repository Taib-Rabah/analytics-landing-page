type NotUndefined<T> = T extends undefined ? never : T;

type KeyValuePair<T = string, U = string> = Record<T, U>;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};