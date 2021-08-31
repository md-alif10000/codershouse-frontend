import React from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import styles from "./Phone.module.css";

const Phone = ({ nextStep }) => {
  return (
    <div>
      <Card title="Enter your phone number" icon="./images/phone.png">
        <div className={styles.inputContainer}>
          <img src="./images/phone.png" alt="" />
          <input type="text" placeholder="013096xxxxx" />
        </div>

        <Button title="Next" onClick={() => nextStep()}>
          <img src="./images/arrow.png" alt="" />
        </Button>
      </Card>
    </div>
  );
};

export default Phone;
