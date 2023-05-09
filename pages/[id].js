import React from 'react'
 
import {useRouter} from 'next/router'

const Dynamic = () => {
   const router=useRouter();
  return (
    <div>
      <h1>Dynamic page {router.query.id}</h1>
    </div>
  )
}

export default Dynamic