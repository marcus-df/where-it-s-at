import styles from '../pages/Events.module.css';

    function EventCard(props) {
    
    let obj = props.event;
    
    // Ritar ut alla EventCards
    return ( 
        <article className={styles.card}>
            <div className={styles.date}>
                <span>{obj.when.date}</span>
            </div>
            <div>
                <h2 className='name'>{obj.name}</h2>
                <span className='location'>{obj.where}</span>
                <div className={styles.meta}>
                    <p className='time'>{obj.when.from} - {obj.when.to}</p>
                    <h4 className='info-teal-bold'>{obj.price} SEK</h4>
                </div>
            </div>
        </article>
     );
}

export default EventCard;