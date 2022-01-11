import React from "react";
import { Link } from "react-router-dom"
import Assembly from "./assembly";
import styles from "./assembly.module.css"

export default class AssemblyGrid extends React.Component {

    render() {
        var tiles = []
        
        if(this.props.data){
            this.props.data.forEach( (object) =>{
                tiles.push(<AssemblyTile key={`tile-${object.id}`} data={object}/>)
                
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
        if(this.props.data.name == 'Here\'s That City You Wanted'){
            var constituencyName = 'HTCYW'
        }
        else
        {
            var constituencyName = this.props.data.name
        }
        return (
                <div>
                    <div className="has-text-centered">
                        <Link to={`/constituency/${this.props.data.id}`}>
                            {constituencyName}
                        </Link>
                    </div>
                    <Link to={`/constituency/${this.props.data.id}`}>
                        <img src={`/images/con-${this.props.data.id}.svg`} loading="lazy" title="" className={`image is-64x64 ${styles.constituencyIcon}`}/>
                    </Link>
                    <div className="is-size-7 has-text-centered">
                        <a href="/candidate/"></a>
                    </div>
                    <div className="is-size-7 has-text-centered">
                        <i>Has not yet brought a policy forward.</i>
                    </div>
                </div>
        )
    }
}