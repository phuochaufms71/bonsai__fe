/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Register.module.scss";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/authSlice";
import Loading from "../../../components/Loading/Loading"

const Register = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState('fa-eye-slash');
  const [type, setType] = useState('password');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  })

  const handleClickEye = () => {
    setEye(eye === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash");
    setType(type === "password" ? "text" : "password")
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await dispatch(
      register({
        ...formData
      })
    )
    if (data.payload) {
      navigate("/login")
    }
    setLoading(false)
  }

  return loading ? (<div className={cx("loading-icon")}><Loading /></div>) : (
    <div className={cx("box__register")}>
      <div className={cx("register")}>
        <form onSubmit={handleRegister} className={cx("register__form")}>
          <h2 className={cx("register__title")}>Chào mừng bạn trở lại!</h2>
          <h3 className={cx("register__sub-title")}>Đăng ký</h3>
          <p className={cx("register__desc")}>Tạo mới tài khoản nếu chưa có tài khoản</p>
          <div className={cx("register__form-row")}>
            <div className={cx("register__form-group")}>
              <label className={cx("register__label")}>Họ</label>
              <input type="text" className={cx("register__input")} value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required/>
            </div>
            <div className={cx("register__form-group")}>
              <label className={cx("register__label")}>Tên đệm</label>
              <input type="text" className={cx("register__input")} value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required/>
            </div>
          </div>
          <div className={cx("register__form-group")}>
            <label className={cx("register__label")}>Số điện thoại</label>
            <input type="text" className={cx("register__input")} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required/>
          </div>
          <div className={cx("register__form-group")}>
            <label className={cx("register__label")}>Email</label>
            <input type="email" className={cx("register__input")} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
          </div>
          <div className={cx("register__form-group")}>
            <label className={cx("register__label")}>Mật khẩu</label>
            <input type={type} className={cx("register__input")} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
            <i onClick={handleClickEye} className={cx(`fa-solid ${eye}`)}></i>
          </div>
          
          <button className={cx("register__btn")}>Đăng ký</button>
          <div className={cx("register__account-wrap")}>
            <p className={cx("register__account")}>Bạn đã có tài khoản?</p>
            <Link to="/login" className={cx("register-or-login")}>Đăng nhập</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;