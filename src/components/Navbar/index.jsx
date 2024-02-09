import "./navbar.scss";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        <div className="header_logo">
          <img
            src="https://order.gelatohouse.ir/2.13.9/img/9dcd0541179a7fde025e88026901a4be.png"
            alt="gelato HouseLogo"
          />
        </div>
        <div className="header_content">
          <div className="header_content_order">
            <ul>
              <li>سفارش اینترنتی</li>
              <li>قوانین سایت</li>
            </ul>
          </div>

          <div className="header_content_registeration">
            <button>ورود / عضویت</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
