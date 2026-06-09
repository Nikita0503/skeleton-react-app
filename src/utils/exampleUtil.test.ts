// ==============================================
// Example Utility Test
// Utility tests are simple: call function → check result.
//
// Copy this file as a template when writing tests for utils.
// ==============================================

import { describe, it, expect } from 'vitest';
import { sum } from './exampleUtil';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('handles zero', () => {
    expect(sum(0, 5)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
