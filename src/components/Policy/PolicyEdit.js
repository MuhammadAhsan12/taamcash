import React, { useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import styles from "./Policy.module.css";

const PolicyEdit = ({ pakagenamme, title, text }) => {

    const [form, setForm] = useState({
        title,
        text,
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Form onSubmit={formSubmitHandler}>
                <Row className="gy-5" style={{ marginBottom: '40px' }}>
                    <Col lg={12}>
                        <div className={styles.pageTitle} style={{ textTransform: 'none' }}>{title}</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className={styles.form}>
                            <div className={`mb-4`} style={{marginBottom: '40px'}}>
                                <Form.Group
                                    className={styles.formGroup}
                                // controlId="title"
                                >
                                    <Form.Label className={styles.formTitle}>Title</Form.Label>
                                    <Form.Control
                                        className={styles.formTitleText}
                                        required
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>

                            <div className={`mb-4`}>
                                <Form.Group
                                    className={styles.formGroup}
                                // controlId="text"
                                >
                                    <Form.Control as="textarea" rows={3}
                                        className={styles.formDescriptionText}
                                        required
                                        name="text"
                                        value={form.text}
                                        onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="gy-5" style={{ marginBottom: '20px' }}>
                    <Col lg={12}>
                        <div className={styles.button}>
                            <button type="submit" className={styles.saveButton}>Save</button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default PolicyEdit