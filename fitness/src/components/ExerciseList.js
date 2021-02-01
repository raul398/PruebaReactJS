import React from 'react'
import Card from './Card'

function ExerciseList(props){
    return(
        <div>
            { props.exercises.map((excercise) => {
                return(
                    <Card 
                        title={excercise.title}
                        description={excercise.description}
                        img={excercise.img}
                        leftColor={excercise.leftColor}
                        rightColor={excercise.rightColor}
                    />
                )
            })}
        </div>
    )

}

export default ExerciseList