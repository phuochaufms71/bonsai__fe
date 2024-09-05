import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { useState } from "react";

import UpdateAccount from "../../UpdateAccount/UpdateAccount";
import { useSelector } from "react-redux";

const Account = () => {
    const cx = classNames.bind(styles);

    const [update, setUpdate] = useState(false);
    const { user } = useSelector(state => state.auth);

    const [fName, setFName] = useState(user.firstName);
    const [lName, setLName] = useState(user.lastName);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState(user.avatar);
    
  return (
    <>
        <div className={cx("account")}>
            {
                update ? <UpdateAccount fName={fName} setFName={setFName} lName={lName} setLName={setLName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} avatar={avatar} setAvatar={setAvatar} setUpdate={setUpdate} /> : <div className={cx("account__body")}>
                    <div>
                        <img className={cx("account__avatar")} src={avatar} alt="" />
                    </div>
                    <div className={cx("account__block")}>
                        <div className={cx("account__gr")}>
                            <p className={cx("account__gr--title")} >First Name</p>
                            <p className={cx("account__gr--content")}>{fName}</p>
                        </div>
                        <div className={cx("account__gr")}>
                            <p className={cx("account__gr--title")}>Last Name</p>
                            <p className={cx("account__gr--content")}>{lName}</p>
                        </div>
                        <div className={cx("account__gr")}>
                            <p className={cx("account__gr--title")}>Phone Number</p>
                            <p className={cx("account__gr--content")}>{phone}</p>
                        </div>
                        <div className={cx("account__gr")}>
                            <p className={cx("account__gr--title")}>Email</p>
                            <p className={cx("account__gr--content")}>{email}</p>
                        </div>
                        <button onClick={() => setUpdate(true)} className={cx("account__edit")}>Edit</button>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Account;
