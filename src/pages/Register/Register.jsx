import React,{useState} from "react";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Register.module.css";
import Avatar from "../Steps/Avatar/Avatar";
import Name from "../Steps/Name/Name";
import Otp from "../Steps/Otp/Otp";
import Phone from "../Steps/Phone/Phone";
import Username from "../Steps/Username/Username";

const steps = {
  1: Phone,
  2: Otp,
  3: Name,
  4: Avatar,
  5: Username,
};

const Register = () => {
  const [step, setStep] = useState(1);

  const nextStep=()=>{
      setStep(step+1)
  }

  switch (step) {
    case 1:
      return <Phone nextStep={nextStep} />;
    case 2:
      return <Otp nextStep={nextStep}/>;
    case 3:
      return <Name nextStep={nextStep}/>;
    case 4:
      return <Avatar nextStep={nextStep}/>;
    case 5:
      return <Username nextStep={nextStep}/>;
      default:
        return 
  }
};

export default Register;
