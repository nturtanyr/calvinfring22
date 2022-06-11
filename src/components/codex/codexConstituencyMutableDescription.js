
import React from "react";

function filterAttributes(attributes, attributeName){
    return attributes.filter(attribute => {
        return attribute.name === attributeName
    })[0].value
}

export default function CodexConstituencyMutableDescription({name, description, attributes}) {

    var airports = filterAttributes(attributes,"airports")
    var ambulances = filterAttributes(attributes,"ambulances")
    var bears = filterAttributes(attributes,"bears")
    var bookshops = filterAttributes(attributes,"bookshops")
    var busRoutes = filterAttributes(attributes,"bus_routes")
    var cellTowers = filterAttributes(attributes,"cell_towers")
    var clocks = filterAttributes(attributes,"clocks")
    var cows = filterAttributes(attributes,"cows")
    var deathHazards = filterAttributes(attributes,"death_hazards")
    var falloutShelters = filterAttributes(attributes,"fallout_shelters")
    var farms = filterAttributes(attributes,"farms")
    var fighterJets = filterAttributes(attributes,"fighter_jets")
    var galleries = filterAttributes(attributes,"galleries")
    var hospitals = filterAttributes(attributes,"hospitals")
    var ladders = filterAttributes(attributes,"ladders")
    var libraries = filterAttributes(attributes,"libraries")
    var lighthouses = filterAttributes(attributes,"lighthouses")
    var museums = filterAttributes(attributes,"museums")
    var nuclearPlants = filterAttributes(attributes,"nuclear_plants")
    var officespace = filterAttributes(attributes,"officespace")
    var parks = filterAttributes(attributes,"parks")
    var pigeons = filterAttributes(attributes,"pigeons")
    var powerStations = filterAttributes(attributes,"power_stations")
    var railways = filterAttributes(attributes,"railways")
    var rainfall = filterAttributes(attributes,"rainfall")
    var residential = filterAttributes(attributes,"residential")
    var schools = filterAttributes(attributes,"schools")
    var sewers = filterAttributes(attributes,"sewers")
    var subwayStations = filterAttributes(attributes,"subway_stations")
    var taxRate = filterAttributes(attributes,"tax_rate")
    var windFarms = filterAttributes(attributes,"wind_farms")

    var mutableTextRegion = ""
    mutableTextRegion += name + " is an environmentally "
    if(nuclearPlants > windFarms)
    {
        mutableTextRegion += "problematic "
    }
    else if(powerStations > windFarms)
    {
        mutableTextRegion += "conscientious "
    }
    else
    {
        mutableTextRegion += "sound "
    }
    mutableTextRegion += "area, with temperatures around "
    mutableTextRegion += String(15 + (rainfall / 4))
    mutableTextRegion += "ºC. It has "

    if(farms + parks > 50)
    {
        mutableTextRegion += "lush forests and a rich area for agriculture, "
    }
    else if(farms + parks > 35)
    {
        mutableTextRegion += "many green spaces and meadows for agriculture, "
    }
    else if(farms + parks > 18)
    {
        mutableTextRegion += "some green space for the public's \"green\" concerns, "
    }
    else
    {
        mutableTextRegion += "a few spaces for agriculture and public enjoyment, "
    }

    if(powerStations + cellTowers > 50)
    {
        mutableTextRegion += "many industrial estates for production, "
    }
    else if(powerStations + cellTowers > 35)
    {
        mutableTextRegion += "a fair amount of land dedicated to factories and warehouses, "
    }
    else if(powerStations + cellTowers > 18)
    {
        mutableTextRegion += "some space restricted to industrial operations, "
    }
    else
    {
        mutableTextRegion += "few areas dedicated to industrial manufacturing and progress, "
    }


    if(officespace > 60)
    {
        mutableTextRegion += "a highly commercialised center, "
    }
    else if(officespace > 50)
    {
        mutableTextRegion += "a moderately commercial center, "
    }
    else
    {
        mutableTextRegion += "very few commercial buildings, "
    }

    if(residential > 250)
    {
        mutableTextRegion += "and plenty of residences for its citizens. "
    }
    else if(officespace > 235)
    {
        mutableTextRegion += "and a moderate amount of recent housing for its citizens. "
    }
    else
    {
        mutableTextRegion += "and few old-style architecture buildings for its citizens. "
    }

    mutableTextRegion += "People generally think of " + name + " as "

    if(cows > 240)
    {
        mutableTextRegion += "\"tranquil\"."
    }
    else if(cows > 220)
    {
        mutableTextRegion += "\"peaceful\"."
    }
    else  if(cows > 200)
    {
        mutableTextRegion += "\"pretty to look at\"."
    }
    else  if(cows > 180)
    {
        mutableTextRegion += "\"student-focused\"."
    }
    else  if(cows > 160)
    {
        mutableTextRegion += "\"family-friendly\"."
    }
    else  if(cows > 140)
    {
        mutableTextRegion += "\"too busy\"."
    }
    else if(cows > 120)
    {
        mutableTextRegion += "\"congested\"."
    }
    else if(cows > 100)
    {
        mutableTextRegion += "\"modern\"."
    }
    else if(cows > 80)
    {
        mutableTextRegion += "\"modern\"."
    }
    else 
    {
        mutableTextRegion += "\"industry-centric\"."
    }
    
    var mutableTextFamilies = ""
    
    mutableTextFamilies += "%name% has [a lot of schools for budding families] [and plenty of libaries for the older generation]."
    mutableTextFamilies += "%name% attempts to be a [welcoming space for families] and has [entertainment for kids and adults alike]."
    mutableTextFamilies += "%name% has [a lot of museums compared to galleries] to which its citizens are [amicable]."
    mutableTextFamilies += "The region is home to [many festivals and artistic events] that citizens name [nice]."

    var mutableTextDanger = ""
    mutableTextDanger += "%name% is also considered [very dangerous] [yet] the citizens are [incredibly cautious] and [keep to themselves]."
    mutableTextDanger += "The citizens have [plenty of hospitals to choose from] [yet] [no way to reach them easily]."
    mutableTextDanger += "Transport links exist and preferred transport by it citizens is by [airplane]."
    mutableTextDanger += "The [infestation of pigeons] makes people concerned for their health."

    var mutableTextProtection = ""
    mutableTextProtection += "%name% has [more lighthouses than expected], and has a [strong police service] to assist its peoples in protecting the law."
    mutableTextProtection += "[With that %name% suffers from a high crime rate]."
    mutableTextProtection += "%name% also protects its people with [numerous fallout shelters scattered about the region] to the citizen's [chagrain]."

    var mutableTextOther = "%name% can be described as [pleasant], [different], and [combatitive]."
    

    return (
        <div className="content">
            <p>{description}</p>
        </div>
            
    )
}