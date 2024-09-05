import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import SidebarProfile from "../../../components/Sidebar/SidebarProfile/SidebarProfile";
import { useState } from "react";
import Account from "../../../components/User/Account/Account";
import Address from "../../../components/User/Address/Address";
import Favourite from "../../../components/User/Favourite/Favourite";
import Order from "../../../components/User/Order/Order";

const Profile = () => {
    const cx = classNames.bind(styles);
    const [content, setContent] = useState("account");
  return (
    <section className={cx("profile")}>
      <div className={cx("container")}>
        <div className={cx("profile__inner")}>
          {/* Sidebar */}
          <SidebarProfile content={content} setContent={setContent}/>

          {/* Content */}
          <div className={cx("profile__body")}>
            {
              content === "account" && <Account />
            }
            {
              content === "address" && <Address />
            }
            {
              content === "favourite" && <Favourite />
            }
            {
              content === "order" && <Order />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;
