import { 
    Stage,
    Container,
    AnimatedSprite,
    useApp,
    useTick
 } from '@inlet/react-pixi'
 import MemberParliament from './memberParliament';

import React from 'react';
import * as PIXI from 'pixi.js';

export default function BluHouse() {
    const [width, height] = [900, 600];

    return (
        <Stage width={width} height={height} options={{ backgroundColor: 0xeef1f5 }}>
        <MemberParliament x={0} y={0} eyeStyle={"blue"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"femAdult"} constituency={"beddingshire"} animation={"idle"}/>
                
        <MemberParliament x={128} y={0} eyeStyle={"gray"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"malSenior"} constituency={"dog_shire"} animation={"speaking"}/>
          
        <MemberParliament x={256} y={0} eyeStyle={"blue"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"femSenior"} constituency={"crystal"} animation={"idle"}/>
           
        <MemberParliament x={384} y={0} eyeStyle={"cyan"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"femAdult"} constituency={"lumbridgeshire"} animation={"idle"}/>
            
        <MemberParliament x={512} y={0} eyeStyle={"green"} skinStyle={"lizard"} suitStyle={"blue"} hairStyle={"malMid"} constituency={"city_of_kalbal"} animation={"idle"}/>
              
        <MemberParliament x={640} y={0} eyeStyle={"red"} skinStyle={"lizard"} suitStyle={"blue"} hairStyle={"femSenior"} constituency={"maizemaze"} animation={"idle"}/>
              
        <MemberParliament x={0} y={128} eyeStyle={"red"} skinStyle={"lizard"} suitStyle={"gray"} hairStyle={"femAdult"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={128} y={128} eyeStyle={"gray"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"malMid"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={256} y={128} eyeStyle={"green"} skinStyle={"lizard"} suitStyle={"blue"} hairStyle={"malAdult"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={384} y={128} eyeStyle={"brown"} skinStyle={"lizard"} suitStyle={"blue"} hairStyle={"malAdult"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={640} y={256} eyeStyle={"gray"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"malMid"} constituency={"dog_shire"} animation={"idle"}/>
            
        <MemberParliament x={512} y={128} eyeStyle={"brown"} skinStyle={"zombie"} suitStyle={"gray"} hairStyle={"malSenior"} constituency={"beddingshire"} animation={"idle"}/>
                
        <MemberParliament x={640} y={128} eyeStyle={"blue"} skinStyle={"lizard"} suitStyle={"blue"} hairStyle={"femMid"} constituency={"beddingshire"} animation={"idle"}/>
                   
        <MemberParliament x={0} y={256} eyeStyle={"cyan"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"femMid"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={128} y={256} eyeStyle={"green"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"malAdult"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={256} y={256} eyeStyle={"purple"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"femAdult"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={384} y={256} eyeStyle={"red"} skinStyle={"zombie"} suitStyle={"blue"} hairStyle={"malMid"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={512} y={256} eyeStyle={"gray"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"malMid"} constituency={"beddingshire"} animation={"idle"}/>
                  
        <MemberParliament x={0} y={384} eyeStyle={"red"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"femSenior"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={128} y={384} eyeStyle={"blue"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"femMid"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={256} y={384} eyeStyle={"red"} skinStyle={"vampire"} suitStyle={"gray"} hairStyle={"femYouth"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={384} y={384} eyeStyle={"brown"} skinStyle={"android"} suitStyle={"blue"} hairStyle={"malAdult"} constituency={"beddingshire"} animation={"idle"}/>
            
        <MemberParliament x={512} y={384} eyeStyle={"brown"} skinStyle={"human"} suitStyle={"gray"} hairStyle={"femYouth"} constituency={"beddingshire"} animation={"idle"}/>
                
        <MemberParliament x={640} y={384} eyeStyle={"brown"} skinStyle={"human"} suitStyle={"blue"} hairStyle={"femYouth"} constituency={"beddingshire"} animation={"idle"}/>
                            
        </Stage>
    )
}