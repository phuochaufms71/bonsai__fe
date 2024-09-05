/* eslint-disable react/prop-types */
import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';
import styles from "./HeadlessTippy.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faBell, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeadlessTippy = ({children}) => {
  const cx = classNames.bind(styles);
  const { user } = useSelector(state => state.auth);

  return (
    <Tippy
      interactive={true}
      placement="bottom-start"
      render={attrs => (
          <div className={cx("tippy")} tabIndex="-1" {...attrs}>
            <Link to="/profile" className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faUser} />
              <span className={cx("tippy__text")}>Trang cá nhân</span>
            </Link>
            <Link to="/notification" className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faBell} />
              <span className={cx("tippy__text")}>Thông báo</span>
            </Link>
            {user.email ? <Link to="/logout" className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faRightToBracket} />
              <span className={cx("tippy__text")}>Đăng xuất</span>
            </Link> :
            <Link to="/login" className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faArrowRightToBracket} />
              <span className={cx("tippy__text")}>Đăng nhập</span>
            </Link>}
          </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default HeadlessTippy;
