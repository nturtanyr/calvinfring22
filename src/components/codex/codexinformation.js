import React from "react";

export default function CodexInformation(props) {
    var component_output;
    switch(props.identifier)
    {
        case 1: //Ethnicity
            component_output = (
                <div className="content is-scrollable">
                    <h3>Ethnicity</h3>
                    <hr/>
                    <p>The term 'Ethnicity' in Kalmany is a term that refers to the grouping of its citizens in terms of a social group or cultural traditions shared. This generalised categorisation of people has lead to discrimination in the past, but the Kalmany Electoral Commission is dedicated to eliminating such biases in the election system, and hopes to provide a platform to anyone and everyone who calls themself a Kalman.</p>
                    <p>In the national census, the options for ethnicity were given as the following, in alphabetical order:</p>
                        <ul><b>Android</b> - A person whose physiology requires electricity and/or mechanical augmentation. Prefers logic over emotion.</ul>
                        <ul><b>Human</b> - A general category that has no specific definition and is often used as a default</ul>
                        <ul><b>Lizard Person</b> - A person who physiology shares that with a lizard. Enjoys the sun and may or may not eat bugs.</ul>
                        <ul><b>Six Fingered</b> - The six fingered people of Kalmany have often suffered discrimination, even when research shows citizens who belong to this group are more adept intellectually and physically.</ul>
                        <ul><b>Third Nipple</b></ul> - The citizens of Kalmany that identify as 'third nipple' may or may not have the physiology that gives them a third nipple. Their culture tends towards innovation and creative endeavours.
                        <ul><b>Vampire</b></ul> - A person whose physiology requires them to avoid sunlight and consume blood to stay alive. 
                        <ul><b>Zombie</b></ul> - A person whose physiology requires them to consume brains to stay alive, and may or may not suffer from flesh-eating viruses.
                </div>
            )
            break;
        case 2: //Industry
            component_output = (
                <div className="content is-scrollable">
                    <h3>Industry</h3>
                    <hr/>
                    <p>The term 'Industry' in Kalmany is a term that refers to the categorisation of the profession that the citizen is currently employed in. There are a total of twenty-four categories currently that were chosen to best represent the majority of the population. As time goes on, modifications may occur to produce specific groupings where required, or if the information described by the current categorisation system is inadequate.</p>
                </div>
            )
            break;
            case 3: //Religion
            component_output = (
                <div className="content is-scrollable">
                    <h3>Religion</h3>
                    <hr/>
                    <p>Kalmany is home to a number of belief systems and so the Kalmany Electoral Commission is dedicated to ensuring that we can represent them all. Kalmany was once a Greater Bovine nation, but this has changed with the migration of other beliefs and we hope to promote a cohesive society of which your beliefs will not prevent you to live a life of equal opportunity. The census collected the following religions actively followed:</p>
                    <ul><b>The Greater Bovine</b> - The belief in the deity referred to as the Greater Bovine, a denomination of the Greater Being pantheon that has since dissipated.</ul>
                    <ul><b>The Sun God Who Isn't Ra</b> - The belief in the god of the sun who is absolutely not called Ra. Their place of worship are the numerous Sun Temples.</ul>
                    <ul><b>Hewey Dewey</b> - Born in the 1960s, the belief that Hewey L Dewey, prolific businessman, was a prophet. Teaches the value of money and its importance in the afterlife.</ul>
                    <ul><b>Folklore</b> - A denomination of Wicca that believes in spirits that house the elements of nature.</ul>
                    <ul><b>Chaotic Neutral</b> - The belief in chaos being the natural state of things.</ul>
                    <ul><b>Beddism</b> - The belief that humanity is meant to relax and live a stress-free life.</ul>
                    <ul><b>Something</b> - The belief that something is coming. Something big.</ul>
                    <ul><b>Cee Kwel</b> - The belief that life is but a simulation on a great deity's personal computer.</ul>
                    <ul><b>Inbetween-ism</b> - The belief that all the major religions share truths and that there is no true answer.</ul>
                    <ul><b>None</b> - No distinct belief system or traditions.</ul>
                </div>
            )
            break;
        case 4: //Sex & Sexuality
            component_output = (
                <div className="content is-scrollable">
                    <h3>Sex & Sexuality</h3>
                    <hr/>
                    <p>The Kalmany Electoral Commission is committed to ensuring that representation is a priority. Therefore, the various attributes that we may use in identity must be considered. With the breadth of gender and sexual identity, the Kalmany Electoral Commission would like to apologise for the limited number of categories that can help identify a citizen, but had to make a decision to categorise the citizens in such a way that would provide meaningful information. As such, the census data may be innacurate in correctly identifying a citizens gender and sexuality.</p>
                    <p>Sex in the census referred to biological sex, on which the Commission chose to use the three biological sexes of <b>Male</b>, <b>Female</b> and <b>Superfemale</b>. <b>Uncategorised</b> is a collective that may refer to many individuals and is not meant in a derogatory fashion, but simply to provide useful data from the census.</p>
                    <p>The Kalmany Electoral Commission acknowledges this is a contentious issue and would like to state that they are dedicated to equality in all forms.</p>
                </div>
            )
            break;
        case 8: //Socks
            component_output = (
                <div className="content is-scrollable">
                    <h3>Socks</h3>
                    <hr/>
                    <p>Since the Great Sock Fire of 1866, the citizens of Kalmany have held socks to be a contentious issue. Socks have a major part of the political system</p>
                </div>
            )
            break;

        default:
            component_output = (
                <div className="content">
                    <p>We provide the following helpful links and information dumps to help understand our nation and how it operates.</p>
                    <p>Please peruse them when convenient.</p>
                </div>
            )
            break;
    }

    return component_output;
}