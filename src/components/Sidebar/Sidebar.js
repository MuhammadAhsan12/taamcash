import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { Data } from "./Data";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({setCloseState}) => {
    const location = useLocation();

    const [closeMenu,setCloseMenu]=useState(setCloseState);
    useEffect(() => {
        setCloseMenu(setCloseState);
    });

    const logoutHandler = () => {
    };

    return (
        <>
        <div className={setCloseState ?  styles.mainClose : styles.main} >
            <div className={styles.inner}>
                <div className={styles.profile}>
                    <img alt="" src="/Images/profile.svg" className={setCloseState ?  styles.mainCloseImage : styles.mainImage} />
                    {!setCloseState?<div>
                        <h6 className="h6_main">Greetings</h6>
                        <h2 className="h2_main">David</h2>
                    </div>:""}
                    
                </div>
                <div className={styles.tabs}>
                    {Data.map((item) => (
                        <Link
                            style={{ textDecoration: "none", width: "100%" }}
                            to={item.link+"?closeVal="+JSON.parse(setCloseState)}
                        >
                            <div
                                key={item.text}
                                className={`${styles.tab} ${location.pathname === item.link && !item.subItems
                                    ? styles.tabActive
                                    : ""
                                    }`}
                            >
                                {location.pathname === item.link ? (
                                    <img alt="" src={item.iconActive} />
                                ) : (
                                    <img alt="" src={item.icon} />
                                )}
                                {!setCloseState?
                                <h3 className="h3_main">{item.text}</h3>
                                :""}
                            </div>
                        </Link>
                    ))}
                </div>
                <Link to={"/"} style={{textDecoration:"none"}}>
                    <div onClick={logoutHandler} className={styles.logout}>
                        <img alt="" src="/Icons/signout.svg" />
                        {!setCloseState?
                        <h3 style={{ color: "#1E1E1F" }} className="h3_main">
                            Sign out
                        </h3>
                        :""}
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
