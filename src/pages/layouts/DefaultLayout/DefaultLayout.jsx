/* eslint-disable react/prop-types */
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";

const DefaultLayout = ({children}) => {

  const location = useLocation();

  return (
    <div>
      <Header />
      {location.pathname === '/'  ? <></> : (location.pathname === 'shopping/:id' ? <div style={{marginTop: 100}}>Breadcrumb</div> : <Breadcrumb />)  }
        {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout;
