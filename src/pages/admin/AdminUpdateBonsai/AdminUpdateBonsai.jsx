/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./AdminUpdateBonsai.module.scss";
import { useState } from "react";
import { ACCESS_TOKEN } from "../../../constants/index.js";
import { useDispatch } from "react-redux";
import { getBonsais, updateBonsai } from "../../../redux/bonsai/bonsaiSlice.js";

const AdminUpdateFood = ({selectedBonsai, setIdSelectedBonsai, setIsUpdateBonsai, setShowAction}) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [name, setName] = useState(selectedBonsai?.name || "");
  const [category, setCategory] = useState( selectedBonsai?.category || "");
  const [code, setCode] = useState(selectedBonsai?.code || "");
  const [price, setPrice] = useState(selectedBonsai?.price || "");
  const [image, setImage] = useState(selectedBonsai?.image.secure_url || "");
  const [description, setDescription] = useState(selectedBonsai?.description || "");
  const [chieuCao, setChieuCao] = useState(selectedBonsai?.chieuCao || "");
  const [hoanhDe, setHoanhDe] = useState(selectedBonsai?.hoanhDe || "");
  const [hoanhThan, setHoanhThan] = useState(selectedBonsai?.hoanhThan || "");

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
      }
    } else {
      setImage("")
    }
  }

  const handleSubmitFormUpdateBonsai = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(updateBonsai({
      accessToken,
      id: selectedBonsai._id,
      updateData: {
        name,
        category,
        price,
        image,
        code,
        chieuCao,
        hoanhDe,
        hoanhThan,
        description
      }
    }))
    await dispatch(getBonsais(accessToken))
    setIdSelectedBonsai('');
    setIsUpdateBonsai(false);
    setName("")
    setCategory("")
    setImage("")
    setPrice("")
    setDescription("")
    setChieuCao("")
    setHoanhDe("")
    setCode("")
    setHoanhThan("")
    setShowAction(false)
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Chỉnh sửa bonsai</h3>
        <form onSubmit={handleSubmitFormUpdateBonsai} className={cx("create-food__form")}>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="name">Tên bonsai</label>
              <input className={cx("create-food__input")} type="text" value={name} onChange={(e) => setName(e.target.value)} id="name"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="code">Mã số</label>
              <input className={cx("create-food__input")} type="text" value={code} onChange={(e) => setCode(e.target.value)} id="code"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="category">Loại</label>
              <input className={cx("create-food__input")} type="text" value={category} onChange={(e) => setCategory(e.target.value)} id="category"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="price">Giá</label>
              <input className={cx("create-food__input")} type="text" value={price} onChange={(e) => setPrice(e.target.value)} id="price"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")}>
                <img className={cx("create-food__img")} src={image} alt="" />
                <input id="image" className={cx("create-food__input")} type="file" onChange={handleChangeImage} hidden/>
              </label>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="chieuCao">Chiều cao</label>
              <input className={cx("create-food__textarea")} value={chieuCao} onChange={(e) => setChieuCao(e.target.value)} id="chieuCao"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="hoanhThan">Hoành thân</label>
              <input className={cx("create-food__textarea")} value={hoanhThan} onChange={(e) => setHoanhThan(e.target.value)} id="hoanhThan"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="hoanhDe">Hoành đế</label>
              <input className={cx("create-food__textarea")} value={hoanhDe} onChange={(e) => setHoanhDe(e.target.value)} id="hoanhDe"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="descFood">Mô tả</label>
              <textarea rows={6} className={cx("create-food__textarea")} value={description} onChange={(e) => setDescription(e.target.value)} id="descFood"/>
            </div>
          </div>
          <div className={cx("create-food__footer")}>
            <p className={cx("create-food__note")}><span>Chú ý:</span> Điền đầy đủ thông tin bonsai. Sau đó, click vào nút chỉnh sửa</p>
            <div className={cx("create-food__wrap-btn")}>
              <button onClick={() => {setIsUpdateBonsai(false); setShowAction(false)}}  className={cx("create-food__btn--cancel")}>Hủy</button>
              <button onClick={handleSubmitFormUpdateBonsai} className={cx("create-food__btn--create")}>Chỉnh sửa</button>
            </div>
          </div>
        </form>
    </div>
  )
};

export default AdminUpdateFood;
