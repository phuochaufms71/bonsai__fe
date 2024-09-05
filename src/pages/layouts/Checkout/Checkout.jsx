/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { createAddress, deleteAddress, getAddresses } from "../../../redux/address/addressSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UpdateAddress from "../../../components/UpdateAddress/UpdateAddress";
import ModalDeleteAddress from "../../../components/Modal/ModalDeleteAddress/ModalDeleteAddress";
import { useEffect } from "react";

const Checkout = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartBonsai= cart.cartBonsais;
  const totalAmount = cart.cartTotalAmount;
  const totalCartQuantity = cart.cartTotalQuantity;
  const { addresses } = useSelector(state => state.address);
  const { email } = useSelector(state => state.auth.user);
  const [showCreateAddress, setShowCreateAddress] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idSelected, setIdSelected] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "",
    province: "",
    district: "",
    commune: "",
    hamlet: "",
    more: "",
  })

  const handleShowCreateAddress = () => {
    setShowCreateAddress(true)
  }
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const fetchAddress = async () => {
    await dispatch(getAddresses(accessToken))

  }
  
  const handleAddNewAddress = async (e) => {
    e.preventDefault();
    await dispatch(createAddress({
      accessToken,
      newAddress: formData
    }))
    await dispatch(getAddresses(accessToken))
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      country: "",
      province: "",
      district: "",
      commune: "",
      hamlet: "",
      more: "",
    })
    setShowCreateAddress(false)
  }

  const selectedAddress = useMemo(() => {
    return addresses?.find((addressSelect) => addressSelect._id === idSelected) || {};
  }, [addresses, idSelected]);

  const handleDeleteAddress = async (_id) => {
    await dispatch(deleteAddress({
      accessToken,
      id: _id
    }))
    await dispatch(getAddresses(accessToken))
    setIdSelected('')
  }

  useEffect(() => {
    fetchAddress()
  }, [localStorage.getItem(ACCESS_TOKEN)])

  return (
    <section className={cx('checkout')}>
      <div className={cx("container")}>
        <div className={cx("checkout__inner")}>
          <div className={cx("checkout__left")}>
            <div className={cx("checkout__address")}>
              <h2 className={cx("checkout__address-title")}>Địa chỉ giao hàng</h2>
              <p className={cx("checkout__address-desc")}>Chúng tôi nên giao hàng cho khách hàng ở địa chỉ nào?</p>
              {
                addresses?.map((address, index) => {  
                  const emailAddress = address.email;
                  if (email === emailAddress) {
                    return (
                     <div key={index} className={cx("checkout__address-item")}>
                        <div className={cx("checkout__address-user")}>
                          <p className={cx("checkout__address-user--name")}><span>{address?.firstName}</span> <span>{address?.lastName}</span></p>
                          <p className={cx("checkout__address-user--phone")}>(+84) {address?.phoneNumber}</p>
                          <p className={cx("checkout__address-user--location")}>Số {address?.more}, ấp {address?.hamlet}, xã {address?.commune}, huyện {address?.district}, tỉnh {address?.province}, {address?.country}</p>
                          <div className={cx("checkout__address-edit")}>
                            <FontAwesomeIcon onClick={() => {setIsUpdate(true); setIdSelected(address?._id) }} className={cx("checkout__address-edit--icon")} icon={faPenToSquare} />
                          </div>
                          <div className={cx("checkout__address-delete")}>
                            <FontAwesomeIcon onClick={() => {setIdSelected(address?._id); setShowModalDelete(true)}} className={cx("checkout__address-delete--icon")} icon={faTrashCan} />
                          </div>
                        </div>
                        {
                          showModalDelete && <ModalDeleteAddress
                            selectedAddress={selectedAddress}
                            setShowModalDelete={setShowModalDelete} idSelected={idSelected} handleDeleteAddress={handleDeleteAddress}/>
                        }
                     </div>
                    )
                  }
                })
              }
              <div className={cx("checkout__address-wrap-btn")}>
                { showCreateAddress || isUpdate ? <button onClick={() => {setShowCreateAddress(false); setIsUpdate(false)}} className={cx("checkout__address-cancel")}>Hủy</button> : <></> }
                <button onClick={handleShowCreateAddress} className={cx("checkout__address-add")}>Thêm địa chỉ</button>
              </div>

              {/* Update address */}
              {
                isUpdate && <UpdateAddress selectedAddress={selectedAddress} setIsUpdate={setIsUpdate} setIdSelected={setIdSelected} />
              }

              {/* Add new address */}
              {
                showCreateAddress && <form onSubmit={handleAddNewAddress} className={cx("checkout__form")}>
                  <h3 className={cx("checkout__form-title")}>Thêm địa chỉ mới</h3>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="fisrtName">Họ <span>*</span></label>
                    <input type="text" id="fisrtName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="lastName">Tên đệm <span>*</span></label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="phone">Số điện thoại <span>*</span></label>
                    <input type="text" id="phone" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="text" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email là email đăng nhập" required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="country">Quốc gia <span>*</span></label>
                    <input type="text" id="country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="province">Tỉnh/Thành phố <span>*</span></label>
                    <input type="text" id="province" value={formData.province} onChange={(e) => setFormData({ ...formData, province: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="district">Huyện/Quận/Thị xã<span>*</span></label>
                    <input type="text" id="district" value={formData.district} onChange={(e) => setFormData({ ...formData, district: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="commune">Xã/Phường/Thị trấn <span>*</span></label>
                    <input type="text" id="commune" value={formData.commune} onChange={(e) => setFormData({ ...formData, commune: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="hamlet">Ấp/Thôn/Bản/Làng... <span>*</span></label>
                    <input type="text" id="hamlet" value={formData.hamlet} onChange={(e) => setFormData({ ...formData, hamlet: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="more">Khác <span>*</span></label>
                    <input type="text" id="more" value={formData.more} onChange={(e) => setFormData({ ...formData, more: e.target.value })} placeholder="Số nhà, đường" required/>
                  </div>
                  
                  <button onClick={handleAddNewAddress} className={cx("checkout__form-btn")}>Thêm địa chỉ</button>
                </form>
              }

              <div className={cx("checkout__food")}>
                <h3 className={cx("checkout__food-title")}>Chi tiết Bonsai</h3>
                {
                  cartBonsai?.map((food, index) => (
                    <div key={index} className={cx("checkout__food-item")}>
                      <div className={cx("checkout__food-content")}>
                        <div className={cx("checkout__food-wrap-img")}>
                          <img className={cx("checkout__food-img")} src={food?.image?.secure_url} alt="" />
                        </div>
                        <div className={cx("checkout__food-body")}>
                          <p className={cx("checkout__food-body--name")}>{food?.name} x <span>{food?.cartQuantity}</span></p>
                          <p className={cx("checkout__food-body--price")}>{food?.price} VNĐ</p>
                        </div>
                      </div>
                      <p className={cx("checkout__food-total")}>{(food?.price * food?.cartQuantity)} VNĐ</p>
                    </div>
                  ))
                }
                <div className={cx("checkout__food-bottom")}> 
                  <div className={cx("checkout__food-prev-shopping")}>
                    <FontAwesomeIcon className={cx("checkout__food-prev-shopping--icon")} icon={faChevronLeft} />
                    <Link className={cx("checkout__food-prev-shopping--link")} to="/shopping">Tiếp tục mua bonsai</Link>
                  </div>
                  <Link to="/cart/checkout/payment" className={cx("checkout__food-next")}>
                    Tiếp tục
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("checkout__right")}>
            <div className={cx("checkout__fee")}>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Tổng bonsai:</p>
                <p className={cx("checkout__fee-number")}>{totalAmount} VNĐ</p>
              </div>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Thuế:</p>
                <p className={cx("checkout__fee-number")}>{(2500 * totalCartQuantity)} VNĐ</p>
              </div>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Cước:</p>
                <p className={cx("checkout__fee-number")}>{(3500 * totalCartQuantity)} VNĐ</p>
              </div>
              <div className={cx("checkout__fee-total")}>
                <p className={cx("checkout__fee-total--title")}>Tổng thanh toán</p>
                <p className={cx("checkout__fee-total--number")}>{(totalAmount + 2500 * totalCartQuantity + 3500 * totalCartQuantity)} VNĐ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout;
