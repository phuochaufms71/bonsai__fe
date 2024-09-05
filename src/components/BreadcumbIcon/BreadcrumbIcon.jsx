import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from "./BreadcrumbIcon.module.scss";

const BreadcrumbIcon = () => {
    const cx = classNames.bind(styles);
  return (
    <FontAwesomeIcon className={cx("icon")} icon={faChevronRight} />
  )
}

export default BreadcrumbIcon;
