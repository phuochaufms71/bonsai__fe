/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ModalLogin.module.scss";
import { Link } from "react-router-dom";

const ModalLogin = ({setCheckLogin}) => {
    const cx = classNames.bind(styles);
    const handleCancelLogin = () => {
        setCheckLogin(true)
    }
  return (
    <div className={cx("modal-login")}>
      <div className={cx("container")}>
          <div className={cx("modal-login__inner")}>
            <h3 className={cx("modal-login__title")}>Quý khách vui lòng đăng nhập để thực hiện chức năng này!</h3>
            <div className={cx("modal-login__action")}>
                <button className={cx("modal-login__action-cancel")} onClick={handleCancelLogin}>Hủy</button>
                <Link className={cx("modal-login__action-login")} to="/login">Đăng nhập ngay</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ModalLogin
