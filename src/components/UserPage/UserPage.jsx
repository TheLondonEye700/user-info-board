import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './UserPage.module.css'

const UserPage = (  ) => {
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)

    const id = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id.uid}`)
            .then((res) => {
                setUser(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                alert("Fail to get data");
                console.log(err);
            })
    }, [id])

    return (
        <div className={styles.container}>
            {
                (!loaded)
                    ? 'Not loaded'
                    :
                    <div>
                        <p>- name: {user.name}</p>
                        <p>- username: {user.username}</p>
                        <p>- email: {user.email}</p>
                        <p>- phone: {user.phone}</p>
                        <p>- company: {user.company.name}</p>
                        <p>- website: {user.website}</p>
                        <p>- address</p>
                        <ul>
                            <li>street: {user.address.street}</li>
                            <li>suite: {user.address.suite}</li>
                            <li>city: {user.address.city}</li>
                            <li>zipcode: {user.address.zipcode}</li>
                        </ul>
                    </div>
            }
        </div>
    )
}

export default UserPage;