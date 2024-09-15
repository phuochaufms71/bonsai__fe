import classNames from "classnames/bind";
import styles from "./Payment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../../components/images";

const Payment = () => {
  const cx = classNames.bind(styles);
  const cart = useSelector(state => state.cart);

  return (
      <section className={cx("payment")}>
        <div className={cx("container")}>
          <p className={cx("payment__title")}>Mở app Ngân hàng để quét hoặc điền đúng thông tin chuyển khoản dưới đây</p>
          <div className={cx("payment__inner")}>
              <div className={cx("payment__card-wrap-img")}>
                <img className={cx("payment__card-img")} src={images.qr_sacombank} alt="sacombank" />
              </div>
              <div className={cx("payment__info")}>
                <div className={cx("payment__info-wrap-logo")}>
                  <img className={cx("payment__info-logo")} src={images.logo_sacombank} alt="" />
                  Ngân hàng TMCP Sài Gòn Thương Tín
                </div>
                <div className={cx("payment__item")}>
                  <p className={cx("payment__item-title")}>Chủ tài khoản:</p>
                  <p className={cx("payment__item-name")}>Dương Phước Hậu</p>
                </div>
                <div className={cx("payment__item")}>
                  <p className={cx("payment__item-title")}>Số tài khoản:</p>
                  <p className={cx("payment__item-number")}>070120031511</p>
                </div>
                <div className={cx("payment__item")}>
                  <p className={cx("payment__item-title")}>Số tiền cần thanh toán:</p>
                  <p className={cx("payment__item-total")}>{cart.cartTotalAmount + 2500*cart.cartTotalQuantity + 3500*cart.cartTotalQuantity} VNĐ</p>
                </div>
                <div className={cx("payment__item")}>
                  <p className={cx("payment__item-title")}>Nội dung chuyển khoản:</p>
                  <p className={cx("payment__item-content")}>Tên quý khách + thanh toán đơn hàng</p>
                  (VD: Dương Phước Hậu thanh toán đơn hàng)
                </div>
              </div>
          </div>
          <span className={cx("payment__back")} onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faChevronLeft} className={cx("payment__back-icon")} />
              Quay lại
          </span>
        </div>
       
      </section>
  )
}

export default Payment;
