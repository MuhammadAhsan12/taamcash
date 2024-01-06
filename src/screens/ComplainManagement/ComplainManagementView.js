import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container, Button } from "react-bootstrap";
import styles from "./ComplainManagement.module.css";
import { Col, Row, Form } from "react-bootstrap";
import PersonData from '../../components/PersonData/personData';
import { Link,useLocation } from 'react-router-dom';
const Data = [
  { "Request Id": "ID#4411000", "User Name": "David Alex", "Status": "Pending", "Date": "07-11-2023" },
  // Add more rows as needed
];
const ComplainManagementView = () => {
  const location = useLocation();
  let val = new URLSearchParams(location.search).get('closeVal');
  let CloseVal = val === "true" ? true : false;
  const [closeMenu,setCloseMenu]=useState(CloseVal);
  const [form, setForm] = useState({
    // title,
    // text,
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const [calendar, setCalendar] = useState(false);
  return (
    <>
    <Header setCloseState={setCloseMenu} />
      <div className="main_div">
      <Sidebar setCloseState={closeMenu} />
        <div className={styles.main}>
          <Container className={styles.maindiv}>
            <div className={styles.pageTitle}>
              <Link to="/dashboard/complainmanagement"><img src='../../Icons/arrow.svg' /></Link>
              <div>Complain Requests</div>
            </div>
            <PersonData activeBtn="false" complainId="ID#4411000" name="David Alex" nameInSection="false" location="Sydney, Australia" joined="07/11/2023" transactionId="none" ph="8222111222114" subDate="8-11-2023" accNo="9558222111222114" status="none" balance="none" />
            <div className={styles.userActivity}>
              <div >
                <div>Complain</div>
              </div>
            </div>
            <div className={styles.body}>
              <Form onSubmit={formSubmitHandler}>
                <Row>
                  <Col lg={12}>
                    <div className={styles.form}>
                      <div className={`mb-4`}>
                        <Form.Group
                          className={styles.formGroup}
                        // controlId="text"
                        >
                          <Form.Control as="textarea" rows={3}
                            className={styles.formTitleText}
                            required
                            name="text"
                            value="Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices. Sed dui vitae tortor aliquet. Nibh id dignissim nunc nisl amet ultrices at. Maecenas in tristique dui fames risus nec duis scelerisque. Ornare nulla urna sit sed. Volutpat est netus habitant nulla aliquam tristique sem tristique. Convallis vitae in ut lobortis elit ridiculus. Eget pellentesque fusce scelerisque consectetur dignissim diam enim justo. Semper cursus tellus odio odio. Adipiscing vivamus aliquam bibendum eget amet. Aliquam duis donec nisl netus at aliquam tempor a auctor.

                            Mauris vel ut nunc feugiat. At integer auctor pellentesque accumsan eu convallis leo congue leo. At vitae nunc tristique purus ac quis. Donec et sodales aliquet vitae. Mi sit sem dignissim sagittis fusce id. Pulvinar aliquam mauris amet enim magna id et. Quam neque accumsan nisl at blandit urna et dignissim mi. Rhoncus praesent luctus lacinia velit volutpat a at lorem.
                            "
                            placeholder='Write notification here.....'
                            onChange={handleChange} />
                        </Form.Group>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>

        </div>

      </div>
    </>
  )
}

export default ComplainManagementView