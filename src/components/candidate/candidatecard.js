import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import CandidateProfile from "./candidateprofile";
import CandidatePolicies from "./candidatepolicies";
import styles from "./candidate.module.css"
import CandidateVoteHistory from "./candidatehistory";

function determineAvatar(sex_id, ethnicity_id, age){
    var image_path = "av-"
    switch(sex_id)
    {
        case 4:
            image_path += "n";
            break;
        case 1:
            image_path += "m";
            break;
        default:
            image_path += "f";
            break;
    }

    switch(ethnicity_id)
    {
        case 7:
            image_path +="a";
            break;
        case 2:
            image_path += "l";
            break;
        case 6:
            image_path += "v";
            break;
        case 3:
            image_path += "z";
            break;
        default:
            image_path += "h";
            break;
    }

    if(sex_id != 4){
        if(age > 70){
            image_path += "o.png";
        }else if(age > 40){
            image_path += "m.png";
        }else{
            image_path += "y.png";
        }
    }
    else{
        image_path += ".png"
    }

    return image_path
}

function determineSexuality(sex_id, sexuality_id){
    var image_path = "sx-"
    if(sexuality_id == 2){
        if(sex_id == 4){
            image_path += "4n"
        }else if(sex_id == 1){
            image_path += "2m"
        }else{
            image_path += "2f"
        }
    }else if(sexuality_id == 4){
        if(sex_id == 4){
            image_path += "4n"
        }else if(sex_id == 1){
            image_path += "4m"
        }else{
            image_path += "4f"
        }
    }else{
        image_path += sexuality_id
    }
    image_path += ".png"
    return image_path
}

function Candidate() {
    let params = useParams();
    let [candidate_data, set_CandidateData] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${params.id}/citizen`)
        .then(res => {
            console.log(res.data)
            const data = res.data.data[0];
            set_CandidateData(data);
        })
        
    },[params]);

    function handleClick(event) {
        // Get the target from the "data-target" attribute
        const $element = event.target.parentElement.parentElement
        const target = $element.dataset.target;
        const $target = document.getElementById(target);
        // Get all tabs and set to not active
        const $tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'), 0);
        $tabs.forEach( el => {
            el.classList.remove('is-active');
        });
    
        // Get all tab contents and hide them
        const $tabcontents = Array.prototype.slice.call(document.querySelectorAll('.tabcontent'), 0);
        $tabcontents.forEach( fl => {
        fl.classList.remove('is-visible');
        fl.classList.add('is-hidden');
        });
        
        if ($target){
            // Add the "is-active" class and switch between "hidden" and "visible" on active tab content
            $element.classList.toggle('is-active');
            $target.classList.remove('is-hidden');
            $target.classList.add('is-visible');
        }
    };

    return(
        
        <div className='columns'> 
            {candidate_data && (
            <div className='column is-one-fifth'>
                <h1 className="title">
                    {candidate_data.profile.first_name} {candidate_data.profile.last_name}
                </h1>
                <h3 className="subtitle"><i>{candidate_data.profile.party_name}</i></h3>
                <figure className="image is-fullwidth">
                    <img className="image is-fullwidth" src={`../images/${determineAvatar(
                        candidate_data.sex.id,
                        candidate_data.ethnicity.id,
                        candidate_data.profile.age
                        )}`} alt="candidate picture" />
                    <div className={`is-flex ${styles.avatarLowerIcon}`}>
                        <img className="image is-48x48 is-flex" src={`../images/${determineSexuality(
                            candidate_data.sex.id,
                            candidate_data.sexuality.id
                        )}`} title={candidate_data.sexuality.name}/>
                        <img className="image is-48x48 is-flex" src={`../images/ind-${candidate_data.industry.id}.png`} title={candidate_data.industry.name}/>
                        <img className="image is-48x48 is-flex" src={`../images/rel-${candidate_data.religion.id}.png`} title={candidate_data.religion.name}/>
                    </div>
                </figure>
            </div>
            )}
            {candidate_data && (
            <div className='column'>
                <div className='tabs is-boxed is-justify-content-left'>
                    <li className="tab is-active" data-target="tabProfile" onClick={handleClick}><a><span>Profile</span></a></li>
                    <li className="tab" data-target="tabPolicies" onClick={handleClick}><a><span>Policies</span></a></li>
                    <li className="tab" data-target="tabVoteHistory" onClick={handleClick}><a><span>Voting History</span></a></li>

                </div>
                <div className='column'>
                    <CandidateProfile data={candidate_data}/>
                    <CandidatePolicies/>
                    <CandidateVoteHistory/>
                </div>
            </div>
            )}
        </div>
    )
}

export default Candidate;