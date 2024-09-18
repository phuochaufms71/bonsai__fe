/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./FaqAdmin.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Faq = () => {
    const cx = classNames.bind(styles);
    const [desc, setDesc] = useState(false);
    const [id, setId] = useState('');
  return (
    <section className={cx("faq")}>
      <div className={cx("container")}>
        <div className={cx("faq__inner")}>
          <h3 className={cx("faq__title")}>Câu hỏi dành cho admin</h3>
          <div className={cx("faq__list")}>
            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Làm thế nào để thêm bonsai vào hệ thống?
              </h3>
              {id === "1" && desc && <p className={cx("faq__item--desc")}>Để thêm cây bonsai mới, hãy truy cập vào mục "Quản Lý" rồi chọn "Bonsai", sau đó nhấn vào nút "Tạo bonsai" và nhập thông tin của bonsai.</p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "1" && desc ? styles.showDesc : ""}`} onClick={() => { setId("1"); setDesc(id === "1" && desc === true ? false : true);  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Xem danh sách bonsai ở đâu?
              </h3>
              {id === "2" && desc && <p className={cx("faq__item--desc")}>
                Truy cập mục "Quản lý", chọn Bonsai, sau đó nhấn nút "Danh sách bonsai".
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "2" && desc ? styles.showDesc : ""}`} onClick={() => { setId("2"); setDesc(id === "2" && desc === true ? false : true)  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Sửa, xóa bonsai như thế nào?
              </h3>
              {id === "3" && desc && <p className={cx("faq__item--desc")}>
              Để sửa, xóa bonsai, chọn mục "Quản lý", chọn Bonsai, tiếp tục nhấn nút "Danh sách bonsai", click chọn "3 chấm" sẽ mở khung sửa và xóa bonsai.
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "3" && desc ? styles.showDesc : ""}`} onClick={() => { setId("3"); setDesc(id === "3" && desc === true ? false : true)  }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq