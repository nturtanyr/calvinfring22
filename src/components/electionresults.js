import React from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer } from "recharts";

export default class ConstituencyElectionChart extends React.Component {
    render() {
        if(this.props.data.active)
        {
            var fill_colour = "#60b8e6"
            var title_text = `The election of ${this.props.data.id} is now underway! Votes are still coming in!`
        }
        else{
            var fill_colour = "#abd5eb"
            if(this.props.data.end_date)
            {
                var title_text = `The election of ${this.props.data.id} has finished - showing the results:`
            }
            else
            {
                var title_text = `The election of ${this.props.data.id} is about to begin; the results will show here:`
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
                        <Bar dataKey="vote_tally" fill={fill_colour} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}