import classNames from "classnames/bind";
import styles from "./BookTable.module.scss";
import { images } from "../../../components/images";

const BookTable = () => {
    const cx = classNames.bind(styles);
    return (
        <section className={cx("book-table")}>
            <div className={cx("container")}>
                <div className={cx("book-table__inner")}>
                    <article className={cx("book-table__intro")}>
                        <div className={cx("book-table__intro-left")}>
                            <h3 className={cx("book-table__intro-title")}>Eupoean Cuisine World Tastes</h3>
                            <p className={cx("book-table__intro-sub-title")}>Modern approach to classic recipes</p>
                            <p className={cx("book-table__intro-desc")}>Eveniet voluptatem, ipsam modi esse adipisci nisi voluptatum quia aut! Accusantium tempore sit molestiae sed deleniti ex ab odit dicta fugit dignissimos.
                            </p>
                        </div>
                        <div className={cx("book-table__intro-right")}>
                            <img className={cx("book-table__intro-img")} src={images.book_table_intro} alt="" />
                        </div>
                    </article>

                    <article className={cx("book-table__body")}>
                        <h3 className={cx("book-table__body-title")}>With a wide range of wold cuisines to choose from, we guarantee you a sumptous feast experience in our restairant.</h3>
                        <div className={cx("book-table__body-content")}>
                            <p className={cx("book-table__body-desc")}>Possimus numquam rerum totam, doloremque ipsam, itaque ducimus ratione harum aspernatur deleniti ut illum reiciendis molestias assumenda libero laborum unde quod nisi.</p>
                            <p className={cx("book-table__body-desc")}>Amet ducimus recusandae maxime aspernatur numquam iusto voluptatem deserunt nemo, voluptate cumque ipsum dicta vero nesciunt ullam sunt culpa rem consectetur hic.</p>
                        </div>
                        <div className={cx("book-table__body-wrap-img")}>
                            <img className={cx("book-table__body-img")} src={images.bg_book_table} alt="" />
                        </div>
                    </article>

                    <article className={cx("book-table__book")}>
                        <form className={cx("book-table__form")}>
                            <h3 className={cx("book-table__form-title")}>Book your Table</h3>
                            <div className={cx("book-table__form-gr")}>
                                <label htmlFor="">Phone</label>
                                <input type="text" />
                            </div>
                            <div className={cx("book-table__form-gr")}>
                                <label htmlFor="">Full Name</label>
                                <input type="text" />
                            </div>
                            <div className={cx("book-table__form-gr")}>
                                <label htmlFor="">Date</label>
                                <input type="date" />
                            </div>
                            <div className={cx("book-table__form-gr")}>
                                <label htmlFor="">Message</label>
                                <textarea rows={4} name="" id=""></textarea>
                            </div>
                            <button className={cx("book-table__form-btn")}>Submit</button>
                        </form>
                    </article>

                    <article className={cx("book-table__more")}>
                        <h3 className={cx("book-table__more-title")}>Food more simple ways to manage your sugar cravings, according to a nutritionist</h3>
                        <p className={cx("book-table__more-desc")}>Quo soluta autem nobis eum, laborum reiciendis fuga error aut odit saepe id odio nostrum quas corporis aliquam veritatis iusto et blanditiis.</p>
                        <div className={cx("book-table__more-wrap-img")}>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_1} alt="" />
                            </div>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_2} alt="" />
                            </div>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_3} alt="" />
                            </div>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_4} alt="" />
                            </div>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_5} alt="" />
                            </div>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_6} alt="" />
                            </div>
                            <div className={cx("book-table__more-img")}>
                                <img src={images.img_7} alt="" />
                            </div>
                        </div>
                    </article>

                    <article className={cx("book-table__info-us")}>
                        <div className={cx("book-table__info-us-wrap")}>
                            <div className={cx("book-table__info-us-list")}>
                                <div className={cx("book-table__info-us-item")}>
                                    <h3 className={cx("book-table__info-us-title")}>Address Us</h3>
                                    <p className={cx("book-table__info-us-desc")}>Long Thoi, Cho Lach, Ben Tre</p>
                                </div>
                                <div className={cx("book-table__info-us-item")}>
                                    <h3 className={cx("book-table__info-us-title")}>Email Us</h3>
                                    <p className={cx("book-table__info-us-desc")}>phuochaubmw@gmail.com</p>
                                </div>
                            </div>
                            <div className={cx("book-table__info-us-list")}>
                                <div className={cx("book-table__info-us-item")}>
                                    <h3 className={cx("book-table__info-us-title")}>Opening Hours Us</h3>
                                    <p className={cx("book-table__info-us-desc")}>Monday - Saturday</p>
                                    <p className={cx("book-table__info-us-desc")}>8:00 AM - 23:00 PM</p>
                                </div>
                                <div className={cx("book-table__info-us-item")}>
                                    <h3 className={cx("book-table__info-us-title")}>Phone Us</h3>
                                    <p className={cx("book-table__info-us-desc")}>(+84)-364-500-846</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default BookTable;