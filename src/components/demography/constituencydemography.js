import React from "react";
import axios from 'axios';
import { ResponsiveContainer, PureComponent, PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

export default function ConstituencyDemography({constituency_id}) {
    let [demographyData, setDemographyData] = React.useState(null);
    const [selectedDemography, setSelectedDemography] = React.useState('ethnicity');
  
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + constituency_id + `/demography`)
        .then(res => {
            const data = res.data.data;
            setDemographyData(data);
        })
        
    },[constituency_id]);

    if (demographyData)
    {
        return (
            <>
                <div class="select" value={selectedDemography} onChange={(e) => (setSelectedDemography(e.target.value))}>
                    <select>
                        <option value="ethnicity">Ethnicity</option>
                        <option value="religion">Religion</option>
                        <option value="industry">Industry</option>
                        <option value="sex">Sex</option>
                        <option value="sexuality">Sexuality</option>
                        <option value="age">Age</option>
                    </select>
                </div>
                <figure className="content">
                    <DemographyPie data={demographyData[selectedDemography]}/>
                </figure>
            </>
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
    <ResponsiveContainer width="100%" height={500}>
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
        <Legend />
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
        case "male": return '#66a8cc';
        case "female": return '#cc66b9';
        case "superfemale": return '#b4cc66';
        case "heterosexual": return '#66a8cc';
        case "homosexual": return '#cc66b9';
        case "bisexual": return '#8f66cc';
        case "trisexual": return '#66ccbd';
        case "fluid": return '#7ecc66';
        case "0-20": return '#d485c1';
        case "20-40": return '#d49485';
        case "40-60": return '#cbd485';
        case "60-80": return '#85d4ab';
        case "the greater bovine": return '#354dc4';
        case "hewey dewey": return '#b5a235';
        case "something": return '#5c5759';
        case "chaotic neutral": return '#a82860';
        case "inbetween-ism": return '#85d4ab';
        case "folklore": return '#4d9c43';
        case "the sun god that isn't ra": return '#ad4b24';
        case "beddism": return '#48308c';
        case "cee kwel": return '#35babd';
        case "agriculture": return '#59ba18';
        case "mining": return '#5c4604';
        case "manufacturing": return '#54524d';
        case "electricity": return '#ccc618';
        case "waterworks": return '#0bd6b8';
        case "construction": return '#d6a30b';
        case "retail and motor services": return '#459ad6';
        case "transport": return '#21cf5e';
        case "accomodation and food": return '#db1a47';
        case "communication": return '#26d4ce';
        case "financial": return '#e0d477';
        case "scientific research": return '#3a5acf';
        case "administration": return '#db72c3';
        case "public administration": return '#8f3f89';
        case "education": return '#e0bd63';
        case "healthcare": return '#db5d4f';
        case "real estate": return '#1c5894';
        case "arts and entertainment": return '#9032d9';
        case "recreation": return '#37c217';
        case "unemployed": return '#a1a1a1';
        case "student": return '#b0db42';
        case "servile": return '#000000';
        default: return '#d4d4d4';
    };
};
