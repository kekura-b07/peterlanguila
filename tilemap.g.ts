// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000070000000000000900070000000000000707070b000000000707070707000000000007000000000008000000000000000000070a00000000050000080b0000000000070b0b0b0b0005000008000909090a00010a00000000050b0008000000000900010a0000000005000008000000000900020000000000050000080000000009000300000100000500000800000000090004000000000005050008000005050404040000000000000500080000050000000b0000000000000000000900000000000b0b0b0000000000050500000500000000000b00000000000008050005060606060606060606060606060600000000000000000000000000000000`, img`
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
`, [myTiles.transparency16,sprites.swamp.swampTile13,sprites.swamp.swampTile16,sprites.swamp.swampTile18,sprites.swamp.swampTile15,sprites.swamp.swampTile3,sprites.swamp.swampTile9,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles5,sprites.builtin.forestTiles4,sprites.builtin.oceanSand4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
