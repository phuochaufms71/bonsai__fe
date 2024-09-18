/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import AdminFooter from "../../../components/AdminFooter/AdminFooter";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import styles from "./DefaultAdmin.module.scss";

const DefaultAdmin = ({children}) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <AdminHeader />
      <div className={cx("container")}>
        <div className={cx("default-admin")}>
          <div className={cx("content")}>
            {children}
          </div>
        </div>
      </div>
      <AdminFooter/>
    </>
  )
}

export default DefaultAdmin;
