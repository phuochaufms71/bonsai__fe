/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind"
import styles from "./BlogItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetail, getBlogFromStore } from "../../../../redux/blog/blogSlice";
import { ACCESS_TOKEN } from "../../../../constants";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BlogItem = () => {
    const cx = classNames.bind(styles);
    const blog = useSelector(getBlogFromStore);
    const dispatch = useDispatch();
    const { id } = useParams();

    const fetchBlogDetail = async () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);
      if (accessToken && id) {
        await dispatch(getBlogDetail({
          accessToken,
          id
        }))
      }
    }

    useEffect(() => {
      fetchBlogDetail()
    }, [localStorage.getItem(ACCESS_TOKEN)])

  return (
    <article className={cx("blog-item")}>
      <div className={cx("container")}>
        <div className={cx("blog-item__inner")}>
          <h3 className={cx("blog-item__title")}>{blog.title}</h3>
          <div className={cx("blog-item__wrap-img")}>
            <img className={cx("blog-item__img")} src={blog.image} alt="" />
          </div>
          <p className={cx("blog-item__content")}>{blog.content}</p>
        </div>
      </div>
    </article>
  )
}

export default BlogItem
