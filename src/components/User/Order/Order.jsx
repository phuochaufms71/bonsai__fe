import classNames from "classnames/bind";
import styles from "./Order.module.scss";
import { useSelector } from "react-redux";
import formatNumberWithSeparator from "../../../constants";

const Order = () => {
  const cx = classNames.bind(styles);
  const cart = useSelector(state => state.cart);
  const cartBonsais = cart.cartBonsais;
  return cartBonsais.length === 0 ? <>Không có bonsai trong giỏ hàng, hãy thêm bonsai vào giỏ hàng</> : (
    <div className={cx("order")}>
      {
        cartBonsais?.map((cartFood, index) => (
          <div key={index} className={cx("order__item")}>
            <div className={cx("order__left")}>
              <div className={cx("order__item-wrap-img")}>
                <img className={cx("order__item-img")} src={cartFood?.image.secure_url} alt="" />
              </div>
              <div className={cx("order__item-gr")}>
                <p className={cx("order__item-gr--name")}>{cartFood?.name}</p>
                <p className={cx("order__item-gr--price")}>{formatNumberWithSeparator((cartFood?.price), " ")} VNĐ</p>
                <p className={cx("order__item-gr--category")}>
                  <span>Loại: </span>
                  {cartFood?.category}
                </p>
                <p className={cx("order__item-gr--quantity")}>
                  <span>Số lượng: </span>
                  {cartFood.cartQuantity}
                </p>
              </div>
            </div>
            <div className={cx("order__right")}>
              <p className={cx("order__item-total")}>
                <span>Tổng Bonsai: </span>
                {formatNumberWithSeparator((cartFood?.price*cartFood?.cartQuantity), " ")} VNĐ
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Order;
