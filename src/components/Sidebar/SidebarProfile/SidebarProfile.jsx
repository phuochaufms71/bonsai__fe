/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./SidebarProfile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faLocationDot, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SidebarProfile = ({setContent}) => {
    const cx = classNames.bind(styles);
    const [active, setActive] = useState("account");
  return (
    <article className={cx("sidebar_profile")}>
        <div className={`${styles.sidebar_profile__item} ${active === "account" ? styles.active : ""}`} onClick={() => {setContent("account"); setActive("account")}}>
            <FontAwesomeIcon icon={faUser} className={cx("sidebar_profile__item--icon")}/>
            <p className={cx("sidebar_profile__item--title")}>Tài khoản của quý khách</p>
        </div>
        <div className={`${styles.sidebar_profile__item} ${active === "address" ? styles.active : ""}`} onClick={() => {setContent("address"); setActive("address")}}>
            <FontAwesomeIcon icon={faLocationDot} className={cx("sidebar_profile__item--icon")} />
            <p className={cx("sidebar_profile__item--title")}>Địa chỉ của quý khách</p>
        </div>
        <div className={`${styles.sidebar_profile__item} ${active === "favourite" ? styles.active : ""}`} onClick={() => {setContent("favourite"); setActive("favourite")}}>
            <FontAwesomeIcon icon={faHeart} className={cx("sidebar_profile__item--icon")} />
            <p className={cx("sidebar_profile__item--title")}>Bonsai yêu thích của quý khách</p>
        </div>
        <div className={`${styles.sidebar_profile__item} ${active === "order" ? styles.active : ""}`} onClick={() => {setContent("order"); setActive("order")}}>
            <FontAwesomeIcon icon={faShoppingBag} className={cx("sidebar_profile__item--icon")} />
            <p className={cx("sidebar_profile__item--title")}>Bonsai trong giỏ hàng</p>
        </div>
    </article>
  )
}

export default SidebarProfile;
