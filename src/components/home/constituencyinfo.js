import React from "react"
import { NavLink } from "react-router-dom"

class ConstituencyInfo extends React.Component {

    render() {
        if(this.props.constituencyDetails.Id != '0'){
            var image = <div className="image is-64x64 mr-3" >
                <img src={`../images/constituency/con-${this.props.constituencyDetails.Id}.svg`} alt={this.props.constituencyDetails.name} />
            </div>
            var map = <figure className="image mr-3" >
                <img src={`../images/maps/map-${this.props.constituencyDetails.Id}.png`} alt={this.props.constituencyDetails.name} />
            </figure>
            var details = <div>
                <p>{this.props.constituencyDetails.Info}</p>
                <h4>Quick Facts</h4>
                <b>Tagline:</b> <i>{this.props.constituencyDetails.Tagline}</i><br/>
                <b>Emblem</b>: {this.props.constituencyDetails.Emblem}<br/>
                <b>Settlements:</b> {this.props.constituencyDetails.Settlements}<br/>
                <b>Climate:</b> {this.props.constituencyDetails.Climate}<br/>
            </div>
        }
        else
        {
            var image = null
            var map = null;
            var details = <div>
                <p>The wonderous and insignificant country of Kalmany and it's citizens, the Kalmans, has existed for approximately two-hundred hours. They herald as a proud and faithful people, as well as incredible predictable.</p>
                <p>Believing so strongly in the political system, the Kalmans have elected that their parliament be formed every day, with new candidates standing and stepping down each day to provide a proper and thorough voice to the people, with no reasonable way to determine exactly what will pass and what will fail.</p>
                <p>The Kalmans have a natural affinity for socks, bears, and political systems.</p>
            </div>
        }

        if(this.props.constituencyDetails.Id == '12'){
            var titlesize = "is-size-4 is-size-6-mobile"
        }else if(this.props.constituencyDetails.Id == '0'){
            var titlesize = "is-size-3 is-size-5-mobile"
        }else{
            var titlesize = "is-size-2 is-size-4-mobile"
        }
        
        return (
            <section className="section">
                <div className="content is-align-items-center is-flex">
                    {image}
                    <span>
                        <h1 className={titlesize}>{this.props.constituencyDetails.Name}  </h1>
                    </span>
                </div>
                <hr/>
                {map}
                {(!!map) && <hr/>}
                <div className="content">
                    { details }
                </div>
            </section>
        )
    }
}

export default ConstituencyInfo;