'use strict';

var curTime = 0;
var easystar = new EasyStar.js();
var player, cursors, Sound;

var PlayScene = {
  render: function() {
  },
  update: function() {
    curTime++;
    this.game.input.enabled = true;
    player.body.setZeroVelocity();

    if (cursors.up.isDown) {
        player.body.moveUp(300)
    } else if (cursors.down.isDown) {
        player.body.moveDown(300);
    } if (cursors.left.isDown) {
        player.body.moveLeft(300);
        player.scale.x = -1; //flipped
    } else if (cursors.right.isDown) {
        player.body.moveRight(300);
        player.scale.x = 1; //facing default direction
    }
  },
  create: function () {
    curTime = 0;
    easystar = new EasyStar.js();
    this.game.add.bitmapText(25, this.game.height - 50, 'bitmap-font', "Hello world!", 32);
    Sound = {
      green_track : this.game.add.audio('green_track')
    };
    this.game.stage.backgroundColor = '#eeedf2';
    this.game.world.setBounds(0, 0, 1000, 1000);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'textures', 'player.png');
    player.anchor.setTo(.5, 1); //so it flips around its middle
    this.game.physics.p2.enable(player);
    player.body.fixedRotation = true;
    cursors = this.game.input.keyboard.createCursorKeys();

    //this.game.camera.follow(player);

    Sound.green_track.stop();
    Sound.green_track.play();
    /*
    player.body.onBeginContact.add(playerTouch, this);
    function playerTouch (body, bodyB, shapeA, shapeB, equation) {
      if (bodyB && bodyB.id == wolf.body.id) { }
    }
    */
  }
};

module.exports = PlayScene;
