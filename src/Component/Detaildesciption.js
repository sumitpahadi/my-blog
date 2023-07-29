import React from 'react'
import { useContext } from 'react'
import Contextapi from './Contextapi/Contextapi'


function Detaildesciption() {
    const {id}=useContext(Contextapi)

  return (
    <>
    {
        id.map((item,index)=>{
            return(
                <div className="parent">
                    <div className="child" key={index}><img src={data.Image} alt="click here" /></div>
                </div>
            )
        })
    }
    
    </>
  )
}

export default Detaildesciption
