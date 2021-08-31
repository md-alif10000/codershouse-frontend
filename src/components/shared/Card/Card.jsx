import React from 'react'
import styles from './Card.module.css'
const Card = (props) => {
    return (
        <div  className={styles.card} >
                <h2 className={styles.card_title}   >  <img src={props.icon} alt="" />  <span> {props.title} </span></h2>
            {props.children}
            
        </div>
    )
}

export default Card
