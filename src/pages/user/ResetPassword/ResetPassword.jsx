/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./ResetPassword.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../redux/auth/authSlice";
import Loading from "../../../components/Loading/Loading"

const ResetPassword = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState('fa-eye-slash');
  const [type, setType] = useState('password');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: ""
  })

  const handleClickEye = () => {
    setEye(eye === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash");
    setType(type === "password" ? "text" : "password")
  }

  const handResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await dispatch(
      resetPassword({
        ...formData
      })
    )
    if (data.payload) {
      navigate("/login")
    }
    setLoading(false)
  }

  return loading ? (<div className={cx("loading-icon")}><Loading /></div>) : (
    <div className={cx("box__reset-password")}>
      <div className={cx("reset-password")}>
        <form onSubmit={handResetPassword} className={cx("reset-password__form")}>
          <h2 className={cx("reset-password__title")}>Chào mừng bạn trở lại!</h2>
          <h3 className={cx("reset-password__sub-title")}>Đặt lại mật khẩu</h3>
          <p className={cx("reset-password__desc")}>Đừng lo lắng, chúng tôi sẽ giúp bạn đặt lại mật khẩu</p>
          <div className={cx("reset-password__form-group")}>
            <label className={cx("reset-password__label")}>Email</label>
            <input type="email"  className={cx("reset-password__input")} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
          </div>
          <div className={cx("reset-password__form-group")}>
            <label className={cx("reset-password__label")}>Mật khẩu mới</label>
            <input type={type} className={cx("reset-password__input")} value={formData.newPassword} onChange={(e) => setFormData({...formData, newPassword: e.target.value})} required/>
            <i onClick={handleClickEye} className={cx(`fa-solid ${eye}`)}></i>
          </div>
          <button className={cx("reset-password__btn")}>Đặt lại mật khẩu</button>
          <div className={cx("reset-password__account-wrap")}>
            <p className={cx("reset-password__account")}>Bạn chưa có tài khoản?</p>
            <Link to="/register" className={cx("reset-password-or-register")}>Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
