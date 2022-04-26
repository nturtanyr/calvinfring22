import React from "react";
import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import { useParams } from "react-router-dom";

export default function ConstituencyDemography({constituency_id}) {
    const params = useParams()
    let [demographyData, setDemographyData] = React.useState(null);
    const [selectedDemography, setSelectedDemography] = React.useState('ethnicity');
    
    React.useEffect(() => {
        if(params.constituency_id)
        {
            constituency_id = params.constituency_id
        }
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + constituency_id + `/demography`)
        .then(res => {
            const data = res.data.data;
            setDemographyData(data);
        })
        
    },[params.constituency_id]);

    if (demographyData)
    {
        return (
            <div className="columns">
                <div className="column is-half">
                    <div className="select" value={selectedDemography} onChange={(e) => (setSelectedDemography(e.target.value))}>
                        <select>
                            <option value="ethnicity">Ethnicity</option>
                            <option value="religion">Religion</option>
                            <option value="industry">Industry</option>
                            <option value="gender">Gender</option>
                            <option value="sexuality">Sexuality</option>
                            <option value="age">Age</option>
                        </select>
                    </div>
                    <figure className="content">
                        <DemographyPie data={demographyData[selectedDemography]}/>
                    </figure>
                </div>
                <div className="column is-half">
                    <table className="table">
                        <thead>
                            <tr><th>Group</th><th>Percent</th></tr>
                        </thead>
                        <tbody>
                        {demographyData[selectedDemography].map((entry, index) => {
                            return (
                                <tr key={"demo-" + index}>
                                    <td>
                                        {entry.name}
                                    </td>
                                    <td>
                                        {entry.percent}%
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    else
    {
        return (<progress className="progress is-primary" max="100"></progress>)
    }
}

function DemographyPie({ data})
{
    return (
    <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
        <Pie
            data={data}
            labelLine={false}
            legendType="circle"
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="count"
        >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColourFromKey(entry.name)} />
        ))}
        </Pie>
        <Tooltip />
        </PieChart>
    </ResponsiveContainer>
    );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {

    const RADIAN = Math.PI / 180;
    if(percent > 5)
    {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 1).toFixed(0)}%`}
            </text>
        );
    }
    else
    {
        return (<text/>)
    };
};

function getColourFromKey(keyname)
{
    switch(keyname){
        case "human": return '#826e4b';
        case "lizard person": return '#f2de44';
        case "vampire": return '#bfc2bc';
        case "zombie": return '#89cc45';
        case "android": return '#858585';
        case "six fingers": return '#b05dcf';
        case "third nipple": return '#7f5dcf';
        case "male": return '#94F7F7';
        case "female": return '#F794F7';
        case "demimale": return '#94F794';
        case "demifemale": return '#F79494';
        case "agender": return '#F7F794';
        case "bigender": return '#9494F7';
        case "genderfluid": return '#949494';
        case "pangender": return '#E1E1E1';
        case "xenogender": return '#707070';
        case "heterosexual": return '#66a8cc';
        case "homosexual": return '#CC66A8';
        case "bisexual": return '#A866CC';
        case "trisexual": return '#66cca8';
        case "asexual": return '#CCA866';
        case "pansexual": return '#a8cc66';
        case "0-20": return '#d485c1';
        case "20-40": return '#d49485';
        case "40-60": return '#cbd485';
        case "60-80": return '#85d4ab';
        case "80-100": return '#A7E6E6';
        case "100-120": return '#D9D9D9';
        case "120-140": return '#B9B9B9';
        case "the greater bovine": return '#354dc4';
        case "hewey dewey": return '#b5a235';
        case "something": return '#5c5759';
        case "chaotic neutral": return '#a82860';
        case "inbetween-ism": return '#85d4ab';
        case "folklore": return '#4d9c43';
        case "the sun god that isn't ra": return '#ad4b24';
        case "beddism": return '#48308c';
        case "cee kwel": return '#35babd';
        case "healthcare": return '#D55394';
        case "rescue": return '#D5537E';
        case "construction": return '#D55368';
        case "unemployed": return '#D55353';
        case "retired": return '#D56853';
        case "media": return '#D57E53';
        case "financial": return '#D59453';
        case "education": return '#D5AA53';
        case "student": return '#D5BF53';
        case "retail": return '#D5D553';
        case "mining": return '#BFD553';
        case "agriculture": return '#AAD553';
        case "recreation": return '#94D553';
        case "sports": return '#7ED553';
        case "military": return '#68D553';
        case "real estate": return '#53D553';
        case "transport": return '#53D568';
        case "sanitation": return '#53D57E';
        case "communication": return '#53D594';
        case "electricity": return '#53D594';
        case "technology": return '#53D5AA';
        case "scientific research": return '#53D5BF';
        case "security": return '#53D5D5';
        case "legal services": return '#53BFD5';
        case "government": return '#53AAD5';
        case "waterworks": return '#5394D5';
        case "manufacturing": return '#537ED5';
        case "motor services": return '#5368D5';
        case "administration": return '#5353D5';
        case "servile": return '#6853D5';
        case "accomodation": return '#7E53D5';
        case "food services": return '#9453D5';
        case "arts and entertainment": return '#D553AA';
        default: return '#d4d4d4';
    };
};
