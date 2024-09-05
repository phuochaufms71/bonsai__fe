/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./UpdateAddress.module.scss";
import { useDispatch } from "react-redux";
import { getAddresses, updateAddress } from "../../redux/address/addressSlice";
import { ACCESS_TOKEN } from "../../constants";

const UpdateAddress = ({ selectedAddress, setIdSelected, setIsUpdate }) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [dataUpdate, setDataUpdate] = useState({
    firstName: selectedAddress?.firstName || "",
    lastName: selectedAddress?.lastName || "",
    phoneNumber: selectedAddress?.phoneNumber || "",
    email: selectedAddress?.email || "",
    country: selectedAddress?.country || "",
    province: selectedAddress?.province || "",
    district: selectedAddress?.district || "",
    commune: selectedAddress?.commune || "",
    hamlet: selectedAddress?.hamlet || "",
    more: selectedAddress?.more || "",
  });

  
  const handleUpdateAddress = async (e) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    e.preventDefault();
    await dispatch(
      updateAddress({
        accessToken,
        id: selectedAddress._id,
        updateAddress: dataUpdate,
      })
    );
    
    await dispatch(getAddresses(accessToken));
    
    setIdSelected("");
    setIsUpdate(false);
    setDataUpdate({
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
  };
  return (
    <div>
      <form onSubmit={handleUpdateAddress} className={cx("checkout__form")}>
        <h3 className={cx("checkout__form-title")}>Cập nhật địa chỉ</h3>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="fisrtName">
            Họ <span>*</span>
          </label>
          <input
            type="text"
            id="fisrtName"
            value={dataUpdate.firstName}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, firstName: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="lastName">
            Tên đệm <span>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={dataUpdate.lastName}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, lastName: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="phone">
            Số điện thoại <span>*</span>
          </label>
          <input
            type="text"
            id="phone"
            value={dataUpdate.phoneNumber}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, phoneNumber: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="text"
            id="email"
            value={dataUpdate.email}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, email: e.target.value })
            }
            required
            placeholder="Email is email login"
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="country">
            Quốc gia <span>*</span>
          </label>
          <input
            type="text"
            id="country"
            value={dataUpdate.country}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, country: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="province">
            Tỉnh/Thành phố <span>*</span>
          </label>
          <input
            type="text"
            id="province"
            value={dataUpdate.province}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, province: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="district">
            Huyện/Quận/Thị xã <span>*</span>
          </label>
          <input
            type="text"
            id="district"
            value={dataUpdate.district}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, district: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="commune">
            Xã/Phường/Thị trấn <span>*</span>
          </label>
          <input
            type="text"
            id="commune"
            value={dataUpdate.commune}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, commune: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="hamlet">
            Ấp/Thôn/Bản/Làng... <span>*</span>
          </label>
          <input
            type="text"
            id="hamlet"
            value={dataUpdate.hamlet}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, hamlet: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="more">
            Khác (Số nhà, đường) <span>*</span>
          </label>
          <input
            type="text"
            id="more"
            value={dataUpdate.more}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, more: e.target.value })
            }
            required
          />
        </div>
        <button
          onClick={handleUpdateAddress}
          className={cx("checkout__form-btn")}
        >
          Cập nhật ngay
        </button>
      </form>
    </div>
  );
};

export default UpdateAddress;
