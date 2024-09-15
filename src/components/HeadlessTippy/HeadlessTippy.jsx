/* eslint-disable react/prop-types */
import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';
import styles from "./HeadlessTippy.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faBell, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalLogin from "../Modal/ModalLogin/ModalLogin";
import { useState } from "react";

const HeadlessTippy = ({children}) => {
  const cx = classNames.bind(styles);
  const { user } = useSelector(state => state.auth);
  const [checkLogin, setCheckLogin] = useState(true);
  const navigate = useNavigate();

  const handleCheckLogin = () => {
    if (user.email) {
      setCheckLogin(true);
      navigate("/profile")
    } else {
      setCheckLogin(false)
    }
  }

  return (
    <>
      <Tippy
        interactive={true}
        placement="bottom-start"
        render={attrs => (
            <div className={cx("tippy")} tabIndex="-1" {...attrs}>
              <div onClick={handleCheckLogin} className={cx("tippy__item")}>
                <FontAwesomeIcon className={cx("tippy__icon")}icon={faUser} />
                <span className={cx("tippy__text")}>Trang cá nhân</span>
              </div>
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
      {
        !checkLogin && <ModalLogin setCheckLogin={setCheckLogin} />
      }
    </>
  )
}

export default HeadlessTippy;
