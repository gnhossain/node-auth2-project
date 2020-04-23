import React, { useEffect, useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import Logout from './Logout';

export default function UserList(){

    const [users, setUsers] = useState([]);

    useEffect( () => {
        axiosWithAuth()
        .get('/api/users')
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
        })
        .catch(err => console.log(err))
    }, []);


    return(
        <div>
            <Logout/>
           
            <div >
                {users.map( user =>
                    <h1>{user.username}</h1>
                )}
            </div>
        </div> 
    )
}