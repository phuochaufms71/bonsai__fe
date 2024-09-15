import styles from "./AdminHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { images } from "../../components/images/index.js";
import { useState } from "react";

const AdminHeader = () => {
  const cx = classNames.bind(styles);
  const [active, setActive] = useState("dashboard");
  const [showMenu, setShowMenu] = useState(false);
  const [showAction, setShowAction] = useState(false);

  return (
    <div className={cx("admin-header")}>
      <div className={cx("container")}>
        <div className={cx("admin-header__inner")}>
          <div onClick={() => setShowMenu(prev => !prev)} className={cx("admin-header__menu")}>
            <img src={images.menu} className={cx("admin-header__menu-img")} alt="" />
          </div>
          {/* Logo */}
          <a href="/" className={cx("admin-header__link-img")}>
            <img
              src={images.logo_bonsai}
              alt=""
              className={cx("admin-header__img")}
            />
          </a>
    
          {/* Navbar */}
          <nav className={cx("admin-header__navbar")}>
            <div onClick={() => setActive("bill")} className={cx("admin-header__navbar-item")}>
              <Link to="/bill" className={cx("admin-header__navbar-link")}>
                Hóa đơn
              </Link>
              {active === "bill" ? <div className={cx("active")}></div> : <></>}
            </div>
            <div onClick={() => setActive("analytics")} className={cx("admin-header__navbar-item")}>
              <Link to="/analytics" className={cx("admin-header__navbar-link")}>
                Phân tích
              </Link>
              {active === "analytics" ? <div className={cx("active")}></div> : <></>}
            </div>
            <div onClick={() => setActive("sales")} className={cx("admin-header__navbar-item")}>
              <Link to="/sales" className={cx("admin-header__navbar-link")}>
                Bán hàng
              </Link>
              {active === "sales" ? <div className={cx("active")}></div> : <></>}
            </div>
            <div onClick={() => setActive("products")} className={cx("admin-header__navbar-item")}>
              <Link to="/products" className={cx("admin-header__navbar-link")}>
                Sản phẩm
              </Link>
              {active === "products" ? <div className={cx("active")}></div> : <></>}
            </div>
          </nav>

          {/* Navbar Mobie */}
          {showMenu && <div onClick={() => setShowMenu(prev => !prev)} className={cx("admin-header__navbar-fixed")}>
            <nav onClick={() => setShowMenu(prev => !prev)} className={cx("admin-header__navbar-mobie")}>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/" className={cx("admin-header__navbar-link-mobie")}>
                Điều khiển
              </Link>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/analytics" className={cx("admin-header__navbar-link-mobie")}>
                Phân tích
              </Link>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/sales" className={cx("admin-header__navbar-link-mobie")}>
                Bán hàng
              </Link>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/products" className={cx("admin-header__navbar-link-mobie")}>
                Sản phẩm
              </Link>
            </nav>
          </div>}

          {/* Action */}
          <div onClick={() => setShowAction(prev => !prev)} className={cx("admin-header__action")}>
            <img className={cx("admin-header__action-avt")} src={images.admin_avt} alt="" />
            {showAction && <div className={cx("admin-header__action-group")}>
              <div className={cx("admin-header__action-item")}>
                <img src={images.user} alt="user icon" />
                <span>Người dùng</span>
              </div>
              <div className={cx("admin-header__action-item")}>
                <img src={images.bell} alt="bell icon" />
                <span>Thông báo</span>
              </div>
              <div className={cx("admin-header__action-item")}>
                <img src={images.settings} alt="settings icon" />
                <span>Cài đặt</span>
              </div>
              <Link to="/logout" className={cx("admin-header__action-item")}>
                <img src={images.logout_icon} alt="settings icon" />
                <span>Đăng xuất</span>
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
