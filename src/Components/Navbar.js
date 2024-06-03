import React, { useContext, useState } from 'react'
import styles from './component.module.css'
import { Link, Outlet } from 'react-router-dom'
import { FiSearch, FiEdit3, FiBell, FiEdit } from "react-icons/fi";
import { UserContext } from '../App';
import NavDropDown from './NavDropDown';


const Navbar = () => {
    const { userAuth } = useContext(UserContext);
    console.log(userAuth);
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)
    const [panelVisibility, setPanelVisibility] = useState(false)

    const openPanel = () => {
        setPanelVisibility(currentVal => !currentVal)
    }
    const handleBlur = () => {
        setTimeout(() => {
            setPanelVisibility(false)
        }, 200);
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.logoLink}>
                    <img src={require('../Assets/images/logoDark.png')} className={styles.logo} />
                </Link>

                <div className={`${styles.subNavDiv} ${styles.showMd}  ${searchBoxVisibility ? styles.show : styles.hide}`}>
                    <input
                        type='text'
                        placeholder='Search...'
                        className={styles.navInput}
                    />
                    <i className={`${styles.searchIcon} `}>
                        <FiSearch size={20} />
                    </i>
                </div>
                <div className={styles.subNavDiv2}>
                    <button className={styles.searchIconBtn}
                        onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}
                    >
                        <FiSearch size={20} />
                    </button>
                    <Link to={'/editor'} className={`${styles.fileEdit} ${styles.link}`}>
                        Write <FiEdit size={20} />
                    </Link>
                    {
                        userAuth === null ?
                            <>
                                <Link to={'/sign-in'} className={`${styles.btn} ${styles.btn_dark}`}>
                                    Sign in
                                </Link>
                                <Link to={'/sign-up'} className={`${styles.btn} ${styles.btn_light} ${styles.displayTrue}`}>
                                    Sign Up
                                </Link>
                            </>
                            :
                            <>
                                <Link to={'/dashboard/notification'}>
                                    <button className={styles.btn}>
                                        <FiBell size={20} />
                                    </button>
                                </Link>

                                <div style={{ position: 'relative' }} onBlur={handleBlur} onClick={openPanel} >
                                    <button className={styles.navImg} >
                                        <img src={(userAuth.image)} className={styles.navImgImg} />
                                    </button>
                                    {
                                        panelVisibility ?
                                            <NavDropDown />
                                            :
                                            ""
                                    }
                                </div>
                            </>
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar