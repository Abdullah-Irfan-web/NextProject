import React from 'react'
import Link from 'next/link'
const Homepage = () => {
    const clients=[{
        id:"Max",
        name:"Maximum"
    },{
        id:"Min",
        name:"Minimum"
    }];
  return (
    <div>
      <ul>
        <li><Link href="/abc">Dynamic</Link></li>
       {clients.map((client)=>(
        <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link></li>
       ))}
      </ul>
    </div>
  )
}

export default Homepage
