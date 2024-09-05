import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { images } from "../images/index.js";
import { useSelector } from "react-redux";
import HeadlessTippy from "../HeadlessTippy/HeadlessTippy.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBlog, faCircleQuestion, faHome, faIdCard, faList, faSearch, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [itemLink, setItemLink] = useState("/");
    const cx = classNames.bind(styles);
    const { user } = useSelector(state => state.auth);
    const {cartBonsais} = useSelector(state => state.cart);
    const [showMenu, setShowMenu] = useState(false);
    const [mobieActive, setMobieActive] = useState("home");

    const handleShowMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("header__inner")}>
                    <div onClick={() => setShowMenu(prev => !prev)} className={cx("header__menu")}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <Link to="/">
                        <img src={images.logo_bonsai} alt="logo" className={cx("header__logo")} />
                    </Link>
                    <nav className={cx("header__navbar")}>
                        <ul className={cx("header__navbar-list")}>
                            <li onClick={() => setItemLink("/")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/" ? styles.active : ''}`} to={itemLink}>Trang chủ</Link>
                            </li>
                            <li onClick={() => setItemLink("/shopping")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/shopping" ? styles.active : ''}`} to="/shopping">Mua bonsai</Link>
                            </li>
                            <li onClick={() => setItemLink("/blog")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/blog" ? styles.active : ''}`} to="/blog">Blog</Link>
                            </li>
                            <li onClick={() => setItemLink("/contact")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/contact" ? styles.active : ''}`} to="/contact">Liên hệ</Link>
                            </li>
                            <li onClick={() => setItemLink("/faq")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/faq" ? styles.active : ''}`} to="/faq">Câu hỏi</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile */}
                    {
                        <nav onClick={handleShowMenu} className={`${showMenu ? styles.show : styles.hide} ${styles.navbar__mobie}`}>
                            <div className={cx("navbar__mobie_inner")}>
                                <div className={cx("navbar__mobie-search")}>
                                    <FontAwesomeIcon icon={faSearch} className={cx("navbar__mobie-search--icon")}/>
                                    <input className={cx("navbar__mobie-search--input")} type="text" placeholder="Tìm kiếm..."/>
                                </div>
        
                                <h3 className={cx("navbar__mobie-title")}>Trang</h3>
                                <ul className={cx("navbar__mobie-list")}>
                                    <li onClick={() => {setMobieActive("home")}} className={`${mobieActive === "home" && styles.mobieActive} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faHome} />
                                        <Link to="/" className={cx("navbar__mobie_item--link")}>Trang chủ</Link>
                                    </li>
                                    <li onClick={() => {setMobieActive("about")}} className={`${mobieActive === "about" && styles.mobieActive} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faUserGroup} />
                                        <Link to="/about" className={cx("navbar__mobie_item--link")}>Giới thiệu</Link>
                                    </li>
                                    <li onClick={() => {setMobieActive("menu"); handleShowMenu}} className={`${mobieActive === "menu" && styles.mobieActive} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faList} />
                                        <Link to="/menu" className={cx("navbar__mobie_item--link")}>Mua bonsai</Link>
                                    </li>
                                    <li onClick={() => {setMobieActive("blog"); handleShowMenu}} className={`${mobieActive === "blog" && styles.mobieActive} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faBlog} />
                                        <Link to="/blog" className={cx("navbar__mobie_item--link")}>Blog</Link>
                                    </li>
                                    <li onClick={() => {setMobieActive("contact"); handleShowMenu}} className={`${mobieActive === "contact" && styles.mobieActive} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faIdCard} />
                                        <Link to="/contact" className={cx("navbar__mobie_item--link")}>Liên hệ</Link>
                                    </li>
                                    <li onClick={() => {setMobieActive("faq"); handleShowMenu}} className={`${mobieActive === "faq" && styles.mobieActive} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faCircleQuestion} />
                                        <Link to="/faq" className={cx("navbar__mobie_item--link")}>Câu hỏi</Link>
                                    </li>
                                </ul>
        
                                <h3 className={cx("navbar__mobie-title")}>Khác</h3>
                                <ul className={cx("navbar__mobie-list")}>
                                    <li onClick={() => {handleShowMenu; setMobieActive("profile")}} className={`${mobieActive === "profile" ? styles.mobieActive : ""} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faUser} />
                                        <Link to="/profile" className={cx("navbar__mobie_item--link")}>Trang cá nhân</Link>
                                    </li>
                                    <li onClick={() => {handleShowMenu; setMobieActive("notifications")}} className={`${mobieActive === "notifications" ? styles.mobieActive : ""} ${styles.navbar__mobie_item}`}>
                                        <FontAwesomeIcon className={cx("navbar__mobie_item--icon")} icon={faBell} />
                                        <Link to="/notification" className={cx("navbar__mobie_item--link")}>Thông báo</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    }

                    {/* end navbar mobie */}
                    <div className={cx("header__action")}>
                        <Link to="/cart" className={cx("header__action-cart")}>
                            <i className={cx("fa-solid fa-cart-shopping")}></i>
                            <span className={cx("header__action-cart--number")}>{cartBonsais.length}</span>
                        </Link>
                        
                        <div className={cx("header__action-account")}>
                            {user && <p className={cx("header__action-name")}>
                                <span>{user.firstName}</span>
                                <span>{user.lastName}</span>
                            </p>}
                            
                            <HeadlessTippy>
                                <div className={cx("header__wrap-avatar")}>
                                    <img className={cx("header__avatar")} src={user.avatar || "https://i.pinimg.com/originals/3d/26/02/3d2602e1b11f161f7366c70b06fab7ed.jpg" } alt="" />
                                </div>
                            </HeadlessTippy> 
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
