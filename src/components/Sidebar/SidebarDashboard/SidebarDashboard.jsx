import classNames from "classnames/bind";
import styles from "./SidebarDashboard.module.scss";
import { Link } from "react-router-dom";
import { images } from "../../images/index.js";
import { useState } from "react";

const SidebarDashboard = () => {
    const cx = classNames.bind(styles);
    const [active, setActive] = useState("");

    return (
        <section className={cx("sidebar")}>
            <div className={cx("sidebar__inner")}>
                <div className={cx("sidebar__content")}>
                    <div className={cx("sidebar__wrap-img")}>
                        <img className={cx("sidebar__img")} src={images.bonsai_icon} alt="icon food" />
                        <h3 className={cx("sidebar__title")}>Bonsai</h3>
                    </div>
                    <div className={cx("sidebar__action")}>
                        <Link onClick={() => setActive("bonsai-lists")} to="/admin-bonsai/lists" className={`${active === "bonsai-lists" ? styles.active : ""} ${styles.sidebar__actionLink}`}>
                        <img src={images.checklist_icon} alt="check list" />
                            Danh sách bonsai
                        </Link>
                        <Link onClick={() => setActive("bonsai-create")} to="/admin-bonsai/create" className={`${active === "bonsai-create" ? styles.active : ""} ${styles.sidebar__actionLink}`}>
                            <img src={images.add_icon} alt="icon add" />
                            Tạo bonsai
                        </Link>
                    </div>
                </div>
                <div className={cx("sidebar__spacer")}></div>
                <div className={cx("sidebar__content")}>
                    <div className={cx("sidebar__wrap-img")}>
                        <img className={cx("sidebar__img")} src={images.blog_icon} alt="icon blog" />
                        <h3 className={cx("sidebar__title")}>Blog</h3>
                    </div>
                    <div className={cx("sidebar__action")}>
                        <div className={cx("sidebar__action")}>
                            <Link onClick={() => setActive("blog-lists")} to="/admin-blog/lists" className={`${active === "blog-lists" ? styles.active : ""} ${styles.sidebar__actionLink}`}>
                                <img src={images.checklist_icon} alt="check list" />
                                Danh sách blog
                            </Link>
                            <Link onClick={() => setActive("blog-create")} to="/admin-blog/create" className={`${active === "blog-create" ? styles.active : ""} ${styles.sidebar__actionLink}`}>
                                <img src={images.add_icon} alt="icon add" />
                                Tạo blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SidebarDashboard;
