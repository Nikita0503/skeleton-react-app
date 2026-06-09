// ==============================================
// Example CRUD Query Hooks
// Query hooks (API data fetching) live in src/hooks/queries/.
// Regular UI hooks live in src/hooks/ directly.
//
// Copy this file as a template when creating new query hooks.
// ==============================================

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import type { ExampleUser } from '@/types/example';

// ---- GET (list) ----
// Fetches all users. Data is cached under 'example-users' key.
export const useExampleGetAll = () => {
  return useQuery({
    queryKey: ['example-users'],
    queryFn: async (): Promise<ExampleUser[]> => {
      const response = await apiClient.get('/users');
      return response.data;
    },
  });
};

// ---- GET (single) ----
// Fetches one user by ID.
export const useExampleGetById = (id: string) => {
  return useQuery({
    queryKey: ['example-users', id],
    queryFn: async (): Promise<ExampleUser> => {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    },
    enabled: !!id, // only fetch when id is provided
  });
};

// ---- POST (create) ----
// Creates a new user. On success, refetches the list.
export const useExampleCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: Omit<ExampleUser, 'id'>) => {
      const response = await apiClient.post('/users', newUser);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate cache — triggers refetch of the list
      queryClient.invalidateQueries({ queryKey: ['example-users'] });
    },
  });
};

// ---- PUT (update) ----
// Updates an existing user. On success, refetches the list.
export const useExampleUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: ExampleUser) => {
      const response = await apiClient.put(`/users/${user.id}`, user);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['example-users'] });
    },
  });
};

// ---- DELETE ----
// Deletes a user by ID. On success, refetches the list.
export const useExampleDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/users/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['example-users'] });
    },
  });
};
