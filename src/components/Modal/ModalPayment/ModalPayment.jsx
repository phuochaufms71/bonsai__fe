/* eslint-disable react/prop-types */
import classNames from "classnames/bind"
import styles from "./ModalPayment.module.scss";
import { images } from "../../images";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ModalPayment = ({setIsPayment}) => {
    const { payments } = useSelector(state => state.payment)
    const paymentItem = payments[payments.length - 1];
    const cart = useSelector(state => state.cart)
    const cx = classNames.bind(styles);
  return (
    <div className={cx("modal-payment")}>
      <div className={cx("modal-payment__inner")}>
        <div className={cx("modal-payment__wrap-img")}>
            <img className={cx("modal-payment__img")} src={images.check_icon} alt="" />
        </div>
        <h3 className={cx("modal-payment__title")}>Payment Success!</h3>
        <p className={cx("modal-payment__total")}>${(cart.cartTotalAmount).toFixed(2)}</p>
        <p className={cx("modal-payment__spacer")}></p>
        <div className={cx("modal-payment__info--top")}>
            <div className={cx("modal-payment__item")}>
                <span>Ref Number</span>
                <span>{paymentItem.numberCard}</span>
            </div>
            <div className={cx("modal-payment__item")}>
                <span>Payment Time</span>
                <span>{paymentItem.date}-{paymentItem.month}-{paymentItem.year}, {paymentItem.hours}:{paymentItem.minutes}:{paymentItem.seconds}</span>
            </div>
            <div className={cx("modal-payment__item")}>
                <span>Payment Method</span>
                <span>Credit Card</span>
            </div>
            <div className={cx("modal-payment__item")}>
                <span>Sender Name</span>
                <span>{paymentItem.name}</span>
            </div>
        </div>

        <div className={cx("modal-payment__spacer")}></div>

        <div className={cx("modal-payment__info--bottom")}>
            <div className={cx("modal-payment__item")}>
                <span>Amount</span>
                <span>${(cart.cartTotalAmount).toFixed(2)}</span>
            </div>
            <div className={cx("modal-payment__item")}>
                <span>Interpretation</span>
                <span>{paymentItem.name} transfer</span>
            </div>
        </div>
        <div className={cx("modal-payment__close")} onClick={() => setIsPayment(false)}>
          <FontAwesomeIcon icon={faClose} className={cx("modal-payment__close--icon")} />
        </div>
      </div>

    </div>
  )
}

export default ModalPayment
