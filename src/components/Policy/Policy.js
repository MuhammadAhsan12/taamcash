import { Row, Col } from "react-bootstrap";
import styles from "./Policy.module.css";
import { Link } from "react-router-dom";

const TermsScreen = ({ pakagenamme, title, text }) => {
    return (
        <>
            <Row className="gy-5" style={{ marginBottom: '20px' }}>
                <Col lg={5}>
                    <div className={styles.pageTitle} style={{ textTransform: 'none' }}>{title}</div>
                </Col>
                <Col lg={7}>
                    <div className={styles.contentCol}>
                        {/* <Link to={`/dashboard/${pakagenamme}/add`} style={{ textDecoration: 'none' }}>
                            <div className={styles.contentMaterial}>
                                <img src="/Icons/addIcon.svg" />
                                <div className={styles.iconText}>Add</div>
                            </div>
                        </Link> */}
                        <Link to={`/dashboard/${pakagenamme}/add`} style={{ textDecoration: 'none' }}>
                            <div className={styles.contentMaterial}>
                                <img src="/Icons/editIcon.svg" />
                                <div className={styles.iconText}>Edit</div>
                            </div>
                        </Link>
                        <div className={styles.contentMaterial}>
                            <img src="/Icons/deleteIcon.svg" />
                            <div className={styles.iconText}>Delete</div>
                        </div>
                        <h2 className="h3_main">14 July 2023, Friday</h2>
                    </div>
                </Col>
            </Row>
            <Row className="gy-5">
                <div className={styles.textDiv}>
                    <p className={`para_main ${styles.showText}`}>{text}
                    </p>
                </div>
            </Row>
        </>
    );
};

export default TermsScreen;