import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { images } from "../../components/images/index.js";
import { LineChart } from "@mui/x-charts";

const Admin = () => {
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
    <div className={cx("admin")}>
      <div className={cx("container")}>
        <div className={cx("admin__inner")}>
          <div className={cx("admin__content")}>
            <div className={cx("admin__wrap-img")}>
              <h3 className={cx("admin__title")}>
                Welcome to Dashboard, Hi Phuoc Hau!
              </h3>
              <img
                className={cx("admin__img")}
                src={images.banner_admin}
                alt=""
              />
            </div>
            <div className={cx("admin__total")}>
              {/* Product */}
              <div className={cx("admin__total-products")}>
                <div className={cx("admin__total-products--top")}>
                  <div className={cx("admin__total-wrap-img")}>
                    <img
                      className={cx("admin__total-img-rec")}
                      src={images.rounded_rec_icon}
                      alt=""
                    />
                    <h3 className={cx("admin__total-title")}>Total Products</h3>
                  </div>
                  <img
                    className={cx("admin__total-img-more")}
                    src={images.more}
                    alt=""
                  />
                </div>
                <div className={cx("admin__total-products--bottom")}>
                  <div className={cx("admin__total-number")}>
                    <p className={cx("admin__total-statistic")}>
                      1623 <span>products</span>
                    </p>
                    <p className={cx("admin__total-compared-percent")}>
                      +10% this week
                    </p>
                  </div>
                </div>
              </div>
              {/* User */}
              <div className={cx("admin__total-products")}>
                <div className={cx("admin__total-products--top")}>
                  <div className={cx("admin__total-wrap-img")}>
                    <img
                      className={cx("admin__total-img-rec")}
                      src={images.rounded_rec_icon}
                      alt=""
                    />
                    <h3 className={cx("admin__total-title")}>Total Users</h3>
                  </div>
                  <img
                    className={cx("admin__total-img-more")}
                    src={images.more}
                    alt=""
                  />
                </div>
                <div className={cx("admin__total-products--bottom")}>
                  <div className={cx("admin__total-number")}>
                    <p className={cx("admin__total-statistic")}>
                      823 <span>users</span>
                    </p>
                    <p className={cx("admin__total-compared-percent")}>
                      -12% this week
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("admin__total-chart")}>
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
  );
};

export default Admin;
