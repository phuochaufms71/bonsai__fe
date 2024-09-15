/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCartBonsais, decreaseCart, getTotals, increaseCart, removeBonsaiFromCart } from "../../../redux/cart/cartSlice";
import { images } from "../../../components/images/index.js";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import ModalLogin from "../../../components/Modal/ModalLogin/ModalLogin.jsx";
import formatNumberWithSeparator from "../../../constants/index.js";

const Cart = () => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checkLogin, setCheckLogin] = useState(true);
    const cartBonsais = useSelector(state => state.cart.cartBonsais);
    const cart = useSelector(state => state.cart);
    const { user } = useSelector(state => state.auth);

    const handleDeleteCartBonsai = (cartBonsai) => {
      dispatch(removeBonsaiFromCart(cartBonsai))
    }

    const handleDecreaseBonsai = (cartBonsai) => {
      dispatch(decreaseCart(cartBonsai))
    }

    const handleIncreaseBonsai = (cartBonsai) => {
      dispatch(increaseCart(cartBonsai))
    }

    const handleDeleteAllBonsais = () => {
      dispatch(clearCartBonsais())
    }

    const handleCheckLogin = () => {
      if (user.email) {
        setCheckLogin(true);
        navigate("/cart/checkout")
      } else {
        setCheckLogin(false)
      }
    }

    useEffect(() => {
      dispatch(getTotals())
    }, [cart])

  return cartBonsais.length === 0 ? (
    <section className={cx("cart-empty")}>
      <h3 className={cx("cart-empty__title")}>Giỏ hàng của bạn</h3>
      <p className={cx("cart-empty__desc")}>Giỏ hàng hiện tại đang trống</p>
      <Link to="/shopping" className={cx("cart-empty__link")}>
        <FontAwesomeIcon className={cx("cart-empty__icon")} icon={faArrowLeft} />
        Bắt đầu mua bonsai
      </Link>
    </section>
  ) : (
    <section className={cx('cart')}>
      <div className={cx("container")}>
        <div className={cx("cart__inner")}>
          <div className={cx("cart__list")}>
            {
              cartBonsais?.map((cartBonsai, index) => (
                <div key={index} className={cx("cart__item")}>
                  <div className={cx("cart__item-wrap-img")}>
                    <img src={cartBonsai?.image?.secure_url} alt="" className={cx("cart__item-img")}/>
                  </div>
                  <div className={cx("cart__item-info")}>
                    <p className={cx("cart__item-name")}>{cartBonsai?.name}</p>
                    <p className={cx("cart__item-price")}>{formatNumberWithSeparator((cartBonsai?.price), " ")} VNĐ</p>
                  </div>
                  <div className={cx("cart__item-action")}>
                    <button className={cx("cart__item-decrease")} onClick={() => handleDecreaseBonsai(cartBonsai)}>-</button>
                    <span className={cx("cart__item-quantity")}>{cartBonsai?.cartQuantity}</span>
                    <button className={cx("cart__item-increase")} onClick={() => handleIncreaseBonsai(cartBonsai)}>+</button>
                  </div>
                  <div className={cx("cart__item-wrap-delete")}>
                    <img className={cx("cart__item-delete")} onClick={() => handleDeleteCartBonsai(cartBonsai)} src={images.delete_icon} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
          <div className={cx("cart__action")}>
            <Link className={cx("cart__shopping")} to="/shopping">
              <FontAwesomeIcon icon={faChevronLeft} className={cx("cart__shopping--icon")}/>
              <span>Mua Bonsai</span>
            </Link>
            <button onClick={() => handleDeleteAllBonsais()} className={cx("cart__clear")}>Xóa toàn bộ bonsai</button>
          </div>
        </div>

        <div className={cx("cart__total")}>
          <h3 className={cx("cart__total-title")}>Thanh toán giỏ hàng</h3>
          <div>
            <p className={cx("cart__total-item")}><span>Tổng tiền bonsai: </span>{formatNumberWithSeparator((cart.cartTotalAmount), " ")} VNĐ</p>
            <p className={cx("cart__total-item")}><span>Phí (VNĐ/bonsai): </span>2 500 VNĐ</p>
            <p className={cx("cart__total-item")}><span>Cước (VNĐ/bonsai): </span>3 500 VNĐ</p>
          </div>
          <button onClick={handleCheckLogin} className={cx("cart__total-checkout")}>Kiểm tra</button>
          {
            !checkLogin && <ModalLogin setCheckLogin={setCheckLogin} />
          }
        </div>
      </div>
      <ToastContainer />
    </section>
  ) 
}

export default Cart;
