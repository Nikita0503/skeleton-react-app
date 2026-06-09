// ==============================================
// Example Utility Function
// Utils are pure functions — no React, no side effects, just input → output.
// Each util gets its own file.
//
// Copy this file as a template when creating new utils.
// ==============================================

/**
 * Formats a number as a price string.
 * exampleFormatPrice(1500) → "$1,500"
 */
export const exampleFormatPrice = (price: number): string => {
  return `$${price.toLocaleString('en-US')}`;
};
