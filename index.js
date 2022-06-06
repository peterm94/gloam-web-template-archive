import * as wasm from "gloam-engine";

wasm.greet();

let game = wasm.Game.new("gello");

let e = game.add_entity();

console.log(e);

game.add_component_web(e, {"how": "idk"});
game.add_component_web(e, 4);

// Test mutability.
let ret = game.get_component_web(e, "Number");
console.log(ret)
ret = 144;

let ret2 = game.get_component_web(e, "Number");
console.log(ret2)

game.start();