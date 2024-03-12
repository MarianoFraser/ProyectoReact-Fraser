import cart from "../assets/cart.png";

export const CartWidget = () => {
  return (
    <div id="cart-widget">
    <img src={cart} alt="cart" width={40} />
     <span>2</span>
    </div>
  );
};
