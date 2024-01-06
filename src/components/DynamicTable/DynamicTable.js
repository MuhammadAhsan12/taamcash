// DynamicTable.js
import React, { useState } from "react";
import styles from "./DynamicTable.module.css";
import { Link } from "react-router-dom";

const DynamicTable = ({ data, viewLink, view }) => {
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [mydata, setData] = useState(data);
  const handleStatusChange = (rowIndex, value) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex] = { ...newData[rowIndex], Status: value };
      return newData;
    });
  };

  const getStatusCellStyle = (status) => {
    if (
      viewLink == "/dashboard/transactionmanagementview"
    ) {
      return "";
    } if (
      status === "Active" ||
      status === "Completed" ||
      status === "Resolved"
    ) {
      return styles.activeStatus;
    } else if (
      status === "Deactivate" ||
      status === "Incompleted" ||
      status === "Pending"
    ) {
      return styles.inactiveStatus;
    } else {
      return "";
    }
  };

  const renderTransactionNameCell = (transactionName, money) => {
    if (transactionName === "Wallet To Wallet Transfer") {
      // Assuming you have icons for send and received, update the paths accordingly
      const iconSrc =
        money === "send"
          ? "/Icons/money-send.svg"
          : "/Icons/money-received.svg";

      return (
        <div className={styles.transactionNameCell}>
          <img src={iconSrc} alt={money} className={styles.transactionIcon} />
          <span>{transactionName}</span>
        </div>
      );
    }
    return <span>{transactionName}</span>;
  };
  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              {Object.keys(data[0])
                .filter((key) => key !== "Money") // Exclude the "Money" column
                .map((key) => (
                  <th key={key}>{key}</th>
                ))}
              {view && <th>View</th>}
            </tr>
          </thead>
          <tbody>
            {mydata.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(row)
                  .filter(([key]) => key !== "Money") // Exclude the "Money" column
                  .map(([key, value], colIndex) => (
                    <td key={colIndex}>
                      {key === "Status" && viewLink !== "/dashboard/transactionmanagementview" ? (
                        <select
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                          className={
                            key === "Status"
                              ? `${styles.statusCell} ${getStatusCellStyle(
                                value
                              )}`
                              : ""
                          }
                          onChange={(e) =>
                            handleStatusChange(rowIndex, e.target.value)
                          }
                        >
                          {viewLink === "/dashboard/transactionmanagementview" ? (
                            <>
                              <option value="Completed" selected>
                                Completed
                              </option>
                              <option value="Incompleted">Incompleted</option>
                            </>
                          ) : value === "Completed" ? (
                            <>
                              <option value="Completed" selected>
                                Completed
                              </option>
                              <option value="Incompleted">Incompleted</option>
                            </>
                          ) : value === "Incompleted" ? (
                            <>
                              <option value="Completed">Completed</option>
                              <option value="Incompleted" selected>
                                Incompleted
                              </option>
                            </>
                          ) : value === "Active" ? (
                            <>
                              <option value="Active" selected>
                                Active
                              </option>
                              <option value="Deactivate">Deactivate</option>
                            </>
                          ) : value == "Deactivate" ? (
                            <>
                              <option value="Active">Active</option>
                              <option value="Deactivate" selected>
                                Deactivate
                              </option>
                            </>
                          ) : value === "Resolved" ? (
                            <>
                              <option value="Resolved" selected>
                                Resolved
                              </option>
                              <option value="Pending">Pending</option>
                            </>
                          ) : value === "Pending" ? (
                            <>
                              <option value="Resolved">Resolved</option>
                              <option value="Pending" selected>
                                Pending
                              </option>
                            </>
                          ) : null}
                        </select>
                      ) : key === "Transaction Name" ? (
                        renderTransactionNameCell(value, row["Money"])
                      ) : key === "Money" ? (
                        ""
                      ) : (
                        value
                      )}
                    </td>
                  ))}

                {view && (
                  <td>
                    {" "}
                    <Link to={viewLink}>
                      <img src="/Icons/view.svg" alt={`View ${row.username}`} />
                    </Link>{" "}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DynamicTable;
