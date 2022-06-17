import * as gloam from "../../gloam-engine/pkg";

class B implements gloam.Script {
    update(): void
    {
        console.log("this is all plugged together.")
    }
}

const b = new B();

gloam.run_update(b);
