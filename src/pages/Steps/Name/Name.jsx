import React from 'react'
import Button from '../../../components/shared/Button/Button'

const Name = ({nextStep}) => {
    return (
        <div>
            <Button title="Next" onClick={() => nextStep()}></Button>
        </div>
    )
}

export default Name
