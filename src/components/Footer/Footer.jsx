import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { images } from "../images/index.js";

const Footer = () => {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("footer__inner")}>
          <div className={cx("footer__top")}>
            <img src={images.logo_bonsai} alt="" className={cx("footer__top-logo")} />
            <div className={cx("footer__top-social")}>
              <div className={cx("footer__top-social-item")}>
                <a href="https://www.facebook.com/nghi.vy.509?locale=vi_VN" target="_blank">
                  <img className={cx("footer__top-social-img")}src={images.facebook} alt="" />
                </a>
              </div>
              <a href="https://www.facebook.com/messages/e2ee/t/25346475391617815/" target="_blank">
                <div className={cx("footer__top-social-item")}>
                  <img className={cx("footer__top-social-img")} src={images.messenger} alt="" />
                </div>
              </a>
              <div className={cx("footer__top-social-item")}>
                <a href="http://zaloapp.com/qr/p/c37i6hzcq3u1" target="_blank">
                  <img className={cx("footer__top-social-img")} src={images.zalo} alt="" />
                </a>
               
              </div>
            </div>
          </div>
          <div className={cx("footer__hr")}></div>
          <div className={cx("footer__bottom")}>
            <div className={cx("footer__column")}>
              <div className={cx("footer__column-desc")}>
                Kính mong quý khách hàng ghé thăm shop bonsai tại vườn của chúng tôi.
              </div>
              <div className={cx("footer__column-wrap")}>
                <h3 className={cx("footer__column-title")}>Số điện thoại</h3>
                <p className={cx("footer__column-content")}>0946 168 499</p>
              </div>
              <div className={cx("footer__column-wrap")}>
                <h3 className={cx("footer__column-title")}>Thời gian mở cửa</h3>
                <p className={cx("footer__column-content")}>
                  8:00 AM - 23:00 PM
                </p>
              </div>
            </div>
            <div className={cx("footer__column")}>
              <h3 className={cx("footer__column-title")}>Liên kết</h3>
              <Link className={cx("footer__column-link")} to="/menu">
                Mua sắm
              </Link>
              <Link className={cx("footer__column-link")} to="/blog">
                Blog
              </Link>
              <Link className={cx("footer__column-link")} to="/about">
                Giới thiệu
              </Link>
              <Link className={cx("footer__column-link")} to="/contact">
                Liên hệ
              </Link>
            </div>
            <div className={cx("footer__column")}>
              <h3 className={cx("footer__column-title")}>Loại bonsai</h3>
              <Link className={cx("footer__column-link")}>Khế chua</Link>
              <Link className={cx("footer__column-link")}>Ổi tàu</Link>
              <Link className={cx("footer__column-link")}>Mai chiếu thủy</Link>
              <Link className={cx("footer__column-link")}>Linh sam</Link>
            </div>
            <div className={cx("footer__column")}>
              <h3 className={cx("footer__column-title")}>Thông tin liên lạc</h3>
              <div className={cx("footer__row")}>
                <i className="fa-solid fa-location-dot"></i>
                <span>Long Huê, Chợ Lách, Bến Tre</span>
              </div>
              <div className={cx("footer__row")}>
                <i className="fa-solid fa-phone"></i>
                <span>0946 168 499</span>
              </div>
              <div className={cx("footer__row")}>
                <i className="fa-solid fa-envelope"></i>
                <span>phuochaubmw@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
