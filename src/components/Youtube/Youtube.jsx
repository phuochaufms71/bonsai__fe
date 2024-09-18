import classNames from "classnames/bind";
import styles from "./Youtube.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faCircleInfo, faEarthAmerica, faGlobe } from "@fortawesome/free-solid-svg-icons";
import formatNumberWithSeparator from "../../constants";

const Youtube = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx("youtube")}>
            <div className={cx("container")}>
                <div className={cx("youtube__inner")}>
                    <h3 className={cx("youtube__title")}>Kênh Youtube</h3>
                    <div className={cx("youtube__list")}>
                        <div className={cx("youtube__item")}>
                            <div>
                                <div className={cx("youtube__item-wrap")}>
                                    <img className={cx("youtube__item-logo")} src="https://yt3.googleusercontent.com/ytc/AIdro_lMI5QUyizff3u7WHIpQWI0j6Kr-MBZWshvven8wRFWcQ=s160-c-k-c0x00ffffff-no-rj" alt="" />
                                    <h3 className={cx("youtube__item-name")}>
                                        Bonsai Mirai
                                    </h3>
                                </div>
                                <p className={cx("youtube__item-desc")}>
                                    Cung cấp nhiều video hướng dẫn chuyên sâu về kỹ thuật chăm sóc bonsai.
                                </p>
                                <div className={cx("youtube__item-info")}>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faEnvelope} />
                                        <span>info@bonsaimirai.com</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faGlobe} />
                                        <span>www.youtube.com/@BonsaiMirai</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faUser} />
                                        <span>80,5N người đăng ký</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faCirclePlay} />
                                        <span>210 video</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faChartLine} />
                                        <span>{formatNumberWithSeparator(9428833)} lượt xem</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faCircleInfo} />
                                        <span>Đã tham gia vào từ 17 thg 2, 2012</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faEarthAmerica} />
                                        <span>Hoa Kỳ</span>
                                    </p>
                                </div>
                            </div>
                            <iframe src="https://www.youtube.com/embed/YxO22Kk5dS0?autoplay=1&mute=1" title="Welcome to Bonsai Mirai" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <div className={cx("youtube__item")}>
                            <div>
                                <div className={cx("youtube__item-wrap")}>
                                    <img className={cx("youtube__item-logo")} src="https://yt3.googleusercontent.com/ytc/AIdro_lEm_tU2i6y6GbNH6MA-ukciZpv_jqAMzCHmjUNLPpypw=s160-c-k-c0x00ffffff-no-rj" alt="Bonsai Supply" />
                                    <h3 className={cx("youtube__item-name")}>
                                        We are The Bonsai Supply
                                    </h3>
                                </div>
                                <p className={cx("youtube__item-desc")}>
                                    Hướng dẫn từ cơ bản đến nâng cao về bonsai.
                                </p>
                                <div className={cx("youtube__item-info")}>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faEnvelope} />
                                        <span>info@thebonsaisupply.com</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faGlobe} />
                                        <span>www.youtube.com/@WeareTheBonsaiSupply</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faUser} />
                                        <span>62,9N người đăng ký</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faCirclePlay} />
                                        <span>345 video</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faChartLine} />
                                        <span>{formatNumberWithSeparator(7130335)} lượt xem</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faCircleInfo} />
                                        <span>Đã tham gia vào từ 8 thg 5, 2017</span>
                                    </p>
                                    <p className={cx("youtube__item-gr")}>
                                        <FontAwesomeIcon className={cx("youtube__item-icon")} icon={faEarthAmerica} />
                                        <span>Hoa Kỳ</span>
                                    </p>
                                </div>
                            </div>
                            <iframe width="942" height="530" src="https://www.youtube.com/embed/rbahRQeSATo?autoplay=1&mute=1" title="20+ years old Ilex | The Bonsai Supply Logo Tree |" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube;
