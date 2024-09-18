/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../../../redux/message/messageSlice";

import Aos from "aos";
import { ACCESS_TOKEN } from "../../../constants";

const Contact = () => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState("Gửi");
    const { user } = useSelector(state => state.auth);
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    })
    
    const handleSubmitMessage = async (e) => {
      e.preventDefault();
      setSubmit("Đang gửi...");

      dispatch(createMessage({
        accessToken,
        newMessage: { ...formData, avatar: user?.avatar}
      }))
      setSubmit("Gửi")
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    }

    useEffect(() => {
      Aos.init()
    }, [])
  return (
    <section className={cx("contact")}>
      <div className={cx("container")}>
        <div className={cx("contact__inner")}>
          <h2 className={cx("contact__title")}>Liên Hệ</h2>
          <p className={cx("contact__sub-title")} data-aos="fade-up" data-aos-duration="1000">Chúng tôi sẵn sàng hỗ trợ quý khách</p>
          <p className={cx("contact__desc")} data-aos="fade-up" data-aos-duration="1000">Nếu quý khách có bất kỳ câu hỏi nào về sản phẩm, dịch vụ, hoặc cần tư vấn, đừng ngần ngại liên hệ với chúng tôi qua các kênh dưới đây:</p>
          <div className={cx("contact__container")}>
            <div className={cx("contact__group")} data-aos="fade-up" data-aos-duration="1000">
              <i className="fa-solid fa-envelope"></i>
              <h3 className={cx("contact__group-field")}>Email</h3>
              <p className={cx("contact__group-desc")}>Có thể gửi mail cho chúng tôi</p>
              <a href="mailto: phuochaubmw@gmail.com" className={cx("contact__group-content")}>phuochaubmw@gmail.com</a>
            </div>
            <div className={cx("contact__group")} data-aos="fade-up" data-aos-duration="1000">
              <i className="fa-solid fa-location-dot"></i>
              <h3 className={cx("contact__group-field")}>Địa chỉ</h3>
              <p className={cx("contact__group-desc")}>Luôn chào đón quý khách hàng ghé shop bonsai Vy Nguyễn</p>
              <p className={cx("contact__group-content")}>Long Huê, Chợ Lách, Bến Tre</p>
            </div>
            <div className={cx("contact__group")} data-aos="fade-up" data-aos-duration="1000">
              <i className="fa-solid fa-phone"></i>
              <h3 className={cx("contact__group-field")}>Số điện thoại</h3>
              <p className={cx("contact__group-desc")}>Chúng tôi sẽ giải đáp thắc mắc cho quý khách thông qua cuộc gọi</p>
              <a href="tel: +84-946-168-499" className={cx("contact__group-content")}>0946 168 499</a>
            </div>
          </div>
          <div className={cx("contact__spacer")} data-aos="fade-up" data-aos-duration="1000"></div>
  
          <p className={cx("contact__sub-title")} data-aos="fade-up" data-aos-duration="1000">Gửi vấn đề cần giải quyết</p>
          <p className={cx("contact__desc")} data-aos="fade-up" data-aos-duration="1000">Nếu quý khách có vấn đề gì cần giúp đỡ thì có thể điền form này, chúng tồi sẽ liên hệ với quý khách qua email.</p>
          {
            user?.email ? <form className={cx("contact__form")} data-aos="fade-up" data-aos-duration="1000">
              <div className={cx("contact__form-group")}>
                <label className={cx("contact__form-label")}>Họ tên</label>
                <input type="text" className={cx("contact__form-input")} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className={cx("contact__form-group")}>
                <label className={cx("contact__form-label")}>Email</label>
                <input type="email" className={cx("contact__form-input")} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className={cx("contact__form-group")}>
                <label className={cx("contact__form-label")}>Vấn đề</label>
                <textarea rows={4} className={cx("contact__form-input")} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
              </div>
              <button onClick={handleSubmitMessage} className={cx("contact__form-submit")}>{submit}</button>
            </form> : <div className={cx("contact__notify")}>Chú ý: Quý khách vui lòng đăng nhập để có thể gửi vấn đề của quý khách cho chúng tôi.</div>
          }
          <div className={cx("contact__map")} data-aos="fade-up" data-aos-duration="1000">
            <h3 className={cx("contact__map-title")}>Địa chỉ của chúng tôi</h3>
            <iframe className={cx("contact__map-iframe")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62821.74992381074!2d106.1419126283518!3d10.232572410432699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa040f4b227b7%3A0x109211722711d4cb!2zTG9uZyBUaOG7m2ksIENo4bujIEzDoWNoLCBC4bq_biBUcmUsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1725708691923!5m2!1svi!2s" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
