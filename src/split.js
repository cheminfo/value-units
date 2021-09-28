/**
 * Return an object with the value and the unit
 * @param {string} [value]
 * @param {object} [options={}]
 * @param {number} [options.factor=1] multiply value by a factor during conversion
 * @return {object}
 */
export function split(string, options = {}) {
  const { factor = 1 } = options;
  const { stringValue, units } = string.match(
    /(?<stringValue>[0-9.-]+[eE]?[0-9.-]*)(?<units>.*)/,
    '$1',
  ).groups;

  return {
    value: Number(stringValue) * factor,
    units: units.trim(),
  };
}
