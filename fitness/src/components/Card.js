import React from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

class Card extends React.Component {
    render(){
        return ( 
            <div className='card mx-auto Fitness-Card'>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img  className='image float-right' src={circlesImg} />
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>Technic Guides</h1>
                            <p>Learn amazing stret workput and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Card