import classNames from "classnames/bind";
import styles from "./AdminFooter.module.scss";
const AdminFooter = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx("admin-footer")}>
      <div className={cx("container")}>
        <p className={cx("admin-footer__copy-right")}>@2024 Copyright - Set admin rights for <span>@Phuoc Hau</span></p>
      </div>
    </div>
  )
}

export default AdminFooter;
