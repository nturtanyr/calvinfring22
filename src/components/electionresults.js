import React from "react";
import { BarChart, XAxis, YAxis, Bar, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default class ConstituencyElectionChart extends React.Component {
    render() {
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
        if(this.props.data)
        {
            if(this.props.data.active)
            {
                fill_colour = barColors
                title_text = `The election of ${this.props.data.id} is now underway! Votes are still coming in!`
            }
            else{
                fill_colour = barLighterColors
                if(this.props.data.end_date)
                {
                    title_text = `The election of ${this.props.data.id} has finished - showing the results:`
                }
                else
                {
                    title_text = `The election of ${this.props.data.id} is about to begin; the results will show here:`
                }
            }

            return (
                <div className="tabcontent is-hidden" id="tabVotes">
                    <h1 className="subtitle">{title_text}</h1>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart data={this.props.data.details}>
                            <XAxis dataKey="last_name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="vote_tally">
                                {
                                    this.props.data.details.map((entry, index) => (
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
}