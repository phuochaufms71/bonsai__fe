import classNames from "classnames/bind";
import styles from "./Breadcrumb.module.scss";
import { useLocation } from "react-router-dom";
import React from "react";
import BreadcrumbIcon from "../BreadcumbIcon/BreadcrumbIcon";

const Breadcrumb = () => {
  const cx = classNames.bind(styles);
  const location = useLocation();
  const pathname = location.pathname.split("/").slice(1);
  return (
    <section className={cx("breadcrumb")}>
      <div className={cx("container")}>
        <div className={cx("breadcrumb__inner")}>
          <span className={cx("breadcrumb__pathname")}>
            HOME
          </span>
          {pathname.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbIcon />
              <span className={cx("breadcrumb__pathname")}>{path}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
