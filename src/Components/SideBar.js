import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { UserContext } from '../App'
import { FiEdit } from 'react-icons/fi'
import styles from './component.module.css'
import pagestyles from '../Pages/pages.module.css'
import { CiMenuBurger } from 'react-icons/ci'

const SideBar = () => {
    let { userAuth } = useContext(UserContext)
    return (
        <div>
            <section className={styles.sidebarSection}>
                <div className={styles.sidebarDiv}>
                    <div className={styles.sidbarTop}>
                        <CiMenuBurger size={25} />
                    </div>
                    <div className={` ${styles.sidebarDivDiv} ${pagestyles.h_cover}`}>
                        <h1 className={styles.sidebarH1}>Dashboard</h1>
                        <hr className={styles.sidebarHr} />
                        <NavLink className={styles.sidebar_link} to={"/dashboard/blogs"}>
                            <FiEdit size={20} />
                            Blogs
                        </NavLink>
                        <NavLink className={styles.sidebar_link} to={"/dashboard/notification"}>
                            <FiEdit size={20} />
                            Notification
                        </NavLink>
                        <NavLink className={styles.sidebar_link} to={"/editor"}>
                            <FiEdit size={20} />
                            Write
                        </NavLink>

                        <h1 className={styles.sidebarH1} style={{ marginTop: "160px" }}>Settings</h1>
                        <hr className={styles.sidebarHr} />
                        <NavLink className={styles.sidebar_link}>
                            <FiEdit size={20} />
                            Blogs
                        </NavLink>
                        <NavLink className={styles.sidebar_link}>
                            <FiEdit size={20} />
                            Notification
                        </NavLink>
                        <NavLink className={styles.sidebar_link}>
                            <FiEdit size={20} />
                            Write
                        </NavLink>

                    </div>
                </div>

                <div>

                    <Outlet />
                </div>
            </section>

        </div>
    )
}

export default SideBar