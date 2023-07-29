import { labelDay } from './labelDay';

const day = new Date(2022, 10, 21);

test('should return the day label', () => {
  expect(
    labelDay(day, {
      outside: false,
      disabled: false,
      selected: false,
      hidden: false,
      today: false,
      range_start: false,
      range_end: false,
      range_middle: false
    })
  ).toEqual('21st November (Monday)');
});
