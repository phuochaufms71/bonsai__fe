import classNames from "classnames/bind"
import styles from "./About.module.scss";
import { images } from "../../../components/images";

const About = () => {
    const cx = classNames.bind(styles);
  return (
    <section className={cx("about")}>
        <div className={cx("container")}>
            <div className={cx("about__inner")}>
                <div className={cx("about__body")}>
                    <div className={cx("about__body-left")}>
                        <div className={cx("about__body-wrap-img")}>
                            <img className={cx("about__body-img")} src={images.img_about_1} alt="" />
                            <img className={cx("about__body-img")} src={images.img_about_2} alt="" />
                        </div>
                        <div className={cx("about__body-wrap-img")}><img className={cx("about__body-img")} src={images.img_about_3} alt="" /></div>
                    </div>
                    <div className={cx("about__body-right")}>
                        <h3 className={cx("about__body-title")}>
                            Giới thiệu <span>Bonsai</span>
                        </h3>
                        <p className={cx("about__body-desc")}>
                        Bonsai có nguồn gốc từ Nhật Bản, nhưng nghệ thuật này đã lan rộng ra khắp thế giới. Bonsai không chỉ đơn thuần là việc trồng cây trong chậu, mà còn là một hình thức nghệ thuật thể hiện sự sáng tạo và kiên nhẫn. Mỗi cây bonsai là một tác phẩm độc đáo, được tạo hình để phản ánh vẻ đẹp tự nhiên.
                        </p>
                    </div>
                </div>

                <div className={cx("about__history")}>
                    <p className={cx("about__history--title")}>Lịch sử <span>Bonsai</span></p>
                    <p className={cx("about__history--content")}>
                    Nghệ thuật bonsai bắt nguồn từ hàng trăm năm trước, với những ảnh hưởng từ văn hóa Trung Quốc. Từ những cây cảnh nhỏ bé, bonsai đã trở thành một phần quan trọng trong văn hóa Nhật Bản, mang lại cảm giác bình yên và thư giãn cho người thưởng thức. Qua nhiều thế kỷ thì đến nay, bonsai đã trở thành một phần không thể thiếu trong đời sống của nhiều người. Nó không chỉ là một thú chơi mà còn là một hình thức thư giãn và thiền định. Các nghệ nhân bonsai hiện đại không ngừng sáng tạo và thử nghiệm, mang đến những tác phẩm độc đáo và ấn tượng.
                    </p>
                </div>

                <div className={cx("about__choose")}>
                    <h3 className={cx("about__choose-title")}>Tại sao lại chọn Bonsai <span>Vy Nguyễn</span></h3>
                    <p className={cx("about__choose-desc")}>
                        Chúng tôi cam kết mang đến cho quý khách những sản phẩm bonsai chất lượng cao nhất và những dịch vụ tốt nhất. Chúng tôi luôn sẵn sàng chia sẻ kiến thức và giúp quý khách trở thành một nghệ nhân bonsai theo cách riêng mà quý khách thích.
                    </p>
                    <div className={cx("about__choose-list")}>
                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.dish_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Chất lượng sản phẩm
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Chúng tôi cung cấp những cây bonsai được chọn lọc kỹ lưỡng từ những nguồn uy tín, đảm bảo chất lượng và sức khỏe tốt nhất cho từng cây. Mỗi sản phẩm đều được chăm sóc tỉ mỉ để mang lại vẻ đẹp hoàn hảo.
                            </p>
                        </div>
                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.fresh_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Tư vấn tận tâm
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Khách hàng là ưu tiên hàng đầu của chúng tôi. Chúng tôi cam kết mang lại dịch vụ tận tâm, sẵn sàng lắng nghe và đáp ứng nhu cầu của quý khách. Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng để giúp quý khách.
                            </p>
                        </div>
                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.best_price_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Giá cả cạnh tranh
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Chúng tôi cung cấp những sản phẩm bonsai chất lượng với mức giá hợp lý. Cam kết mang lại giá trị tốt nhất cho khách hàng mà không làm giảm chất lượng.
                            </p>
                        </div>

                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.guarantee_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Cam kết bảo hành
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Chúng tôi tự tin vào chất lượng sản phẩm và dịch vụ của mình, vì vậy chúng tôi cung cấp chính sách bảo hành hợp lý cho các sản phẩm bonsai.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx("about__style")}>
                    <h4 className={cx("about__style-title")}>Một số <span>thế bonsai</span> được ưu chuộng ở Việt Nam</h4>
                    <div className={cx("about__style-list")}>
                        <div className={cx("about__style-item")}>
                            <img className={cx("about__style-item--img")} src={images.style__long_dan_phuong_vu} alt="" />
                            <p className={cx("about__style-item--name")}>Thế Long Đàn Phượng Vũ</p>
                        </div>
                        <div className={cx("about__style-item")}>
                            <img className={cx("about__style-item--img")} src={images.style__quan_thu_tam_son} alt="" />
                            <p className={cx("about__style-item--name")}>Thế Quần Thụ Tam Sơn</p>
                        </div>
                        <div className={cx("about__style-item")}>
                            <img className={cx("about__style-item--img")} src={images.style__luong_long_tranh_chau} alt="" />
                            <p className={cx("about__style-item--name")}>Thế Lưỡng Long Tranh Châu</p>
                        </div>
                        <div className={cx("about__style-item")}>
                            <img className={cx("about__style-item--img")} src={images.style__long_ban_ho_phuc} alt="" />
                            <p className={cx("about__style-item--name")}>Thế Long Bàn Hổ Phục</p>
                        </div>
                        <div className={cx("about__style-item")}>
                            <img className={cx("about__style-item--img")} src={images.style__trung_binh_ngay} alt="" />
                            <p className={cx("about__style-item--name")}>Thế Trung Bình Ngay</p>
                        </div>
                        <div className={cx("about__style-item")}>
                            <img className={cx("about__style-item--img")} src={images.style__trung_binh_cong} alt="" />
                            <p className={cx("about__style-item--name")}>Thế Trung Bình Cong</p>
                        </div>
                    </div>
                </div>

                <div className={cx("about__deliver")}>
                    <h3 className={cx("about__deliver-title")}>
                        Liên hệ với<span> Chúng tôi</span>
                    </h3>
                    <p className={cx("about__deliver-desc")}>
                        Nếu quý khách muốn tìm hiểu thêm về nghệ thuật bonsai hoặc cần hỗ trợ, hãy liên hệ với chúng tôi. Chúng tôi rất vui được đồng hành cùng quý khách trên hành trình khám phá thế giới bonsai.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;