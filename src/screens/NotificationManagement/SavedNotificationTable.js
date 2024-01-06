import React from 'react'
import styles from "./NotificationManagement.module.css";
import Pagination from "../../components/Pagination/Pagination";

const Data = [
  { "Notifications": "Title", "Add": "", "Delete": "", "Push": "" },
  // Add more rows as needed
];

const SavedNotificationTable = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Notifications</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Push</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div className={styles.rowStyling}><span>Title</span> <span className={styles.description}>Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices.</span></div></td>
                <td>
                  <img src="/Icons/editIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/deleteIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/push.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td><div className={styles.rowStyling}><span>Title</span> <span className={styles.description}>Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices.</span></div></td>
                <td>
                  <img src="/Icons/editIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/deleteIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/push.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td><div className={styles.rowStyling}><span>Title</span> <span className={styles.description}>Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices.</span></div></td>
                
                <td>
                  <img src="/Icons/editIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/deleteIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/push.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td><div className={styles.rowStyling}><span>Title</span> <span className={styles.description}>Lorem ipsum dolor sit amet consectetur. Scelerisque facilisi a lacinia ultricies morbi ultrices.</span></div></td>
                <td>
                  <img src="/Icons/editIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/deleteIcon.svg" alt="" />
                </td>
                <td>
                  <img src="/Icons/push.svg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </>
  )
}

export default SavedNotificationTable