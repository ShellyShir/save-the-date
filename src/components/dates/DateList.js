import React from 'react'
import classes from './DateList.module.css'
import DateItem from './DateItem'


function DateList(props) {
    return (
        <ul className={classes.list}>
            {props.dates.map((date) => (
                <DateItem 
                key={date.id}
                id={date.id}
                title={date.title}
                date={date.date}
                image={date.image}
                description={date.description}
                />
            ))}
        </ul>
    );
}

export default DateList
