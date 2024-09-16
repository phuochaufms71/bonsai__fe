import classNames from "classnames/bind";
import styles from "./Favourite.module.scss";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import formatNumberWithSeparator from "../../../constants";

const Favourite = () => {
  const cx = classNames.bind(styles);
  const { favourites } = useSelector((state) => state.favourite);

  return favourites.length === 0 ? <div className={cx("favourite__empty")}>Không có bonsai yêu thích, hãy thêm bonsai yêu thích</div> : (
    <div className={cx("favourite__list")}>
      {favourites?.map((favourite, index) => (
        <Link to={`/shopping/${favourite._id}`} key={index} className={cx("favourite__item")}>
          <div className={cx("favourite__item-wrap-img")}>
            <div>
              <img
                className={cx("favourite__item-img")}
                src={favourite?.image.secure_url}
                alt=""
              />
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className={cx("favourite__heart")}
            />
          </div>
          <p className={cx("favourite__item-name")}>{favourite?.name}</p>
          <p className={cx("favourite__item-discount")}>
            Giảm 5% cho lần mua thứ 5 tại Shop Bonsai Vy Nguyễn{" "}
          </p>
          <p className={cx("favourite__item-price")}>{formatNumberWithSeparator(favourite?.price)} VNĐ</p>
          <p className={cx("favourite__item-like")}>Lượt thích: {favourite.favouriteQuantity}</p>
        </Link>
      ))}
    </div>
  );
};

export default Favourite;
