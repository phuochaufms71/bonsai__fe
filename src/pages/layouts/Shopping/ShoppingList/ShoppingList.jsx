/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ShoppingList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../redux/cart/cartSlice.js";
import 'react-toastify/dist/ReactToastify.css';
import { addFavouriteBonsai } from "../../../../redux/bonsai/favouriteBonsaiSlice.js";
import { ToastContainer } from "react-toastify";
import { getBonsais } from "../../../../redux/bonsai/bonsaiSlice.js";
import formatNumberWithSeparator from "../../../../constants/index.js";


const ShoppingList = ({category}) => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const { bonsais } = useSelector(state => state.bonsai.bonsais);
    const [favourite, setFavourite] = useState(false);
    const [idBonsai, setIdBonsai] = useState('');
    const handleAddToCart = (bonsai) => {
        dispatch(addToCart(bonsai))
    }

    const handleAddFavouriteBonsai = (bonsai) => {
        dispatch(addFavouriteBonsai(bonsai))
    }

    const fetchBonsais = async() => {
        await dispatch(getBonsais())
    }

    useEffect(() => {
        fetchBonsais()
    }, [])

    return (
        <>
            <div className={cx("shopping__list")}>
                {
                    bonsais?.map((bonsai, index) => {
                        if (category === "tất cả" || bonsai.category === category) {
                            return (
                                    <div key={index} className={cx("shopping__item")}>
                                        <div className={cx("shopping__item-wrap-img")}>
                                            <Link to={`/shopping/${bonsai._id}`}>
                                                <img className={cx("shopping__item-img")} src={bonsai?.image?.secure_url} alt="" />
                                            </Link>
                                            <FontAwesomeIcon onClick={() => {setFavourite(true); setIdBonsai(bonsai?._id); handleAddFavouriteBonsai(bonsai)}} icon={faHeart} className={`${idBonsai === bonsai._id && favourite ? styles.active : "" } ${styles.shopping__heart}`} />
                                        </div>
                                        <p className={cx("shopping__item-name")}>{bonsai?.name}</p>
                                        <p className={cx("shopping__item-code")}>Mã số: <span>{bonsai?.code}</span></p>
                                        <p className={cx("shopping__item-discount")}>Giảm 5% cho lần mua thứ 5 tại Shop Bonsai Vy Nguyễn </p>
                                        <p className={cx("shopping__item-price")}>{formatNumberWithSeparator((bonsai?.price), " ")} VNĐ</p>
                                        <div className={cx("shopping__item-wrap-btn")}>
                                            <Link to={`${bonsai._id}`} className={cx("shopping__item-btn--readmore")}>Đọc thêm</Link>
                                            <div>
                                                <button onClick={() => handleAddToCart(bonsai)} className={cx("shopping__item-btn--addtocart")}>
                                                    Thêm 
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            )
                        } 
                    })
                }
            </div>

            <ToastContainer />
        </>
    )
}

export default ShoppingList;