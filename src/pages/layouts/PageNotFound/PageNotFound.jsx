import classNames from "classnames/bind";
import styles from "./PageNotFound.module.scss";
import icon_page_not_found from "../../../components/images/icon_page_not_found.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("page-not-found")}>
      <div className={cx("container")}>
        <div className={cx("page-not-found__inner")}>
          <h2 className={cx("page-not-found__title")}>
            4
            <img
              className={cx("page-not-found__image")}
              src={icon_page_not_found}
              alt=""
            />
            4
          </h2>
          <p className={cx("page-not-found__sub-title")}>ERROR</p>
          <p className={cx("page-not-found__content")}>Page Not Found</p>
          <Link to="/" className={cx("page-not-found__link")}>Go Back To Home Page</Link>
          <p className={cx("page-not-found__prev")} onClick={() => window.history.back()}>Go Back Page Prevous</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
