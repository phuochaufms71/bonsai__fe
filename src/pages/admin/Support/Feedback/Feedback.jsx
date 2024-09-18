/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Feedback.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMessages } from "../../../../redux/message/messageSlice";
import { ACCESS_TOKEN } from "../../../../constants";

const Feedback = () => {
    const cx = classNames.bind(styles);
    const  { messages }  = useSelector(state => state.message);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        dispatch(getMessages(accessToken))
    }, [])
    return (
        <div className={cx("feedback")}>
            <div className={cx("container")}>
                <div className={cx("feedback__inner")}>
                    <h3 className={cx("feedback__title")}>Phản hồi của khách hàng</h3>
                    <h4 className={cx("feedback__subtitle")}>Thống kê: Có <span>{messages?.length}</span> phản hồi</h4>
                    <div className={cx("feedback__list")}>
                        {
                            messages?.map((message, index) => (
                                <div key={index} className={cx("feedback__item")}>
                                    <div className={cx("feedback__item-info")}>
                                        <div className={cx("feedback__item-wrap")}>
                                            <img className={cx("feedback__item-img")} src={message?.avatar} alt="" />
                                        </div>
                                        <div className={cx("feedback__item-gr")}>
                                            <p className={cx("feedback__item-name")}>{message?.name}</p>
                                            <p className={cx("feedback__item-time")}>
                                                <span>{message?.date}</span>/<span>{message?.month}</span>/<span>{message?.year}</span>
                                            </p>
                                            <p className={cx("feedback__item-email")}>{message?.email}</p>
                                        </div>
                                    </div>
                                    <p className={cx("feedback__item-message")}>{message?.message}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
