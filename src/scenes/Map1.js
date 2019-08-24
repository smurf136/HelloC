let player1;
let player2;
let platforms;
let cursors;
let keyA;
let keyW;
let keyS;
let keyD;
class Map1 extends Phaser.Scene {
    constructor(test){
        super({
            key: 'Map1'
        })
    }

    preload(){
        this.load.image('bg', 'src/image/bg.jpg')
        this.load.image('ground', 'src/image/ground.png')
        this.load.image('platform', 'src/image/long path.png')
        this.load.spritesheet('player', 'src/image/character.png', { frameWidth: 68, frameHeight: 68})
    }

    create(){
        this.add.image(800, 600, 'bg').setScale(2)

        platforms = this.physics.add.staticGroup()

        platforms.create(630, 680, 'ground').setScale(2).refreshBody()
        platforms.create(850, 400, 'platform')
        platforms.create(600, 500, 'platform');
        platforms.create(200, 220, 'platform');

        player1 = this.physics.add.sprite(250, 300, 'player')
        player2 = this.physics.add.sprite(900, 300, 'player')

        player1.setBounce(0.2)
        player1.setCollideWorldBounds(true)
        player2.setBounce(0.2)
        player2.setCollideWorldBounds(true)

        this.physics.add.collider(player1, platforms)
        this.physics.add.collider(player2, platforms)
        console.log('map1')
        cursors = this.input.keyboard.createCursorKeys()
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }


    update(){
        if(keyA.isDown){
            player1.setVelocityX(-330)
            player1.anims.play('left', true)
        }else if(keyD.isDown){
            player1.setVelocityX(330)
            player1.anims.play('right', true)
        }else{
            player1.setVelocityX(0)
            player1.anims.play('turn', true)
        }
        if(cursors.left.isDown){
            player2.setVelocityX(-330)
            player2.anims.play('left', true)
        }else if(cursors.right.isDown){
            player2.setVelocityX(330)
            player2.anims.play('right', true)
        }else{
            player2.setVelocityX(0)
            player2.anims.play('turn', true)
        }

        if(cursors.up.isDown && player2.body.touching.down){
            player2.setVelocityY(-330)
        }
        if(keyW.isDown && player1.body.touching.down){
            player1.setVelocityY(-330)
        }
    }


}
export default Map1;