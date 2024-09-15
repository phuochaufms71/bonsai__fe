/* eslint-disable react/prop-types */
import styles from "./Toggle.module.scss";
import classNames from "classnames/bind";

const Toggle = ({ handleChange, isChecked }) => {
    const cx = classNames.bind(styles);
    // const toggleButton = document.getElementById('toggle-button');
    // const body = document.body;

    // // Kiểm tra chế độ đã lưu trong localStorage
    // if (localStorage.getItem('theme') === 'dark') {
    //     body.classList.add('dark-mode');
    // } else {
    //     body.classList.add('light-mode');
    // }

    // // Thay đổi chế độ khi nhấn nút
    // toggleButton.onclick = () => {
    //     if (body.classList.contains('light-mode')) {
    //         body.classList.remove('light-mode');
    //         body.classList.add('dark-mode');
    //         localStorage.setItem('theme', 'dark'); // Lưu chế độ vào localStorage
    //     } else {
    //         body.classList.remove('dark-mode');
    //         body.classList.add('light-mode');
    //         localStorage.setItem('theme', 'light'); // Lưu chế độ vào localStorage
    //     }
    // };

  return (
    <div className={cx("toggle")}>
        <input 
            className={cx("toggle__input")}
            id="check"
            type="checkbox" 
            onChange={handleChange}
            checked={isChecked}
        />
        <label htmlFor="check">Giao diện sáng/tối</label>
    </div>
  )
}

export default Toggle
