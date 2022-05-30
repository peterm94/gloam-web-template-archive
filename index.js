import * as wasm from "gloam-engine";

wasm.greet();

let game = wasm.Game.new("gello");

let e = game.add_entity();

console.log(e);

game.add_component_web(e, {"how": "idk"});
game.add_component_web(e, 4);

