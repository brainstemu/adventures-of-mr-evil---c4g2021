namespace SpriteKind {
    export const goodkine = SpriteKind.create()
    export const evilking = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const fernd = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const Key2 = SpriteKind.create()
    export const Potion = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    Time_Peace.destroy()
    info.startCountdown(60)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    Current_level += -1
    tiles.setTilemap(tilemap`level5`)
})
sprites.onDestroyed(SpriteKind.Wall, function (sprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    Current_level += 1
    tiles.setTilemap(tilemap`level0`)
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        tiles.placeOnTile(Key_one, value)
        animation.runImageAnimation(
        Key_one,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 3 . . . 
            . 3 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 . . . 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . 3 . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 . 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 5 . . . . . 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . 3 . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . 3 . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.setTilemap(tilemap`level15`)
    myEnemy = sprites.create(img`
        . . . . e e e e e . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . e d d d e . . . . . . . 
        . . . . d 8 d 8 d . . . b . . . 
        . . . . d d d d d . . b . . . . 
        . . . . d f f f d b b . . . . . 
        . . . . . e e e 4 4 b . . . . . 
        . . . . . e e e 4 4 . . . . . . 
        . . 5 5 5 2 2 2 5 5 4 . . . . . 
        . . 5 5 5 5 2 5 5 5 5 . . . . . 
        . . 5 5 5 5 2 5 5 5 5 . . . . . 
        . . d d 5 5 2 5 5 d d . . . . . 
        . . 4 4 5 5 5 5 5 . . . . . . . 
        . . 4 4 5 5 . 5 5 . . . . . . . 
        . . . . 5 5 . 5 5 . . . . . . . 
        . . . . 5 5 . 5 5 . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 100)
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile28`)
    music.changeTempoBy(-30)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (info.score() == 2) {
        Current_level += 3
        tiles.setTilemap(tilemap`level11`)
    } else {
        game.splash("you need 2 key")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.setDialogTextColor(2)
    game.showLongText("You were caught in an ambush", DialogLayout.Full)
    game.over(false, effects.smiles)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    Key_one.destroy(effects.warmRadial, 100)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
    Current_level += 2
    tiles.setTilemap(tilemap`level10`)
    Key_to = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 3 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Key2)
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        tiles.placeOnTile(Key_to, value)
        animation.runImageAnimation(
        Key_to,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 9 . . . 
            . 9 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 . . . 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 . . . . . . 9 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 9 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . 9 . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 9 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 . 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . 9 . . . . 5 . . . . . . . . 
            . . . . . . . 5 5 . . . . . 9 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . 9 . 
            . . . . . . . 5 . . . . . . . . 
            . . 9 . . . . 5 . . . . . . . . 
            . . 9 . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-100000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key2, function (sprite, otherSprite) {
    Key_to.destroy(effects.warmRadial, 100)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.showLongText("you cheat", DialogLayout.Full)
    game.showLongText("you're ", DialogLayout.Full)
    game.showLongText("a ", DialogLayout.Full)
    game.showLongText(" cheater ", DialogLayout.Full)
    game.showLongText("get out of here ", DialogLayout.Full)
    game.showLongText("cheater", DialogLayout.Full)
    game.showLongText("now for a hour of credits", DialogLayout.Full)
    game.showLongText("directed by the curator", DialogLayout.Full)
    game.showLongText("made by the curator", DialogLayout.Full)
    game.showLongText("hated by the  curator", DialogLayout.Full)
    game.showLongText("played by the cheater ", DialogLayout.Full)
    game.over(true, effects.confetti)
})
info.onLifeZero(function () {
    game.showLongText("Ha ha you lost ", DialogLayout.Full)
    game.over(false, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Potion, function (sprite, otherSprite) {
    Potion.destroy(effects.hearts, 100)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTilemap(tilemap`level16`)
    myEnemy.destroy()
    info.startCountdown(1e+35)
    music.changeTempoBy(30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Key_to: Sprite = null
let myEnemy: Sprite = null
let Key_one: Sprite = null
let Potion: Sprite = null
let Time_Peace: Sprite = null
let mySprite: Sprite = null
game.showLongText("you the mouse", DialogLayout.Full)
tiles.setTilemap(tilemap`level5`)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f d d d f f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . d d e d e d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d f f f d d . . . . . 
    . . . . . d d d d d 5 5 . . . . 
    . . . . . . d f d . 5 5 . . . . 
    . . . f f f f 2 f f f f . . . . 
    . . . f f f 2 2 2 f f f . . . . 
    . . . f f f f 2 f f f f . . . . 
    . . . f f f f 2 f f f f . . . . 
    . . . d d f f 2 f f d d . . . . 
    . . . b b f f f f f . . . . . . 
    . . . b b f f f f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
info.setLife(1)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 110)
let Current_level = 0
Time_Peace = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Item)
Potion = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Potion)
Key_one = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Key)
for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
    animation.runImageAnimation(
    Time_Peace,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 f 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 f 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 f 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 f 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 f 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 f 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 f f f 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 f 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 f f 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 f 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 f 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 f 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 f 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 f 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 f 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 f 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 f 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 f 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 f 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 f 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 1 1 f f 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 f f f 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 f f f f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 f f f 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 f 1 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 f 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 f 1 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 f 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . 5 f 1 1 1 f 1 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 f 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 f 1 1 1 1 f 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 1 1 1 1 1 1 1 1 1 1 1 5 . . 
        . 5 f 1 1 1 1 1 1 1 1 1 f 5 . . 
        . . 5 1 1 1 1 1 1 1 1 1 5 . . . 
        . . . 5 f 1 1 f 1 1 f 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    90,
    true
    )
    tiles.placeOnTile(Time_Peace, value)
}
info.startCountdown(70)
for (let value of tiles.getTilesByType(sprites.dungeon.floorDark3)) {
    tiles.placeOnTile(Potion, value)
    animation.runImageAnimation(
    Potion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . 1 2 2 2 1 . . . . . . 
        . . . . . 1 2 2 2 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . 1 2 2 2 1 . . . . . . 
        . . . . . 1 7 2 2 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . 1 2 2 7 1 . . . . . . 
        . . . . . 1 7 2 2 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . 1 7 1 . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . 1 2 2 2 1 . . . . . . 
        . . . . . 1 7 2 2 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . 1 7 1 . . . . . . . 
        . . . . . . 1 2 1 . . . . . . . 
        . . . . . 1 2 2 7 1 . . . . . . 
        . . . . . 1 7 2 2 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `],
    500,
    true
    )
}
forever(function () {
    music.playMelody("E B C5 A B G A D ", 99)
})
