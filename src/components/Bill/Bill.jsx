/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Bill.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/order/orderSlice";
import { ACCESS_TOKEN } from "../../constants";
import { useEffect } from "react";

const Bill = () => {
    const cx = classNames.bind(styles);
    const { orders } = useSelector(state => state.order.orders);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const fetchOrder = async () => {
        await dispatch(getOrders(accessToken))
    }

    function formatNumberWithSeparator(num, separator = ',') {
        const numStr = num;
        const parts = numStr.split('');
        const integerPart = parts[0];
        const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
        
        // Thay đổi dấu phân cách cho phần nguyên
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        
        return formattedInteger + decimalPart;
    }

    useEffect(() => {
        fetchOrder()
    }, [localStorage.getItem(ACCESS_TOKEN)])
    return (
        <div className={cx("bill")}>
            <div className={cx("container")}>
                <div className={cx("bill__inner")}>
                    <div className={cx("bill__list")}>
                        {
                            orders?.map((order, index) => (
                                <div key={index}>
                                    <div className={cx("bill__item")}>
                                        <h3 className={cx("bill__item-title")}>Hóa đơn của khách hàng</h3>
                                        <div className={cx("bill__item-info")}>
                                            <h3 className={cx("bill__item-info--subtitle")}>Thông tin khách hàng</h3>
                                            <p className={cx("bill__item-info--gr")}><span>Họ tên: </span>{order?.name}</p>
                                            <p className={cx("bill__item-info--gr")}><span>Số điện thoại: </span>{order?.phoneNumber}</p>
                                            <p className={cx("bill__item-info--gr")}><span>Email: </span>{order?.email}</p>
                                            <p className={cx("bill__item-info--gr")}><span>Địa chỉ: </span>{order?.address}</p>
                                        </div>
                                        <div className={cx("bill__item-order")}>
                                            <h3 className={cx("bill__item-order--subtitle")}>Thông tin đơn hàng</h3>
                                            <div className={cx("bill__order-list")}>
                                                {
                                                    order?.bonsaiOrder?.cartBonsais?.map((cartOrder, index) => (
                                                        <div key={index} className={cx("bill__order-wrap")}>
                                                            <img className={cx("bill__order-img")}src={cartOrder?.image?.secure_url} alt="" />
                                                            <div className={cx("bill__order-detail")}>
                                                                <p className={cx("bill__order-name")}><span>Tên:</span> {cartOrder?.name}</p>
                                                                <p className={cx("bill__order-code")}><span>Mã số:</span> {cartOrder?.code}</p>
                                                                <p className={cx("bill__order-price")}><span>Giá:</span> {formatNumberWithSeparator((cartOrder?.price), " ")} VNĐ</p>
                                                                <p className={cx("bill__order-quantity")}><span>Số lượng:</span> {cartOrder?.cartQuantity}</p>
                                                            </div>
                                                            <p className={cx("bill__order-total-item")}>
                                                                <span>Tổng:</span> {formatNumberWithSeparator((cartOrder?.cartQuantity * cartOrder?.price), " ")} VNĐ
                                                            </p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className={cx("bill__money")}>
                                                <p className={cx("bill__subtotal")}>
                                                    <span>Tổng bonsai</span>: {formatNumberWithSeparator((order?.bonsaiOrder?.cartTotalAmount), " ")} VNĐ
                                                </p>
                                                <p className={cx("bill__fee")}>
                                                    <span>Phí</span>: {formatNumberWithSeparator((order?.bonsaiOrder?.cartTotalQuantity * 2500), " ")} VNĐ
                                                </p>
                                                <p className={cx("bill__freight")}>
                                                    <span>Cước</span>: {formatNumberWithSeparator((order?.bonsaiOrder?.cartTotalQuantity * 3500), " ")} VNĐ
                                                </p>
                                                <p className={cx("bill__grandtotal")}>
                                                    <span>Tổng cộng</span>: {formatNumberWithSeparator((order?.bonsaiOrder?.cartTotalAmount + order?.bonsaiOrder?.cartTotalQuantity * 2500 + order?.bonsaiOrder?.cartTotalQuantity * 3500), " ")} VNĐ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill;
