
// interface :- its main goal is to give the shape to the object
// in js there is no code gets generated for interface
interface Chai {
    flavor: string
    price: number
    milk?: boolean
}

const masala: Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}
const s:Shop = {
    id: 1,
    name: "Chai code Coffee"
}
// s.id = 2 gives error



interface DiscountCalculator {
    (price: number) : number
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");  
    }
}

// index signature
interface ChaiRatings {
    [flavor: string] : number
}
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4,
}


// interface gets automatically merged
interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: "Saurav",
    age: 23
}

interface A {a: string}
interface B {b: string}
interface C extends A, B {}

