export const getArrayWithKeyFromObject = (object: object, keyField: string) => {
  return Object.entries(object).map(([key, value]) => {
    return { ...value, [keyField]: key };
  });
};
