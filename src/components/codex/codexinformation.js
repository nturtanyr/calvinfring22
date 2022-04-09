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
                        <ul><b>Third Nipple</b> - The citizens of Kalmany that identify as 'third nipple' may or may not have the physiology that gives them a third nipple. Their culture tends towards innovation and creative endeavours.</ul>
                        <ul><b>Vampire</b> - A person whose physiology requires them to avoid sunlight and consume blood to stay alive. </ul>
                        <ul><b>Zombie</b> - A person whose physiology requires them to consume brains to stay alive, and may or may not suffer from flesh-eating viruses.</ul>
                </div>
            )
            break;
        case 2: //Industry
            component_output = (
                <div className="content is-scrollable">
                    <h3>Industry</h3>
                    <hr/>
                    <p>The term 'Industry' in Kalmany is a term that refers to the categorisation of the profession that the citizen is currently employed in. There are a total of thirty-four categories currently that were chosen to best represent the majority of the population. As time goes on, modifications may occur to produce specific groupings where required, or if the information described by the current categorisation system is inadequate. The categories are as follows:</p>
                    <ul><b>Accommodation</b> - eg. Hotel, B&B services.</ul>
                    <ul><b>Administration</b> - eg. Desk work, accounting, bureaucracy.</ul>
                    <ul><b>Agriculture</b> - eg. Farming, forestry, fishing.</ul>
                    <ul><b>Arts and Entertainment</b> - eg. Galleries, museums, theatres, cinemas, etc.</ul>
                    <ul><b>Communication</b> - eg. Telecommunication lines, call centres, ISP providers.</ul>
                    <ul><b>Construction</b> - Any form of building or infrastructure construction.</ul>
                    <ul><b>Education</b> - Educating students in schools or in university.</ul>
                    <ul><b>Electricity</b> - Working with the nation's power grids, or pertaining to individual building power.</ul>
                    <ul><b>Financial</b> - eg. Banking, investments, insurance, etc.</ul>
                    <ul><b>Food Services</b> - eg. Restaurant workers, café workers, fast food vendors, etc.</ul>
                    <ul><b>Government</b> - Working with or within the government.</ul>
                    <ul><b>Healthcare</b> - eg. Nurses, doctors, dentists, chiropractors, morticians, etc.</ul>
                    <ul><b>Legal Services</b> - eg. Lawyers, any position within the court.</ul>
                    <ul><b>Manufacturing</b> - Production of goods for consumption or retail.</ul>
                    <ul><b>Media</b> - eg. TV, Newspaper, Internet Blogging, and other media consumption venues.</ul>
                    <ul><b>Military</b> - As part of, or assisting, the national defense force.</ul>
                    <ul><b>Mining</b> - Retrieving resources from the earth.</ul>
                    <ul><b>Motor Services</b> - eg. Maintaining vehicular operation, or providing services for vehicular operation.</ul>
                    <ul><b>Real Estate</b> - Within the trade of properties and land, including landlords.</ul>
                    <ul><b>Recreation</b> - eg. Games complexes, outdoor game complexes, etc.</ul>
                    <ul><b>Rescue</b> - eg. Firefighting, coastguard, etc.</ul>
                    <ul><b>Retail</b> - Commercial sales in stores of goods.</ul>
                    <ul><b>Retired</b> - Not employed and is receiving pensions.</ul>
                    <ul><b>Sanitation</b> - eg. Cleaning, waste disposal, etc.</ul>
                    <ul><b>Scientific Research</b> - Funded to perform scientific research in any field.</ul>
                    <ul><b>Security</b> - Private or public security can apply.</ul>
                    <ul><b>Servile</b> - Other services that are provided to person to person - may involve maidwork, may involve sex work - the Kalmany Electoral Commission passes no judgement.</ul>
                    <ul><b>Sports</b> - eg. Involved in professional sports events or venues, or employed as a professional athlete or sportsperson.</ul>
                    <ul><b>Student</b> - Not employed, but is in full-time education either at School or University.</ul>
                    <ul><b>Technology</b> - eg. Software companies, hardware companies, etc.</ul>
                    <ul><b>Transport</b> - Providing the means for public transportation in all forms.</ul>
                    <ul><b>Unemployed</b> - Not employed in any capacity and is not a student nor retired.</ul>
                    <ul><b>Waterworks</b> - Maintaining the countries water systems, or individual building water needs.</ul>
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
                    <h3>Gender, Sex & Sexuality</h3>
                    <hr/>
                    <p>The Kalmany Electoral Commission is committed to ensuring that representation is a priority. Therefore, the various attributes that we may use in identity must be considered. The Kalmany Electoral Commission issues a survey to all citizens to give the best category to describe their Gender and Sexuality. This may not be indicative a person's true Gender or Sexuality, only how they determine themself.</p>
                    <p>Pertaining Sex in the surveys issued, we ask for the biological sex of <b>Male</b>, <b>Female</b> and <b>Superfemale</b> that the citizen is currently, as determined by their biology. This information is not present in the Demography page as it is not deemed useful in actions by person.</p>
                    <p>Pertaining Gender in the surveys issued, we ask for the gender identity the citizen most strongly identifies with, regardless of current or previous biological sex. These categories operate under an understanding of the widely-known binary categorisation of <b>Male</b> and <b>Female</b>, but offers that this is not a limitation to a person nor a way to discriminate or judge that citizen. The categories given are:</p>
                        <ul><b>Female</b> - The citizen identifies with the binary <b>Female</b> gender.</ul>
                        <ul><b>Demifemale</b> - The citizen partially identifies with the binary <b>Female</b> gender.</ul>
                        <ul><b>Male</b> - The citizen identifies with the binary <b>Male</b> gender.</ul>
                        <ul><b>Demimale</b> - The citizen partially identifies with the binary <b>Male</b> gender.</ul>
                        <ul><b>Bigender</b> - The citizen identifies with both of the binary genders.</ul>
                        <ul><b>Agender</b> - The citizen does not identify with either of the binary genders.</ul>
                        <ul><b>Pangender</b> - The citizen can identify with either of the binary genders or neither - there is no preference.</ul>
                        <ul><b>Genderfluid</b> - The citizen can identify with either of the binary genders or neither - there may be a preference that fluctuates.</ul>
                        <ul><b>Xenogender</b> - The citizen identifies with a gender outside of the binary genders that <b>Agender</b> cannot fully describe.</ul>
                    <p>Pertaining Sexuality in the surveys issued, we ask for the sexual orientation the citizen feels best describes themself. The sexual orientation here considers itself only with the biological sex of a person and does not take into account a person's gender identity - these may be entirely different. The categories given are:</p>
                        <ul><b>Heterosexual</b> - The citizen is strongly sexually attracted to a biological sex that is not their own.</ul>
                        <ul><b>Homosexual</b> - The citizen is strongly sexually attracted to their own biological sex.</ul>
                        <ul><b>Bisexual</b> - The citizen is strongly sexually attracted to their own biological sex and one of the other biological sexes.</ul>
                        <ul><b>Trisexual</b> - The citizen is strongly sexually attracted to all three biological sexes.</ul>
                        <ul><b>Asexual</b> - The citizen is not strongly sexually attracted to any of the three biological sexes.</ul>
                        <ul><b>Pansexual</b> - The citizen is equally sexually attracted to any or all of the three biological sexes, without needing to define.</ul>
                        <ul><b>Unlabelled</b> - The citizen cannot adequately categorise their sexual orientation in the prescribed categories.</ul>
                    <p>The Kalmany Electoral Commission acknowledges this is a contentious issue and would like to state that they are dedicated to equality in all forms and the surveys issued are a way of determining useful data but may not adequately describe a citizen's identity.</p>
                </div>
            )
            break;
        case 5: //Elections
            component_output = (
                <div className="content is-scrollable">
                    <h3>Elections</h3>
                    <hr/>
                    <p>Every citizen is given the opportunity to vote for a candidate in their constituency to represent them in parliament. Elections take place from 09:00 until 17:00 each day, apart from Sundays; the day of rest. Any citizen is welcome to stand for election, as long as they bring an application form to the Kalmany Electoral Commission Headquarters in Kalbal. A candidate will be asked to provide a standard list of policies as part of their platform that they may take to parliament.</p>
                    <p>Election results are determined by first past the post - the candidate with the most votes is elected as a member of parliament. If there is a tie, the Kalmany Electoral Commission is dedicated to providing a solution as and when this occurs.</p>
                </div>
            )
            break;
        case 6: //Parliament
            component_output = (
                <div className="content is-scrollable">
                    <h3>Assemblies</h3>
                    <hr/>
                    <p>The central system of legislation within the Kalmany government still stands as it did almost two-hundred years ago, when the Great Sock Fire of 1812 took place. Since then, the parliament of Kalmany has operated using twenty-four elected members to represent each of Kalmany's twenty-four constituencies.</p>
                    <p>When elected, at 19:00 each day, the parliament will convene at an assembly, where each member is given the opportunity to bring one policy to parliament that they wish to enact.</p>
                    <p>Each member is then given an opportunity to discuss the policy, but they may only speak by throwing a sock into a ceremonial ring. Discussing a policy is vital to persuading the other members of parliament to the cause.</p>
                    <p>Once the discussion has completed, all members will be allowed to vote For, Against, or Abstain. If the votes For can reached quorum of a third of parliament, and outnumber the votes Against, the policy will be passed and implemented by the government.</p>
                </div>
            )
            break;
        case 7: //Rankings
            component_output = (
                <div className="content is-scrollable">
                    <h3>Rankings</h3>
                    <hr/>
                    <p>The Kalmany Electoral Commission has collaborated with Bulford University to provide the means to survey the public on a regular basis to determine a suitable scoring system against each sector of Government spending and operation. Using these surveys, each constituency is then ranked on a score of 0-10 on their performance. This information is not intended to provoke competition between constituencies and is meant to only provide a meaningful way to compare if one constituency is, without a doubt, better than another.</p>
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