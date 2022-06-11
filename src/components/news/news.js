import React from "react";
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'

function News() {
    
    let [articles_random, set_articles_random] = React.useState(null);
    let [articles_editorial, set_articles_editorial] = React.useState(null);
    let [articles_main, set_articles_main] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/news/minor`)
        .then(res => {
            const data = res.data.data;
            set_articles_random(data);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/news/main`)
        .then(res => {
            const data = res.data.data;
            set_articles_main(data);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/news/editorial`)
        .then(res => {
            const data = res.data.data;
            set_articles_editorial(data);
        })
        
    },[]);

    if(!articles_main){articles_main = [{},{},{}] }
    if(!articles_random){articles_random = [{},{}] }
    if(!articles_editorial){articles_editorial = [{}] }

    return(
        <div>
            <section className="section">
                <div className="content has-text-centered">
                    <p className="title">The Kalmany United Broadcasting Company</p>
                    <p className="subtitle"><i>Reporting on the latest in the elections</i></p>
                </div>
            </section>
            <div className="tile is-ancestor is-vertical">
                <div className="tile">
                    <div className="tile is-parent is-vertical is-3">
                        <NewsArticleRandom data={articles_random[0]}/>
                        <NewsArticleRandom data={articles_random[1]}/>
                    </div>
                    <div className="tile is-parent is-5">
                        <NewsArticleMain data={articles_main[0]}/>
                    </div>
                    <div className="tile is-parent is-4">
                        <NewsArticleEditorial data={articles_editorial[0]}/>
                    </div>
                </div>
                <div className="tile is-hidden-mobile">
                    <div className="tile is-parent is-6">
                        <NewsArticleSub data={articles_main[1]} subtitle="Last month's news"/>
                    </div>
                    <div className="tile is-parent is-6">
                        <NewsArticleSub data={articles_main[2]}  subtitle="Earlier in the year..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NewsArticleMain(props){
    const [contentHidden, setContentHidden] = React.useState('is-hidden-mobile')
    if(!props.data){return <article>Data error</article>}
    var newsDate = new Date(props.data.datetime);
    return(
        <article className="tile is-child notification">
        <p className="is-italic">{newsDate.toLocaleString("en-GB", {day: "numeric",month: "short",year: "numeric"})}</p>
        <p className="title">{props.data.title}</p>
        <p className="subtitle">{props.data.subtitle}</p>
        <figure className={"image is-4by3 " + contentHidden}>
            <img src={`/images/news/${props.data.id}.jpg`}/>
            <figcaption>Photo by <a href="https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Lawton</a> on <a href="https://unsplash.com/s/photos/political-party?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </figcaption>
        </figure>
            <div className={"content " + contentHidden}>
                {ReactHtmlParser(props.data.content || '')}
            </div>
            <div className="content is-hidden-tablet">
                <a onClick={() => contentHidden === '' ? setContentHidden('is-hidden-mobile') : setContentHidden('')}>
                    {contentHidden === '' ? "Show less..." : "Read more..."}
                </a>
            </div>
        </article>
    )
}

function NewsArticleSub(props){

    if(!props.data){return <article>Data error</article>}
    var newsDate = new Date(props.data.datetime);
    return(
        <article className="tile is-child notification">
            <p className="title is-4">{props.data.title}</p>
            <p className="subtitle is-6">{newsDate.toLocaleString("en-GB", {day: "numeric",month: "short",year: "numeric"})}</p>
            <div className="content">
                {ReactHtmlParser(props.data.short_content || '')}
            </div>
        </article>
    
    )
}

function NewsArticleEditorial(props){
    const [contentHidden, setContentHidden] = React.useState('is-hidden-mobile')

    if(!props.data){return <article>Data error</article>}
    return(
    <article className="tile is-child notification">
        <div className="content">
            <p className="title is-4">EDITORIAL: {props.data.title}</p>
            <p className="subtitle is-6"><i>{props.data.subtitle}</i></p>
            <div className={"content " + contentHidden}>
                {ReactHtmlParser(props.data.content || '')}
            </div>
            <div className="content is-hidden-tablet">
                <a onClick={() => contentHidden === '' ? setContentHidden('is-hidden-mobile') : setContentHidden('')}>
                    {contentHidden === '' ? "Show less..." : "Read more..."}
                </a>
            </div>
        </div>
    </article>
        
    )
}

function NewsArticleRandom(props){
    const [contentHidden, setContentHidden] = React.useState('is-hidden-mobile')

    if(!props.data){return <article>Data error</article>}
    return(
        <article className="tile is-child notification">
            <p className="title is-4">{props.data.title}</p>
            <p className="subtitle is-6">{props.data.subtitle}</p>
            <div className={"content " + contentHidden}>
                {ReactHtmlParser(props.data.content || '')}
            </div>
            <div className="content is-hidden-tablet">
                <a onClick={() => contentHidden === '' ? setContentHidden('is-hidden-mobile') : setContentHidden('')}>
                    {contentHidden === '' ? "Show less..." : "Read more..."}
                </a>
            </div>
        </article>
        
    )
}

export default News;