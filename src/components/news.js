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
                    <p class="title">The Kalmany United Broadcasting Company</p>
                    <p class="subtitle"><i>Reporting on the latest in the elections</i></p>
                </div>
            </section>
            <div class="tile is-ancestor is-vertical">
                <div class="tile">
                    <div class="tile is-parent is-vertical is-3">
                        <NewsArticleRandom data={articles_random[0]}/>
                        <NewsArticleRandom data={articles_random[1]}/>
                    </div>
                    <div class="tile is-parent is-5">
                        <NewsArticleMain data={articles_main[0]}/>
                    </div>
                    <div class="tile is-parent is-4">
                        <NewsArticleEditorial data={articles_editorial[0]}/>
                    </div>
                </div>
                <div class="tile">
                    <div class="tile is-parent is-6">
                        <NewsArticleSub data={articles_main[1]} subtitle="Last month's news"/>
                    </div>
                    <div class="tile is-parent is-6">
                        <NewsArticleSub data={articles_main[2]}  subtitle="Earlier in the year..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NewsArticleMain(props){
    if(!props.data){return <article>Data error</article>}
    return(
        <article class="tile is-child notification">
        <p class="title">{props.data.title}</p>
        <p class="subtitle">{props.data.subtitle}</p>
        <figure class="image is-4by3">
            <img src={`../images/news/${props.data.id}.jpg`}/>
            <figcaption>Photo by <a href="https://unsplash.com/@element5digital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Element5 Digital</a> on <a href="https://unsplash.com/s/photos/democracy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </figcaption>
        </figure>
        <div className="content">
            {ReactHtmlParser(props.data.content || '')}
        </div>
        </article>
    )
}

function NewsArticleSub(props){
    if(!props.data){return <article>Data error</article>}
    return(
        <article class="tile is-child notification">
        <p class="title is-4">{props.data.title}</p>
        <p class="subtitle is-6">{props.subtitle}</p>
        <div className="content">
            {ReactHtmlParser(props.data.short_content || '')}
        </div>
        </article>
    
    )
}

function NewsArticleEditorial(props){
    if(!props.data){return <article>Data error</article>}
    return(
    <article class="tile is-child notification">
        <div class="content">
            <p class="title is-4">EDITORIAL: {props.data.title}</p>
            <p class="subtitle is-6"><i>{props.data.subtitle}</i></p>
            <div class="content">
                {ReactHtmlParser(props.data.content || '')}
            </div>
        </div>
    </article>
        
    )
}

function NewsArticleRandom(props){
    if(!props.data){return <article>Data error</article>}
    return(
        <article class="tile is-child notification">
            <p class="title is-4">{props.data.title}</p>
            <p class="subtitle is-6">{props.data.subtitle}</p>
            <div className="content">
                {ReactHtmlParser(props.data.content || '')}
            </div>
        </article>
        
    )
}

export default News;