import {describe, expect, test} from '@jest/globals';
import scaleForRange from './scaleForRange';

describe('scaleForRange', () => {
  test('Scale from 0->100 to 1->2', () => {
    const getNewValueFromRange = oldValue => scaleForRange(oldValue, 0, 100, 1, 2);
    expect(getNewValueFromRange(0)).toBe(1)
    expect(getNewValueFromRange(100)).toBe(2)
    expect(getNewValueFromRange(50)).toBe(1.5)
  });
  test('Scale from -100->100 to 1->2', () => {
    const getNewValueFromRange = oldValue => scaleForRange(oldValue, -100, 100, 1, 2);
    expect(getNewValueFromRange(-100)).toBe(1)
    expect(getNewValueFromRange(100)).toBe(2)
    expect(getNewValueFromRange(0)).toBe(1.5)
  });
  test('Scale from 10->11 to -1->1', () => {
    const getNewValueFromRange = oldValue => scaleForRange(oldValue, 10, 11, -1, 1);
    expect(getNewValueFromRange(10)).toBe(-1)
    expect(getNewValueFromRange(11)).toBe(1)
    expect(getNewValueFromRange(10.5)).toBe(0)
  });
});