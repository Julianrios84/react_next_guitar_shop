import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={'/'}>
          <a>
            <Image
              src="/img/logo.svg"
              width={300}
              height={40}
              alt="image logo"
            />
          </a>
        </Link>

        <nav className={styles.navigation}>
          <Link href="/">
            <a className={router.pathname === '/' ? styles.active : ''}>
              Inicio
            </a>
          </Link>

          <Link href="/about">
            <a className={router.pathname === '/about' ? styles.active : ''}>
              About
            </a>
          </Link>

          <Link href="/shop">
            <a className={router.pathname === '/shop' ? styles.active : ''}>
              Shop
            </a>
          </Link>

          <Link href="/blog">
            <a className={router.pathname === '/blog' ? styles.active : ''}>
              Blog
            </a>
          </Link>

          <Link href="/cart">
            <a className={router.pathname === '/cart' ? styles.active : ''}>
              <Image
                width={30}
                height={25}
                src="/img/carrito.png"
                alt="image cart"
              />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
