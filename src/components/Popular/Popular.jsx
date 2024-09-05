/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Popular.module.scss";
import PopularList from "./PopularList/PopularList";
import { useEffect } from "react";
import Aos from "aos";

const Popular = () => {
    const cx = classNames.bind(styles);

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section className={cx("popular")}>
            <div className={cx("container")}>
                <div className={cx("popular__inner")}>
                    <h3 className={cx("popular__title")} data-aos="fade-up" data-aos-duration="1000">Bonsai phổ biến nhất</h3>
                    <p className={cx("popular__desc")} data-aos="fade-up" data-aos-duration="1000">Liệt kê tất cả Bonsai phổ biến nhất cho bạn chọn lựa dễ dàng theo sở thích và phong cách của bạn.</p>
                    <PopularList />
                </div>
            </div>
        </section>

    )
}

export default Popular;
