import classNames from "classnames/bind";
import styles from "./Payment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import ModalPayment from "../../../components/Modal/ModalPayment/ModalPayment";
import { images } from "../../../components/images";
// import { addPayment } from "../../../redux/payment/paymentSlice";
// import { clearCartBonsais } from "../../../redux/cart/cartSlice";

const Payment = () => {
  const cx = classNames.bind(styles);
  const cart = useSelector(state => state.cart);
  // const dispatch = useDispatch();
  // const [isPayment, setIsPayment] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   numberCard: "",
  //   time: "",
  //   cvv: "",
  //   date: "",
  //   month: "",
  //   year: "",
  //   hours: "",
  //   minutes: "",
  //   seconds: ""
  // })

  // const handlePayment = async (e) => {
  //   e.preventDefault()
  //   if (!formData.name || !formData.numberCard || !formData.time || !formData.cvv) {
  //     toast.error("All fields are required")
  //   } else {
  //     var timeHandlePayment = new Date();
  //     var date =timeHandlePayment.getDate();
  //     var month = timeHandlePayment.getMonth();
  //     var year = timeHandlePayment.getFullYear();
  //     var hours = timeHandlePayment.getHours();
  //     var minutes = timeHandlePayment.getMinutes();
  //     var seconds = timeHandlePayment.getSeconds();
  //     await dispatch(addPayment({...formData, date, month, year, hours, minutes, seconds}))
  //     setIsPayment(true);
  //     setFormData({
  //       name: "",
  //       numberCard: "",
  //       time: "",
  //       cvv: "",
  //       date: "",
  //       month: "",
  //       year: "",
  //       hours: "",
  //       minutes: "",
  //       seconds: ""
  //     })
  //     dispatch(clearCartBonsais())
  //   }
  // }

  return (
    <>
      {/* <section className={cx("payment")}>
        <div className={cx("container")}>
          <div className={cx("payment__inner")}>
            <div className={cx("payment__body")}>
              <h3 className={cx("payment__title")}>Thanh toán</h3>
              <div className={cx("payment__card")}>
                <div className={cx("payment__item")}>
                  <h4 className={cx("payment__item-title")}>Loại thẻ</h4>
                  <div className={cx("payment__item-body")}>
                    <button className={cx("payment__item-body--type")}>
                      <FontAwesomeIcon icon={faCreditCard} />
                      Thẻ ngân hàng
                    </button>
                  </div>
                </div>
                <div className={cx("payment__item")}>
                  <h4 className={cx("payment__item-title")}>Thông tin thẻ</h4>
                  <form onSubmit={handlePayment} className={cx("payment__item-wrap")}>
                    <div className={cx("payment__item-body")}>
                      <label className={cx("payment__item-body--label")} htmlFor="">Tên trên thẻ</label>
                      <input className={cx("payment__item-body--input")} type="text" placeholder="Henry Anos" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
                    </div>
                    <div className={cx("payment__item-body")}>
                      <label className={cx("payment__item-body--label")} htmlFor="">Số thẻ</label>
                      <input value={formData.numberCard} onChange={(e) => setFormData({...formData, numberCard: e.target.value})} className={cx("payment__item-body--input")} type="text" placeholder="5355-1345-2234-6615" required maxLength={16}/>
                    </div>
                    <div className={cx("payment__item-row")}>
                      <div className={cx("payment__item-body")}>
                        <label className={cx("payment__item-body--label")} htmlFor="">Hạn dùng thẻ</label>
                        <input value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className={cx("payment__item-body--input")} type="month" required/>
                      </div>
                      <div className={cx("payment__item-body")}>
                        <label className={cx("payment__item-body--label")} htmlFor="">Mã CVV</label>
                        <input value={formData.cvv} onChange={(e) => setFormData({...formData, cvv: e.target.value})} className={cx("payment__item-body--input")} type="text" placeholder="***" required maxLength={3}/>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <button onClick={handlePayment} className={cx("payment__item-body--btn")}>Thanh toán {(cart.cartTotalAmount + 2500*cart.cartTotalQuantity + 3500*cart.cartTotalQuantity)} VNĐ</button>
                  <ToastContainer />
                </div>
               
              </div>
            </div>
            
          </div>
        </div>
      </section> */}
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
                </div>
              </div>
          </div>
          <span className={cx("payment__back")} onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faChevronLeft} className={cx("payment__back-icon")} />
              Quay lại
          </span>
        </div>
       
      </section>
      {/* {
        isPayment && <ModalPayment setIsPayment={setIsPayment} />
      } */}
    </>
  )
}

export default Payment;
