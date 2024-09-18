import classNames from "classnames/bind";
import styles from "./Document.module.scss";
import { images } from "../../../../components/images";
import { useState } from "react";
import Book from "../../../../components/Book/Book";
import Web from "../../../../components/Web/Web";
import Community from "../../../../components/Community/Community";
import Youtube from "../../../../components/Youtube/Youtube";

const Document = () => {
    const cx = classNames.bind(styles);
    const [doc, setDoc] = useState("");
    return (
        <div className={cx("document")}>
            <div className={cx("container")}>
                <div className={cx("document__inner")}>
                    <h3 className={cx("document__title")}>Tài liệu tham khảo về Bonsai</h3>
                    <div className={cx("document__list")}>
                        <div className={cx("document__item")} onClick={() => setDoc("book")}>
                            <img src={images.book} alt="" />
                            <p>Sách</p>
                        </div>
                        <div className={cx("document__item")} onClick={() => setDoc("web")}>
                            <img src={images.web} alt="" />
                            <p>Trang web</p>
                        </div>
                        <div className={cx("document__item")} onClick={() => setDoc("community")}>
                            <img src={images.community} alt="" />
                            <p>Diễn đàn & Cộng đồng</p>
                        </div>
                        <div className={cx("document__item")} onClick={() => setDoc("youtube")}>
                            <img src={images.youtube} alt="" />
                            <p>Video hướng dẫn</p>
                        </div>
                    </div>
                    <div className={cx("document__spacer")}></div>
                    {
                        doc === "book" && <Book />
                    }
                    {
                        doc === "web" && <Web />
                    }
                    {
                        doc === "community" && <Community />
                    }
                    {
                        doc === "youtube" && <Youtube />
                    }
                    <p className={cx("document__desc")}>Các tài liệu tham khảo trên cung cấp kiến thức cơ bản và nâng cao về bonsai, giúp admin hiểu rõ hơn về nghệ thuật và kỹ thuật chăm sóc cây. Hãy tham khảo để nâng cao kỹ năng và kiến thức của mình về bonsai!</p>
                </div>
            </div>
        </div>
    )
}

export default Document;
