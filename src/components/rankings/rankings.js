import React from "react";
import axios from 'axios';
import styles from "./rankings.module.css"
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

function sortByColumn(categoryID, a,b)
{
    var ASectorRating = a.ratings.find( element => element.categoryID == categoryID)
    var BSectorRating = b.ratings.find( element => element.categoryID == categoryID)
    if(parseFloat(BSectorRating.ratingValue) == parseFloat(ASectorRating.ratingValue))
    {
        return a.name.localeCompare(b.name)
    }
    else
    {
        return parseFloat(parseFloat(BSectorRating.ratingValue) - parseFloat(ASectorRating.ratingValue))
    }
}

function Rankings() {
    let [constituencyRatingData, setConstituencyRatingData] = React.useState(null);
    let [constituencyRatingMetaData, setConstituencyRatingMetaData] = React.useState(null);
    const [sortedColumn, setSortedColumn] = React.useState(9);
    const [pageLoading, setPageLoading] = React.useState(false);
    
    React.useEffect(() => {
        setPageLoading(true)
        var UTCstr = new Date().toISOString();
        var assembly_id = UTCstr.replace('-', '').replace('-', '').substring(0, 8)

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/rating?assemblyID=${assembly_id}`)
        .then(res => {
            const data = res.data.data;
            const meta = res.data.meta
            setConstituencyRatingMetaData(meta);
            setConstituencyRatingData(data);
            setPageLoading(false)
        })
        
    },[]);

    if(pageLoading || !(constituencyRatingData && constituencyRatingMetaData))
    {
        return (<progress className="progress is-primary" max="100"></progress>)
    }

    var rankingRows = []
    if(constituencyRatingData){
        constituencyRatingData.sort((a, b) => sortByColumn(sortedColumn, a, b));
        constituencyRatingData.forEach(row => {
            rankingRows.push(<RankingRow key={`rank-${row['id']}`} singleConstituencyData={row}/>)
        });
    }

    return (
        <section className="section">
            <div className="content has-text-centered">
                <h3>Constituency Rankings by Government Sector</h3>
            </div>
            <div className="content has-text-centered">
                <h4 className="has-text-danger">Current Deficit: K {( parseFloat(constituencyRatingMetaData.deficit) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
            </div>
            <div className="content has-text-centered">
                <h4>Current Distribution of Government Spending</h4>
                <SpendingPie spendingData={constituencyRatingMetaData.spending} />
            </div>
            <div className="table-container">
                <table className="table is-hoverable">
                    <thead>
                        <tr>
                            <th>
                                Constituency
                            </th>
                            <th onClick={() => setSortedColumn(1)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-1.svg"} alt="Welfare & Pensions" title="Welfare & Pensions"/>
                                    </span>
                                    {sortedColumn === 1 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(2)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-2.svg"} alt="Healthcare" title="Healthcare & Social Services"/>
                                    </span>
                                    {sortedColumn === 2 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(4)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-4.svg"} alt="Education" title="Education & Development" />
                                    </span>
                                    {sortedColumn === 4 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(5)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-5.svg"} alt="Defense" title="Defense & Diplomacy" />
                                    </span>
                                    {sortedColumn === 5 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(6)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-6.svg"} alt="Transport" title="Transport & Infrastructure" />
                                    </span>
                                    {sortedColumn === 6 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(7)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-7.svg"} alt="Public Order & Safety" title="Security & Safety" />
                                    </span>
                                    {sortedColumn === 7 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(8)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-8.svg"} alt="Business & Industry" title="Business & Industry"/>
                                    </span>
                                    {sortedColumn === 8 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(10)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-10.svg"} alt="Housing & Utilities" title="Housing & Utilities" />
                                    </span>
                                    {sortedColumn === 10 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(11)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-11.svg"} alt="Culture" title="Culture, Media, Recreation & Tourism" />
                                    </span>
                                    {sortedColumn === 11 ?
                                        <span className="icon">
                                            <i className="fas fa-angle-double-down"></i>
                                        </span> :
                                        <span className="icon">
                                            <i className="fas fa-angle-up"></i>
                                        </span> 
                                    }
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(12)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-12.svg"} alt="Environment" title="Environment & Sanitation Services" />
                                    </span>
                                    {sortedColumn === 12 ?
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
                                        <img src={"/images/categories/cat-13.svg"} alt="Spending" title="Treasury" />
                                    </span>
                                </span>
                            </th>
                            <th onClick={() => setSortedColumn(9)}>
                                <span className="icon-text is-flex-wrap-nowrap">
                                    <span className="icon" >
                                        <img src={"/images/categories/cat-9.svg"} alt="Overall"  title="Government Administration" />
                                    </span>
                                    {sortedColumn === 9 ?
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

function RankingRow({singleConstituencyData}){
    var cells = []
    var spendingCell
    var rankingCell
    
    for(var sector of singleConstituencyData.ratings){
        for(var categoryID of [1,2,4,5,6,7,8,10,11,12])
        {
            if(sector.categoryID == categoryID)
            {
                cells.push(
                    <RatingCell ratingData={sector} />
                )
            }
        }

        if(sector.categoryID == 9)
        {
            rankingCell = <RankingCell ratingData={sector} />
        }


    }

    spendingCell = <SpendingCell constituencyRatingData={singleConstituencyData} />
    
    return(
        <tr>
            <td>{singleConstituencyData.name}</td>
            {cells}
            {spendingCell}
            {rankingCell}
        </tr>
    )
}

function RatingCell({ratingData}){
    var className = "";
    var value = ratingData.ratingValue ;
    var direction = ratingData.ratingDirection ;

    if( value < 25){
        className += " has-text-danger-dark";
    }
    else if(value > 80){
        className += " has-text-success-dark";
    }

    var icon;
    if(direction > 0){
        icon = (
            <i className="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction < 0){
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

function SpendingCell({constituencyRatingData}){
    var className;
    var expenditureSum = constituencyRatingData.ratings.reduce((partialSum, a) => partialSum + a.expenditureValue, 0);
    var incomeSum = constituencyRatingData.ratings.reduce((partialSum, a) => partialSum + a.incomeValue, 0);

    return (
        <td className={className + " " + styles.cellStyle}>
            <span>
                K {((parseFloat(expenditureSum) - parseFloat(incomeSum)) * 1000).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
        </td>)
    

}

function RankingCell({ratingData}){
    var className
    var value = ratingData.ratingValue ;
    var direction = ratingData.ratingDirection ;
    if( value < 3){
        className = "has-text-danger"
    }
    else if(value > 6){
        className = "has-text-success"
    }

    var icon;
    if(direction > 0){
        icon = (
            <i className="fas fa-angle-double-up has-text-success"></i>
        );
    }
    if(direction < 0){
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


function SpendingPie({spendingData})
{
    return (
        <ResponsiveContainer width={"50%"} aspect={1}>
            <PieChart>
                <Pie
                    data={spendingData}
                    dataKey="expenditureValue"
                    nameKey="categoryShortName"
                >
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};


export default Rankings;