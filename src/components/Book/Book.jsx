import classNames from "classnames/bind";
import styles from "./Book.module.scss";

const Book = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx("book")}>
            <div className={cx("container")}>
                <div className={cx("book__inner")}>
                    <h3 className={cx("book__title")}>Một số sách hay về bonsai</h3>
                    <div className={cx("book__list")}>
                        <div className={cx("book__item")}>
                            <div className={cx("book__item-left")}>
                                <img className={cx("book__item-img")} src="https://m.media-amazon.com/images/I/71smXy021HL._SY466_.jpg" alt="" />
                                <div className={cx("book__item-author")}>
                                    <p>
                                        <span>Tác giả:</span> Peter Chan
                                    </p>
                                    <p>
                                        <span>Năm xuất bản:</span> 6/5/2014
                                    </p>
                                </div>
                            </div>
                            <div className={cx("book__item-right")}>
                                <h4 className={cx("book__item-name")}>Bonsai: The Art of Growing and Keeping Miniature Trees</h4>
                                <p className={cx("book__item-price")}>Giá: $11.99</p>
                                <div className={cx("book__item-info")}>
                                    <p className={cx("book__item-page")}><span>Số trang:</span> 176 trang</p>
                                    <p className={cx("book__item-language")}><span>Ngôn ngữ:</span> English</p>
                                </div>
                                <div className={cx("book__item-content")}>
                                    <ul className={cx("book__item-ul")}><span>Nội dung:</span> Cây cảnh, được viết bởi chuyên gia bonsai nổi tiếng thế giới Peter Chan, là bản tóm tắt cần thiết cho bất kỳ ai quan tâm đến việc thử bonsai lần đầu tiên hoặc thêm bonsai vào bộ sưu tập hiện có của họ, nêu chi tiết mọi thứ bạn cần biết về việc mua và duy trì một cây bonsai tuyệt vời , bao gồm:
                                        <li className={cx("book__item-li")}>Làm thế nào để chọn đúng cây cảnh cho bạn</li>
                                        <li className={cx("book__item-li")}>Công cụ và vật tư để đảm bảo triển vọng bonsai của bạn</li>
                                        <li className={cx("book__item-li")}>Làm thế nào để định hình cây cảnh của bạn thành các phong cách khác nhau</li>
                                        <li className={cx("book__item-li")}>Làm thế nào các chậu khác nhau ảnh hưởng đến sự phát triển của cây cảnh của bạn</li>
                                        <li className={cx("book__item-li")}>Và nhiều hơn nữa!</li>
                                    </ul>
                                    <p className={cx("book__item-desc")}>Với hàng trăm bức ảnh màu và hướng dẫn và giải thích dễ đọc về nhiều chủ đề khác nhau, Cây cảnh là cuốn sách duy nhất bạn cần để bắt đầu thành công và duy trì bộ sưu tập cây bonsai tuyệt đẹp của riêng bạn.</p>
                                </div>
                            </div>
                        </div>

                        <div className={cx("book__item")}>
                            <div className={cx("book__item-left")}>
                                <img className={cx("book__item-img")} src="https://m.media-amazon.com/images/I/71aLjgR5ngL._SY466_.jpg" alt="" />
                                <div className={cx("book__item-author")}>
                                    <p>
                                        <span>Tác giả:</span> Harry Tomlinson
                                    </p>
                                    <p>
                                        <span>Năm xuất bản:</span> 1/3/1990
                                    </p>
                                </div>
                            </div>
                            <div className={cx("book__item-right")}>
                                <h4 className={cx("book__item-name")}>
                                    The Complete Book of Bonsai: A Practical Guide to Its Art and Cultivation
                                </h4>
                                <p className={cx("book__item-price")}>Giá: $34.15</p>
                                <div className={cx("book__item-info")}>
                                    <p className={cx("book__item-page")}><span>Số trang:</span> 224 trang</p>
                                    <p className={cx("book__item-language")}><span>Ngôn ngữ:</span> English</p>
                                </div>
                                <div className={cx("book__item-content")}>
                                    <p className={cx("book__item-desc")}>Quyển sách tiết lộ mọi khía cạnh của nghệ thuật, với những ý tưởng truyền cảm hứng và lời khuyên thiết thực ở mỗi lượt. Cho dù bạn là người mới bắt đầu muốn trồng chỉ một hoặc hai cây, hoặc một người đam mê có kinh nghiệm muốn xây dựng toàn bộ bộ sưu tập, đó là công việc tham khảo thiết yếu.</p>
                                </div>
                            </div>
                        </div>

                        <div className={cx("book__item")}>
                            <div className={cx("book__item-left")}>
                                <img className={cx("book__item-img")} src="https://m.media-amazon.com/images/I/61bsmdrXp-L._SY466_.jpg" alt="" />
                                <div className={cx("book__item-author")}>
                                    <p>
                                        <span>Tác giả:</span> Christian Pessey & Remy Samson
                                    </p>
                                    <p>
                                        <span>Năm xuất bản:</span> 1/6/1993
                                    </p>
                                </div>
                            </div>
                            <div className={cx("book__item-right")}>
                                <h4 className={cx("book__item-name")}>
                                    Bonsai Basics: A Step-By-Step Guide To Growing, Training & General Care
                                </h4>
                                <p className={cx("book__item-price")}>Giá: $9.34</p>
                                <div className={cx("book__item-info")}>
                                    <p className={cx("book__item-page")}><span>Số trang:</span> 120 trang</p>
                                    <p className={cx("book__item-language")}><span>Ngôn ngữ:</span> English</p>
                                </div>
                                <div className={cx("book__item-content")}>
                                    <p className={cx("book__item-desc")}>Hướng dẫn đơn giản này dành cho người trồng cây cảnh lần đầu, với các hướng dẫn dễ dàng và hơn 200 bức ảnh và hình vẽ đủ màu, bao gồm việc chọn một mẫu vật cứng; các yếu tố cần thiết của cắt tỉa, nối dây và lão hóa; và giữ cho cây cảnh của bạn khỏe mạnh. Tìm hiểu nhiều phong cách tạo hình cây cảnh, các dạng cây quan trọng, các nhóm rừng và nhiều hơn nữa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book
