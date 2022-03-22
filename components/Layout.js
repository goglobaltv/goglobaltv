import Footer from "./Footer";
import Menu from "./Navbar/Menu";
import NavMobile from "../components/Navbar/NavMobile";
import Logo from "../components/Navbar/Logo";

const Layout = ({ children }) => {
  // const Top = ["0px", "0px", "-60px", "-100px", "-100px"];
  return (
    <div>
      <Logo />
      <NavMobile />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
