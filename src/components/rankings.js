import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from "./rankings.module.css"

function Rankings() {
    let [rankData, setrankData] = React.useState(null);
    let [deficitNumber, setDeficit] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/leagueratings`)
        .then(res => {
            const data = res.data.data;
            setrankData(data);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/deficit`)
        .then(res => {
            const data = res.data.data;
            setDeficit(data);
        })
        
    },[]);

    var rankingRows = []
    if(rankData){
        rankData.sort((a, b) => {
            if (a['Government Administration']['rating_value'] > b['Government Administration']['rating_value']) {
              return -1;
            }
            if (a['Government Administration']['rating_value'] < b['Government Administration']['rating_value']) {
              return 1;
            }
            return 0;
          });
        rankData.forEach(row => {
            rankingRows.push(<RankingRow key={`rank-${row['id']}`} data={row}/>)
        });
    }

    return (
        <section className="section">
            <div className="content has-text-centered">
                <h3>Constituency Rankings by Government Sector</h3>
            </div>
            <div className="content has-text-centered">
                <h4>Current Deficit: K {(deficitNumber * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
            </div>
            <div className="table-container">
                <table className="table is-hoverable">
                    <thead>
                        <tr>
                            <th>Constituency</th>
                            <th>Welfare</th>
                            <th>Health</th>
                            <th>Pensions</th>
                            <th>Education</th>
                            <th>Defense</th>
                            <th>Transport</th>
                            <th><nobr>Public Order</nobr> <nobr>& Safety</nobr></th>
                            <th>Business <nobr>& Industry</nobr></th>
                            <th>Housing <nobr>& Utilities</nobr></th>
                            <th>Culture</th>
                            <th>Environment</th>
                            <th>Spending</th>
                            <th>Overall</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankingRows}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

class RankingRow extends React.Component{
    render() {
        return(
            <tr>
                <td><Link to={`/constituency/${this.props.data['id']}`}>{this.props.data['name']}</Link></td>
                <RatingCell data={this.props.data['Welfare']}/>
                <RatingCell data={this.props.data['Health']}/>
                <RatingCell data={this.props.data['Pensions']}/>
                <RatingCell data={this.props.data['Education']}/>
                <RatingCell data={this.props.data['Defense']}/>
                <RatingCell data={this.props.data['Transport']}/>
                <RatingCell data={this.props.data['Public Order & Safety']}/>
                <RatingCell data={this.props.data['Business & Industry']}/>
                <RatingCell data={this.props.data['Housing & Utilities']}/>
                <RatingCell data={this.props.data['Culture']}/>
                <RatingCell data={this.props.data['Environment']}/>
                <SpendingCell data={this.props.data['Spending']}/>
                <RankingCell data={this.props.data['Government Administration']}/>
            </tr>
        )
    }
}

function RatingCell(props){
    var className;
    var value = props.data['rating_value'] ;
    var direction = props.data['rating_direction'] ;
    if( props.data['rating_privatised']){
        className = "has-background-grey-light";
    }
    else if( value < 50){
        className = "has-background-danger-light";
    }
    else if(value < 75){
        className = "has-background-warning-light";
    }
    else{
        className = "has-background-success-light";
    }

    var icon;
    if(direction === 'up'){
        icon = (
            <i class="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction === 'down'){
        icon = (
            <i class="fas fa-angle-double-down has-text-danger"></i>
        );
    } 
    
    return (
        <td className={className + " " + styles.cellStyle}>
            <span>
                {value}% {icon}
            </span>
        </td>
    )
    
}

function SpendingCell(props){
    var className;
    var value = props.data['spending_daily'] ;
    var direction = props.data['spending_direction'] ;
    if( value > 0){
        className = "has-background-danger-light"
    }
    else if(value < 75){
        className = "has-background-success-light"
    }
    else{
        className = "has-text-black"
    }

    var icon;
    if(direction === 'up'){
        icon = (
            <i class="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction === 'down'){
        icon = (
            <i class="fas fa-angle-double-down has-text-danger"></i>
        );
    } 
    return (
        <td className={className + " " + styles.cellStyle}>
            <span>
                K {(value * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {icon}
            </span>
        </td>)
    

}

function RankingCell(props){
    var className
    var value = props.data['rating_value'] ;
    var direction = props.data['rating_direction'] ;
    if( value < 3){
        className = "has-background-danger-light"
    }
    else if(value < 6){
        className = "has-background-warning-light"
    }
    else{
        className = "has-background-success-light"
    }

    var icon;
    if(direction === 'up'){
        icon = (
            <i class="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction === 'down'){
        icon = (
            <i class="fas fa-angle-double-down has-text-danger"></i>
        );
    } 

    return (
        <td className={className + " " + styles.cellStyle}>
            <span>
                <strong>{value} </strong>{icon}
            </span>
        </td>
    )
    

}

export default Rankings;