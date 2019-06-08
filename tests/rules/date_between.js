import { validate } from '@/rules/date_between';

test('checks if a date is between two other dates - exclusive', () => {
  expect(validate(new Date(2016, 9, 16), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '()' })).toBe(true);
  expect(validate(new Date(2016, 9, 16), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 15), inclusivity: '()' })).toBe(false);
});

test('Fails if any date is invalid', () => {
  expect(validate(new Date('k'), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '()' })).toBe(false);
  expect(validate(new Date(2016, 9, 16), { min: new Date('k'), max: new Date(2016, 9, 20), inclusivity: '()' })).toBe(false);
  expect(validate(new Date(2016, 9, 16), { min: new Date(2016, 9, 1), max: new Date('k'), inclusivity: '()' })).toBe(false);
});

test('checks if a date is between two other dates - left inclusive', () => {
  expect(validate(new Date(2016, 9, 1), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '[)' })).toBe(true);
  expect(validate(new Date(2016, 9, 20), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '[)' })).toBe(false);
});

test('checks if a date is between two other dates - right inclusive', () => {
  expect(validate(new Date(2016, 9, 1), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '(]' })).toBe(false);
  expect(validate(new Date(2016, 9, 20), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '(]' })).toBe(true);
});

test('checks if a date is between two other dates - all inclusive', () => {
  expect(validate(new Date(2016, 9, 1), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '[]' })).toBe(true);
  expect(validate(new Date(2016, 9, 20), { min: new Date(2016, 9, 1), max: new Date(2016, 9, 20), inclusivity: '[]' })).toBe(true);
});