import React from 'react'
import styles from './Card.module.css'
import Button from '../Button/Button'

const Cards = ({user}) => {
    return (
        <div className={styles.user}>
          <div className={styles.user_container}>
              <div className={styles.user_profile}>
                  <b>{user.name.charAt(0)}</b>
              </div>
              <div class="user_info">
                  <p className={styles.user_name}>{user.name}</p>
                  <p className={styles.user_id}>@{user.username}</p>
                  <p className={styles.user_mail}>http:/{user.website}</p>
                  <Button id = {user.id}/>
              </div>
  
          </div>
      </div>
    )
  }

export default Cards;