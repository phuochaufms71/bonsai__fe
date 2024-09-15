/* eslint-disable react/no-unescaped-entities */
import classnames from "classnames/bind";
import styles from "./Home.module.scss";
import "../../../components/scss/GlobalStyle.scss";
import { images } from "../../../components/images/index.js";
import Popular from "../../../components/Popular/Popular";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const Home = () => {
  const cx = classnames.bind(styles);

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section className={cx("home")}>
      {/* <Header /> */}
      <div className={cx("container")}>
        <div className={cx("home__inner")}>
          <div className={cx("home__content")}>
            <h2 className={cx("home__content--title")}>Chào mừng quý khách đến với Shop Bonsai <span className={cx("home__content--sub-title")}>Vy Nguyễn</span></h2>
            <p className={cx("home__content--desc")}>Bonsai không chỉ là một loại cây cảnh, mà còn là một nghệ thuật sống. Tại đây, quý khách sẽ tìm thấy những thông tin hữu ích về cách chăm sóc, tạo hình và duy trì cây bonsai.</p>
            <div className={cx("home__content-wrap-img")}>
              <img className={cx("home__content-img")} src={images.bonsai__home_2} alt="" />
            </div>
            <div className={cx("home__content--btn")}>
              <Link to="/about" className={cx("home__content--btn-order")}>Khám phá</Link>
              <Link to="/book" className={cx("home__content--btn-book")}>Đặt hàng</Link>
            </div>
          </div>

          {/* About */}
          <section className={cx("home__about")}>
            <div className={cx("home__about-left")} data-aos="fade-down-right">
              <img className={cx("home__about-img")} src={images.about__bonsai} alt="" />
            </div>
            <div className={cx("home__about-right")} data-aos="fade-down-left">
              <h3 className={cx("home__about-title")}>Giới thiệu <span className={cx("home__about-sub-title")}>Bonsai</span></h3>
              <p className={cx("home__about-desc")}>Bonsai có nguồn gốc từ Nhật Bản, nhưng nghệ thuật này đã lan rộng ra khắp thế giới. Bonsai không chỉ đơn thuần là việc trồng cây trong chậu, mà còn là một hình thức nghệ thuật thể hiện sự sáng tạo và kiên nhẫn. Mỗi cây bonsai là một tác phẩm độc đáo, được tạo hình để phản ánh vẻ đẹp tự nhiên.
              </p>
              <div className={cx("home__about-list")}>
                <div className={cx("home__about-item")}>
                  <img className={cx("home__about-item--check")} src={images.check_icon} alt="" />
                  <p className={cx("home__about-item--content")}>Thẩm Mỹ</p>
                </div>
                <div className={cx("home__about-item")}>
                  <img className={cx("home__about-item--check")} src={images.check_icon} alt="" />
                  <p className={cx("home__about-item--content")}>Thiền Định</p>
                </div>
                <div className={cx("home__about-item")}>
                  <img className={cx("home__about-item--check")} src={images.check_icon} alt="" />
                  <p className={cx("home__about-item--content")}>Giáo Dục</p>
                </div>
              </div>
              <Link to="/about" className={cx("home__about-btn--read")}>Đọc thêm</Link>
            </div>
          </section>

          {/* Delivery */}
          <section className={cx("home__delivery")}>
            <div className={cx("home__delivery-content")}>
              <h3 className={cx("home__delivery--title")} data-aos="fade-up" data-aos-duration="1000">Đặt hàng Online và <span>Giao hàng nhanh chóng</span></h3>
              <div className={cx("home__delivery-body")}>
                <div data-aos="fade-up" data-aos-duration="1000" className={cx("home__delivery-body--item")}>
                  <h3>Đặt hàng Online dễ dàng</h3>
                  <ol>
                    <li><span>1. Chọn sản pẩm: </span>Duyệt qua bộ sưu tập bonsai của chúng tôi và chọn sản phẩm quý khách muốn</li>
                    <li><span>2. Thêm vào giỏ hàng: </span>Nhấn nút "Thêm vào giỏ hàng" để lưu sản phẩm.</li>
                    <li><span>3. Điền thông tin giao hàng: </span>Cung cấp thông tin địa chỉ giao hàng và phương thức thanh toán.</li>
                    <li><span>4. Hoàn Tất Đơn Hàng: </span>Nhấn "Đặt hàng" để hoàn tất quá trình.</li>
                  </ol>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className={cx("home__delivery-body--item")}>
                  <h3>Giao hàng nhanh chóng</h3>
                  <p>Chúng tôi sẽ giao hàng nhanh chóng và an toàn. Sau khi quý khách đặt hàng, chúng tôi sẽ xử lý đơn hàng ngay lập tức và vận chuyển đến quý khách trong thời gian sớm nhất.</p>
                  <p><span>Thời gian giao hàng: </span>Phụ thuộc vào thời gian đặt hàng và khoảng cách địa lý của quý khách với chúng tôi, miền Nam tầm 1-2 ngày, miền Bắc tầm 3-4 ngày, miền Trung tầm 2-3 ngày sẽ nhận được hàng. </p>
                </div>
              </div>
            </div>
            <div className={cx("home__delivery-wrap-img")} data-aos="fade-up" data-aos-duration="2000">
              <img className={cx("home__delivery-img")} src={images.delivery_icon} alt="" />
            </div>
          </section>

          {/* Popular Food */}
          <Popular />

          {/* Feedback Customer*/}
          <section className={cx("feedback")}>
            <h2 className={cx("feedback__title")} data-aos="fade-up" data-aos-duration="1000">
                Phản hồi của <span>khách hàng</span>
            </h2>
            <p className={cx("feedback__desc")} data-aos="fade-up" data-aos-duration="1000">
             Chúng tôi luôn trân trọng ý kiến và phản hồi từ khách hàng. Dưới đây là một số phản hồi mà chúng tôi đã nhận được:
            </p>
            <div className={cx("feedback__list")}>
              <div className={cx("feedback__item")} data-aos="fade-up" data-aos-duration="1000">
                <p className={cx("feedback__item-desc")}>"Dịch vụ khách hàng rất chu đáo. Họ đã giúp tôi giải đáp mọi thắc mắc về cách chăm sóc bonsai. Tôi sẽ giới thiệu cho bạn bè!"</p>
                <p className={cx("feedback__item-name")}>Phạm Thị D</p>
              </div>
              <div className={cx("feedback__item")} data-aos="fade-up" data-aos-duration="1000">
                <p className={cx("feedback__item-desc")}>"Mình đã mua một cây bonsai từ cửa hàng và rất hài lòng với chất lượng. Cây khỏe mạnh và đẹp, dịch vụ giao hàng cũng rất nhanh chóng!"</p>
                <p className={cx("feedback__item-name")}>Nguyễn Văn A</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Home;