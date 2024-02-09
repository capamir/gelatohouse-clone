import Cart from "./Cart";
import Menu from "./Menu";
import Category from "./Category";

const Main = () => {
  return (
    <div className="container_main">
      <div className="container_main_content">
        <Menu />
        <Category />
        <div className="container_main_content_products"></div>
      </div>

      <Cart />
    </div>
  );
};

export default Main;
