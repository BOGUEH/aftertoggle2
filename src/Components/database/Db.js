import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './db.css';
import ProfileDataBase from './ProfileDataBase';

export default function Db() {

    const [profile, setProfile] = useState([])

    useEffect(()=>{
        axios.get('http://emergency-report-app.herokuapp.com/api/profile/allprofiles')
        .then((response) => {
          console.log(response);
          console.log(response.data.data)
          setProfile(response.data.data)
        })
        .catch((error) =>  {
          console.log(error);
        })
        },[])
       
    return (
        <div>
            {
                profile.map((data) => (
                        <ProfileDataBase profile={profile}/>
                ))
            }
      
        </div>
    )
}
