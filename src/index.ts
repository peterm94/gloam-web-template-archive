import {Game, GameObjectShim, JsGameObject} from "gloam-engine";

class Snake implements JsGameObject
{
    segments: [[number, number]] = [[0, 0]];
    x_dir = 1;
    y_dir = 0;
    apple: Apple

    init(ga: GameObjectShim) {
        this.apple = new Apple();
        ga.add_game_object(this.apple);
    }

    update(ga: GameObjectShim)
    {
        console.log(this.segments);
        // move the head
        const head = this.segments[0];
        this.segments.unshift([head[0] + this.x_dir, head[1] + this.y_dir]);

        // if collecting an apple, don't do this.
        if (head[0] == this.apple.pos_x && head[1] == this.apple.pos_y) {
            this.apple.move();
        } else {
            this.segments.pop();
        }
    }
}

class Apple implements JsGameObject
{
    pos_x = 0;
    pos_y = 0;

    update(ga: GameObjectShim)
    {

    }

    public move() {
        // TODO rand
        this.pos_x = 12;
        this.pos_y = 12;
    }
}


let game = new Game();
game.add_game_object(new Snake());
game.update();
