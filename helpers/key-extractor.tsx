export const keyExtractor = (item, index) => item.item?.id ?? `${item}_${index}`;
