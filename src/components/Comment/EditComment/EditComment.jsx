/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./EditComment.module.scss"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getComments, updateComment } from "../../../redux/comment/commentSlice";
import { ACCESS_TOKEN } from "../../../constants";

const EditComment = ({ selectedComment, setIsEditComment, id }) => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const [save, setSave] = useState({
        desc: selectedComment?.desc
    });

    const handleEdit = async (e) => {
        e.preventDefault();
        await dispatch(updateComment({
            accessToken, 
            id: selectedComment?._id,
            updateComment: save
        }))
        await getComments({
            accessToken,
            bonsaiId: id
        })
        setIsEditComment(false)
    }
    return (
        <div className={cx("edit-comment")}>
            <div className={cx("edit-comment__body")}> 
                <textarea className={cx("edit-comment__content")} rows={4} id="" onChange={(e) => setSave({...save, desc: e.target.value})} value={save.desc}></textarea>
                <button className={cx("edit-comment__btn")} onClick={handleEdit}>Lưu</button>
            </div>
        </div>
    )
}

export default EditComment;
