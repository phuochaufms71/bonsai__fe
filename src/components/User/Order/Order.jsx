import classNames from "classnames/bind";
import styles from "./Order.module.scss";
import { useSelector } from "react-redux";

const Order = () => {
  const cx = classNames.bind(styles);
  const cart = useSelector(state => state.cart);
  const cartFoods = cart.cartFoods;
  return cartFoods.length === 0 ? <>No have food order, please add food to cart</> : (
    <div className={cx("order")}>
      {
        cartFoods?.map((cartFood, index) => (
          <div key={index} className={cx("order__item")}>
            <div className={cx("order__left")}>
              <div className={cx("order__item-wrap-img")}>
                <img className={cx("order__item-img")} src={cartFood?.image.secure_url} alt="" />
              </div>
              <div className={cx("order__item-gr")}>
                <p className={cx("order__item-gr--name")}>{cartFood?.name}</p>
                <p className={cx("order__item-gr--price")}>${cartFood?.price}</p>
                <p className={cx("order__item-gr--category")}>
                  <span>Category: </span>
                  {cartFood?.category}
                </p>
                <p className={cx("order__item-gr--quantity")}>
                  <span>Quantity: </span>
                  {cartFood.cartQuantity}
                </p>
              </div>
            </div>
            <div className={cx("order__right")}>
              <p className={cx("order__item-total")}>
                <span>Total Item: </span>
                ${(cartFood?.price*cartFood?.cartQuantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Order;
