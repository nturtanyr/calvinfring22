import React from "react"
import axios from 'axios';
import styles from "./tickertape.module.css"

export default function TickerTape() {

    const [newsFeed, setNewsFeed] = React.useState([]);
    const [timer, setTime] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/news/feed`)
        .then(res => {
            const newsFeed = res.data.data;
            setNewsFeed(newsFeed);
        })

        const interval = setInterval(() => {
            setTime(timer => timer + 1);
        }, 60000);
        
        return () => clearInterval(interval);
        
    },[timer]);

    return (
        <section>
            
            <div className={styles.tape}>
                <div className={styles.ticker}>
                    {
                        newsFeed.map(feed =>
                            <div key={feed.id} className={styles.item}>{feed.message}</div>
                        )
                    }
                </div>
            </div>
        </section>
    )
    
}