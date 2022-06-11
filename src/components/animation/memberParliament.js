import { 
    Container,
    AnimatedSprite,
    useApp,
    Sprite
 } from '@inlet/react-pixi'

import React from 'react';
import * as PIXI from 'pixi.js';
import MPEyes from './MPEyes';
import MPSkin from './MPSkin';
import MPHair from './MPHair';
import MPSuit from './MPSuit';

export default function MemberParliament ( {x , y , skinStyle, suitStyle, eyeStyle, hairStyle, constituency, animation}) {

    return (
        <Container 
            x={x} 
            y={y} 
        >
            
            <Sprite
                image={"/images/sprites/shields/" + constituency + ".png"}
                anchor={0}
            />
            <Sprite
                image="/images/sprites/background.png"
                anchor={0}
            />
            <MPSkin skinStyle={skinStyle} animation={animation}/>
            <MPSuit suitStyle={suitStyle} animation={animation}/>
            <MPEyes eyeStyle={eyeStyle} animation={animation}/>
            <MPHair hairStyle={hairStyle} animation={animation}/>
        </Container>
    );
};