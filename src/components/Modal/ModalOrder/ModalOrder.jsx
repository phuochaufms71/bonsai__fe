/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from  "./ModalOrder.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../redux/order/orderSlice";
import formatNumberWithSeparator, { ACCESS_TOKEN } from "../../../constants";
import { useNavigate } from "react-router-dom";

const ModalOrder = ({ selectedAddress, setIsShowOrder }) => {
    const cx = classNames.bind(styles);
    const { user } = useSelector(state => state.auth);
    const { cartBonsais } = useSelector(state => state.cart);
    const { cartTotalAmount } = useSelector(state => state.cart);
    const { cartTotalQuantity } = useSelector(state => state.cart);

    const  cartOrder  = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddOrder = async (e) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        e.preventDefault();
        await dispatch(createOrder({
            accessToken,
            newOrder: {
                name: `${user?.firstName} ${user?.lastName}`,
                phoneNumber: user?.phone,
                email: user?.email,
                address: `số ${selectedAddress.more}, ấp ${selectedAddress.hamlet}, xã ${selectedAddress.commune}, huyện ${selectedAddress.district}, tỉnh ${selectedAddress.province}, ${selectedAddress.country}`,
                bonsaiOrder: {
                    ...cartOrder
                }
            }
        }))
        navigate("/cart/checkout/payment")
    }

  return (
    <section className={cx("modal-order")}>
      <div className={cx("container")}>
        <div className={cx("modal-order__inner")}>
            <h3 className={cx("modal-order__title")}>Hóa đơn của quý khách</h3>
            <div> 
                <p className={cx("modal-order__sub-title")}>Thông tin khách hàng</p>
                <div className={cx("modal-order__gr")}>
                    <p className={cx("modal-order__gr-label")}>Tên</p>
                    <p className={cx("modal-order__gr-content")}>{user?.firstName} {user?.lastName}</p>
                </div>
                <div className={cx("modal-order__gr")}>
                    <p className={cx("modal-order__gr-label")}>Số điện thoại</p>
                    <p className={cx("modal-order__gr-content")}>{user?.phone}</p>
                </div>
                <div className={cx("modal-order__gr")}>
                    <p className={cx("modal-order__gr-label")}>Email</p>
                    <p className={cx("modal-order__gr-content")}>{user?.email}</p>
                </div>
                <div className={cx("modal-order__gr")}>
                    <p className={cx("modal-order__gr-label")}>Địa chỉ</p>
                    <p className={cx("modal-order__gr-content")}>
                        <span>số {selectedAddress.more}</span>, <span>ấp {selectedAddress.hamlet}</span>, <span>xã {selectedAddress.commune}</span>, <span>huyện {selectedAddress.district}</span>, <span>tỉnh {selectedAddress.province}</span>, <span>{selectedAddress.country}</span>
                    </p>
                </div>
            </div>
            <div className={cx("spacer")}></div>
            <div>
                <p className={cx("modal-order__sub-title")}>Thông tin đơn hàng</p>
                <table>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>SL</th>
                            <th>Giá</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartBonsais.map((cartBonsai, index) => (
                                <tr key={index}>
                                    <td>{cartBonsai.name}</td>
                                    <td>{cartBonsai.cartQuantity}</td>
                                    <td>{formatNumberWithSeparator((cartBonsai.price), " ")}</td>
                                    <td>{formatNumberWithSeparator((cartBonsai.price * cartBonsai.cartQuantity), " ")}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className={cx("spacer")}></div>
                <div className={cx("total")}>
                    <p className={cx("sub-total")}><span>Tổng phụ</span>: {formatNumberWithSeparator((cartTotalAmount), " ")} VNĐ</p>
                    <p className={cx("fee-total")}><span>Phí</span>: {formatNumberWithSeparator((cartTotalQuantity * 2500), " ")} VNĐ</p>
                    <p className={cx("freight-total")}><span>Cước</span>: {formatNumberWithSeparator((cartTotalQuantity * 3500), " ")} VNĐ</p>
                    <p className={cx("grand-total")}><span>Tổng cộng</span>: {formatNumberWithSeparator((cartTotalAmount + cartTotalQuantity * 2500 + cartTotalQuantity * 3500), " ")} VNĐ</p>
                </div>
            </div>
            <div className={cx("spacer")}></div>
            <div className={cx("modal-order__action")}>
                <button onClick={() => setIsShowOrder(false)} className={cx("modal-order__action-cancel")}>Hủy</button>
                <button onClick={handleAddOrder} className={cx("modal-order__action-confirm")}>Xác nhận</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ModalOrder;
