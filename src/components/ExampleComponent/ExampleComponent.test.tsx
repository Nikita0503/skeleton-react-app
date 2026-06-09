// ==============================================
// Example Component Test
// Tests live next to the component: ComponentName.test.tsx
//
// Pattern: Arrange → Act → Assert
// - render() — renders the component
// - screen.getBy* — finds elements
// - expect() — checks the result
//
// Copy this file as a template when writing new tests.
// ==============================================

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent', () => {
  it('renders the title', () => {
    // Arrange
    render(<ExampleComponent title="Hello World" />);

    // Assert
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
