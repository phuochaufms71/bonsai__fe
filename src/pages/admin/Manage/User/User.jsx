/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../../../redux/auth/authSlice";
import { ACCESS_TOKEN } from "../../../../constants";

const User = () => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const { users } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(getUser(accessToken))
    }, [])

    return (
        <div className={cx("user")}>
            <div className={cx("container")}>
                <div className={cx("user__inner")}>
                    <h3 className={cx("user__title")}>Danh sách người dùng</h3>
                    <table className={cx("user__table")}>
                        <thead>
                            <tr>
                                <th>Ảnh đại diện</th>
                                <th>Họ tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {
                            users?.map((user, index) => {
                                if (user?.role === "user") {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <img src={user?.avatar} alt="" />
                                                </td>
                                                <td>
                                                    <p>
                                                        <span>{user?.firstName}</span>{" "}<span>{user?.lastName}</span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>{user?.phone}</p>
                                                </td>
                                                <td>
                                                    <p>{user?.email}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            })
                        }
                    </table>
                    <div className={cx("user__mobile")}>
                        <div className={cx("user__list")}>
                            {
                                users?.map((user, index) => {
                                    if (user?.role === "user") {
                                        return (
                                            <div key={index} className={cx("user__item")}>
                                                <div className={cx("user__item-wrap")}>
                                                    <img src={user?.avatar} alt="avatar" className={cx("user__item-img")} />
                                                </div>
                                                <div className={cx("user__item-info")}>
                                                    <p className={cx("user__item-name")}><span>Họ tên: </span>{" "} {user?.firstName}{" "}{user?.lastName}
                                                    </p>
                                                    <p className={cx("user__item-phone")}>
                                                        <span>Số điện thoại:</span> {user?.phone}</p>
                                                    <p className={cx("user__item-email")}><span>Email: </span> {user?.email}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
