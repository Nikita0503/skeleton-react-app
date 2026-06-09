// ==============================================
// Layout Component
// Wraps all pages. Contains shared UI like header/footer/sidebar.
// The <Outlet /> renders the current page based on the active route.
// ==============================================

import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <span>Travel Agency</span>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
