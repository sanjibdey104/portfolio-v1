import CustomHead from "../custom/CustomHead";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <CustomHead />
      <div className="container">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
