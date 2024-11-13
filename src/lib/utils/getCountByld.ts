const getCountById = <T extends string, I extends Record<T, string>>(
  items: I[],
  idKey: T
): Record<string, number> =>
  items.reduce((counts, item) => {
    const id = item[idKey];
    if (!counts[id]) counts[id] = 0;
    counts[id] += 1;
    return counts;
  }, {} as Record<string, number>);

export default getCountById;
;