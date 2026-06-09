// ==============================================
// Example Form with React Hook Form + Zod
// Shows the pattern for validated forms:
// 1. Define Zod schema (validation rules + types in one place)
// 2. Use useForm with zodResolver
// 3. Register inputs
// 4. Handle submit
//
// Copy this folder as a template when creating new forms.
// ==============================================

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ExampleForm.module.scss';

// 1. Define schema — validation rules and TypeScript type in one place
const exampleSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // shows error on confirmPassword field
  });

// 2. Infer TypeScript type from schema (no need to define manually)
type ExampleFormData = z.infer<typeof exampleSchema>;

export const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ExampleFormData>({
    resolver: zodResolver(exampleSchema),
  });

  const onSubmit = (data: ExampleFormData) => {
    // TODO: Replace with real API call (e.g., mutation from useExampleCreate)
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} placeholder="John Doe" />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} placeholder="john@example.com" />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} placeholder="••••••" />
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
          placeholder="••••••"
        />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword.message}</span>
        )}
      </div>

      <button className={styles.submit} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};
