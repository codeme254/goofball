function generateTestIds(
  moduleName: string,
  numberOfIds: number,
): string[] | string[][] {
  const words: string[] = moduleName.trim().toUpperCase().split(/\s+/);

  const pad = (num: number): string => num.toString().padStart(3, "0");

  const buildIds = (middle: string): string[] => {
    return Array.from({ length: numberOfIds }, (_, i: number) => {
      return `TC_${middle}_${pad(i + 1)}`;
    });
  };

  if (words.length === 1) {
    return buildIds(words[0]);
  }

  if (words.length === 2) {
    const initials: string = words[0][0] + words[1][0];
    return buildIds(initials);
  }

  const maxChars: number = Math.min(words.length, 4);
  const results: string[][] = [];

  for (let len = 2; len <= maxChars; len++) {
    const middle: string = words
      .slice(0, len)
      .map((word: string) => word[0])
      .join("");

    results.push(buildIds(middle));
  }

  return results;
}

export default generateTestIds;
