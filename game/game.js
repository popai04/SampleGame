enchant();
enchant.Sound.enabledInMobileSafari = true;

window.onload = function () {
    var game = new Game(320, 320);
    game.preload('bear.gif');
    game.preload("fanfare.wav");

    game.onload = function () {
        var bear = new Sprite(20, 30);
        bear.image = game.assets['bear.gif'];
        bear.dir = 1;
        bear.spd = 3;
        bear.addEventListener('enterframe', function () {
            if (this.x > game.width || this.x < 0) bear.dir *= -1;
            this.x += bear.dir * bear.spd;

        });
        game.rootScene.addChild(bear);
        game.assets['fanfare.wav'].clone().play();
        //bear.bgm.play();
    };
    game.start();
};
