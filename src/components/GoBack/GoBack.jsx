import classNames from "classnames/bind";
import styles from "./GoBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = () => {
    const cx = classNames.bind(styles);

    const handleBack = () => {
        window.history.back()
    }
    return (
        <div className={cx("go-back")}>
            <div className={cx("container")}>
                <FontAwesomeIcon onClick={handleBack} icon={faChevronLeft} className={cx("go-back__icon")}/>
            </div>
        </div>
    )
}

export default GoBack;
