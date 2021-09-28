import { split } from '../split';

test('split', () => {
  expect(split('100 nm')).toStrictEqual({
    value: 100,
    units: 'nm',
  });
  expect(split('100 nm', { factor: -1 })).toStrictEqual({
    value: -100,
    units: 'nm',
  });
  expect(split('1e-5eV')).toStrictEqual({
    value: 0.00001,
    units: 'eV',
  });
  expect(split('-100m^2/s')).toStrictEqual({
    value: -100,
    units: 'm^2/s',
  });
  expect(split('-100e-2m^2/s')).toStrictEqual({
    value: -1,
    units: 'm^2/s',
  });
});
