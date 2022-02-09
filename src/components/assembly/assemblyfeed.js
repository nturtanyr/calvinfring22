import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import styles from "./assembly.module.css"
import ScrollToBottom from 'react-scroll-to-bottom';

export default function AssemblyFeed() {
    let params = useParams();
    let [timer, setTime] = React.useState(null);
    let [feedData, setFeedData] = React.useState(null);
    const messagesEndRef = React.createRef()

    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/assemblyfeed/` + params.id)
        .then(res => {
            const data = res.data.data;
            setFeedData(data);
        })

        const interval = setInterval(() => {
            setTime(timer => timer + 1);
        }, 3000);
        
        if(messagesEndRef.current){
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })}
        return () => clearInterval(interval);
    },[timer]);

    var feed = []
    if(feedData){
        feedData.forEach( (object) =>{
            if(object.style == "discussion_start" || object.style == "assembly_finish" || object.style == "assembly_start" || object.style == "vote_begin")
            {
                feed.push(
                    <AssemblyFeedTop key={`comment-${object.id}`} data={object}/>
                )
            }
            else{
                feed.push(
                    <AssemblyFeedAction key={`comment-${object.id}`} data={object}/>
                )
            }
        });
            
    }
    else
    {
        feed = <div><i>The assembly is yet to begin! The discussions will appear here.</i></div>
    }
    

    if(feedData)
    {
        return (
            <div>
                <div className="content has-text-centered">
                    <h3>Live Updates:</h3>
                </div>
                <div className={styles.feedContainer}>
                    {feed}
                    <div ref={messagesEndRef} />
                </div>
            </div>
        )
    }else{
        return (<progress className="progress is-primary" max="100"></progress>)
    }

    
}

class AssemblyFeedTop extends React.Component  {
    render() {
        var image_path

        // Determine image off style
        switch(this.props.data.style)
        {
            case "assembly_start":
                image_path = '/images/assembly-start.svg';
                break;

            case "vote_begin":
                image_path = '/images/assembly-voteBegin.svg';
                break;

            case "assembly_finish":
                image_path = '/images/assembly-finish.svg';
                break;

            case "discussion_start":
                image_path = ("/images/con-" + this.props.data.constituency_id + ".svg");
                break;
        }
        
        return (
            <div className={styles.feedTop}>
                <figure className="image is-64x64">
                    <img src={image_path} />
                </figure>
                <div className="ml-3">
                    <strong>{this.props.data.message}</strong>
                    <hr className={styles.commentRule}/>
                </div>
            </div>
        )
    }
}
class AssemblyFeedAction extends React.Component {
    render() {

        // Determine image off style and whether there's a candidate involved
        var image_path
        var text_class
        // No candidate means it's the final tallies of a motion being passed
        switch(this.props.data.style)
        {
            case "vote_for":
                image_path = '/images/assembly-actionFor.svg';
                break;

            case "vote_against":
                image_path = '/images/assembly-actionAgainst.svg';
                break;

            case "vote_abstain":
                image_path = '/images/assembly-actionMeh.svg';
                break;

            case "vote_for_total":
                image_path = '/images/assembly-votesFor.svg';
                break;

            case "vote_against_total":
                image_path = '/images/assembly-votesAgainst.svg';
                break;

            case "vote_success":
                image_path = '/images/assembly-votePassed.svg';
                break;

            case "vote_failure":
                image_path = '/images/assembly-voteFailed.svg';
                break;
            case "positive_success":
                image_path = '/images/assembly-actionFor.svg';
                text_class = "has-text-success"
                break;
            case "positive_failure":
                image_path = '/images/assembly-failedFor.svg';
                text_class = "has-text-black"
                break;
            case "negative_success":
                image_path = '/images/assembly-actionAgainst.svg';
                text_class = "has-text-danger"
                break;
            case "negative_failure":
                image_path = '/images/assembly-failedAgainst.svg';
                text_class = "has-text-black"
                break;
            case "neutral_bitetongue":
                image_path = '/images/assembly-quietMeh.svg';
                text_class = "has-text-black"
                break;
            default:
                image_path = '/images/assembly-quietMeh.svg';
                text_class = "has-text-black"
                break;
        }

        return (
            <div className={styles.feedAction}>
                <figure className="image is-32x32">
                    <img src={image_path} />
                </figure>
                <div className="ml-3">
                    <p className={text_class}>{this.props.data.message}</p>
                    <hr className={styles.commentRule}/>
                </div>
            </div>
        )
    }
} 