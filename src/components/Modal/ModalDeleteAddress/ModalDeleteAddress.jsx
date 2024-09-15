/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ModalDeleteAddress.module.scss";

const ModalDeleteAddress = ({ selectedAddress, idSelected, setShowModalDelete, handleDeleteAddress }) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("modal-delete")}>
      <div className={cx("modal-delete__inner")}>
        <h3 className={cx("modal-delete__title")}>
          Quý khách muốn xóa địa chỉ dưới đây
        </h3>
        <div className={cx("modal-delete__sub-title")}>
          <p>
            <span>Số {selectedAddress?.more}</span>, 
            <span> ấp {selectedAddress?.hamlet}</span>, 
            <span> xã {selectedAddress?.commune}</span>, 
            <span> huyện {selectedAddress?.district}</span>, 
            <span> tỉnh {selectedAddress?.province}</span>, 
            <span> {selectedAddress?.country}</span>
          </p>
        </div>
        <p className={cx("modal-delete__question")}>Quý khách đã chắc chắn?</p>
        <div className={cx("modal-delete__wrap-btn")}>
          <button
            className={cx("modal-delete__btn-cancel")}
            onClick={() => setShowModalDelete(false)}
          >
            Hủy
          </button>
          <button
            onClick={() => {handleDeleteAddress(idSelected); setShowModalDelete(false)}}
            className={cx("modal-delete__btn-delete")}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteAddress;
