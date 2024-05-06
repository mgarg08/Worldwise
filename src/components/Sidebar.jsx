import styles from "./Sidebar.module.css"
import Logo from "./Logo.jsx";
import AppNav from "./AppNav";
import Footer from "./footer.jsx";
import { Outlet } from "react-router-dom";

export default function Sidebar(){
    return <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <Outlet/>
      <Footer/>
    </div>
}