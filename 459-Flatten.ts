type Flatten<T> = T extends []
  ? []
  : T extends [infer Head, ...infer Rest]
  ? [...Flatten<Head>, ...Flatten<Rest>]
  : [T];
