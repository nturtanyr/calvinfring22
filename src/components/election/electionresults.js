import React from "react";
import axios from 'axios';
import { BarChart, XAxis, YAxis, Bar, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ConstituencyElectionChart (props) {
    const [chartData, setChartData] = React.useState(null);
    const [timer, setTime] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + props.constituency_id + `/election/` + props.election_id)
        .then(res => {
            const data = res.data.data;
            setChartData(data);
        })

        if(chartData && chartData.active)
        {
            const interval = setInterval(() => {
                setTime(timer => timer + 1);
            }, 90000);
            
            return () => clearInterval(interval);
        }
    },[timer, props.constituency_id, props.election_id]);

    var barColors = [
        "#6996b5",
        "#FA7C91",
        "#528f20",
        "#80711f",
        "#1c1652",
        "#c04949"
    ]
    var barLighterColors = [
        "#9dc8e4",
        "#fab3bf",
        "#aadb82",
        "#dbce86",
        "#8b83d4",
        "#d18585"
    ]
    var fill_colour
    var title_text 
    if(chartData)
    {
        if(chartData.active)
        {
            fill_colour = barColors
            title_text = `The election of ${chartData.id} is now underway! Votes are still coming in!`
        }
        else{
            fill_colour = barLighterColors
            if(chartData.end_date)
            {
                title_text = `The election of ${chartData.id} has finished - showing the results:`
            }
            else
            {
                title_text = `The election of ${chartData.id} is about to begin; the results will show here:`
            }
        }

        return (
            <div>
                <h1 className="subtitle">{title_text}</h1>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={chartData.details}>
                        <XAxis dataKey="last_name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="vote_tally">
                            {
                                chartData.details.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={fill_colour[index % 6]} />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
    else
    {
        return ("?")
    }
}