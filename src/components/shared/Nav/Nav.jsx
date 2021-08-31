import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <div  className={`${styles.navbar} container`} >
            <NavLink activeClassName={styles.link} to="/" >
          <img src='./images/logo.png' alt="logo" />
          <span style={{marginLeft:"10px"}} >Coder's House</span>

            </NavLink>
        </div>
    )
}

export default Nav
