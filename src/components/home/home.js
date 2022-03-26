import React from "react"
import ConstituencyMap from "./constituencymap"
import ConstituencyInfo from "./constituencyinfo"

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            constituencyDetails : {
                Id : '0',
                Name : 'Kalmany Political Map',
                Info : "",
                Tagline : '',
                Emblem : '',
                Settlements : '',
                Climate : ''

            }
        }
        this.handleConstituency = this.handleConstituency.bind(this)
    }
    
    handleConstituency(constituencyId){
        switch(constituencyId)
        {
            case '1':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Beddingshire',
                        Info : 'Historically, a county with manufacturing dedicated to pillows, beds, and all things comfortable; Beddingshire is proud of its love of naps. Sleep is one of the most important things in your day, maybe that\'s why Beddingshire rallies around their emblem, "the sleeping man"!',
                        Tagline : 'Making the world as wonderful as our dreams!',
                        Emblem : 'The Sleeping Man',
                        Settlements : 'Bedding (city)',
                        Climate : 'Dry and warm'
                    }
                })
                break;
            case '2':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Dog Shire',
                        Info : 'The county that has an obsession of dogs. Who\'s a good boy? Who\'s a good boy!? It\'s you! Yes it is! Yes it is! No but seriously, Dog Shire constituents are dog lovers and most parks are dog friendly. Hide the cats, because Dog Shire is on the rise!',
                        Tagline : 'Our barks are as good as our bites!',
                        Emblem : 'The Barking Dog',
                        Settlements : 'Writing (city)',
                        Climate : 'Green and windy'
                    }
                })
                break;
            case '3':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Crystal',
                        Info : 'Made rich by the old Emerald mines below the ground, Crystal has always been considered the home of jewellers and the gem trade. Nowadays, the mines are closed, and the residents boast home pools and zeppelins from their ancestors still hefty wealth.',
                        Tagline : 'We can never dig too deep!',
                        Emblem : 'The Jolly Miner',
                        Settlements : 'Emerald City (city)',
                        Climate : 'Soft breezes'
                    }
                })
                break;
            case '4':
                this.setState({
                constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Lumbridgeshire',
                        Info : 'Friendly to newcomers, Lumbridgeshire is proud to house any and all demographies! From their historical castle to their new-age technological offices, Lumbridgeshire attempts to marry the old with the new and only just succeeds.',
                        Tagline : 'Respect your fellow player.',
                        Emblem : 'The Wise Sage',
                        Settlements : 'Lumbridge (city)',
                        Climate : 'Calm and a little virtual'
                    }
                })
                break;

            case '5':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'City of Kalbal',
                        Info : 'The political and government centre of Kalmany, Kalbal has always treated itself to the finer things in life. But all good things must come to an end, and surely Kalbal realises this. That\'s why it staunchly rejects every proposal to move the capital like it\'s superglued itself to its seat.',
                        Tagline : 'The country revolves around us!',
                        Emblem : 'St Kalvin\'s Cross',
                        Settlements : 'Kalbal (city)',
                        Climate : 'No wind but a lot of rain'
                    }
                })
                break;
            case '6':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Maizemaze',
                        Info : 'Soft breezes flow over the cornfields of Maizemaze. A yell can be misheard as a whisper. Great swathes of land as far as the eye can see. Farmers rejoice; you\'ve found your homeland!',
                        Tagline : 'Don\'t get lost!',
                        Emblem : 'The Broken Scarecrow',
                        Settlements : 'St Chives (town), Falling Mouth (town)',
                        Climate : 'Breezy and humid'
                    }
                })
                break;
            case '7':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Bumcry',
                        Info : 'The citizens are committed to the idea that it\'s pronounced BEM-kree. Sometimes you need to take a break to where nobody can even pronounce your name. The citizens in Bumcry prefer their dialects of talking fast and talking hard. It helps boost crop yield as well which is very important to this coastal shire!',
                        Tagline : '(Often unintelligible muttering)',
                        Emblem : 'The Raging Bull',
                        Settlements : 'Basil (city)',
                        Climate : 'Rough and ready'
                    }
                })
                break;
            case '8':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Scone',
                        Info : 'Butchers, bakers, and candlestick makers - feel free to make home in the restaurant-heavy realm of Scone. Sweet things abundant, the number of cavities per person in Scone is four times higher than any other constituency! But don\'t let that scare you, it\'s not as if they pour sugar into the water supply... yet.',
                        Tagline : 'However you say it or make it, we accept you!',
                        Emblem : 'The Conflicted Baker',
                        Settlements : 'Exit Here (city)',
                        Climate : 'Subtly warm but catches you off guard'
                    }
                })
                break;
            case '9':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Gerham',
                        Info : 'A blessed and holy land, dedicated to the arts of the long lost St Gerham, it remains a place that sees its fair share of light, rain, and snow. Old buildings litter the landscape and you won\'t be able to escape those age old teachings of the Greater Bovine. The people are accepting, but expect a few door visits.',
                        Tagline : 'Make your home in our home of light.',
                        Emblem : 'The Drunken Clergyman',
                        Settlements : 'Gerham (city)',
                        Climate : 'Rainy, windy, sunny and more!'
                    }
                })
                break;
            case '10':
                    this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'East Nussex',
                        Info : 'Almost standoffish, it\'s understandable that sometimes the people of East Nussex don\'t have a great rep. But it\'s hard not to get involved in their staunch rivalry with West Nussex! Go reds! Famed for its stubbornness and for the occasional murder.',
                        Tagline : 'Stay on our good side, which is east.',
                        Emblem : 'The Red Robins',
                        Settlements : 'Dimham and Love (city)',
                        Climate : 'Lush and brisk'
                    }
                })
                break;
            case '11':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'West Nussex',
                        Info : 'Understandably irritated, the people of West Nussex can often be picked out as quick-to-anger or constantly annoyed by bustling shoppers. Their nerves are a little tetchy but that doesn\'t stop them from accepting to new members to join the fight against East Nussex! Go blues! Famed for its anger and the occasional murder.',
                        Tagline : 'If you\'re west, you\'re the best!',
                        Emblem : 'The Blue Tits',
                        Settlements : 'Worley (town), Crawling (town)',
                        Climate : 'Sunny and heated'
                    }
                })
                break;
            case '12':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Here\'s That City You Wanted',
                        Info : 'We kind of forgot we commissioned this area. Very new, built with the best technologies available! But we kind of forgot what we asked for so... have a look around! I\'m sure there are houses and maybe shops. It\'s new so it must be good.',
                        Tagline : 'We\'re still thinking, come back to us.',
                        Emblem : 'The Ambivalent Contractor',
                        Settlements : 'Right Here (city)',
                        Climate : 'Sunny we think'
                    }
                })
                break;
            case '13':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Isle of Blu',
                        Info : 'Off the coast and loving it, the Isle of Blue boasts picturesque scenes of emptiness and the occasional sheep. Don\'t let that put you off though, the quiet helps you reach a point of tranquility and peace. The peoples are friendly, but they\'ve also not seen new people in a while. They may mistake you for a shaven sheep. Hold onto your passport.',
                        Tagline : 'A peaceful spot of tranquility, away from it all.',
                        Emblem : 'The Lonely Fisherman',
                        Settlements : 'Oldport (town)',
                        Climate : 'Wimdy as heck!'
                    }
                })
                break;
            case '14':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Can\'t',
                        Info : 'The attitude of working hard is lost to the people of Can\'t - sometimes you need to step back and understand that not everything is possible. They believe that sometimes, it\'s best to accept your limitations, relax, and have a beer. Because not everything needs to go a mile a minute. Also I was going to, but now you asked me I\'m not going to.',
                        Tagline : 'Sometimes, you just have to say no.',
                        Emblem : 'The Disgruntled Maiden',
                        Settlements : 'Two Hills (town), Peachanham (town)',
                        Climate : 'The sun won\'t come out'
                    }
                })
                break;
            case '15':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Piggyton',
                        Info : 'Proud of their emblem, Piggyton embraces its fat figured friend, and places pigs on the pedestal for all to see! Obesity ranks high in Piggyton, but spirits do too! Accept yourself for who you are an enjoy the fact that fast food restaurants outnumber the people by 2:1. have a pork chop! Or a sausage!',
                        Tagline : 'Getting fatter by the year!',
                        Emblem : 'The Fat Hog',
                        Settlements : 'Southpigton (town), Porkbite (town)',
                        Climate : 'Perfect for sunbathing'
                    }
                })
                break;
            case '16':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Northplace',
                        Info : 'Not to be confused with Southplace, Northplace offers what you can\'t get in its southern neighbour, like pleasant forests, avant-garde art, and picket fences. Unlike Nussex, Northplace is relatively reasonable and enjoys their neighbours as sometimes they forget which constituency they are part of. It makes elections a little difficult.',
                        Tagline : 'Prickly, but pretty to look at!',
                        Emblem : 'The Red Rose',
                        Settlements : 'Kettle (city)',
                        Climate : 'A little cold but not too much'
                    }
                })
                break;
            case '17':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Southplace',
                        Info : 'Not to be confused with Northplace, Southplace attempts to differentiate themselves with dark woods, new age art, and iron railings, but the railings are being phased out for nice wooden ones instead. Quite reasonable and calm, they are often used as a better example to Nussex, but it\'s hard to say they\'re exactly the same. For one, Southplace is south.',
                        Tagline : 'We take your money to give back to you!',
                        Emblem : 'The White Rose',
                        Settlements : 'Littlecheffield (city)',
                        Climate : 'A little warm but not too much'
                    }
                })
                break;
            case '18':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'New York',
                        Info : 'They truly believe that they were the first ones to name their city New York, and nobody can be bothered to argue anymore. Their city can keep the name. It doesn\'t make it any better. Often at odds with Kalbal, New York boasts a large financial sector and traffic lights. Pizza places are rife in this modern metropolitan.',
                        Tagline : 'Honestly, we were here first.',
                        Emblem : 'The Grinning Cat',
                        Settlements : 'Newer York (city)',
                        Climate : 'It rains, but not as much as we want'
                    }
                })
                break;
            case '19':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Dictionaryshire',
                        Info : 'Home to the first dictionary written with four words, all synonyms of \'walk\', Dictionaryshire cannot stop talking about it, as if its the only thing it has. It also has the oldest university in the country - just seventy hours! Great minds enjoy the old roads and its influx of bookshops.',
                        Tagline : 'If you think of a word, we thought of it first!',
                        Emblem : 'The Raven Writing',
                        Settlements : 'Bulford (city)',
                        Climate : 'Chilly to walk through'
                    }
                })
                break;
            case '20':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Wear and Tear',
                        Info : 'Castles are Wear and Tear\'s biggest draw, but their fashion industry is also in full swing. Who wouldn\'t want to wear a full rendition of Chateua de Tissu on your head? Walled so you can\'t get out, Wear and Tear hopes to keep its visitors coming back for more. They\'ve even resorted to changing up their history every so often to keep you guessing!',
                        Tagline : 'Hiding in our castles!',
                        Emblem : 'The Sleepless Watchman',
                        Settlements : 'Chateau de Tissu (city)',
                        Climate : 'Cold and high'
                    }
                })
                break;
            case '21':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Wilting Flowers',
                        Info : 'Flowerbeds litter the fields of Wilting Flowers to draw the bees and birds in - wildlife just loves the colours that Wilting Flowers provides! But be warned, hay-fever sufferers may just have to be hospitalised when they enter! No seriously, its a serious problem. We can\'t keep up with them. If you suffer from hay-fever, just stay away. Please.',
                        Tagline : 'Comforting breezes and a deadly sun',
                        Emblem : 'The Dried Sunflower',
                        Settlements : 'Jazztown (city)',
                        Climate : 'Abnormally dry and not very windy'
                    }
                })
                break;
            case '22':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Shire',
                        Info : 'Given up on their old names and history, including the short term as \'Mispronouncableshire\', Shire tries to keep the public happy by listening to their demands to the letter. Hate the name? We\'ll change it. Think there are too many drunks? Ban alcohol. Too noisy? Ban all noise from between 1pm and 12pm the next day. The \'loud hour\' as it is colloquially known has often not been that loud.',
                        Tagline : 'Makers of sauce and pots!',
                        Emblem : 'The Twisted Tongue',
                        Settlements : 'City (city)',
                        Climate : 'Breezy and bright'
                    }
                })
                break;
            case '23':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Mudland',
                        Info : 'Home to several mud fields, the lands of Mudland pack a punch to all those with a sensitive nose! But why stop there, their masses of factories have even started some scientific studies into how people survive in the smog-covered and carbon dioxide rich paradise! Try visiting and see what\'s the longest that you can hold your breath!',
                        Tagline : 'Don\'t drink the water!',
                        Emblem : 'The Dancing Chimneysweep',
                        Settlements : 'Vuroom (city)',
                        Climate : 'Dry and warm'
                    }
                })
                break;
            case '24':
                this.setState({
                    constituencyDetails : 
                    {
                        Id : constituencyId,
                        Name : 'Hurry',
                        Info : 'Fast paced when it comes to technology! You best run as the public transport system is a little busy, especially in work hours! Hurry is seen as the hub of fast choices and new invention, all in the name of making things faster. After all, it was Hurry who first initiated bears into the police force and all constituencies have followed since! Truly remarkable and wholly inventive.',
                        Tagline : 'Quick to the punch, slow to the bell!',
                        Emblem : 'The Black Stallion',
                        Settlements : 'Awaking (town), Guild of Bears (town)',
                        Climate : 'Dry and warm'
                    }
                })
                break;
        }
    }

    render() { 
        return (
            <div className='columns'> 
                <div className='column is-three-fifths'>
                    <ConstituencyMap handleConstituency={this.handleConstituency}/>
                </div>
                <div className='column'>
                    <ConstituencyInfo constituencyDetails={this.state.constituencyDetails}/>
                </div>
            </div>
        )
    }
}

export default Home;