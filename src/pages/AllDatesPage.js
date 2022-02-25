import { useState, useEffect } from 'react';
import DateList from '../components/components/dates/DateList';


function AllDatesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedDates, setLoadedDates] =useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://save-the-date-app-default-rtdb.firebaseio.com/dates.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const dates = [];

                for(const key in data) {
                    const date = {
                        id:key,
                        ...data[key]
                    };

                    dates.push(date)
                }

                setIsLoading(false)
                setLoadedDates(dates)
            });
    }, [])

    if (isLoading) {
        return (
            <section>
            <p>LOADING...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Dates!</h1>
            <DateList dates={loadedDates}/>
        </section>
    )
}

export default AllDatesPage
