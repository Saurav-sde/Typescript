
let subs: number | string = 10; // now subs can be both number and string
subs = "1M" ;

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'; 



const orders = ['12', '20', '28', '42'];
// let currentOrder; // currentOrder: any
let currentOrder: string | undefined;

for (const order of orders) {
    if(order === '28') {
        currentOrder = order
        break
    }
}

console.log(currentOrder); // currentOrder: string | undefined
