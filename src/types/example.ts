// ==============================================
// Example Type Definitions
// Shared types live in src/types/ — used across multiple features/pages.
//
// Copy this file as a template when creating new type files.
// ==============================================

export type ExampleUser = {
  id: string;
  name: string;
  email: string;
};

export type ExampleApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};
