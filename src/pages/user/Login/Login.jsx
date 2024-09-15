/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/authSlice";
import Loading from "../../../components/Loading/Loading"

const Login = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState('fa-eye-slash');
  const [type, setType] = useState('password');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleClickEye = () => {
    setEye(eye === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash");
    setType(type === "password" ? "text" : "password")
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await dispatch(
      login({
        ...formData
      })
    )
    if (data.payload) {
      navigate("/")
    }
    setLoading(false)
  }

  return loading ? <Loading /> : (
    <div className={cx("box__login")}>
      <div className={cx("login")}>
        <form onSubmit={handleLogin} className={cx("login__form")}>
          <h2 className={cx("login__title")}>Chào mừng bạn trở lại!</h2>
          <h3 className={cx("login__sub-title")}>Đăng nhập</h3>
          <p className={cx("login__desc")}>Điền thông tin để đăng nhập tài khoản</p>
          <div className={cx("login__form-group")}>
            <label className={cx("login__label")}>Email</label>
            <input type="email" className={cx("login__input")} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
          </div>
          <div className={cx("login__form-group")}>
            <label className={cx("login__label")}>Mật khẩu</label>
            <input type={type} className={cx("login__input")} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
            <i onClick={handleClickEye} className={cx(`fa-solid ${eye}`)}></i>
          </div>
          <Link to="/reset-password" className={cx("login__forgot-password")}>Quên mật khẩu?</Link>
          <button className={cx("login__btn")}>Đăng nhập</button>
          <div className={cx("login__account-wrap")}>
            <p className={cx("login__account")}>Bạn chưa có tài khoản?</p>
            <Link to="/register" className={cx("login-or-register")}>Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
