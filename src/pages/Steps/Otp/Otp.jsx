import React from 'react'
import Button from '../../../components/shared/Button/Button'

const Otp = ({nextStep}) => {
    return (
        <div>
            OTP
            <Button title="Next" onClick={() => nextStep()}></Button>
            
        </div>
    )
}

export default Otp
