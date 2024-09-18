import styles from "./AdminHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { images } from "../../components/images/index.js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
  const cx = classNames.bind(styles);
  const [showMenu, setShowMenu] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [active, setActive] = useState("dashboard");

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
            <div className={cx("admin-header__navbar-item")} onClick={() => setActive("dashboard")}>
              <Link to="/" className={cx("admin-header__navbar-link")}>
                Dashboard
              </Link>
              {active === "dashboard" ? <div className={`${styles.active}`}></div> : <></>}
            </div>
            <div className={cx("admin-header__navbar-item")} onClick={() => setActive("manage")}>
              <div className={cx("admin-header__navbar-link")}>
                Quản lý
                <div className={cx("admin-header__navbar-link-list")}>
                  <p className={cx("admin-header__navbar-link-item")}>
                    <img src={images.user_nav} alt="" />
                    <Link to="/manage/user">Người dùng</Link>
                  </p>
                  <p className={cx("admin-header__navbar-link-item")}>
                    <img src={images.bonsai_icon} alt="" />  
                    <Link to="/manage/bonsai">Bonsai</Link>
                  </p>
                </div>
              </div>
            {active === "manage" ? <div className={`${styles.active}`}></div> : <></>}
            </div>
            <div className={cx("admin-header__navbar-item")}>
              <div className={cx("admin-header__navbar-link")} onClick={() => setActive("support")}>
                Hỗ trợ và Tài liệu
                <div className={cx("admin-header__navbar-link-list")}>
                  <Link to="/support/faq" className={cx("admin-header__navbar-link-item")}>Câu hỏi & Sử dụng</Link>
                  <Link to="/support/document" className={cx("admin-header__navbar-link-item")}>Tài liệu tham khảo</Link>
                  <Link to="/support/feedback" className={cx("admin-header__navbar-link-item")}>Phản hồi</Link>
                </div>
              {active === "support" ? <div className={`${styles.active}`}></div> : <></>}
              </div>
              
            </div>
            <div className={cx("admin-header__navbar-item")} onClick={() => setActive("report")}>
              <div className={cx("admin-header__navbar-link")}>
                Báo cáo
                <div className={cx("admin-header__navbar-link-list")}>
                  <Link to="/report/bill" className={cx("admin-header__navbar-link-item")}>Hóa đơn</Link>
                </div>
              </div>
              {active === "report" ? <div className={`${styles.active}`}></div> : <></>}
            </div>
          </nav>

          {/* Navbar Mobie */}
          {showMenu && <div className={cx("admin-header__navbar-fixed")}>
            <nav className={cx("admin-header__navbar-mobie")}>
              <FontAwesomeIcon className={cx("admin-header__icon-chevron")} icon={faChevronLeft} onClick={() => setShowMenu(prev => !prev)} />
              <Link onClick={() => setShowMenu(prev => !prev)} to="/" className={cx("admin-header__navbar-link-mobie")}>
                Dashboard
              </Link>
              <div className={cx("admin-header__navbar-link-list-mobie")}>
                Quản lý
                <Link onClick={() => setShowMenu(prev => !prev)} to="/manage/user" className={cx("admin-header__navbar-link-mobie")}>
                  Người dùng
                </Link>
                <Link onClick={() => setShowMenu(prev => !prev)} to="/manage/bonsai" className={cx("admin-header__navbar-link-mobie")}>
                  Bonsai
                </Link>
              </div>
              <div className={cx("admin-header__navbar-link-list-mobie")}>
                Hỗ trợ & Tài liệu
                <Link onClick={() => setShowMenu(prev => !prev)} to="/support/faq" className={cx("admin-header__navbar-link-mobie")}>
                  Câu hỏi & Sử dụng
                </Link>
                <Link onClick={() => setShowMenu(prev => !prev)} to="/support/document" className={cx("admin-header__navbar-link-mobie")}>
                  Tài liệu tham khảo
                </Link>
                <Link onClick={() => setShowMenu(prev => !prev)} to="/support/feedback" className={cx("admin-header__navbar-link-mobie")}>
                  Phản hồi
                </Link>
              </div>
              <div className={cx("admin-header__navbar-link-list-mobie")}>
                Báo cáo
                <Link onClick={() => setShowMenu(prev => !prev)} to="/report/bill" className={cx("admin-header__navbar-link-mobie")}>
                  Hóa đơn
                </Link>
              </div>
            </nav>
          </div>}

          {/* Action */}
          <div onClick={() => setShowAction(prev => !prev)} className={cx("admin-header__action")}>
            <img className={cx("admin-header__action-avt")} src={images.admin_avt} alt="" />
            {showAction && <div className={cx("admin-header__action-group")}>
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
