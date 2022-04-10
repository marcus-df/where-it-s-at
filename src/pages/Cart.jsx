import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../App';


function Cart() {

    const [globalData, setGlobalData] = useContext(GlobalContext);
    const [totalTicketCost, setTotalTicketCost] = useState(0)

    function calcTotalCost() {
        let totalCost = 0;

        globalData.forEach(element => {
            totalCost = totalCost + (element.event.price * element.ticketAmount);
        });

        setTotalTicketCost(totalCost);
    }

    function changeTicketAmount(index, value) {
        let newArray = [...globalData];
        value ? newArray[index].ticketAmount++ : newArray[index].ticketAmount--;

        if (newArray[index].ticketAmount <= 0) {
            newArray.splice(index, 1);
        }

        setGlobalData(newArray);
    }

    useEffect(() => {
        calcTotalCost()
    }, [globalData]);

    return (
        <section className={styles.container}>
            <h1 className='heading'>Order</h1>
            {
                globalData.map((data, index) => (
                    <div key={index} className={styles.tickets}>
                        <h3 className='subheading'>{data.event.name}</h3>
                        <p className='info-teal'>{data.event.when.date} {data.event.when.from} - {data.event.when.to} </p>
                        <div className={styles.ticket_amount}>
                            <button className={styles.LB} onClick={() => changeTicketAmount(index, false)}>-</button>
                            <span>{data.ticketAmount}</span>
                            <button className={styles.RB} onClick={() => changeTicketAmount(index, true)}>+</button>
                        </div>
                    </div>
                ))
            }
            <span className={styles.info}>Totalt värde på order</span>
            <h2 className={styles.price_big}>{totalTicketCost} SEK</h2>
            <Link to="/tickets">
                <button className='cta_btn'>Skicka order</button>
            </Link>
        </section>
    );
}

export default Cart;