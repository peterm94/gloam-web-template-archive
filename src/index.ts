import {Gloam, JsGameObject} from "gloam-engine";
import earthSpr from "./Art/red.png";

class Apple implements JsGameObject
{
    pos_x = 0;
    pos_y = 0;

    init(): void
    {
        console.log("appl init")
        console.log(earthSpr);
        // const aa = btoa(earthSpr);
        // console.log(aa);
        // Gloam.load_texture(aa);
    }

    update(delta: number): void
    {
        console.log("update apple", delta);
        let meee;
        Gloam.with_object(2, (other) => {
            Gloam.with_object(2, (other) => {
                console.log("This is illegal... or not?");
            })
        });

        console.log(meee);

        Gloam.with_objects([1], (a) => {
            console.log("test")
            console.log(a);
        });

        Gloam.with_type("Snake", (other: Snake) => {
            console.log("SNAME: ", other.apple)
        });
    }

    public move()
    {
        // TODO rand
        this.pos_x = 12;
        this.pos_y = 12;
    }
}

class Snake implements JsGameObject
{
    segments: [[number, number]] = [[0, 0]];
    x_dir = 1;
    y_dir = 0;
    apple: Apple

    init(): void
    {
        console.log("Init has been called.");
        this.apple = new Apple();
        Gloam.add_object(this.apple);
    }

    update(delta: number): void
    {
        console.log(this.segments);
        // move the head
        const head = this.segments[0];
        this.segments.unshift([head[0] + this.x_dir, head[1] + this.y_dir]);

        // if collecting an apple, don't do this.
        if (head[0] == this.apple.pos_x && head[1] == this.apple.pos_y)
        {
            this.apple.move();
        } else
        {
            this.segments.pop();
        }
    }
}

Gloam.add_object(new Snake());
// Gloam.start();

Gloam.update_once(10);
Gloam.update_once(10);