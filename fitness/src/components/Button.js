import React from 'react'
import './styles/Button.css'

function Button(props){
    return(
            <div className='row justify-content-center align-items-center'>
                <div className='mt-4'>
                    <img  className='' src={props.img} />
                </div>
            </div>
        )
   }
   
export default Button