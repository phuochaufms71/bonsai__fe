/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { createAddress, deleteAddress, getAddresses } from "../../../redux/address/addressSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UpdateAddress from "../../../components/UpdateAddress/UpdateAddress";
import ModalDeleteAddress from "../../../components/Modal/ModalDeleteAddress/ModalDeleteAddress";
import ModalOrder from "../../../components/Modal/ModalOrder/ModalOrder";
import formatNumberWithSeparator from "../../../constants";

const Checkout = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartBonsai= cart.cartBonsais;
  const totalAmount = cart.cartTotalAmount;
  const totalCartQuantity = cart.cartTotalQuantity;
  const { addresses } = useSelector(state => state.address);
  const { user } = useSelector(state => state.auth);
  const [showCreateAddress, setShowCreateAddress] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idSelected, setIdSelected] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isShowOrder, setIsShowOrder] = useState(false);
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
  
  const handleAddNewAddress = async (e) => {
    e.preventDefault();
    await dispatch(createAddress({
      newAddress: formData
    }))
    await dispatch(getAddresses())
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
      id: _id
    }))
    await dispatch(getAddresses())
    setIdSelected('')
  }

  return (
    <section className={cx('checkout')}>
      <div className={cx("container")}>
        <div className={cx("checkout__inner")}>
          <div className={cx("checkout__left")}>
            <div className={cx("checkout__address")}>
              <h2 className={cx("checkout__address-title")}>Địa chỉ giao hàng</h2>
              <p className={cx("checkout__address-desc")}>Nếu chưa địa chỉ quý khách vui lòng thêm địa chỉ và hãy chọn một địa chỉ để chúng tôi giao hàng cho quý khách.</p>
              {
                addresses?.map((address, index) => {  
                  if (user.email === address.email) {
                    return (
                     <div key={index} className={cx("checkout__address-item")}>
                        <div onClick={() => {setIsChecked(prev => !prev); setIdSelected(address?._id)}} className={`${styles.checkout__address_user} ${isChecked && idSelected === address._id ? styles.checkout__address_checked : ""}`}>
                          <p className={cx("checkout__address_user--name")}><span>{address?.firstName}</span> <span>{address?.lastName}</span></p>
                          <p className={cx("checkout__address_user--phone")}>(+84) {address?.phoneNumber}</p>
                          <p className={cx("checkout__address_user--location")}>Số {address?.more}, ấp {address?.hamlet}, xã {address?.commune}, huyện {address?.district}, tỉnh {address?.province}, {address?.country}</p>
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
                  } else {
                    return <></>
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

              <div className={cx("checkout__bonsai")}>
                <h3 className={cx("checkout__bonsai-title")}>Chi tiết Bonsai</h3>
                {
                  cartBonsai?.map((bonsai, index) => (
                    <div key={index} className={cx("checkout__bonsai-item")}>
                      <div className={cx("checkout__bonsai-content")}>
                        <div className={cx("checkout__bonsai-wrap-img")}>
                          <img className={cx("checkout__bonsai-img")} src={bonsai?.image?.secure_url} alt="" />
                        </div>
                        <div className={cx("checkout__bonsai-body")}>
                          <p className={cx("checkout__bonsai-body--name")}>{bonsai?.name} x <span>{bonsai?.cartQuantity}</span></p>
                          <p className={cx("checkout__bonsai-body--price")}>{formatNumberWithSeparator(bonsai?.price)} VNĐ</p>
                        </div>
                      </div>
                      <p className={cx("checkout__bonsai-total")}>{formatNumberWithSeparator(bonsai?.price * bonsai?.cartQuantity)} VNĐ</p>
                    </div>
                  ))
                }
                <div className={cx("checkout__bonsai-bottom")}> 
                  <div className={cx("checkout__bonsai-prev-shopping")}>
                    <FontAwesomeIcon className={cx("checkout__bonsai-prev-shopping--icon")} icon={faChevronLeft} />
                    <Link className={cx("checkout__bonsai-prev-shopping--link")} to="/shopping">Tiếp tục mua bonsai</Link>
                  </div>
                  { 
                    isChecked && <p onClick={() => setIsShowOrder(true)} className={cx("checkout__bonsai-next")}>
                      Tiếp tục
                    </p> 
                  }
                  {
                    isShowOrder && <ModalOrder selectedAddress={selectedAddress} setIsShowOrder={setIsShowOrder} />
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={cx("checkout__right")}>
            <div className={cx("checkout__fee")}>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Tổng phụ:</p>
                <p className={cx("checkout__fee-number")}>{formatNumberWithSeparator(totalAmount)} VNĐ</p>
              </div>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Phí:</p>
                <p className={cx("checkout__fee-number")}>{formatNumberWithSeparator(2500 * totalCartQuantity)} VNĐ</p>
              </div>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Cước:</p>
                <p className={cx("checkout__fee-number")}>{formatNumberWithSeparator(3500 * totalCartQuantity)} VNĐ</p>
              </div>
              <div className={cx("checkout__fee-total")}>
                <p className={cx("checkout__fee-total--title")}>Tổng cộng</p>
                <p className={cx("checkout__fee-total--number")}>{formatNumberWithSeparator(totalAmount + 2500 * totalCartQuantity + 3500 * totalCartQuantity)} VNĐ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout;
