export const getKeysWithValues = (obj: Object) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc = {
        ...acc,
        [key]: value
      };
    }
    return acc;
  }, {});
};
