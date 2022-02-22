import React from "react";
import axios from 'axios';
import { BarChart, XAxis, YAxis, Bar, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useParams } from "react-router-dom";

export default function ConstituencyElectionChart ({constituency_id, election_id}) {
    const params = useParams()
    const [chartData, setChartData] = React.useState(null);
    const [timer, setTime] = React.useState(null);

    React.useEffect(() => {
        if(params.constituency_id)
        {
            constituency_id = params.constituency_id
        }

        if(params.election_id)
        {
            election_id = params.election_id
        }

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + constituency_id + `/election/` + election_id)
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
    },[timer, params.constituency_id, params.election_id]);

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
                <ResponsiveContainer width="100%" aspect={2}>
                    <BarChart data={chartData.details}>
                        <XAxis type='category' dataKey="last_name"/>
                        <Tooltip />
                        <Bar dataKey="vote_tally_inperson" name="In Person">
                            {
                                chartData.details.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={fill_colour[index % 6]} />
                                ))
                            }
                        </Bar>
                        <Bar dataKey="vote_tally_online" name="Online Votes">
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
        return (<progress className="progress is-primary" max="100"></progress>)
    }
}