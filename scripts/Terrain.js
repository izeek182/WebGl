

var terrainWidth  = 10;
var terrainLength = 10;

function newTerrainBuffer(size){
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, someData, gl.STATIC_DRAW);
}