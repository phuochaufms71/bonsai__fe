/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./AdminGetListBlog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getBlogsFromStore } from "../../../redux/blog/blogSlice";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../../../constants";

const AdminGetListBlog = () => {
  const { blogs } = useSelector(getBlogsFromStore);
  const dispatch = useDispatch();
  const cx = classNames.bind(styles);
  
  const fetchBlogs = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      dispatch(getBlogs(accessToken))
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [localStorage.getItem(ACCESS_TOKEN)])
  return (
    <div className={cx("get-list-blog")}>
        <div className={cx("get-list-blog__inner")}>
          {
            blogs?.map((blog, index) => (
              <div key={index} className={cx("get-list-blog__item")}>
                <div className={cx("get-list-blog__wrap-img")}>
                  <img className={cx("get-list-blog__img")} src={blog?.image} alt="" />
                </div>
                <div className={cx("get-list-blog__body")}>
                  <h3 className={cx("get-list-blog__title")}>{blog?.title}</h3>
                  <p className={cx("get-list-blog__desc")}>{blog?.description}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
};

export default AdminGetListBlog;
