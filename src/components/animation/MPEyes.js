import { 
    Container,
    AnimatedSprite,
    useApp,
    Sprite
 } from '@inlet/react-pixi'

import React from 'react';
import * as PIXI from 'pixi.js';

export default function MPEyes ({eyeStyle, animation}) {
    const [eyeFrames, setEyeFrames] = React.useState([]);
    const eyesSpriteSheet = "images/sprites/" + animation + "/eyes/" + eyeStyle + ".json"
    const eyesSpriteImage = "/images/sprites/" + animation + "/eyes/" + eyeStyle + ".png"

    React.useEffect(() => {
        let texture = PIXI.Texture.from(eyesSpriteImage);
        fetch(eyesSpriteSheet)
        .then(response => response.json())
        .then( (json) => {
            let sheet = new PIXI.Spritesheet(texture, json);
            sheet.parse(() => console.log(eyesSpriteSheet + ' is ready to use!'));
            setEyeFrames(sheet.animations[animation])
        });
    }, []);

    if (eyeFrames.length === 0 ) {
        return null;
    }

    return (
        <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={eyeFrames}
            anchor={0}
        />
    );
};