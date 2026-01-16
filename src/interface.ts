// function makeChai(order: {type:string; sugar:number; strong:boolean}) {
//     console.log(order);
// }

// function serveChai(order: {type:string; sugar:number; strong:boolean}) {
//     console.log(order);
// }

// here we can clearly see a signature of order
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};
function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}


type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

// type CupSize = "small" | "large"
// class Chai implements CupSize {

// }
// here gives error , ts says that we can't allowed to do this in customized type only basic types is allowed
// here interface is used

interface CupSize {
    size: "small" | "large"
}
class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// type Response = {ok:true} | {ok:false}
// class myRes implements Response {
//     ok: boolean = true;
// }



type TeaType = "masala" | "ginger" | "lemon"
function orderChai(t: TeaType) {
    console.log(t);
}


type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai =  BaseChai & Extra;
const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1,
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Saurav"}
const u2: User = {username: "Saurav", bio: "saurav.ai"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "MasterJI",
    version: 1
}

// cfg.appName = "ChaiCode"; // now it gives error as it doesn't change bcz it is read-only