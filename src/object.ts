const chai = {
    name : "Masala chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

// here there is no issye when it gets extra values
type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup;

type Brew = {brewTime: number}
const coffee = {brewTime:5, beans: "Arabice"}
const chaiBrew: Brew = coffee;

// missing properties, when we give leass proprty than defination thenit gives error but in extra it dpoesn't give error

// split out data types
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[],
    address: Address
}



// partial:- it makes all properties optional 
type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}
updateChai({price: 25});
updateChai({isHot: false})
updateChai({}); 


// Required:- it makes all properties required
type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}
placeOrder({
    name: "Masala Chai",
    quantity: 2
})


// Pick :- it is used to pick some properties from existing type and make a new type
type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai2, "name" | "price">;
const chaiInfo: BasicChaiInfo = {
    name: "Lemon tea",
    price: 30
} 

// Omit :- used to delete some properties from existing type and make a new type

type Chainew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}
type PublicChai = Omit<Chai, "secretIngredients"> 
 