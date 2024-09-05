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
  const [price, setPrice] = useState(selectedBonsai?.price || "");
  const [image, setImage] = useState(selectedBonsai?.image.secure_url || "");
  const [rate, setRate] = useState(selectedBonsai?.rate || "");
  const [description, setDescription] = useState(selectedBonsai?.description || "");

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
        rate,
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
    setRate("")
    setDescription("")
    setShowAction(false)
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Update A Food</h3>
        <form onSubmit={handleSubmitFormUpdateBonsai} className={cx("create-food__form")}>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="nameFood">Name</label>
              <input className={cx("create-food__input")} type="text" value={name} onChange={(e) => setName(e.target.value)} id="nameFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="categoryFood">Category</label>
              <input className={cx("create-food__input")} type="text" value={category} onChange={(e) => setCategory(e.target.value)} id="categoryFood"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="priceFood">Price</label>
              <input className={cx("create-food__input")} type="text" value={price} onChange={(e) => setPrice(e.target.value)} id="priceFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
          <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")}>
                <img className={cx("create-food__img")} src={image} alt="" />
                <input id="image" className={cx("create-food__input")} type="file" onChange={handleChangeImage} hidden/>
              </label>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="rateFood">Rate</label>
              <input className={cx("create-food__input")} type="text" value={rate} onChange={(e) => setRate(e.target.value)} id="rateFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="descFood">Description</label>
              <textarea rows={6} className={cx("create-food__textarea")} value={description} onChange={(e) => setDescription(e.target.value)} id="descFood"/>
            </div>
          </div>
          <div className={cx("create-food__footer")}>
            <p className={cx("create-food__note")}><span>Note:</span> Fill in the detailed name of your product. Then click the create button</p>
            <div className={cx("create-food__wrap-btn")}>
              <button onClick={() => setIsUpdateBonsai(false)}  className={cx("create-food__btn--cancel")}>Cancel</button>
              <button type="submit" className={cx("create-food__btn--create")}>Update</button>
            </div>
          </div>
        </form>
    </div>
  )
};

export default AdminUpdateFood;
