import React from "react"
import { NavLink } from "react-router-dom"

class ConstituencyInfo extends React.Component {

    render() {
        if(this.props.constituencyDetails.Id != '0'){
            var image = <div className="image is-64x64 mr-3" >
                <img src={`../images/con-${this.props.constituencyDetails.Id}.svg`} alt={this.props.constituencyDetails.name} />
            </div>
            var details = <div>
                <p>{this.props.constituencyDetails.Info}</p>
                <h4>Quick Facts</h4>
                <b>Tagline:</b> <i>{this.props.constituencyDetails.Tagline}</i><br/>
                <b>Emblem</b>: {this.props.constituencyDetails.Emblem}<br/>
                <b>Settlements:</b> {this.props.constituencyDetails.Settlements}<br/>
                <b>Climate:</b> {this.props.constituencyDetails.Climate}<br/>
                <NavLink to={`/constituency/${this.props.constituencyDetails.Id}`}>More details...</NavLink>
            </div>
        }
        else
        {
            var image = null
            var details = <div>
                <p>The wonderous and insignificant country of Kalmany and it's citizens, the Kalmans, has existed for approximately two-hundred hours. They herald as a proud and faithful people, as well as incredible predictable.</p>
                <p>Believing so strongly in the political system, the Kalmans have elected that their parliament be formed every day, with new candidates standing and stepping down each day to provide a proper and thorough voice to the people, with no reasonable way to determine exactly what will pass and what will fail.</p>
                <p>The Kalmans have a natural affinity for socks, bears, and political systems.</p>
            </div>
        }

        if(this.props.constituencyDetails.Id == '12'){
            var titlesize = "is-size-4"
        }else if(this.props.constituencyDetails.Id == '0'){
            var titlesize = "is-size-3"
        }else{
            var titlesize = "is-size-2"
        }
        
        return (
            <div>
                <div className="is-align-items-center is-flex">
                    {image}
                    <span>
                        <h2 class={`title ${titlesize}`}>{this.props.constituencyDetails.Name}  </h2>
                    </span>
                </div>
                <div className="content mt-2">
                    { details }
                </div>
            </div>
        )
    }
}

export default ConstituencyInfo;