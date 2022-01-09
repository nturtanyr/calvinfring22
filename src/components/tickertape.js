import React from "react"
import axios from 'axios';
import styles from "./tickertape.module.css"

class TickerTape extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_ROOT}/newsfeed/latest`)
        .then(res => {
            const news = res.data.data;
            this.setState({ news });
        })
    }

    render(){
        return (
            <section>
                
                <div className={styles.tape}>
                    <div className={styles.ticker}>
                        {
                            this.state.news.map(feed =>
                                <div key={feed.id} className={styles.item}>{feed.message}</div>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default TickerTape;