export const getArrayWithSplittedValue = (
  array: any[],
  keyField: string,
  standard = ' ',
  order = 0,
) => {
  return array.map(item => {
    return { ...item, [keyField]: item[keyField].split(standard)[order] };
  });
};
