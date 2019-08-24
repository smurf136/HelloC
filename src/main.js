import 'phaser';
import GameScene from './scenes/GameScene';
import Map1 from './scenes/Map1';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1800,
    height: 740,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y : 300 }
        }
    },
    scene: [
        GameScene,Map1
        
    ]
};

const game = new Phaser.Game(config);