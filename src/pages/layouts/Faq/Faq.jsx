import classNames from "classnames/bind";
import styles from "./Faq.module.scss";
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
          <h3 className={cx("faq__title")}>Câu hỏi thường gặp</h3>
          <div className={cx("faq__list")}>
            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Miền Bắc khi nào nhận được hàng?
              </h3>
              {id === "1" && desc && <p className={cx("faq__item--desc")}>Veritatis, adipisci ratione eveniet incidunt placeat unde? Aperiam dolor, doloremque consequuntur quae nesciunt, est doloribus mollitia expedita ratione reprehenderit, optio fugit nemo?</p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "1" && desc ? styles.showDesc : ""}`} onClick={() => { setId("1"); setDesc(id === "1" && desc === true ? false : true);  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Đi xa cây có bị sao không?
              </h3>
              {id === "2" && desc && <p className={cx("faq__item--desc")}>
                Enim, deleniti cumque non nostrum veniam unde fuga illum autem dolores corrupti quo minima, quaerat dignissimos voluptatum incidunt veritatis ab necessitatibus? Dolorum
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "2" && desc ? styles.showDesc : ""}`} onClick={() => { setId("2"); setDesc(id === "2" && desc === true ? false : true)  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Cây này chăm sóc thế nào vậy shop?
              </h3>
              {id === "3" && desc && <p className={cx("faq__item--desc")}>
                At, sit consectetur repudiandae, nihil voluptates quaerat eum asperiores architecto consequuntur exercitationem qui delectus amet molestiae veniam, modi deserunt hic quae vel.
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "3" && desc ? styles.showDesc : ""}`} onClick={() => { setId("3"); setDesc(id === "3" && desc === true ? false : true)  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Có tính phí ship không shop?
              </h3>
              {id === "4" && desc && <p className={cx("faq__item--desc")}>
                Corrupti, voluptatibus animi, voluptatem voluptatum recusandae nesciunt nisi ratione doloribus numquam deserunt inventore accusamus necessitatibus delectus. Nisi similique voluptate laborum sunt nesciunt!
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "4" && desc ? styles.showDesc : ""}`} onClick={() => { setId("4"); setDesc(id === "4" && desc === true ? false : true)  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Shop giao cây bằng hình thức nào?
              </h3>
              {id === "5" && desc && <p className={cx("faq__item--desc")}>
                Odio beatae minus molestias ut id aperiam quidem autem, quia est dolorum? Itaque accusantium aperiam hic odio distinctio architecto deleniti, veritatis doloremque.
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "5" && desc ? styles.showDesc : ""}`} onClick={() => { setId("5"); setDesc(id === "5" && desc === true ? false : true)  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Mua cây có được tặng luôn chậu không shop?
              </h3>
              {id === "6" && desc && <p className={cx("faq__item--desc")}>
                Veritatis, ab? Repudiandae quas architecto eos incidunt praesentium, quia, perspiciatis minus in optio nam veniam suscipit, non laboriosam? Possimus maxime odit dolore!
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "6" && desc ? styles.showDesc : ""}`} onClick={() => { setId("6"); setDesc(id === "6" && desc === true ? false : true)  }}/>
            </div>

            <div className={cx("faq__item")}>
              <h3 className={cx("faq__item--title")}
              >
                Thanh toán hàng có cọc trước không shop?
              </h3>
              {id === "7" && desc && <p className={cx("faq__item--desc")}>
                Vitae minima, cumque reprehenderit nihil alias quam, sunt similique incidunt quis dignissimos expedita laborum. Expedita quam nihil reprehenderit, neque minima soluta inventore!
              </p>}
              <FontAwesomeIcon icon={faChevronUp} className={`${styles.faq__icon} ${id === "7" && desc ? styles.showDesc : ""}`} onClick={() => { setId("7"); setDesc(id === "7" && desc === true ? false : true)  }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq