/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./UpdateAccount.module.scss";
import { useDispatch } from "react-redux";
import { ACCESS_TOKEN } from "../../constants";
import { editUser } from "../../redux/auth/authSlice";

const UpdateAccount = ({fName, setFName, lName, setLName, phone, setPhone, email, setEmail, avatar, setAvatar, setUpdate}) => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    const handleEditAccount = () => {
        dispatch(editUser({
            accessToken,
            editData: {
                firstName: fName,
                lastName: lName,
                phone,
                email,
                avatar
            }
        }))
        setUpdate(false)
    }
    
    const handChangeAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file)
          reader.onloadend = () => {
            setAvatar(reader.result)
          }
        } else {
          setAvatar(avatar)
        }
    }
    return (
        <>
            <label htmlFor="avatar">
                <img src={avatar} alt="" className={cx("update-account__avatar")} />
                <input type="file" id="avatar" hidden onChange={handChangeAvatar}/>
            </label>
            <div className={cx("update-account")}>
                <div className={cx("update-account__block")}>
                    <div className={cx("update-account__gr")}>
                        <label className={cx("update-account__gr--title")} >First Name</label>
                        <input className={cx("update-account__gr--content")} value={fName} onChange={(e) => setFName(e.target.value)} />
                    </div>
                    <div className={cx("update-account__gr")}>
                        <label className={cx("update-account__gr--title")}>Last Name</label>
                        <input className={cx("update-account__gr--content")} value={lName} onChange={(e) => setLName(e.target.value)} />
                    </div>
                    <div className={cx("update-account__gr")}>
                        <label className={cx("update-account__gr--title")}>Phone Number</label>
                        <input className={cx("update-account__gr--content")} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className={cx("update-account__gr")}>
                        <label className={cx("update-account__gr--title")}>Email</label>
                        <input className={cx("update-account__gr--content")} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button onClick={handleEditAccount} className={cx("update-account__edit")}>Save</button>
                </div>
            </div>
        </>
    )
}

export default UpdateAccount;
