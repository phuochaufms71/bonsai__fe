import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { images } from "../../../components/images/index.js";
import { LineChart } from "@mui/x-charts";
import AdminHeader from "../../../components/AdminHeader/AdminHeader.jsx";
import AdminFooter from "../../../components/AdminFooter/AdminFooter.jsx";

const Dashboard = () => {
  const cx = classNames.bind(styles);
  const productData = [20, 12, 31, 7, 0, 2, 5];
  const userData = [2, 9, 1, 15, 8, 20, 7];
  const xLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Satuday',
    'Sunday',
  ];

  return (
    <>
      <AdminHeader />
      <div className={cx("dashboard")}>
        <div className={cx("container")}>
          <div className={cx("dashboard__inner")}>
            <div className={cx("dashboard__content")}>
              <div className={cx("dashboard__wrap-img")}>
                <h3 className={cx("dashboard__title")}>
                  Chào mừng trở lại, Hi Vy Nguyễn!
                </h3>
                <img
                  className={cx("dashboard__img")}
                  src={images.banner_dashboard}
                  alt=""
                />
              </div>
              <div className={cx("dashboard__total")}>
                {/* Product */}
                <div className={cx("dashboard__total-products")}>
                  <div className={cx("dashboard__total-products--top")}>
                    <div className={cx("dashboard__total-wrap-img")}>
                      <img
                        className={cx("dashboard__total-img-rec")}
                        src={images.rounded_rec_icon}
                        alt=""
                      />
                      <h3 className={cx("dashboard__total-title")}>Total Products</h3>
                    </div>
                    <img
                      className={cx("dashboard__total-img-more")}
                      src={images.more}
                      alt=""
                    />
                  </div>
                  <div className={cx("dashboard__total-products--bottom")}>
                    <div className={cx("dashboard__total-number")}>
                      <p className={cx("dashboard__total-statistic")}>
                        1623 <span>products</span>
                      </p>
                      <p className={cx("dashboard__total-compared-percent")}>
                        +10% this week
                      </p>
                    </div>
                  </div>
                </div>
                {/* User */}
                <div className={cx("dashboard__total-products")}>
                  <div className={cx("dashboard__total-products--top")}>
                    <div className={cx("dashboard__total-wrap-img")}>
                      <img
                        className={cx("dashboard__total-img-rec")}
                        src={images.rounded_rec_icon}
                        alt=""
                      />
                      <h3 className={cx("dashboard__total-title")}>Total Users</h3>
                    </div>
                    <img
                      className={cx("dashboard__total-img-more")}
                      src={images.more}
                      alt=""
                    />
                  </div>
                  <div className={cx("dashboard__total-products--bottom")}>
                    <div className={cx("dashboard__total-number")}>
                      <p className={cx("dashboard__total-statistic")}>
                        823 <span>users</span>
                      </p>
                      <p className={cx("dashboard__total-compared-percent")}>
                        -12% this week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("dashboard__total-chart")}>
                <LineChart
                  width={600}
                  height={400}
                  series={[
                    { data: productData, label: "Products" },
                    { data: userData, label: "Users" },
                  ]}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default Dashboard;

