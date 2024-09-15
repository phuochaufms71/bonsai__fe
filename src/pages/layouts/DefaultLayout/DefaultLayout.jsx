/* eslint-disable react/prop-types */
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import GoBack from "../../../components/GoBack/GoBack";
import { useLocation } from "react-router-dom";

const DefaultLayout = ({children}) => {
  const cx = classNames.bind(styles);
  const location = useLocation();

  return (
    <div>
      <Header />
        {
          location.pathname !== "/" && <GoBack />
        }
        <div className={cx("children")}>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout;
