import { Link } from "react-router-dom";
import AnimationWrapper from "./pageAnimation";
import { FiEdit, FiEdit3 } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../App";
import styles from './component.module.css'
import { LuSettings, LuUser } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TbUserEdit } from "react-icons/tb";
import { removeData } from "../Utils/Sessions";
const NavDropDown = () => {
    const { userAuth, setUserAuth } = useContext(UserContext);

    const signout = () => {
        removeData("user");
        setUserAuth(null)
    }
    return (
        <AnimationWrapper>
            <div className={styles.dropDownDiv}>
                <Link to={'/editor'} className={`${styles.dropDownDivItem} ${styles.link}`}>
                    <FiEdit /><p> Write </p>
                </Link>
                <Link to={`/user/${userAuth.name}`} className={`${styles.dropDownDivItem} ${styles.link}`}>
                    <LuUser /><p> Profile </p>
                </Link>
                <Link to={'/dashboard/blogs'} className={`${styles.dropDownDivItem} ${styles.link}`}>
                    <RxDashboard /><p> Dashboard </p>
                </Link>
                <Link to={'/settings/edit-profile'} className={`${styles.dropDownDivItem} ${styles.link}`}>
                    <LuSettings /><p> Settings </p>
                </Link>

                <button className={styles.btnSignOut} onClick={signout}>
                    <h1>Sign Out</h1>
                    <p>{userAuth.name}</p>
                </button>
            </div>
        </AnimationWrapper>
    );
}

export default NavDropDown;