/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Address.module.scss";

import { useEffect } from "react";
import { ACCESS_TOKEN } from "../../../constants";
import { getAddresses } from "../../../redux/address/addressSlice";

const Address = () => {
  const cx = classNames.bind(styles)
  const dispatch = useDispatch();
  const { addresses } = useSelector(state => state.address);
  const {user} = useSelector(state => state.auth);

  const fetchAddress = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    await dispatch(getAddresses(accessToken))
  }

  useEffect(() => {
    fetchAddress()
  }, [localStorage.getItem(ACCESS_TOKEN)])

  return addresses.length === 0 ? <>No have address, please add address</> : (
    <div className={cx("address")}>
      {addresses?.map((address, index) => {
        if (user.email === address.email) {
          return (
            <div key={index} className={cx("address__item")}>
              <p className={cx("address__item--name")}>
                <span>{address.firstName}</span>
                <span> {address.lastName}</span>
              </p>
              <p className={cx("address__item--phone")}><span className={cx("address__item--title")}>Phone:</span> (+84) {address.phoneNumber}</p>
              <p className={cx("address__item--email")}><span className={cx("address__item--title")}>Email:</span> {address.email}</p>
              <p className={cx("address__item--location")}>
                <span className={cx("address__item--title")}>Address:</span> 
                <span> {address.stresh}</span>,
                <span> {address.city}</span>,
                <span> {address.country}</span>
              </p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Address
