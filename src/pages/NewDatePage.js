import React from 'react';
import { useHistory } from 'react-router-dom';
import NewDateForm from '../components/components/dates/NewDateForm';

function NewDatePage() {
    const history = useHistory();
    function addDateHandler(dateDate){
        fetch('https://save-the-date-app-default-rtdb.firebaseio.com/dates.json', 
        {
            method: 'POST',
            body: JSON.stringify(dateDate),
            headers: { 
                'Content-Type' : 'application/json'
            }
        }
    ).then(() => {
        history.replace('/');
    });
    }

    return (
        <div>
            <h1>Add new date!</h1>
            <NewDateForm onSaveTheDate={addDateHandler}/>

        </div>
    )
}

export default NewDatePage
