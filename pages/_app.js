import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = [];
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('cart'));
    if (cartLocal) {
      setCart(cartLocal);
    }
  }, []);
  useEffect(() => {
    if (cart !== initialState) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      const updateCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setCart(updateCart);
    } else {
      setCart([...cart, guitar]);
    }
  };

  const handleUpdateGuitar = (guitar) => {
    const updateCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity;
      }
      return guitarState;
    });
    setCart(updateCart);
  };

  const handleRemoveGuitar = (id) => {
    const updateCart = cart.filter((guitarState) => guitarState.id !== id);
    setCart(updateCart);
  };

  return (
    <Component
      {...pageProps}
      addCart={addCart}
      cart={cart}
      handleUpdateGuitar={handleUpdateGuitar}
      handleRemoveGuitar={handleRemoveGuitar}
    />
  );
}

export default MyApp;
