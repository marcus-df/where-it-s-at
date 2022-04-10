import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import EventCard from "../Components/EventCard";
import styles from './Events.module.css';

function Events() {
    
    const navigate = useNavigate();

    const fullURL = 'https://my-json-server.typicode.com/majazocom/events/events';
    const [events, setEvents] = useState([]);
    const [eventFilter, setEventFilter] = useState([]);

    function navigateTo(e, path) {
        navigate(`/events/${path}`, {state: e})
    }

    // Körs när sidan laddar in.
    useEffect(() => {
        fetchData()
    }, []);

    // Funktion för att hämta data från API
    const fetchData = async () => {
        const response = await fetch(fullURL);
        const data = await response.json();

        // Skickar data till flera useStates.
        setEvents(data);
        setEventFilter(data);
    }

    function searchEvents(e) {
        let orgEventList = [...events];
        let textValue = e.target.value.toLowerCase();
        let newEventList = orgEventList.filter(event => event.name.toLowerCase().includes(textValue));
        setEventFilter(newEventList);
    }
    
    return (
        <section className={styles.container}>
            <h1 className="heading">Events</h1>
            <input type="search" className={styles.search} onChange={(e) => searchEvents(e)} />
            {/* Skapar innehåll för varje objekt i events-listan */}
            { eventFilter.map((event, index) => (
                <div onClick={() => navigateTo(event, event.name.toLowerCase().replace(" ", "-"))} key={index}>
                    <EventCard event={event}/>
                </div>
            ))}    
        </section>
     );
}

export default Events;