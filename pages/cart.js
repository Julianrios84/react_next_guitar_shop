import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/cart.module.css';

export default function Cart({ cart, handleUpdateGuitar, handleRemoveGuitar }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculateTotal = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setTotal(calculateTotal);
  }, [cart]);

  return (
    <Layout title="Shopping cart">
      <main className={styles.container}>
        <h1 className={styles.heading}>Shopping cart</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articles</h2>
            {cart?.length === 0
              ? 'Cart empty'
              : cart?.map((item) => (
                  <div key={item.id} className={styles.product}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={item.picture}
                        alt={`Image product ${item.name}`}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{item.name}</p>
                      <p>Quantity: </p>
                      <select
                        defaultValue={item.quantity}
                        className={styles.select}
                        onChange={(e) =>
                          handleUpdateGuitar({
                            quantity: parseFloat(e.target.value),
                            id: item.id
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className={styles.price}>
                        $ <span>{item.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $ <span>{item.quantity * item.price}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.btnRemove}
                      onClick={() => handleRemoveGuitar(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resume}>
            <h3>Order resume</h3>
            <p>Total payment: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
