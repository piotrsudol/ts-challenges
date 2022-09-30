type MyExclude<TObject, TKey> = TObject extends TKey ? never : TObject;
