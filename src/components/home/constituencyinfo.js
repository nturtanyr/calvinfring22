import React from "react"

class ConstituencyInfo extends React.Component {

    render() {
        var image, map, details, titlesize
        if(this.props.constituencyDetails.Id !== '0'){
            image = <div className="image is-64x64 mr-3" >
                <img src={`/images/constituency/con-${this.props.constituencyDetails.Id}.svg`} alt={this.props.constituencyDetails.name} />
            </div>
            map = <figure className="image mr-3" >
                <img src={`/images/maps/map-${this.props.constituencyDetails.Id}.png`} alt={this.props.constituencyDetails.name} />
            </figure>
            details = <div>
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
            image = null
            map = null;
            details = <div>
                <p>The wonderous and insignificant country of Kalmany and its citizens, the Kalmans, have existed for approximately two-hundred hours. They herald as proud and faithful people, as well as incredibly predictable.</p>
                <p>Believing so strongly in the political system, the Kalmans have dictated that their parliament be formed every day, with new candidates standing up and stepping down each day to provide a proper and thorough voice to the people, with no reasonable way to determine exactly what will pass and what will fail.</p>
                <p>The Kalmans have a natural affinity for socks, bears, and political systems. Their cultures are varied, their religions are diverse, and their identities are muddled and oddly of consequence; tourism is low as few are aware of their existence, but they live comfortably and discretely.</p>
            </div>
        }

        if(this.props.constituencyDetails.Id === '12'){
            titlesize = "is-size-4 is-size-6-mobile"
        }else if(this.props.constituencyDetails.Id === '0'){
            titlesize = "is-size-3 is-size-5-mobile"
        }else{
            titlesize = "is-size-2 is-size-4-mobile"
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