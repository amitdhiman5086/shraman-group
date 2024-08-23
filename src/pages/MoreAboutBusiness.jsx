import React from 'react'
import { useParams } from 'react-router-dom'

const MoreAboutBusiness = () => {
    const  {id} = useParams()
  return (
    <div>MoreAboutBusiness
        <h1>Id is {id}</h1>
    </div>
  )
}

export default MoreAboutBusiness