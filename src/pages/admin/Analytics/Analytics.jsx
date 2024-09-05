import classNames from "classnames/bind";
import styles from "./Analytics.module.scss";

const Analytics = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx("analytics")}>
      Analytics
    </div>
  )
}

export default Analytics;
