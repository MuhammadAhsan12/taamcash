import React from "react";
import styles from "./personData.module.css";

const PersonData = ({name,nameInSection,location,joined,activeBtn,complainId,subDate,transactionId,ph,accNo,status,balance}) => {
     // Pagination functionality to be added according to the APIs 
  return (
    <>
                <div className={styles.contentUser}>
                <div className={styles.user}>
                    {name==="David Alex"?<img src="../../Images/profile.svg" className={styles.personImage} />: <img src="../../Images/profile1.svg" className={styles.personImage} /> }
                    
                    <div className={styles.userDetail}>
                      <div className={styles.person}>
                      <div className={styles.personName}>{name}<span><img src='../../Icons/dot.svg'/> Online</span></div>
                      </div>

                        <div className={styles.personDetail}>{location}</div>
                        <div className={styles.personDetail}>Joined on {joined}</div>
                    </div>
                </div>
                <div>
                {activeBtn!=="false"?
            
            <div          
            // onClick={() => setCalendar(true)}
            className={styles.headButton}
          >
            Active <img src="../../Icons/dropdownIcon.svg" />
          </div>:<span>

        </span>
         }
                </div>
            </div>
            <div className={styles.userInformation}>
            {nameInSection!=="false"?
            <div>
            <div>Name</div>
            <div>{name}</div>
        </div>:<span>

        </span>
         }   
         {complainId!=="false"?
            <div>
            <div>Complain ID</div>
            <div>{complainId}</div>
        </div>:<span>

        </span>
         }      
            {transactionId!=="none"?
            <div>
            <div>Transaction Id</div>
            <div>{transactionId}</div>
        </div>:<span>

        </span>
         }
      {ph!=="none"?
            <div>
            <div>Phone Number</div>
            <div>{ph}</div>
        </div>:<span>

        </span>
         }
                {accNo!=="none"?
            <div>
            <div>Account Number</div>
            <div>{accNo}</div>
        </div>:<span>

        </span>
         }
              
                          {balance!=="none"?
            <div>
            <div>Wallet Balance</div>
            <div>{balance}</div>
        </div>:<span>

        </span>
         }
                {status!=="none"?
            <div>
            <div>Status</div>
            <div>{status}</div>
        </div>:<span>

        </span>
         }
               {subDate!=="false"?
            <div>
            <div>Submssion Date</div>
            <div>{subDate}</div>
        </div>:<span>

        </span>
         }
            </div>
    </>  );
};

export default PersonData;
