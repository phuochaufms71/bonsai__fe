/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./AdminCreateBonsai.module.scss";
import { useState } from "react";
import { ACCESS_TOKEN } from "../../../constants/index.js";
import { useDispatch } from "react-redux";
import { createBonsai } from "../../../redux/bonsai/bonsaiSlice.js";
import { images } from "../../../components/images/index.js";

const AdminCreateBonsai = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  const [bonsaiImage, setBonsaiImage] = useState('');
  const [bonsaiName, setBonsaiName] = useState('');
  const [bonsaiCode, setBonsaiCode] = useState('');
  const [bonsaiCategory, setBonsaiCategory] = useState('');
  const [bonsaiPrice, setBonsaiPrice] = useState('');
  const [bonsaiChieucao, setBonsaiChieucao] = useState('');
  const [bonsaiHoanhthan, setBonsaiHoanhthan] = useState('');
  const [bonsaiHoanhde, setBonsaiHoanhde] = useState('');
  const [bonsaiDescription, setBonsaiDescription] = useState('');
  
  const [isImage, setIsImage] = useState(false);

  const handleSubmitFormCreateBonsai = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(createBonsai({
      accessToken,
      newBonsai: {
        image: bonsaiImage,
        name: bonsaiName,
        code: bonsaiCode,
        category: bonsaiCategory,
        price: bonsaiPrice,
        chieuCao: bonsaiChieucao,
        hoanhThan: bonsaiHoanhthan,
        hoanhDe: bonsaiHoanhde,
        description: bonsaiDescription
      }
    }))
    setBonsaiImage(images.upload_img);
    setBonsaiName("");
    setBonsaiCode("");
    setBonsaiPrice("");
    setBonsaiCategory("");
    setBonsaiChieucao("");
    setBonsaiHoanhthan("");
    setBonsaiHoanhde("");
    setBonsaiDescription("")
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setBonsaiImage(reader.result)
      }
    } else {
      setBonsaiImage("")
    }
    setIsImage(true)
  }

  return (
    <div className={cx("create-bonsai")}>
        <h3 className={cx("create-bonsai__title")}>Tạo Bonsai</h3>
        <form onSubmit={handleSubmitFormCreateBonsai} className={cx("create-bonsai__form")}>
          <div className={cx("create-bonsai__form-block")}>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="namebonsai">Tên bonsai</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiName} onChange={(e) => setBonsaiName(e.target.value)} id="namebonsai"/>
            </div>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="codebonsai">Mã bonsai</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiCode} onChange={(e) => setBonsaiCode(e.target.value)} id="codebonsai"/>
            </div>
          </div>
          <div className={cx("create-bonsai__form-block")}>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="categorybonsai">Loại</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiCategory} onChange={(e) => setBonsaiCategory(e.target.value)} id="categorybonsai"/>
            </div>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="pricebonsai">Giá</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiPrice} onChange={(e) => setBonsaiPrice(e.target.value)} id="pricebonsai"/>
            </div>
          </div>
          <div className={cx("create-bonsai__form-block")}>
            <div className={cx("create-bonsai__form-group")}>
                <label htmlFor="image" className={cx("create-bonsai__label")}>
                  <div className={cx("create-bonsai__wrap-img")}>
                    <img className={cx("create-bonsai__img")} src={isImage ? bonsaiImage : images.upload_img} alt="" />
                  </div>
                
                  <input id="image" className={cx("create-bonsai__input")} type="file" onChange={handleChangeImage} hidden/>
                </label>
            </div>
          </div>
          <div className={cx("create-bonsai__form-block")}>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="chieucaobonsai">Chiều cao</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiChieucao} onChange={(e) => setBonsaiChieucao(e.target.value)} id="chieucaobonsai"/>
            </div>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="hoanhthanbonsai">Hoành thân</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiHoanhthan} onChange={(e) => setBonsaiHoanhthan(e.target.value)} id="hoanhthanbonsai"/>
            </div>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="hoanhdebonsai">Hoành đế</label>
              <input className={cx("create-bonsai__input")} type="text" value={bonsaiHoanhde} onChange={(e) => setBonsaiHoanhde(e.target.value)} id="hoanhdebonsai"/>
            </div>
          </div>
          <div className={cx("create-bonsai__form-block")}>
            <div className={cx("create-bonsai__form-group")}>
              <label className={cx("create-bonsai__label")} htmlFor="descbonsai">Mô tả</label>
              <textarea rows={6} className={cx("create-bonsai__textarea")} value={bonsaiDescription} onChange={(e) => setBonsaiDescription(e.target.value)} id="descbonsai"/>
            </div>
          </div>
          <div className={cx("create-bonsai__footer")}>
            <p className={cx("create-bonsai__note")}><span>Chú ý:</span> Điền giá trị vào các trường. Sau đó, nhấn vào nút "Tạo"</p>
            <div className={cx("create-bonsai__wrap-btn")}>
              <button className={cx("create-bonsai__btn--cancel")}>Hủy</button>
              <button type="submit" className={cx("create-bonsai__btn--create")}>Tạo</button>
            </div>
          </div>
        </form>
    </div>
  )
};

export default AdminCreateBonsai;
