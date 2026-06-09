// ==============================================
// Example Page
// Pages live in src/pages/ — each page maps to a route.
// Pages should be simple — they compose components, not contain business logic.
//
// Copy this folder as a template when creating new pages.
// ==============================================

import { ExampleComponent } from '@/components/ExampleComponent';
import { useExampleCounter } from '@/hooks/useExampleCounter';
import styles from './ExamplePage.module.scss';

export const ExamplePage = () => {
  const { count, increment, decrement } = useExampleCounter(0);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Example Page</h1>

      <ExampleComponent title="This is a shared component" />

      <div className={styles.counter}>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
