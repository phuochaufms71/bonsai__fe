/* eslint-disable react/prop-types */
import styles from "./Toggle.module.scss";
import classNames from "classnames/bind";

const Toggle = ({ handleChange, isChecked }) => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx("toggle")}>
        <input 
            className={cx("toggle__input")}
            id="check"
            type="checkbox" 
            onChange={handleChange}
            checked={isChecked}
        />
        <label htmlFor="check">Dark Mode</label>
    </div>
  )
}

export default Toggle
