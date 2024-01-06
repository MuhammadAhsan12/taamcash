import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container } from "react-bootstrap";
import styles from "./NotificationManagement.module.css";
import CustomNotificationForm from './CustomNotificationForm'; // Import your custom form component
import SavedNotificationTable from './SavedNotificationTable'; // Import your saved table component


const NotificationManagement = () => {
    const location = useLocation();
    let val = new URLSearchParams(location.search).get('closeVal');
    let CloseVal = val === "true" ? true : false;
    const [closeMenu,setCloseMenu]=useState(CloseVal);
    // const location = useLocation();
    const [activeChart, setActiveChart] = useState('Custom');

    const handleChange = (chartType) => {
        setActiveChart(chartType);
        // You can add logic here to navigate to the desired route based on chartType
        // For demonstration, I'm just updating the URL without using useHistory
        if (chartType === 'Custom') {
            window.history.pushState(null, '', '/custom-notification');
        } else if (chartType === 'Saved') {
            window.history.pushState(null, '', '/saved-notification');
        }
    };

    return (
        <>
            <Header setCloseState={setCloseMenu} />
            <div className="main_div">
            <Sidebar setCloseState={closeMenu} />
                <div className={styles.main}>
                    <Container className={styles.maindiv}>
                        <h1 className={styles.title}>Notification Management</h1>
                        <div className={styles.navigation}>
                            <Link
                                to="#"
                                onClick={() => handleChange('Custom')}
                                className={activeChart === 'Custom' ? styles.active : ''}
                                dangerouslySetInnerHTML={{ __html: 'Custom Notification' }}
                            />
                            <Link
                                to="#"
                                onClick={() => handleChange('Saved')}
                                className={activeChart === 'Saved' ? styles.active : ''}
                                dangerouslySetInnerHTML={{ __html: 'Saved Notification' }}
                            />
                        </div>
                        {activeChart === 'Custom' && <CustomNotificationForm pakagenamme="privacyadd" title="" text="" />}
                        {activeChart === 'Saved' && <SavedNotificationTable />}
                    </Container>
                </div>
            </div>
        </>
    );
};

export default NotificationManagement;
