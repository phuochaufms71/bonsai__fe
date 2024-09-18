import classNames from "classnames/bind";
import styles from "./Web.module.scss";

const Web = () => {
    const cx = classNames.bind(styles);

    return (
        <div className={cx("web")}>
            <div className={cx("container")}>
                <div className={cx("web__inner")}>
                    <h3 className={cx("web__title")}>Trang web về bonsai</h3>
                    <div className={cx("web__list")}>
                        <div className={cx("web__item")}>
                            <div className={cx("web__item-name")}>
                                <span>Tên website: </span>
                                <p>Bonsai Empire</p>
                            </div>
                            <p className={cx("web__item-link")}>
                                <span>Link:</span>
                                <a href="https://www.bonsaiempire.com" target="_blank" rel="noopener"> https://www.bonsaiempire.com</a>
                            </p> 
                            <p className={cx("web__item-content")}>Cung cấp nhiều bài viết, video hướng dẫn và khóa học trực tuyến về bonsai.</p>
                        </div>
                        <div className={cx("web__item")}>
                            <div className={cx("web__item-name")}>
                                <span>Tên website: </span>
                                <p>Bonsai Outlet</p>
                            </div>
                            <p className={cx("web__item-link")}>
                                <span>Link:</span>
                                <a href="https://www.bonsaioutlet.com" target="_blank" rel="noopener"> https://www.bonsaioutlet.com</a>
                            </p>
                            <p className={cx("web__item-content")}>Tài nguyên tốt cho việc mua sắm, cũng như các bài viết hướng dẫn chăm sóc bonsai.</p>
                        </div>
                        <div className={cx("web__item")}>
                            <div className={cx("web__item-name")}>
                                <span>Tên website: </span>
                                <p>American Bonsai Society</p>
                            </div>
                            <p className={cx("web__item-link")}>
                                <span>Link:</span>
                                <a href="https://www.absbonsai.org" target="_blank" rel="noopener"> https://www.absbonsai.org</a>
                            </p>
                            <p className={cx("web__item-content")}>Cung cấp thông tin, sự kiện, và tài nguyên cho những người yêu thích bonsai tại Mỹ và toàn cầu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Web;
