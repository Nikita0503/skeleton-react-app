// ==============================================
// Example Shared Component
// Shared components live in src/components/.
// Each component has its own folder: ComponentName/ComponentName.tsx + .module.scss + index.ts
//
// Copy this folder as a template when creating new components.
// ==============================================

import styles from './ExampleComponent.module.scss';

type ExampleComponentProps = {
  title: string;
};

export const ExampleComponent = ({ title }: ExampleComponentProps) => {
  return <div className={styles.box}>{title}</div>;
};
