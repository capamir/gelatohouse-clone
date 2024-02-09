import card from "../../assets/card.png";

const Cart = () => (
  <div className="container_main_cart">
    <header>
      <h2>سبد خرید</h2>
    </header>

    <div className="container_main_cart_content">
      <li>
        <img src={card} />
        <h4>سبد خرید خالی است</h4>
      </li>
    </div>
  </div>
);
export default Cart;
