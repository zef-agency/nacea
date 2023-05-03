export function filterUniqueKeys(input: { key: string; value: string }[]) {
  const uniqueValues = new Map<string, number>();

  input.forEach((item, index) => {
    uniqueValues.set(item.key, index);
  });

  const result: { key: string; value: string }[] = [];

  uniqueValues.forEach((index, key) => {
    const lastIndex = input.findIndex(
      (item) => item.key === key && input.indexOf(item) === index
    );

    if (lastIndex !== -1) {
      result.push(input[lastIndex]);
    }
  });

  return result;
}

export const getItemsInArray = (attributes: any) => {
  const filtered = attributes.filter((item: any) => item.type === "select")[0];

  if (!filtered || filtered.options.length === 0) {
    return [""];
  }
  const sliced = filtered?.options.slice(1);

  return sliced;
};
