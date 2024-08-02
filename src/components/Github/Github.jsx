import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex space-x-16'>
          <img src="https://avatars.githubusercontent.com/u/149703014?v=4" alt="Git picture" width={300} />
         
    <ol> 
<a href="https://github.com/soham1006?tab=repositories">
<li> My Projects :</li>
<li>Amazon_webpage </li>
<li>Rock-Paper-Scissor Game</li>
<li>Error-page</li>
<li>Tic-Tac-Toe Game</li>
<li>webPage</li></a>
</ol>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}