/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ModalDelete.module.scss";

const ModalDelete = ({ bonsai, setShowModalDelete, setShowAction, handleDeleteBonsai }) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("modal-delete")}>
      <div className={cx("modal-delete__inner")}>
        <h3 className={cx("modal-delete__title")}>
          Bạn muốn xóa bonsai này
        </h3>
        <p className={cx("modal-delete__sub-title")}>
          Điều này có nghĩa bonsai sẽ bị xóa khỏi dữ liệu
        </p>
        <p className={cx("modal-delete__question")}>Bạn chắc chắn?</p>
        <div className={cx("modal-delete__wrap-btn")}>
          <button
            className={cx("modal-delete__btn-cancel")}
            onClick={() => {setShowModalDelete(false); setShowAction(false)}}
          >
            Hủy
          </button>
          <button
            onClick={() => handleDeleteBonsai(bonsai._id)}
            className={cx("modal-delete__btn-delete")}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
