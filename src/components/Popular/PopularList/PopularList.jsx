/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./PopularList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { getBonsais } from "../../../redux/bonsai/bonsaiSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import Aos from "aos";

const PopularList = () => {
  const cx = classNames.bind(styles);
  const { bonsais } = useSelector(state => state.bonsai.bonsais);
  const bonsaiPopular = bonsais?.slice(0, 4);
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);
  const [idBonsai, setIdBonsai] = useState("");

  const fetchBonsais = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      await dispatch(getBonsais(accessToken));
    }
  };

  const handleAddToCart = (bonsai) => {
    dispatch(addToCart(bonsai))
  }

  useEffect(() => {
    Aos.init()
    fetchBonsais();
  }, [localStorage.getItem(ACCESS_TOKEN)]);

  return (
    <>
      <div className={cx("popular__list")}>
        {bonsaiPopular?.map((bonsai, index) => (
          <div key={index} className={cx("popular__item")} data-aos="fade-up" data-aos-duration="1000">
            <div className={cx("popular__item-wrap-img")}>
              <Link to={`/shopping/${bonsai._id}`}>
                <img className={cx("popular__item-img")} src={bonsai?.image.secure_url} alt="" />
              </Link>
              <FontAwesomeIcon
                onClick={() => {
                  setFavourite((prev) => !prev);
                  setIdBonsai(bonsai?._id);
                }}
                icon={faHeart}
                className={`${
                  idBonsai === bonsai._id && favourite ? styles.active : ""
                } ${styles.popular__heart}`}
              />
            </div>
            <p className={cx("popular__item-name")}>{bonsai?.name}</p>
            <p className={cx("popular__item-discount")}>
              Giảm 20% cho lần mua thứ 5 tại Shop Bonsai Vy Nguyễn{" "}
            </p>
            <p className={cx("popular__item-price")}>{bonsai?.price} VNĐ</p>
            <div className={cx("popular__item-wrap-btn")}>
              <Link to={`/shopping/${bonsai._id}`} className={cx("popular__item-btn--readmore")}>
                Đọc thêm
              </Link>
              <button onClick={() => handleAddToCart(bonsai)} className={cx("popular__item-btn--addtocart")}>
                Thêm 
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default PopularList;
