import {describe, expect, test} from '@jest/globals';
import scaleForRange from './scaleForRange';

describe('scaleForRange', () => {
  test('Scale from 0-100 to 1-2', () => {
    const getNewValueFromRange = oldValue => scaleForRange(oldValue, 1, 2, 0, 100);
    expect(getNewValueFromRange(0)).toBe(1)
  });
});