import Link from 'next/link';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <p className={styles.copyright}>
          All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
