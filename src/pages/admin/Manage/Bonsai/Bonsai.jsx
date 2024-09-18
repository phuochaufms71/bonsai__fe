import classNames from "classnames/bind";
import styles from "./Bonsai.module.scss";
import { images } from "../../../../components/images";
import { useState } from "react";
import AdminGetListBonsai from "../../AdminGetListBonsai/AdminGetListBonsai";
import AdminCreateBonsai from "../../AdminCreateBonsai/AdminCreateBonsai";

const Bonsai = () => {
    const cx = classNames.bind(styles);
    const [active, setActive] = useState("");
    const [isShowList, setIsShowList] = useState(false);
    const [isShowCreate, setIsShowCreate] = useState(false);

    return (
        <section className={cx("bonsai")}>
            <div className={cx("bonsai__inner")}>
                <div className={cx("bonsai__content")}>
                    <div className={cx("bonsai__wrap-img")}>
                        <img className={cx("bonsai__img")} src={images.bonsai_icon} alt="icon food" />
                        <h3 className={cx("bonsai__title")}>Bonsai</h3>
                    </div>
                    <div className={cx("bonsai__action")}>
                        <p onClick={() => {setActive("bonsai-lists"); setIsShowList(true); setIsShowCreate(false)}} className={`${active === "bonsai-lists" ? styles.active : ""} ${styles.bonsai__actionLink}`}>
                        <img src={images.checklist_icon} alt="check list" />
                            Danh sách bonsai
                        </p>
                        <p onClick={() => {setActive("bonsai-create"); setIsShowCreate(true); setIsShowList(false)}} className={`${active === "bonsai-create" ? styles.active : ""} ${styles.bonsai__actionLink}`}>
                            <img src={images.add_icon} alt="icon add" />
                            Tạo bonsai
                        </p>
                    </div>
                </div>
                
            </div>
            {
                (isShowCreate || isShowList) && <div className={cx("spacer")}></div>
            }
            {
                isShowList && <AdminGetListBonsai />
            }
            {
                isShowCreate && <AdminCreateBonsai setIsShowCreate={setIsShowCreate} />
            }
        </section>
    )
}

export default Bonsai;
