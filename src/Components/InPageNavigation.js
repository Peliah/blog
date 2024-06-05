import React, { useEffect, useRef, useState } from 'react'
import styles from './component.module.css'
const InPageNavigation = ({ children, routes, defaultHidden = [], defaultActive = 0 }) => {

    let activeTabRef = useRef();
    let activeTab = useRef()
    const [inPageIndex, setInPageIndex] = useState(defaultActive)

    const changeState = (btn, i) => {
        let { offsetWidth, offsetLeft } = btn;
        activeTabRef.current.style.width = offsetWidth + "px";
        activeTabRef.current.style.left = offsetLeft + "px";

        setInPageIndex(i);
    }

    useEffect(() => {
        changeState(activeTab.current, defaultActive)
    }, [])
    return (
        <>
            <div className={styles.pageContainer}>
                {
                    routes.map((route, i) => {
                        return (
                            <button
                                ref={i == defaultActive ? activeTab : null}
                                key={i}
                                className={`${styles.routeButton} ${inPageIndex == i ? styles.truePageIndex : styles.falsePageIndex}`}
                                onClick={(e) => { changeState(e.target, i) }}
                            >
                                {route}
                            </button>
                        )
                    })
                }
                <hr ref={activeTabRef} className={styles.inpageHr} />
            </div>
            {Array.isArray(children) ? children[inPageIndex] : children}
        </>
    )
}

export default InPageNavigation