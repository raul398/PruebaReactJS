import React from 'react'
import './styles/Welcome.css'

function Welcome(props){
 return(
    <div className="Container">
        <div className="Fitness-User-Info">
            <h1>Hello ¡{props.username}!</h1>
            <p>Este es mi componente nuevo</p>

        </div>

    </div>
 )
}

export default Welcome