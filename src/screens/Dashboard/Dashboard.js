import React, { useEffect, useState } from 'react';
import { Link, useParams,useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css';
import { Container } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import DashboardSummary from '../../components/DashboardSummary/DashboardSummary';
import CalendarPopup from '../../components/CalendarPopup/CalendarPopup';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
        },
        title: {
            display: false,
            text: 'Chart Text',
        },
    },
    elements: {
        line: {
            fill: false,
            cubicInterpolationMode: 'monotone',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                font: {
                    size: 11, // Adjust the font size of x-axis labels
                },
                padding: 10, // Adjust the padding between x-axis labels
            },
        },
        y: {
            grid: {
                display: false,
            },
            ticks: {
                font: {
                    size: 11, // Adjust the font size of y-axis labels
                },
                padding: 10, // Adjust the padding between y-axis labels
            },
        },
    },
};




const labels = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
];

const generateRandomData = () => labels.map(() => faker.datatype.number({ min: 0, max: 100 }));

const data = {
    transactions: {
        labels,
        datasets: [
            {
                label: "Debit",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: "red",
                backgroundColor: "red",
            },
            {
                label: "Credit",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: "skyblue",
                backgroundColor: "skyblue",
            },
        ],
    },
    registeredUsers: {
        labels,
        datasets: [
            {
                label: 'Registered Users',
                data: generateRandomData(),
                borderColor: 'skyblue',
                backgroundColor: 'skyblue',
            },
        ],
    },
    walletBalance: {
        labels,
        datasets: [
            {
                label: "Debit",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: "red",
                backgroundColor: "red",
            },
            {
                label: "Credit",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: "skyblue",
                backgroundColor: "skyblue",
            },
        ],
    },
};

const Dashboard = () => {
    const location = useLocation();
    let val = new URLSearchParams(location.search).get('closeVal');
    let CloseVal = val === "true" ? true : false;
    const [closeMenu,setCloseMenu]=useState(CloseVal);
   
    const [calendar, setCalendar] = useState(false);
    const [activeChart, setActiveChart] = useState('transactions');

    const handleChartChange = (chartName) => {
        setActiveChart(chartName);
    };
    return (
        <>
            <Header setCloseState={setCloseMenu} />
            <div className="main_div">
                <Sidebar setCloseState={closeMenu} />
                 <div className={styles.main}>
                 <Container className={styles.maindiv}>
                     <div className={styles.head}>
                         <div className={styles.title}>Taam Cash Statistics!</div>
                         <div          
                 onClick={() => setCalendar(true)}
                 className={styles.headButton}
                >
                 Week <img src="../../Icons/dropdownIcon.svg" />
               </div>
                     </div>


                     <div className={styles.body}>
                     <div className={styles.navigation}>
                         <Link to="#" onClick={() => handleChartChange('transactions')} className={activeChart === 'transactions' ? styles.active : ''}>
                             Transactions
                         </Link>
                         <Link to="#" onClick={() => handleChartChange('registeredUsers')} className={activeChart === 'registeredUsers' ? styles.active : ''}>
                             Registered Users
                         </Link>
                         <Link to="#" onClick={() => handleChartChange('walletBalance')} className={activeChart === 'walletBalance' ? styles.active : ''}>
                             Wallet Balance
                         </Link>
                     </div>
                     <div className={`${styles.chartview} h6_main`}>Chart Overview</div>
                         <div>
                             {/* <Line options={options} data={data[activeChart]} height={600} width={1532} /> */}
                             <Line options={options} data={data[activeChart]} height={600} width={1532} legend={{ labels: { className: `${styles.legendCustom}` } }} />

                         </div>
                     </div>
                     <div className={styles.footer}>
                         <DashboardSummary />
                     </div>
                 </Container>
             </div>
             {calendar && <CalendarPopup close={(e) => setCalendar(e)} />}
             

            </div>
        </>
    );
};

export default Dashboard;
