export const countSpeed = (totalLength: number, time: number) => {
  return Math.trunc(totalLength / time);
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce(
    (errors: number, expectedChar: string, i) => {
      if (actual[i] !== expectedChar) {
        errors += 1;
      }
      return errors;
    },
    0
  );
};

export const countAccuracy = (errors: number, totalLength: number) => {
  if (totalLength > 0) {
    const accurate = Math.abs(totalLength - errors);
    return Math.trunc((accurate / totalLength) * 100);
  }

  return 0;
};
