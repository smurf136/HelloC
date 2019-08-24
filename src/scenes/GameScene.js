let platforms;
let player1;
let player2;
let stat1 = false;
let stat2 = false;
let checkpoint1;
let checkpoint2;
let cursors;
let checkOverlap;
let keyA;
let keyW;
let keyS;
let keyD;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bg.jpg')
        this.load.image('ground', 'src/image/ground.png')
        this.load.image('platform', 'src/image/long path.png')
        this.load.spritesheet('player', 'src/image/character.png', { frameWidth: 68, frameHeight: 68})
        this.load.spritesheet('checkpoint', 'src/image/checkpoint.png', { frameWidth: 164, frameHeight: 414 })
    }

    create() {
        
        this.add.image(800, 600, 'bg').setScale(2)

        platforms = this.physics.add.staticGroup()

        platforms.create(630, 680, 'ground').setScale(2)
        platforms.create(200, 400, 'platform')
        platforms.create(700, 500, 'platform');
        platforms.create(750, 220, 'platform');
        platforms.create(1200, 400, 'platform');

        player1 = this.physics.add.sprite(250, 300, 'player')
        player2 = this.physics.add.sprite(900, 300, 'player')

        player1.setBounce(0.2)
        player1.setCollideWorldBounds(true)
        player2.setBounce(0.2)
        player2.setCollideWorldBounds(true)


        checkpoint1 = this.physics.add.sprite(700, 300, 'checkpoint').setScale(0.2)
        checkpoint2 = this.physics.add.sprite(800, 100, 'checkpoint').setScale(0.2)

        
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 4 } ],
            frameRate: 20
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        })
        
        this.anims.create({
            key: 'checkpoint',
            frames: this.anims.generateFrameNumbers('checkpoint'),
            frameRate: 7,
            yoyo: false,
            repeat: -1
        })
        
        checkpoint1.anims.play('checkpoint')
        checkpoint2.anims.play('checkpoint')

        cursors = this.input.keyboard.createCursorKeys()
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


        this.physics.add.collider(player1, platforms)
        this.physics.add.collider(player2, platforms)
        this.physics.add.collider(checkpoint1, platforms)
        this.physics.add.collider(checkpoint2, platforms)
        this.physics.add.overlap(player1, checkpoint1, this.nextMap1)
        this.physics.add.overlap(player2, checkpoint2, this.nextMap2)
        // nextMap = this.scene.start('Map1');
        console.log('gs')



    }

    
    update() {

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
        if(stat1 == true && stat2 == true){
            this.scene.start('Map1');
            console.log('Next Map')
        }
        
        // if (checkOverlap(player, checkpoint)){
        //     this.tweens.add({
        //         targets: this.logo,
        //         y: 150,
        //         duration: 2000,
        //         onComplete: this.onCompleteHandler.bind(this)
        //     });
        // }

    }
    nextMap1(){
        stat1 = true;
        console.log("stat1" + stat1)

    }
    nextMap2(){

        stat2 = true;

        console.log("stat2" + stat1)

        if(stat1 == true && stat2 == true){
        }
    }
    // checkOverlap(spriteA, spriteB) {

    //     var boundsA = spriteA.getBounds();
    //     var boundsB = spriteB.getBounds();
    
    //     return this.Phaser.Rectangle.intersects(boundsA, boundsB);
    
    // }
    
    
}

export default GameScene;
