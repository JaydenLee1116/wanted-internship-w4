export const getArrayWithSplittedValue = (
  array: any[],
  keyField: string,
  standard?: string,
  order?: number,
) => {
  return array.map(item => {
    return { ...item, [keyField]: item[keyField].split(standard || ' ')[order || 0] };
  });
};
