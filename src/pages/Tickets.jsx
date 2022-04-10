import styles from './Tickets.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../App';

function Tickets() {
    //Fult men det funkar (tvungen att deklarera varriablerna för varje funktion annars gick det inte att ändra style)
    let focusFirst = () => {
        let first = document.getElementById('0');
        let second = document.getElementById('1');
        let third = document.getElementById('2');
        first.style.zIndex = 3;
        first.style.top = '35px';
        first.style.width = '400px';
        first.style.backgroundColor = '#fff';
        second.style.zIndex = 2;
        second.style.top = '17.5px';
        second.style.width = '385px';
        second.style.backgroundColor = '#e7d1de';
        third.style.zIndex = 1;
        third.style.top = '0'
        third.style.width = '370px';
        third.style.backgroundColor = '#cba0ba';
    };

    let focusSecond = () => {
        let first = document.getElementById('0');
        let second = document.getElementById('1');
        let third = document.getElementById('2');
        second.style.zIndex = 3;
        second.style.top = '35px';
        second.style.width = '400px';
        second.style.backgroundColor = '#fff';
        first.style.zIndex = 2;
        first.style.top = '17.5px';
        first.style.width = '385px';
        first.style.backgroundColor = '#e7d1de';
        third.style.zIndex = 1;
        third.style.top = '0'
        third.style.width = '370px';
        third.style.backgroundColor = '#cba0ba';
    };

    let focusThird = () => {
        let first = document.getElementById('0');
        let second = document.getElementById('1');
        let third = document.getElementById('2');
        third.style.zIndex = 3;
        third.style.top = '35px';
        third.style.width = '400px';
        third.style.backgroundColor = '#fff';
        second.style.zIndex = 2;
        second.style.top = '17.5px';
        second.style.width = '385px';
        second.style.backgroundColor = '#e7d1de';
        first.style.zIndex = 1;
        first.style.top = '0'
        first.style.width = '370px';
        first.style.backgroundColor = '#cba0ba';
    };

    const ticketClick = (e) => {
        if (e.target.parentElement.id === '0') {
            focusFirst();
        } else if (e.target.parentElement.id === '1') {
            focusSecond();
        } else if (e.target.parentElement.id === '2') {
            focusThird();
        }
    };

    const [globalData] = useContext(GlobalContext);

    return (
        <section className={styles.container}>
            <h1 className='heading'></h1>
            <section className={styles.ticket_container}>
                {globalData.map((e, index) => (
                    <section id={index} className={styles.ticket} key={index} onClick={ticketClick}>
                        <div className={styles.cardHead}>
                            <p className={styles.light_bold}>WHAT</p>
                            <h3 className="subheading">{e.event.name}</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.location}>
                                <p className={styles.light_bold}>WHERE</p>
                                <h3 className={styles.dark_bold}>{e.event.where}</h3>
                            </div>
                            <div className={styles.when}>
                                <div>
                                    <p className={styles.light_bold}>WHEN</p>
                                    <h3 className={styles.dark_bold}>{e.event.when.date}</h3>
                                </div>
                                <div>
                                    <p className={styles.light_bold}>FROM</p>
                                    <h3 className={styles.dark_bold}>{e.event.when.from}</h3>
                                </div>
                                <div>
                                    <p className={styles.light_bold}>TO</p>
                                    <h3 className={styles.dark_bold}>{e.event.when.to}</h3>
                                </div>

                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <p className={styles.light_bold}>INFO</p>
                            <h3 className={styles.dark_bold}>ANTAL BILJETTER: {e.ticketAmount}</h3>
                            <svg width="164" height="60" viewBox="0 0 164 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.155273 60V0.409997H3.18527V60H0.155273ZM6.21527 60V0.409997H9.24527V60H6.21527ZM18.3353
                                60V0.409997H24.3953V60H18.3353ZM33.4932 60V0.409997H39.5532V60H33.4932ZM45.6132 60V0.409997H54.7032V60H45.6132ZM60.7632 
                                60V0.409997H63.7932V60H60.7632ZM66.8311 60V0.409997H69.8611V60H66.8311ZM78.9511 60V0.409997H85.0111V60H78.9511ZM88.0411 
                                60V0.409997H91.0711V60H88.0411ZM100.169 60V0.409997H103.199V60H100.169ZM106.229 60V0.409997H112.289V60H106.229ZM121.379 
                                60V0.409997H124.409V60H121.379ZM133.507 60V0.409997H142.597V60H133.507ZM145.627 60V0.409997H151.687V60H145.627ZM154.717 
                                60V0.409997H163.807V60H154.717Z" fill="black" fillOpacity="0.8" />
                            </svg>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default Tickets;