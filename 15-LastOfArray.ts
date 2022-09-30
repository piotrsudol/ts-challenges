type Last<TObject extends any[]> = TObject extends [
  ...infer Rest,
  infer LastElement
]
  ? LastElement
  : never;
