import "./navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        <div className="header_logo">
          <img src={logo} alt="gelato HouseLogo" />
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
