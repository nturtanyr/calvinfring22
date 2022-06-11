import { 
    Container,
    AnimatedSprite,
    useApp,
    Sprite
 } from '@inlet/react-pixi'

import React from 'react';
import * as PIXI from 'pixi.js';

export default function MPHair ({hairStyle, animation}) {
    const [hairFrames, setHairFrames] = React.useState([]);
    const hairSpriteSheet = "images/sprites/" + animation + "/hair/" + hairStyle + ".json"
    const hairSpriteImage = "/images/sprites/" + animation + "/hair/" + hairStyle + ".png"

    React.useEffect(() => {
        let texture = PIXI.Texture.from(hairSpriteImage);
        fetch(hairSpriteSheet)
        .then(response => response.json())
        .then( (json) => {
            let sheet = new PIXI.Spritesheet(texture, json);
            sheet.parse(() => console.log(hairSpriteSheet + ' is ready to use!'));
            setHairFrames(sheet.animations[animation])
        });
    }, []);

    if (hairFrames.length === 0 ) {
        return null;
    }

    return (
        <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={hairFrames}
            anchor={0}
        />
    );
};