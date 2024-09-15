/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createComment, deleteComment, getComments } from "../../redux/comment/commentSlice";
import { ACCESS_TOKEN } from "../../constants";
import { useEffect, useMemo, useState } from "react";
import EditComment from "./EditComment/EditComment";
import Reply from "../Reply/Reply";
// import Reply from "../Reply/Reply";

const Comment = ({ id }) => {
    const cx = classNames.bind(styles);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const [desc, setDesc] = useState("");
    const { comments } = useSelector(state => state.comment);
    const [idSelected, setIdSelected] = useState("");
    const [isEditComment, setIsEditComment] = useState(false);
    const [isReplyComment, setIsReplyComment] = useState(false);

    const selectedComment = useMemo(() => {
        return comments?.find((comment) => comment._id === idSelected) || {};
      }, [comments, idSelected]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createComment({
            accessToken,
            newComment: {
                desc,
                bonsaiId: id,
                email: user.email,
                fullName: `${user.firstName} ${user.lastName}`,
                avatar: user?.avatar
            }
        }))
        await dispatch(getComments({
            accessToken,
            bonsaiId: id
        }))
        setDesc("")
    }

    const handleDeleteComment = async (idSelected) => {
        await dispatch(deleteComment({
            accessToken, 
            id: idSelected
        }))
        await dispatch(getComments({
            accessToken,
            bonsaiId: id
        }))
        setIdSelected("")
    } 

    const fetchComment = async () => {
        await dispatch(getComments({
            accessToken,
            bonsaiId: id
        }))
    }

    useEffect(() => {
        fetchComment()
    }, [accessToken, id])
  return (
    <section className={cx("comment")}>
        <div className={cx("container")}>
            <h3 className={cx("comment__title")}>Bình luận ({comments?.length})</h3>
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className={cx("comment__textarea")} rows={4} placeholder="Viết bình luận ở đây..."></textarea>
            <button onClick={handleSubmit} className={cx("comment__btn")}>Đăng</button>
            {
                comments?.map((comment, index) => {
                    if (comment?.bonsaiId === id) {
                        return (
                            <div key={index} className={cx("comment__item")}>
                                <div className={cx("comment__info")}>
                                    <img className={cx("comment__avatar")} src={comment?.avatar} alt="" />
                                    <div className={cx("comment__wrap")}>
                                        <p className={cx("comment__name")}>{comment?.fullName}</p>
                                        <p className={cx("comment__time")}>
                                            <span>{comment?.date}</span>/<span>{comment?.month}</span>/<span>{comment?.year}</span>
                                        </p>
                                    </div>
                                </div>
                                <p className={cx("comment__desc")}>{comment.desc}</p>
                                <div className={cx("comment__row")}>
                                    <p onClick={() => { setIsReplyComment(true); setIdSelected(comment?._id) }} className={cx("comment__reply")}>Trả lời</p>
                                    {
                                        user.email === comment?.email && <div className={cx("comment__action")}>
                                            <p onClick={() => {setIsEditComment(true); setIdSelected(comment?._id)}} className={cx("comment__action-edit")}>Sửa</p>
                                            <p onClick={() => {setIdSelected(comment?._id); handleDeleteComment(comment?._id)}} className={cx("comment__action-delete")}>Xóa</p>
                                        </div>
                                    }
                                </div>
                                {
                                    <Reply name={comment?.fullName} id={comment?._id} idSelected={idSelected} setIsReplyComment={setIsReplyComment} isReplyComment={isReplyComment} />
                                }
                                {
                                    isEditComment && idSelected === comment._id && <EditComment selectedComment={selectedComment} setIsEditComment={setIsEditComment} id={id}/>
                                }
                            </div>
                        )
                    }
                })
            }
        </div>
    </section>
  )
}

export default Comment;
