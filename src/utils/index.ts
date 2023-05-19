export const filteredData = (data: string[]) => {
  return data.toString().split(".");
};

export const generateText = (textDB: string[]) => {
  let str = "";
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.round(Math.random() * textDB.length - 1);
    str += textDB[randomIndex] + ".";
  }
  return str;
};

export const countSpeed = (totalLength: number, time: number) => {
  if (time === 0) return 0;
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
