import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button/Button'
import Card from '../../components/shared/Card/Card'
import styles from './Home.module.css'

const Home = (props) => {
    return (
        <Card  title="Welcome To Coderhouse" icon='./images/logo.png' >
          
        
            <p  className={styles.text} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur vitae explicabo dolorum inventore voluptas amet rem deleniti corrupti quod blanditiis.</p>
            <Button title="Get Your username" onClick={()=>props.history.push('/register')} >
                <img src="./images/arrow.png" alt="" />
            </Button>

            <div  className={styles.signin} >
 
                <span> Have a Invite Text ? <Link to='/login' style={{color:" #0077FF",fontWeight:"600"}} >Sign In </Link> </span>
            </div>
          
            
   

        </Card>
     
    )
}

export default Home
