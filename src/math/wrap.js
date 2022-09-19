import { isArray } from '..';

/**
 * Wrap an index around the given length using the modulo operator
 *
 * e.g. wrap(1, 3) // 1
 *      wrap(3, 3) // 0
 *      wrap(-1, 3) // 2
 *
 * @param  {number} i Index
 * @param  {number} l Length
 * @return {number}   Looped index
 */
export function wrap(i, o) {
  isArray(o) && (o = o.length);
  return i < 0 ? o + (i % o) : i >= o ? i % o : i;
};
