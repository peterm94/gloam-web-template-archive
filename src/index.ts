import * as gloam from "gloam-engine";

class WebScript implements gloam.Script {
    update(): void
    {
        console.log("this was created in typscript.")
    }
}
// let renderer = new gloam.AsciiRenderer();

let game = new gloam.Game();
let renderer = game.create_renderer();
let actual_renderer = game.get_node(renderer);
game.add_web_script(new WebScript());
game.run_all_scripts();
