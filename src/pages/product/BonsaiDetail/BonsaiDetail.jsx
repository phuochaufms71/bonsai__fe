/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./BonsaiDetail.module.scss";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { getBonsaiDetail } from "../../../redux/bonsai/bonsaiSlice";
import { addToCart } from "../../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import Comment from "../../../components/Comment/Comment";
import formatNumberWithSeparator, { ACCESS_TOKEN } from "../../../constants";

const BonsaiDetail = () => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { id } = useParams();
    const bonsai = useSelector(state => state.bonsai.bonsai);
  
    const handleAddToCart = (bonsai) => {
      dispatch(addToCart(bonsai))
    }

    const fetchBonsaiDetail = async () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);
      if (accessToken && id) {
        dispatch(getBonsaiDetail({
          accessToken,
          id
        }))
      }
    }

    useEffect(() => {
      fetchBonsaiDetail()
    }, [localStorage.getItem(ACCESS_TOKEN), id])

    return Object.keys(bonsai).length !== 0 ? ( 
      <>
        <section className={cx('bonsai-detail')}>
          <div className={cx("container")}>
            <div className={cx("bonsai-detail__inner")}>
              <div className={cx("bonsai-detail__left")}>
                  <div className={cx("bonsai-detail__wrap-img")}>
                    <img className={cx("bonsai-detail__img")} src={bonsai?.image?.secure_url} alt="" />
                    <img className={cx("bonsai-detail__img")} src={bonsai?.image?.secure_url} alt="" />
                    <img className={cx("bonsai-detail__img")} src={bonsai?.image?.secure_url} alt="" />
                    <img className={cx("bonsai-detail__img")}src={bonsai?.image?.secure_url} alt="" />
                  </div>
                  <img className={cx("bonsai-detail__thomnail")} src={bonsai?.image?.secure_url} alt="" />
              </div>
              <div className={cx("bonsai-detail__right")}>
                <h2 className={cx("bonsai-detail__name")}>{bonsai?.name}</h2>
                <p className={cx("bonsai-detail__code")}>Mã số: <span>{bonsai?.code}</span></p>
                <p className={cx("bonsai-detail__price")}>Giá: {formatNumberWithSeparator(bonsai?.price)} VNĐ</p>
                {bonsai?.category === "khế" && <ul className={cx("bonsai-detail__parameter")}>
                  Thông số của Bonsai
                  <li><span>Chiều cao: </span>{bonsai?.chieuCao}</li>
                  <li><span>Hoành thân: </span>{bonsai?.hoanhThan}</li>
                  <li><span>Hoành đế: </span>{bonsai?.hoanhDe}</li>
                </ul>}
                <div>
                  <button onClick={() => handleAddToCart(bonsai)} className={cx("bonsai-detail__addtocart")}>Thêm vào giỏ hàng</button>
                </div>  
                <p className={cx("bonsai-detail__category")}><span>Loại:</span> {bonsai?.category}</p>
              </div>
            </div>
            <p className={cx("bonsai-detail__desc")}>{bonsai?.description}</p>
          </div>
        </section>
        <ToastContainer />

        {/* Comment */}
        {
          user?.email && <Comment id={id} />
        }
      </> 
    ) : <Loading />
}

export default BonsaiDetail;
