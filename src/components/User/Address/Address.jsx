/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Address.module.scss";

import { useEffect, useState } from "react";
import { createAddress, getAddresses } from "../../../redux/address/addressSlice";
import { ACCESS_TOKEN } from "../../../constants";

const Address = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state.address);
  const { user } = useSelector((state) => state.auth);
  const [showCreateAddress, setShowCreateAddress] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
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
  });
  const handleShowCreateAddress = () => {
    setShowCreateAddress(true);
  };

  const fetchAddress = async () => {
    await dispatch(getAddresses(accessToken));
  };

  const handleAddNewAddress = async (e) => {
    e.preventDefault();
    await dispatch(
      createAddress({
        accessToken,
        newAddress: formData,
      })
    );
    await dispatch(getAddresses(accessToken));
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
    });
    setShowCreateAddress(false);
  };

  useEffect(() => {
    fetchAddress();
  }, [localStorage.getItem(ACCESS_TOKEN)]);

  return addresses?.length === 0 ? (
    <>Không có địa chỉ, hãy thêm địa chỉ ngay</>
  ) : (
    <div className={cx("address")}>
      <div className={cx("address__inner")}>
        {addresses?.map((address, index) => {
          if (user.email === address?.email) {
            return (
              <div key={index} className={cx("address__item")}>
                <p className={cx("address__item--name")}>
                  <span>{address?.firstName}</span>
                  <span> {address?.lastName}</span>
                </p>
                <p className={cx("address__item--phone")}>
                  <span className={cx("address__item--title")}>
                    Số điện thoại:
                  </span>{" "}
                  (+84) {address?.phoneNumber}
                </p>
                <p className={cx("address__item--email")}>
                  <span className={cx("address__item--title")}>Email:</span>{" "}
                  {address?.email}
                </p>
                <p className={cx("address__item--location")}>
                  <span className={cx("address__item--title")}>Địa chỉ:</span>
                  <span> số {address?.more}</span>,
                  <span> ấp {address?.hamlet}</span>,
                  <span> xã {address?.commune}</span>,
                  <span> huyện {address?.district}</span>,
                  <span> tỉnh {address?.province}</span>,
                  <span> {address?.country}</span>
                </p>
              </div>
            );
          }
        })}
  
        
      </div>
      <div className={cx("address__action-wrap")}>
          {showCreateAddress || isUpdate ? (
            <button
              onClick={() => {
                setShowCreateAddress(false);
                setIsUpdate(false);
              }}
              className={cx("address__action-cancel")}
            >
              Hủy
            </button>
          ) : (
            <></>
          )}
          <button
            onClick={handleShowCreateAddress}
            className={cx("address__action-add")}
          >
            Thêm địa chỉ
          </button>
        </div>
  
        {showCreateAddress && (
          <form onSubmit={handleAddNewAddress} className={cx("address__add")}>
            <h3 className={cx("address__add-title")}>Thêm địa chỉ mới</h3>
            <div className={cx("address__add-gr")}>
              <label htmlFor="fisrtName">
                Họ <span>*</span>
              </label>
              <input
                type="text"
                id="fisrtName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="lastName">
                Tên đệm <span>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="phone">
                Số điện thoại <span>*</span>
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email là email đăng nhập"
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="country">
                Quốc gia <span>*</span>
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="province">
                Tỉnh/Thành phố <span>*</span>
              </label>
              <input
                type="text"
                id="province"
                value={formData.province}
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="district">
                Huyện/Quận/Thị xã<span>*</span>
              </label>
              <input
                type="text"
                id="district"
                value={formData.district}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="commune">
                Xã/Phường/Thị trấn <span>*</span>
              </label>
              <input
                type="text"
                id="commune"
                value={formData.commune}
                onChange={(e) =>
                  setFormData({ ...formData, commune: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="hamlet">
                Ấp/Thôn/Bản/Làng... <span>*</span>
              </label>
              <input
                type="text"
                id="hamlet"
                value={formData.hamlet}
                onChange={(e) =>
                  setFormData({ ...formData, hamlet: e.target.value })
                }
                required
              />
            </div>
            <div className={cx("address__add-gr")}>
              <label htmlFor="more">
                Khác <span>*</span>
              </label>
              <input
                type="text"
                id="more"
                value={formData.more}
                onChange={(e) =>
                  setFormData({ ...formData, more: e.target.value })
                }
                placeholder="Số nhà, đường"
                required
              />
            </div>
  
            <button
              onClick={handleAddNewAddress}
              className={cx("address__add-btn")}
            >
              Thêm địa chỉ
            </button>
          </form>
        )}
    </div>
  );
};

export default Address;
