import React from 'react'
import Button from '../../../components/shared/Button/Button'

const Avatar = ({nextStep}) => {
    return (
        <div>
            <Button title="Next" onClick={() => nextStep()}></Button>
            
        </div>
    )
}

export default Avatar
 