import CustomHead from "../custom/CustomHead";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <CustomHead />

      <div className="container">
        <Header />

        {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
