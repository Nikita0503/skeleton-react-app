// ==============================================
// 404 Page
// Shown when no route matches the current URL.
// ==============================================

import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page not found</p>
      <Link to="/" className={styles.link}>
        Go home
      </Link>
    </div>
  );
};
