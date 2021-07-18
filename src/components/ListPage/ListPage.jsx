import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cards  from '../Cards/Card'
import styles from './ListPage.module.css'

const ListPage = () => {

    const [userList, setUserList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) =>{
            setUserList(res.data);
            setLoaded(true);
        })
        .catch((err)=>{
            alert("Fail to get data");
            console.log(err);
        })
        
    }, [])

    return (
      <div className = {styles.container}>
          {(!loaded)
          ? 'Not loaded'
          : userList.map((user)=>{
              return <Cards user={user} />
          })
          }
       </div> 
    );
  }

export default ListPage;