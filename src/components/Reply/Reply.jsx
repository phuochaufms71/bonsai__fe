/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Reply.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN } from "../../constants";
import { useEffect, useState } from "react";
import { createReply, getReply } from "../../redux/reply/replySlice";

const Reply = ({ name, id, idSelected, setIsReplyComment, isReplyComment }) => {
    const cx = classNames.bind(styles);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const [rep, setRep] = useState("");
    const { reply } = useSelector(state => state.reply);
    // const { comments } = useSelector(state => state.comment);
    // const [idSelected, setIdSelected] = useState("");
    // const [isEditReply, setIsEditReply] = useState(false);

    // const selectedComment = useMemo(() => {
    //     return reply?.find((repl) => repl.commentId === idSelected) || {};
    // }, [reply, idSelected]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createReply({
            accessToken,
            newReply: {
                reply: rep,
                commentId: idSelected,
                email: user.email,
                fullName: `${user.firstName} ${user.lastName}`,
                avatar: user?.avatar
            }
        }))
        await dispatch(getReply({
            accessToken,
            commentId: id
        }))
        setRep("")
        setIsReplyComment(false)
    }

    // const handleDeleteComment = async (idSelected) => {
    //     await dispatch(deleteReply({
    //         accessToken, 
    //         id: idSelected
    //     }))
    //     await dispatch(getReply({
    //         accessToken,
    //         commentId: selectedComment?._id
    //     }))
    //     setIdSelected("")
    // } 

    const fetchComment = async () => {
        await dispatch(getReply({
            accessToken,
            commentId: id
        }))
    }

    useEffect(() => {
        fetchComment()
    }, [])
    return (
        <div className={cx("reply")}>
            <div className={cx("container")}>
                {
                    isReplyComment && idSelected === id && <>
                        <textarea onChange={(e) => setRep(e.target.value)} value={rep} className={cx("reply__textarea")} rows={4} placeholder="Trả lời ở đây..."></textarea>
                        <div className={cx("reply__btn")}>
                            <button onClick={() => setIsReplyComment(false)} className={cx("reply__btn-cancel")}>Hủy</button>
                            <button onClick={handleSubmit} className={cx("reply__btn-rep")}>Trả lời</button>
                        </div>
                     </>
                }
                {
                    reply?.map((rep, index) => {
                       if (id === rep?.commentId) {
                            return (
                                <div key={index} className={cx("reply__item")}>
                                    <div className={cx("reply__info")}>
                                        <img className={cx("reply__avatar")} src={rep?.avatar} alt="" />
                                        <div className={cx("reply__wrap")}>
                                            <p className={cx("reply__name")}>{rep?.fullName}</p>
                                            <p className={cx("reply__time")}>
                                                <span>{rep?.date}</span>/<span>{rep?.month}</span>/<span>{rep?.year}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={cx("reply__desc")}><span>@{name}</span> {rep.reply}</p>
                                    <div className={cx("reply__row")}>
                                        <p onClick={() => { setIsReplyComment(true) }} className={cx("reply__reply")}>Trả lời</p>
                                        {/* {
                                            user.email === repl?.email && <div className={cx("comment__action")}>
                                                <p onClick={() => {setIsEditComment(true); setIdSelected(repl?._id)}} className={cx("comment__action-edit")}>Sửa</p>
                                                <p onClick={() => {setIdSelected(repl?._id); handleDeleteComment(repl?._id)}} className={cx("comment__action-delete")}>Xóa</p>
                                            </div>
                                        } */}
                                    </div>
                                    {/* {
                                        isEditComment && idSelected === comment._id && <EditComment selectedComment={selectedComment} setIsEditComment={setIsEditComment} id={id}/>
                                    } */}
                                </div>
                            )
                        }
                    })
                }
            </div>

        </div>
    )
}

export default Reply;
