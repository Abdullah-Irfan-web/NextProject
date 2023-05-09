import React from 'react'
import { useRouter } from 'next/router'

const Clintid = () => {
    const router=useRouter();
  return (
    <div>
      <h1>Clint with {router.query.client}</h1>
    </div>
  )
}

export default Clintid
