import Home from "../pages/layouts/Home/Home";
import Blog from "../pages/layouts/Blog/Blog";
import BlogItem from "../pages/layouts/Blog/BlogItem/BlogItem";
import Contact from "../pages/layouts/Contact/Contact";


import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";
import ResetPassword from "../pages/user/ResetPassword/ResetPassword";
import Logout from "../pages/user/Logout/Logout";

import AdminUpdateFood from "../pages/admin/AdminUpdateBonsai/AdminUpdateBonsai";
import About from "../pages/layouts/About/About";
import Cart from "../pages/layouts/Cart/Cart";
import Shopping from "../pages/layouts/Shopping/Shopping"
import Checkout from "../pages/layouts/Checkout/Checkout";
import Profile from "../pages/layouts/Profile/Profile";
import Payment from "../pages/layouts/Payment/Payment";
import Faq from "../pages/layouts/Faq/Faq";
import Notification from "../pages/layouts/Notification/Notification";
import AdminGetListBonsai from "../pages/admin/AdminGetListBonsai/AdminGetListBonsai";
import AdminCreateBonsai from "../pages/admin/AdminCreateBonsai/AdminCreateBonsai";
import BonsaiDetail from "../pages/product/BonsaiDetail/BonsaiDetail";
import User from "../pages/admin/Manage/User/User";
import Bonsai from "../pages/admin/Manage/Bonsai/Bonsai";
import FaqAdmin from "../pages/admin/Support/FaqAdmin/FaqAdmin";
import Feedback from "../pages/admin/Support/Feedback/Feedback";
import Document from "../pages/admin/Support/Document/Document";
import Bill from "../pages/admin/Report/Bill/Bill";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

export const routePublic = [
    { path: "/", component: Home },
    { path: "/shopping", component: Shopping },
    { path: "/shopping/:id", component: BonsaiDetail },
    { path: "/blog", component: Blog },
    { path: "/blog/:id", component: BlogItem },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/faq", component: Faq },
    { path: "/cart", component: Cart },
    { path: "/cart/checkout", component: Checkout },
    { path: "/cart/checkout/payment", component: Payment },
    { path: "/profile", component: Profile },
    { path: "/notification", component: Notification },
];

export const routeAuthorization = [
    { path: "/login", component: Login},
    { path: "/register", component: Register},
    { path: "/reset-password", component: ResetPassword},
    { path: "/logout", component: Logout},
];

export const routeAdmin = [
    { path: "/", component: Dashboard},
    { path: "/report/bill", component: Bill},
    { path: "/manage/user", component: User},
    { path: "/manage/bonsai", component: Bonsai},
    { path: "/manage/bonsai/lists", component: AdminGetListBonsai },
    { path: "/manage/bonsai/create", component: AdminCreateBonsai },
    { path: "/manage/bonsai/lists/:id", component: AdminUpdateFood },
    { path: "/support/faq", component: FaqAdmin },
    { path: "/support/feedback", component: Feedback },
    { path: "/support/document", component: Document },
]
