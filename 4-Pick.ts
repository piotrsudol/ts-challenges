type MyPick<TObject, TKey extends keyof TObject> = {
  [key in TKey]: TObject[key];
};
