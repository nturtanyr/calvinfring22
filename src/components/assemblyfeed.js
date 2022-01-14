import React from "react";
import styles from "./assembly.module.css"
import ScrollToBottom from 'react-scroll-to-bottom';

export default class AssemblyFeed extends React.Component {
    render() {

        var feed = []
        if(this.props.data){
            var current_policy_id = 0
            this.props.data.forEach( (object) =>{
                if( ! object.parent_id )
                {
                    current_policy_id = object.id
                    feed.push(
                        <AssemblyFeedTop key={`comment-${object.id}`} data={object}/>
                    )
                }
                else if(object.parent_id == current_policy_id)
                {
                    feed.push(
                        <AssemblyFeedAction key={`comment-${object.id}`} data={object}/>
                    )
                }
                else
                {
                    feed.push(
                        <AssemblyFeedComment key={`comment-${object.id}`} data={object}/>
                    )
                }
            });
                
        }
        return (
            <ScrollToBottom className={styles.feedContainer}>
                {feed}
            </ScrollToBottom>
        )
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

            default:
                image_path = ("/images/con-" + this.props.data.constituency_id + ".svg");
                break;
        }
        
        return (
            <div className={styles.feedTop}>
                <figure className="image is-64x64">
                    <img src={image_path} />
                </figure>
                <div className="ml-3">
                    <strong>{this.props.data.first_name} {this.props.data.last_name}</strong>
                    <br/>
                    <i>{this.props.data.message}</i>
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
        if(!this.props.data.candidate_id){
            // No candidate means it's the final tallies of a motion being passed
            switch(this.props.data.style)
            {
                case "vote_for":
                    image_path = '/images/assembly-votesFor.svg';
                    break;

                case "vote_against":
                    image_path = '/images/assembly-votesAgainst.svg';
                    break;

                case "vote_success":
                    image_path = '/images/assembly-votePassed.svg';
                    break;

                case "vote_failure":
                    image_path = '/images/assembly-voteFailed.svg';
                    break;
            }
        }
        else
        {
            // A candidate means it's an action by a candidate
            switch(this.props.data.style)
            {
                case "positive":
                    image_path = '/images/assembly-actionFor.svg';
                    break;

                case "negative":
                    image_path = '/images/assembly-actionAgainst.svg';
                    break;

                default:
                    image_path = '/images/assembly-actionMeh.svg';
                    break;

            }
        }

        return (
            <div className={styles.feedAction}>
                <figure className="image is-32x32">
                    <img src={image_path} />
                </figure>
                <div className="ml-3">
                    <strong>{this.props.data.first_name} {this.props.data.last_name}</strong>
                    <br/>
                    <i>{this.props.data.message}</i>
                    <hr className={styles.commentRule}/>
                </div>
            </div>
        )
    }
} 
class AssemblyFeedComment extends React.Component {
    render() {
        var textClass

        // If the comment is a positive action, a success on a positive action, or a failure on a negative action, we display in green
        if(this.props.data.style == 'positive' || this.props.data.style == 'pos_success' || this.props.data.style == 'neg_failure' )
        {
            textClass = "has-text-success"
        }
        // If the comment is a negative action, a success on a negative action, or a failure on a positive action, we display in red
        else if(this.props.data.style == 'negative' || this.props.data.style == 'pos_failure' || this.props.data.style == 'neg_success')
        {
            textClass = "has-text-danger"
        }
        // Otherwise, it's black and informational
        else
        {
            textClass = "has-text-black"
        }

        return (
            <div className={styles.feedComment}>
                <div className="ml-3">
                    <strong className={textClass}>{this.props.data.message}</strong>
                    <hr className={styles.commentRule}/>
                </div>
            </div>
        )
    }
}