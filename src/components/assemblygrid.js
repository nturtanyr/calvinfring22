import React from "react";
import { Link } from "react-router-dom"
import Assembly from "./assembly";
import styles from "./assembly.module.css"

export default class AssemblyGrid extends React.Component {

    render() {
        var tiles = []
        
        if(this.props.data){
            this.props.data.forEach( (object) =>{
                tiles.push(<AssemblyTile key={`tile-${object.constituency_id}`} data={object}/>)
                
            });
        }

        return (
            <div className={styles.gridContainer}>
                {tiles}
            </div>
        )
    }
}

class AssemblyTile extends React.Component {

    render() {
        if(this.props.data.constituency_name == 'Here\'s That City You Wanted'){
            var constituencyName = 'HTCYW'
        }
        else
        {
            var constituencyName = this.props.data.constituency_name
        }
        var policy_desc
        if(this.props.data.policy_result == 1)
        {
            policy_desc = <strong className="has-text-success">{this.props.data.policy_desc}</strong>
        }
        else
        {
            policy_desc = <i>{this.props.data.policy_desc}</i>

        }
        return (
                <div>
                    <div className="has-text-centered">
                        <Link to={`/constituency/${this.props.data.constituency_id}`}>
                            {constituencyName}
                        </Link>
                    </div>
                    <Link to={`/constituency/${this.props.data.constituency_id}`}>
                        <img src={`/images/con-${this.props.data.constituency_id}.svg`} loading="lazy" title="" className={`image is-64x64 ${styles.constituencyIcon}`}/>
                    </Link>
                    <div className="is-size-6 has-text-centered">
                        <Link to={`/candidate/${this.props.data.candidate_id}`}>{this.props.data.first_name} {this.props.data.last_name}</Link>
                    </div>
                    <div className="is-size-7 has-text-centered">
                        {policy_desc}
                    </div>
                </div>
        )
    }
}