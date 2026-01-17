
const chaiFlavours: string[] = ["Masala", "Adrak", "Ginger", "Lemon"]
const chaiPrice: number[] = [10,20,25,15]

const rating: Array<number> = [4.5, 5.0];

// array of objects
type Chai = {
    name: string;
    price: number
}
const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Lemon", price: 10}
]

// read-only array
const cities: readonly string[] = ["Delhi", "Jaipur"]; // we can't add , edit or delete in this array 

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]



// tuples
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?];
userInfo = ["Saurav", 100];
userInfo = ["Saurav", 200, true];

const location: readonly [number, number] = [28.66, 32.22];

const chaiItems: [name: string, price: number] = ["Masala", 25]


// Enums

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE


enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
} // here when we give the values then after that properties automatically gets value which is incremneted by 1


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    LEMON = "lemon"
}
function makeChai(type: ChaiType) {
    console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER)


// this is correct but not a good practice, try to keep a single data type
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}