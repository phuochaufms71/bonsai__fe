/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Shopping.module.scss";
import { useState } from "react";
import ShoppingList from "./ShoppingList/ShoppingList";

const Shopping = () => {
  const cx = classNames.bind(styles);
  const [category, setCategory] = useState("tất cả");

  return (
    <section className={cx("menu")}>
      <div className={cx("container")}>
        <div className={cx("menu__title")}>Mua bonsai</div>
        <p className={cx("menu__desc")}>
          Chúng tôi chuyên cung cấp nhiều loại bonsai, giá cả phải chăng, có nhiều kích thước phù hợp với nhu cầu của quý khách hàng. Vì vậy, quý khách hàng có thể lựa chọn và mua bonsai tại đây.
        </p>
        <div className={cx("menu__wrap-btn")}>
          <button
            onClick={() => setCategory("tất cả")}
            className={`${category === "tất cả" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setCategory("khế")}
            className={`${category === "khế" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Khế
          </button>
          <button
            onClick={() => setCategory("ổi")}
            className={`${category === "ổi" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Ổi
          </button>
          <button
            onClick={() => setCategory("linh sam")}
            className={`${category === "linh sam" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Linh sam
          </button>
        </div>
        <ShoppingList category={category}/>
      </div>
    </section>
  );
};

export default Shopping;