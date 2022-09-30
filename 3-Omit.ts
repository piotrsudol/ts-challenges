type MyOmit<TObject, TKey extends keyof TObject> = {
  [key in keyof TObject as key extends TKey ? never : key]: TObject[key];
};
