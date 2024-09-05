/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./AdminGetListBonsai.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBonsai,
  getBonsais
} from "../../../redux/bonsai/bonsaiSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { useEffect, useMemo, useState } from "react";
import { images } from "../../../components/images";
import ModalDelete from "../../../components/Modal/ModalDelete/ModalDelete";
import AdminUpdateBonsai from "../AdminUpdateBonsai/AdminUpdateBonsai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AdminGetListBonsai = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const { bonsais } = useSelector(state => state.bonsai.bonsais);
  const [showAction, setShowAction] = useState(false);
  const [id, setId] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idSelectedBonsai, setIdSelectedBonsai] = useState("");
  const [isUpdateBonsai, setIsUpdateBonsai] = useState(false);
  const [showDetailBonsai, setShowDetailBonsai] = useState(false);

  const fetchBonsais = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    dispatch(getBonsais(accessToken));
  };

  const selectedBonsai = useMemo(() => {
    return bonsais.find((bonsaiSelect) => bonsaiSelect._id === idSelectedBonsai);
  }, [bonsais, idSelectedBonsai]);

  const handleDeleteBonsai = async (bonsaiId) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(
      deleteBonsai({
        accessToken,
        id: bonsaiId,
      })
    );
    await dispatch(getBonsais(accessToken));
    setId("");
    setShowAction(false);
  };

  useEffect(() => {
    fetchBonsais();
  }, [localStorage.getItem(ACCESS_TOKEN)]);

  return (
    <>
      {isUpdateBonsai && (
        <AdminUpdateBonsai
          selectedBonsai={selectedBonsai}
          setIdSelectedBonsai={setIdSelectedBonsai}
          setIsUpdateBonsai={setIsUpdateBonsai}
          setShowAction={setShowAction}
        />
      )}
      {
        bonsais.length === 0 ? <div className={cx("get-list-bonsai__empty")}>bonsai list is empty, <span>create bonsai now</span></div> : <div className={cx("get_list_bonsai")}>
          <div className={cx("container")}>
            <div className={cx("get_list_bonsai__inner")}>
              <h2 className={cx("get_list_bonsai__title")}>List bonsais</h2>
              <table className={cx("get_list_bonsai__table")}>
                <thead>
                  <tr className={cx("get_list_bonsai__head")}>
                    <th className={cx("get_list_bonsai__th")}>Image</th>
                    <th className={cx("get_list_bonsai__th")}>Name</th>
                    <th className={cx("get_list_bonsai__th")}>Catogory</th>
                    <th className={cx("get_list_bonsai__th")}>Price</th>
                    <th className={cx("get_list_bonsai__th")}>Action</th>
                  </tr>
                </thead>

                {bonsais?.map((bonsai, index) => {
                  return (
                    <tbody key={index}>
                      <tr className={cx("get_list_bonsai__th")}>
                        <td className={cx("get_list_bonsai__td")}>
                          <img
                            className={cx("get_list_bonsai__img")}
                            src={bonsai?.image.secure_url}
                            alt=""
                          />
                        </td>
                        <td className={cx("get_list_bonsai__td")}>{bonsai?.name}</td>
                        <td className={cx("get_list_bonsai__td")}>
                          {bonsai?.category}
                        </td>
                        <td className={cx("get_list_bonsai__td")}>{bonsai?.price} VND</td>
                        <td className={cx("get_list_bonsai__td")}>
                          <div className={cx("get_list_bonsai__wrap")}>
                            <img
                              onClick={() => {
                                setId(bonsai?._id);
                                setShowAction(true);
                              }}
                              className={cx("get_list_bonsai__more")}
                              src={images.three_dots_icon}
                              alt=""
                            />
                            {id === bonsai?._id && showAction && (
                              <div className={cx("get_list_bonsai__action")}>
                                <div
                                  onClick={() => {
                                    setIsUpdateBonsai(true);
                                    setIdSelectedBonsai(bonsai?._id);
                                  }}
                                  className={cx("get_list_bonsai__item")}
                                >
                                  <img
                                    className={cx("get_list_bonsai__item-img")}
                                    src={images.edit_icon}
                                    alt="edit icon"
                                  />
                                  Update
                                </div>
                                <div
                                  onClick={() => {
                                    setShowModalDelete(true);
                                  }}
                                  className={cx("get_list_bonsai__item")}
                                >
                                  <img
                                    className={cx("get_list_bonsai__item-img")}
                                    src={images.delete_icon}
                                    alt="delete icon"
                                  />
                                  Delete
                                </div>
                                {showModalDelete && (
                                  <ModalDelete
                                    bonsai={bonsai}
                                    setShowModalDelete={setShowModalDelete}
                                    setShowAction={setShowAction}
                                    handleDeleteBonsai={handleDeleteBonsai}
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      }

      {/* get lists bonsai in mobie */}
      <div className={cx("get-list-bonsai-mobie")}>
        <div className={cx("get-list-bonsai-mobie__wrap")}>
          <div className={cx("get-list-bonsai-mobie__head")}>
            <span className={cx("get-list-bonsai-mobie__th")}></span>
            <span className={cx("get-list-bonsai-mobie__th")}>Image</span>
            <span className={cx("get-list-bonsai-mobie__th")}>Name</span>
            <span className={cx("get-list-bonsai-mobie__th")}>Action</span>
          </div>

          {bonsais?.map((bonsai, index) => (
            <div key={index} >
              <div className={cx("get-list-bonsai-mobie__content")}>
                <div className={cx("get-list-bonsai-mobie__td")}>
                  <FontAwesomeIcon
                    onClick={() => {
                      setId(bonsai?._id);
                      setShowDetailBonsai(() => id === bonsai?._id ? !showDetailBonsai : !showDetailBonsai);
                    }}
                    className={`${
                      showDetailBonsai && id === bonsai?._id ? styles.showBonsai : ""
                    } ${styles.get_list_bonsai_mobie__icon}`}
                    icon={faChevronRight}
                  />
                </div>
                <div className={cx("get-list-bonsai-mobie__td")}>
                  <img
                    className={cx("get-list-bonsai-mobie__img")}
                    src={bonsai?.image}
                    alt=""
                  />
                </div>
                <p className={cx("get-list-bonsai-mobie__name")}>{bonsai?.name}</p>
  
                  <div className={cx("get_list_bonsai__wrap")}>
                    <div className={cx("get-list-bonsai-mobie__td")}>
                      <img
                        onClick={() => {
                          setId(bonsai?._id);
                          setShowAction(true);
                        }}
                        className={cx("get-list-bonsai-mobie__more")}
                        src={images.three_dots_icon}
                        alt=""
                      />
                    </div>
                    {id === bonsai?._id && showAction && (
                      <div className={cx("get-list-bonsai-mobie__action")}>
                        <div
                          onClick={() => {
                            setIsUpdateBonsai(true);
                            setIdSelectedBonsai(bonsai?._id);
                          }}
                          className={cx("get-list-bonsai-mobie__item")}
                        >
                          <img
                            className={cx("get-list-bonsai-mobie__item-img")}
                            src={images.edit_icon}
                            alt="edit icon"
                          />
                          Update
                        </div>
                        <div
                          onClick={() => {
                            setShowModalDelete(true);
                          }}
                          className={cx("get-list-bonsai-mobie__item")}
                        >
                          <img
                            className={cx("get-list-bonsai-mobie__item-img")}
                            src={images.delete_icon}
                            alt="delete icon"
                          />
                          Delete
                        </div>
                        {showModalDelete && (
                          <ModalDelete
                            bonsai={bonsai}
                            setShowModalDelete={setShowModalDelete}
                            setShowAction={setShowAction}
                            handleDeleteBonsai={handleDeleteBonsai}
                          />
                        )}
                      </div>
                    )}
                  </div>
              </div>
            
              {showDetailBonsai && id === bonsai?._id && (
                <div className={cx("get-list-bonsai-mobie__list")}>
                  <p className={cx("get-list-bonsai-mobie__item")}>
                    <span>Name:</span> {bonsai?.name}</p>
                  <p className={cx("get-list-bonsai-mobie__item")}><span>Category:</span> {bonsai?.category}</p>
                  <p className={cx("get-list-bonsai-mobie__item")}><span>Price:</span> {bonsai?.price}</p>
                  <p className={cx("get-list-bonsai-mobie__item")}><span>Rate:</span> {bonsai?.rate}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminGetListBonsai;
