import React, { useState } from "react";
import { getUsers } from "../../lib/sparsh-api/api";
import Button from "../Button/Button";
import styles from "./Form.module.scss";

const Form = () => {
  const [data, setData] = useState({
    users: [],
    loading: true,
  });

  const handleClick = async () => {
    try {
      const result = await getUsers();
      setData({
        users: result,
        loading: false,
      });
    } catch (err) {
      console.log("Error! Couldn't fetch data from API: ", err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formHeader}>Glad to have you here at SparshApp</h1>
      <Button onClick={handleClick}>Fetch Data</Button>
      {data.loading ? (
        []
      ) : (
        <div className={styles.formResponse}>
          <h2 className={styles.formResponseHeader}>
            Here is some data fetched from the API:
          </h2>
          <pre className={styles.formResponseData}>
            {JSON.stringify(data.users, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Form;
