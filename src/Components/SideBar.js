import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { UserContext } from '../App'
import { FiEdit } from 'react-icons/fi'
import styles from './component.module.css'
import pagestyles from '../Pages/pages.module.css'
import { TbMenu } from 'react-icons/tb'


const SideBar = () => {
    let { userAuth } = useContext(UserContext)
    let pathname = window.location.pathname.split('/')[2];
    const [page, setPage] = useState(pathname.replace('-', ' '))


    const [showSideBar, setShowSideBar] = useState(false)

    let activeTabLine = useRef();
    let sideBarIcon = useRef();
    let pageState = useRef();

    const changePageState = (e) => {
        let { offsetWidth, offsetLeft } = e.target;
        activeTabLine.current.style.width = offsetWidth + "px";
        activeTabLine.current.style.left = offsetLeft + "px";

        if (e.target == sideBarIcon.current) {
            setShowSideBar(true)
        } else {
            setShowSideBar(false)
        }

    }

    useEffect(() => {
        setShowSideBar(false);
        pageState.current.click()
    }, [page])

    return (
        <>
            <section className={styles.sidebarSection}>
                <div className={styles.sidebarDiv}>
                    <div className={styles.sidbarTop}>

                        {/* <div ref={sideBarIcon} onClick={changePageState} className={styles.sidbarTopBtns}>
                            <CiMenuBurger size={25} />
                        </div> */}
                        <span ref={sideBarIcon} onClick={changePageState} className={styles.sidbarTopBtns} >

                            <TbMenu size={20} />
                        </span>
                        <p ref={pageState} onClick={changePageState} className={styles.sidbarTopBtns}>{page}</p>
                        <hr ref={activeTabLine} className={styles.inpageHr2} />
                    </div>
                    <div className={` ${styles.sidebarDivDiv} ${pagestyles.h_cover} ${!showSideBar ? styles.showSideBar : styles.showSideBarFalse}`}>
                        <h1 className={styles.sidebarH1}>Dashboard</h1>
                        <hr className={styles.sidebarHr} />
                        <NavLink className={styles.sidebar_link} to={"/dashboard/blogs"} onClick={(e) => setPage(e.target.innerText)}>
                            <FiEdit size={20} />
                            Blogs
                        </NavLink>
                        <NavLink className={styles.sidebar_link} to={"/dashboard/notification"} onClick={(e) => setPage(e.target.innerText)}>
                            <FiEdit size={20} />
                            Notification
                        </NavLink>
                        <NavLink className={styles.sidebar_link} to={"/editor"} onClick={(e) => setPage(e.target.innerText)}>
                            <FiEdit size={20} />
                            Write
                        </NavLink>

                        <h1 className={styles.sidebarH1} style={{ marginTop: "160px" }}>Settings</h1>
                        <hr className={styles.sidebarHr} />
                        <NavLink className={styles.sidebar_link} onClick={(e) => setPage(e.target.innerText)}>
                            <FiEdit size={20} />
                            Blogs
                        </NavLink>
                        <NavLink className={styles.sidebar_link} onClick={(e) => setPage(e.target.innerText)}>
                            <FiEdit size={20} />
                            Notification
                        </NavLink>
                        <NavLink className={styles.sidebar_link} onClick={(e) => setPage(e.target.innerText)}>
                            <FiEdit size={20} />
                            Write
                        </NavLink>

                    </div>
                </div>

                <div className={styles.outlet}>

                    <Outlet />
                </div>
            </section>

        </>
    )
}

export default SideBar