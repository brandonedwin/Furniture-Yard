import { useContext, useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartContext from '../CartContext';
import CartItem from './CartItem';
import PayButton from './PayButton';
import { motion } from 'framer-motion';

const CartList = ({ cartClick, handleCartClose }) => {
  const { products } = useContext(CartContext);

  const cartNotEmpty = Array.isArray(products) && products.length !== 0;
  const [showItems, setShowItems] = useState(false);
  useEffect(() => {
    if (cartClick) {
      const timeout = setTimeout(() => {
        setShowItems(true);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setShowItems(false);
    }
  }, [cartClick]);

  const calculateSubTotal = () => {
    let subtotal = 0;

    products.forEach((product) => {
      subtotal += product.quantity * product.price;
    });

    return subtotal.toFixed(2);
  };

  return (
    <>
      <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
        <div className="cart">
          <button className="close" onClick={handleCartClose}>
            <span>Back to store 🏃‍♂️</span>
          </button>

          <div className="content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showItems ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="cart-products"
            >
              {cartNotEmpty ? (
                products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: showItems ? 1 : 0,
                      y: showItems ? 0 : 20,
                    }}
                    transition={{
                      type: 'tween',
                      duration: 0.3,
                      delay: index * 0.3,
                    }}
                  >
                    <CartItem product={product} />
                  </motion.div>
                ))
              ) : (
                <EmptyCart handleCartClose={handleCartClose} />
              )}
            </motion.div>
          </div>

          {cartNotEmpty && (
            <div className="subtotal-container">
              <div className="subtotal">
                <span>Subtotal: ${calculateSubTotal()}</span>
              </div>
              <PayButton products={products} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;