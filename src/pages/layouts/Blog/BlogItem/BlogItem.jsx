// /* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./BlogItem.module.scss";
import { useParams } from "react-router-dom";
import { blogs } from "../index.js";

const BlogItem = () => {
  const cx = classNames.bind(styles);
  const { id } = useParams();

  return blogs.map((blog, index) => {
    if (blog.id == id) {
      return (
        <article key={index} className={cx("blog-item")}>
          <div className={cx("container")}>
            <div className={cx("blog-item__inner")}>
              <h3 className={cx("blog-item__title")}>{blog.title}</h3>
              <div className={cx("blog-item__wrap-img")}>
                <img className={cx("blog-item__img")} src={blog.image} alt="" />
              </div>
              <h3 className={cx("blog-item__sub-title")}>{blog?.subTitle_1}</h3>
              <p className={cx("blog-item__content")}>{blog?.content_1}</p>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_1_1}
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_1_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_1_2}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_1_3}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_1_2}
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_2_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_2_2}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_2_3}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_1_3}
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_3_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_1_3_2}</li>
              </ul>
              <p className={cx("blog-item__desc")}>{blog?.desc_1}</p>
              <h3 className={cx("blog-item__sub-title")}>{blog?.subTitle_2}</h3>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_2_1}
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_1_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_1_2}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_1_3}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_1_4}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_2_2}
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_2_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_2_2}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_2_3}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_2_4}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_2_3}
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_3_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_3_2}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_3_3}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_2_4}
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_4_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_4_2}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_4_3}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_4_4}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_2_5}
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_5_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_5_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_2_6}
                <li className={cx("blog-item__item")}>{blog?.itemContent_2_6_1}</li>
              </ul>
              <p className={cx("blog-item__desc")}>{blog?.desc_2}</p>
              <h3 className={cx("blog-item__sub-title")}>{blog?.subTitle_3}</h3>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_1}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_1_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_1_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_2}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_2_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_2_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_3}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_3_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_3_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_4}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_4_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_4_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_5}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_5_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_5_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_6}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_6_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_6_2}</li>
              </ul>
              <ul className={cx("blog-item__list")}>
                {blog?.listContent_3_7}
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_7_1}</li>
                <li className={cx("blog-item__item")}>{blog?.itemContent_3_7_2}</li>
              </ul>
              <p className={cx("blog-item__desc")}>{blog?.desc_3}</p>
            </div>
          </div>
        </article>
      );
    }
  });
};

export default BlogItem;
