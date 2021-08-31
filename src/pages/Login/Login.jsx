import React,{useState} from 'react'
import Otp from '../Steps/Otp/Otp';
import Phone from '../Steps/Phone/Phone';

const Login = () => {
    const [step, setStep] = useState(1);
    const nextStep=()=>{
      setStep(step+1)
    }
  switch(step){
      case 1:
          return <Phone   nextStep={nextStep} />
          case 2:
            return <Otp  nextStep={nextStep}  />
  }
}

export default Login
