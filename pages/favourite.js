import React, {useEffect } from 'react'
import { useContext } from 'react'
import FavoriteContext from '../Fav';
import Link from 'next/link';
import {auth} from '../firebase-config'
import { signOut } from 'firebase/auth';
import Router from 'next/router';
const favourite = () => {
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
    
        if (authToken) {
            Router.replace('/favourite')
        }
    
        if (!authToken) {
            Router.replace('/login')
        }
    }, [])
    const Favctx=useContext(FavoriteContext);
    const logout=async()=>{
        await signOut(auth);
        console.log("hello")
        Router.replace('/')
      }
  return (
    <div className="container">
    <div className='logfav'>
   <span className='logout'> <button className='btn' onClick={logout}>logout</button> </span>
    <span className='fav'><Link href="/home">Home</Link> </span>
    </div>
    <h1>Favourite GIF </h1>
   

    <div className="output">

    {Favctx.Favorites && Favctx.Favorites.map((data)=>(
        
       <img src={data} alt=''/>
    ))}

    </div>
  </div>
  )
}

export default favourite