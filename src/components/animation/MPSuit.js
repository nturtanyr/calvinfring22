import { 
    Container,
    AnimatedSprite,
    useApp,
    Sprite
 } from '@inlet/react-pixi'

import React from 'react';
import * as PIXI from 'pixi.js';

export default function MPSuit ({suitStyle, animation}) {
    const [suitFrames, setSuitFrames] = React.useState([]);
    const suitSpriteSheet = "images/sprites/" + animation + "/suit/" + suitStyle + ".json"
    const suitSpriteImage = "/images/sprites/" + animation + "/suit/" + suitStyle + ".png"

    React.useEffect(() => {
        let texture = PIXI.Texture.from(suitSpriteImage);
        fetch(suitSpriteSheet)
        .then(response => response.json())
        .then( (json) => {
            let sheet = new PIXI.Spritesheet(texture, json);
            sheet.parse(() => console.log(suitSpriteSheet + ' is ready to use!'));
            setSuitFrames(sheet.animations[animation])
        });
    }, []);

    if (suitFrames.length === 0 ) {
        return null;
    }

    return (
        <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={suitFrames}
            anchor={0}
        />
    );
};