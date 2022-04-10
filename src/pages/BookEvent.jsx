import styles from './BookEvent.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import { GlobalContext } from '../App';

function BookEvent() {

    const location = useLocation();
    const state = location.state;

    const [, setGlobalData] = useContext(GlobalContext);
    const [tickets, setTickets] = useState(1);
    const [newData, ] = useState({
            event: {},
            ticketAmount: 0,
        });
    
    // Totala kostnaden
    let price = state.price * tickets;

    function addGlobalData(ticketAmount) {
        
        let addedData = {...newData};
        addedData.ticketAmount = ticketAmount;
        addedData.event = state;

        setGlobalData(globalData => [...globalData, addedData])
    }

    return (
        <section className={styles.container}>
            <h1 className='heading'>Event</h1>
            <span className={styles.info}>You are about to score some tickets to</span>
            <h1 className='heading'>{state.name}</h1>
            <p className='info-teal-bold'>
                {state.when.date} kl {state.when.from} - {state.when.to}
            </p>
            <p className='location'>@ {state.where}</p>
            <div className={styles.tickets}>
                <h2 className={styles.price_big}>{price} SEK</h2>
                <div className={styles.ticket_amount}>
                    <button className={styles.LB} onClick={() => setTickets(tickets - 1)}>-</button>
                    <span>{tickets}</span>
                    <button className={styles.RB} onClick={() => setTickets(tickets + 1)}>+</button>
                </div>
            </div>
            <Link to="/cart">
                <button className='cta_btn' onClick={() => addGlobalData(tickets)}>Lägg i varukorgen</button>
            </Link>
        </section>
    );
}

export default BookEvent;