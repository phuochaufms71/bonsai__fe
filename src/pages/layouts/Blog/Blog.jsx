/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getBlogsFromStore } from "../../../redux/blog/blogSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import Loading from "../../../components/Loading/Loading";

const Blog = () => {
    const cx = classNames.bind(styles);
    const { blogs } = useSelector(getBlogsFromStore);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const fetchBlogs = async () => {
      setLoading(true)
      const accessToken = localStorage.getItem(ACCESS_TOKEN);
      await dispatch(getBlogs(accessToken))
      setLoading(false);
    }

    useEffect(() => {
      Aos.init()
      fetchBlogs()
    }, [localStorage.getItem(ACCESS_TOKEN)])
  return loading ? <Loading /> : (
    <section className={cx('blog')}>
      <div className={cx("container")}>
        <div className={cx("blog__iner")}>
          <h3 className={cx("blog__title")}>Blog Food</h3>
          <div className={cx("blog__list")}>
            {
              blogs?.map((blog, index) => (
                <Link data-aos="fade-up" data-aos-duration="1000" to={`/blog/${blog?._id}`} key={index} className={cx("blog__item")}>
                  <div className={cx("blog__item-wrap-img")}><img className={cx("blog__item-img")} src={blog?.image} alt="" /></div>
                  <div className={cx("blog__item-body")}>
                    <p className={cx("blog__item-title")}>{blog?.title}</p>
                    <p className={cx("blog__item-desc")}>{blog?.description}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;
