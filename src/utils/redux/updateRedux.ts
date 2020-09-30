export const updateReduxStateArray = <T>({
  newValue,
  oldValue,
  arrayValues,
}: {
  newValue: T;
  oldValue: T;
  arrayValues: T[];
}) => {
  return arrayValues.map((currentValue) => {
    if (oldValue == currentValue) {
      return newValue;
    }
    return currentValue;
  });
};
