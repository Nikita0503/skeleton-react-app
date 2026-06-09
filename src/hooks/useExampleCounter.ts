// ==============================================
// Example Custom Hook
// Shared hooks live in src/hooks/ — reusable logic used across multiple components.
//
// Copy this file as a template when creating new hooks.
// ==============================================

import { useState } from 'react';

/**
 * Simple counter hook.
 * Usage: const { count, increment, decrement, reset } = useExampleCounter(0);
 */
export const useExampleCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
