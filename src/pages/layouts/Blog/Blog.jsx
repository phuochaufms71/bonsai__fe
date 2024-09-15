/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { blogs } from "./index.js";

const Blog = () => {
    const cx = classNames.bind(styles);

    useEffect(() => {
      Aos.init()
    }, [])

  return (
    <section className={cx('blog')}>
      <div className={cx("container")}>
        <div className={cx("blog__iner")}>
          <h3 className={cx("blog__title")}>Blog Bonsai</h3>
          <div className={cx("blog__list")}>
            {
              blogs.map((blog, index) => (
                <Link data-aos="fade-up" data-aos-duration="1000" to={`/blog/${blog.id}`} key={index} className={cx("blog__item")}>
                  <div className={cx("blog__item-wrap-img")}><img className={cx("blog__item-img")} src={blog.image} alt="" /></div>
                  <div className={cx("blog__item-body")}>
                    <p className={cx("blog__item-title")}>{blog.title}</p>
                    <p className={cx("blog__item-desc")}>{blog.description}</p>
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
