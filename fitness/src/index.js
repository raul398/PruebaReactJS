//import React from 'react'
//import ReactDOM from 'react-dom'
//
//const name = 'Raul'
//const User = {
//  name : 'Raul',
//  lastname : 'Argañaraz Estay',
//  avatar : 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png'
//}
//
//function getName(user){
//  return (user.name + ' ' + user.lastname)
//}
//
//function getGreeting(user){
//  if (user) {
//    return <h1>Hello {getName(User)}</h1>
//  } else {
//    return 'No hay Usuario'
//  }
//}
//
////const element = <div>{getGreeting(User)}</div>
//
//const element = (
//  <div>
//    <h1>{getGreeting(User)}</h1>
//    <img src= {User.avatar} />
//  </div>
//)
//
//const container = document.getElementById('root')
//
////ReactDOM.render(__QUEE LEMENTO, __DONDE LO VA A RENDERIAR)
//
//ReactDOM.render(element, container)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'

//const element = 
const container = document.getElementById('root')

ReactDOM.render(<Card />, container)