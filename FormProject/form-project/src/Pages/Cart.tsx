import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type CartProps = {
  checkoutMessage?: string;
};

const Cart: React.FC<CartProps> = ({ checkoutMessage }) => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert(
      checkoutMessage || "Proceeding to checkout. Thank you for you purchase!"
    );
  };

  return (
    <div className="cart-page">
      <h2> Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="cart-item">
                    <td className="product-details">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="cart-item-image"
                      />
                      <span>{item.title}</span>
                    </td>

                    <td className="quantity-container">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="quantity">{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </td>

                    <td>${(item.price * item.quantity).toFixed(2)}</td>

                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-button"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-footer">
            <button onClick={clearCart} className="empty-button">
              Empty cart
            </button>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <div className="checkout">
            <a
              href="/checkout"
              onClick={handleCheckout}
              className="checkout-button"
            >
              Proceed to Checkout
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
