import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  
    return (
        <button className={styles.btn} onClick={props.onClick} >
            {props.title} {props.children}
            
        </button>
    )
}

export default Button
