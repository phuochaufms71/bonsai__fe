import classNames from "classnames/bind";
import styles from "./AdminCreateBlog.module.scss";
import { useState } from "react";
import { ACCESS_TOKEN } from "../../../constants";
import { useDispatch } from "react-redux";
import { createBlog } from "../../../redux/blog/blogSlice";

const AdminCreateBlog = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    content: ""
  })

  const handleCreateNewBlog = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(createBlog({
      accessToken,
      newBlog: formData
    }))
    handleCancel()
  }

  const handleCancel = () => {
    setFormData({
      image: "",
      title: "",
      description: "",
      content: ""
    })
  }
  return (
    <div className={cx("create-blog")}>
        <div className={cx("create-blog__inner")}>
          <h2 className={cx("create-blog__title")}>Create Blog</h2>
          <form onSubmit={handleCreateNewBlog} className={cx("create-blog__form")}>
            <div className={cx("create-blog__form-block")}>
              <div className={cx("create-blog__form-group")}>
                <label className={cx("create-blog__form-label")} htmlFor="imgId">Image</label>
                <input onChange={(e) => setFormData({ ...formData, image: e.target.value })} id="imgId" className={cx("create-blog__form-input")} type="text" placeholder="Link Image" value={formData.image}/>
              </div>
              <div className={cx("create-blog__form-group")}>
                <label className={cx("create-blog__form-label")} htmlFor="titleId">Title</label>
                <input onChange={(e) => setFormData({ ...formData, title: e.target.value })} id="titleId" className={cx("create-blog__form-input")} type="text" value={formData.title} />
              </div>
            </div>
            <div className={cx("create-blog__form-block")}>
              <div className={cx("create-blog__form-group")}>
                <label className={cx("create-blog__form-label")} htmlFor="descId">Description</label>
                <textarea onChange={(e) => setFormData({ ...formData, description: e.target.value })} id="descId" className={cx("create-blog__form-textarea")} rows={4} placeholder="Write dectiption here..." value={formData.description}/>
              </div>
              <div className={cx("create-blog__form-group")}>
                <label className={cx("create-blog__form-label")} htmlFor="contentId">Content</label>
                <textarea onChange={(e) => setFormData({ ...formData, content: e.target.value })} id="contentId" className={cx("create-blog__form-textarea")} rows={4} placeholder="Write content here..." value={formData.content} />
              </div>
            </div>
            <div className={cx("create-blog__footer")}>
              <p className={cx("create-blog__footer-note")}>
                <span>Note:</span> Fill in the detailed name of your blog. Then click the create button
              </p>
              <div className={cx("create-blog__footer-wrap-btn")}>
                <button onClick={handleCancel} className={cx("create-blog__btn-cancel")}>Cancel</button>
                <button type="submit" className={cx("create-blog__btn-create")}>Create</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  )
};

export default AdminCreateBlog;
