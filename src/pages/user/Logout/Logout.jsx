/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Logout.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";
import Loading from "../../../components/Loading/Loading"
import { ACCESS_TOKEN } from "../../../constants";

const Logout = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    setLoading(true);
    await dispatch(
      logout(accessToken)
    )
    navigate("/")
    setLoading(false)
  }

  return loading ? (<div className={cx("loading-icon")}><Loading /></div>) : (
    <div className={cx("box__logout")}>
      <div className={cx("logout")}>
        <div className={cx("logout__form")}>
          <h2 className={cx("logout__title")}>Hẹn gặp lại bạn!</h2>
          <p className={cx("logout__sub-title")}>Bạn muốn đăng xuất khỏi tài khoản?</p>
          <p className={cx("logout__question")}>Bạn có chắc chắn không?</p>
          <div className={cx("logout__wrap-btn")}>
            <button className={`${styles.btn} ${styles.btn__cancel}`} onClick={() => window.history.back()}>Hủy</button>
            <button className={`${styles.btn} ${styles.btn__logout}`} onClick={handleLogout}>Đăng xuất</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
