type MyCapitalize<TText extends string> =
  TText extends `${infer First extends string}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : TText;
