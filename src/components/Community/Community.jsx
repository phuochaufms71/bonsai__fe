import classNames from "classnames/bind";
import styles from "./Community.module.scss";

const Community = () => {
    const cx = classNames.bind(styles);

    return (
        <div className={cx("community")}>
            <div className={cx("container")}>
                <div className={cx("community__inner")}>
                    <h3 className={cx("community__title")}>Diễn đàn & cộng đồng</h3>
                    <div className={cx("community__list")}>
                        <div className={cx("community__item")}>
                            <div className={cx("community__item-name")}>
                                <span>Tên cộng đồng: </span>
                                <p>Bonsai Nut</p>
                            </div>
                            <p className={cx("community__item-link")}>
                                <span>Link:</span>
                                <a href="https://www.bonsainut.com" target="_blank" rel="noopener"> https://www.bonsainut.com</a>
                            </p> 
                            <p className={cx("community__item-content")}>Diễn đàn nơi các thành viên chia sẻ kinh nghiệm, hỏi đáp và trao đổi về bonsai.</p>
                        </div>
                        <div className={cx("community__item")}>
                            <div className={cx("community__item-name")}>
                                <span>Tên cộng đồng: </span>
                                <p>Reddit - r/Bonsai</p>
                            </div>
                            <p className={cx("community__item-link")}>
                                <span>Link:</span>
                                <a href="https://www.reddit.com/r/Bonsai" target="_blank" rel="noopener"> https://www.reddit.com/r/Bonsai</a>
                            </p>
                            <p className={cx("community__item-content")}>Cộng đồng trên Reddit nơi người dùng thảo luận, chia sẻ hình ảnh và hỏi ý kiến về bonsai.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;

