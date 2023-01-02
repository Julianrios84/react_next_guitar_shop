import Image from 'next/future/image';
import Link from 'next/link';
import styles from '../styles/guitars.module.css';

export default function Guitar({ guitar }) {
  console.log(guitar);
  const { description, picture, name, price, url } = guitar;

  return (
    <div className={styles.guitar}>
      <Image
        src={picture.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Image guitar ${name}`}
      />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`}>
          <a className={styles.link}>View Product</a>
        </Link>
      </div>
    </div>
  );
}
