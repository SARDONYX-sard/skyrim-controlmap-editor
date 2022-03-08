export type NumMap = {
  3: 2;
  2: 1;
  1: 1;
};

export type ValueOf<T> = T[keyof T];

export type NthDepthProperty<T, P extends keyof NumMap> = P extends 1
  ? keyof T
  : ValueOf<{
      [K in keyof T]: T[K] extends object
        ? NthDepthProperty<T[K], NumMap[P]>
        : never;
    }>;
