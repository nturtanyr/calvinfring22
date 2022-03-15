import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from "./rankings.module.css"

function sortByColumn(area, a,b)
{ 
    return parseFloat(b[area]['rating_value']) - parseFloat(a[area]['rating_value'])
}

function Rankings() {
    let [rankData, setrankData] = React.useState(null);
    let [deficitNumber, setDeficit] = React.useState(null);
    const [sortedColumn, setSortedColumn] = React.useState('Government Administration')
    
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
        rankData.sort((a, b) => sortByColumn(sortedColumn, a, b));
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
                            <th>
                                Constituency
                            </th>
                            <th onClick={() => setSortedColumn('Welfare')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-1.svg"} title="Welfare"/>
                                    </span>
                                    {sortedColumn == 'Welfare' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Health')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-2.svg"} title="Healthcare"/>
                                    </span>
                                    {sortedColumn == 'Health' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Pensions')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-3.svg"} title="Pensions" />
                                    </span>
                                    {sortedColumn == 'Pensions' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Education')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-4.svg"} title="Education" />
                                    </span>
                                    {sortedColumn == 'Education' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Defense')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-5.svg"} title="Defense" />
                                    </span>
                                    {sortedColumn == 'Defense' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Transport')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-6.svg"} title="Transport" />
                                    </span>
                                    {sortedColumn == 'Transport' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Public Order & Safety')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-7.svg"} title="Public Order & Safety" />
                                    </span>
                                    {sortedColumn == 'Public Order & Safety' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Business & Industry')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-8.svg"}  title="Business & Industry"/>
                                    </span>
                                    {sortedColumn == 'Business & Industry' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Housing & Utilities')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-10.svg"} title="Housing & Utilities" />
                                    </span>
                                    {sortedColumn == 'Housing & Utilities' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Culture')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-11.svg"} title="Culture" />
                                    </span>
                                    {sortedColumn == 'Culture' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Environment')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-12.svg"} title="Environment" />
                                    </span>
                                    {sortedColumn == 'Environment' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/religion/rel-2.png"} title="Spending" />
                                    </span>
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn('Government Administration')}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-9.svg"} title="Overall" />
                                    </span>
                                    {sortedColumn == 'Government Administration' ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
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
                <td>{this.props.data['name']}</td>
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
    var className = "";
    var value = props.data['rating_value'] ;
    var direction = props.data['rating_direction'] ;
    if( props.data['rating_privatised']){
        className += "has-background-grey-lighter";
    }
    if( value < 25){
        className += " has-text-danger-dark";
    }
    else if(value > 80){
        className += " has-text-success-dark";
    }

    var icon;
    if(direction === 'up'){
        icon = (
            <i className="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction === 'down'){
        icon = (
            <i className="fas fa-angle-double-down has-text-danger"></i>
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
    if( value < 0){
        className = "has-text-success-dark"
    }
    else{
        className = "has-text-danger-dark"
    }

    var icon;
    if(direction === 'up'){
        icon = (
            <i className="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction === 'down'){
        icon = (
            <i className="fas fa-angle-double-down has-text-danger"></i>
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
        className = "has-text-danger"
    }
    else if(value > 6){
        className = "has-text-success"
    }

    var icon;
    if(direction === 'up'){
        icon = (
            <i className="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction === 'down'){
        icon = (
            <i className="fas fa-angle-double-down has-text-danger"></i>
        );
    } 

    return (
        <td className={styles.cellStyle}>
            <span>
                <strong className={className}>{value} </strong>{icon}
            </span>
        </td>
    )
    

}

export default Rankings;