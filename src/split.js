/**
 * Return an object with the value and the unit
 * {string} [value]
 * @return {object}
 */
export function split(string) {
  const { stringValue, units } = string.match(
    /(?<stringValue>[0-9.-]+[eE]?[0-9.-]*)(?<units>.*)/,
    '$1',
  ).groups;

  return {
    value: Number(stringValue),
    units: units.trim(),
  };
}
