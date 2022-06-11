import { 
    Container,
    AnimatedSprite,
    useApp,
    Sprite
 } from '@inlet/react-pixi'

import React from 'react';
import * as PIXI from 'pixi.js';

export default function MPSkin ({skinStyle, animation}) {
    const [skinFrames, setSkinFrames] = React.useState([]);
    const skinSpriteSheet = "images/sprites/" + animation + "/skin/" + skinStyle + ".json"
    const skinSpriteImage = "/images/sprites/" + animation + "/skin/" + skinStyle + ".png"

    React.useEffect(() => {
        let texture = PIXI.Texture.from(skinSpriteImage);
        fetch(skinSpriteSheet)
        .then(response => response.json())
        .then( (json) => {
            let sheet = new PIXI.Spritesheet(texture, json);
            sheet.parse(() => console.log(skinSpriteSheet + ' is ready to use!'));
            setSkinFrames(sheet.animations[animation])
        });
    }, []);

    if (skinFrames.length === 0 ) {
        return null;
    }

    return (
        <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={skinFrames}
            anchor={0}
        />
    );
};