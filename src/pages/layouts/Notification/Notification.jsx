import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCheckDouble, faDollarSign, faReceipt, faTags } from "@fortawesome/free-solid-svg-icons";

const Notification = () => {
    const cx = classNames.bind(styles);
  return (
    <section className={cx("notification")}>
        <div className={cx("container")}>
            <div className={cx("notification__inner")}>
                <h3 className={cx("notification__title")}>Notification</h3>
                <div className={cx("notification__list")}>
                    <div className={cx("notification__item")}>
                        <FontAwesomeIcon icon={faReceipt} className={cx("notification__item--icon")} />
                        <div className={cx("notification__item--gr")}>
                            <h4 className={cx("notification__item--content")}>New Food Added</h4>
                            <p className={cx("notification__item--time")}>8 minutes ago</p>
                        </div>
                    </div>
    
                    <div className={cx("notification__item")}>
                        <FontAwesomeIcon icon={faDollarSign} className={cx("notification__item--icon")}/>
                        <div className={cx("notification__item--gr")}>
                            <h4 className={cx("notification__item--content")}>Payment Completed for Order</h4>
                            <p className={cx("notification__item--time")}>12 minutes ago</p>
                        </div>
                    </div>
    
                    <div className={cx("notification__item")}>
                        <FontAwesomeIcon icon={faBurger} className={cx("notification__item--icon")} />
                        <div className={cx("notification__item--gr")}>
                            <h4 className={cx("notification__item--content")}>Out of Stock Item Breakfast Burger</h4>
                            <p className={cx("notification__item--time")}>16 minutes ago</p>
                        </div>
                    </div>
    
                    <div className={cx("notification__item")}>
                        <FontAwesomeIcon icon={faCheckDouble} className={cx("notification__item--icon")} />
                        <div className={cx("notification__item--gr")}>
                            <h4 className={cx("notification__item--content")}>Ready to Serve for Order</h4>
                            <p className={cx("notification__item--time")}>30 minutes ago</p>
                        </div>
                    </div>
    
                    <div className={cx("notification__item")}>
                        <FontAwesomeIcon icon={faTags} className={cx("notification__item--icon")} />
                        <div className={cx("notification__item--gr")}>
                            <h4 className={cx("notification__item--content")}>New Promo Discount for Western</h4>
                            <p className={cx("notification__item--time")}>3 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Notification;
