// type assertion
let response: any = "42";
let numericLength : number = (response as string).length; // forceful type assertion

type Book = {name: string}
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;


// unknown vs any
let value: any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase(); 

let newValue: unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
// newValue.toUpperCase(); // here it gives error
if(typeof newValue === "string") {
    newValue.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error: " , error);
}

// never datatype
type Role = "admin" | "user"
function redirectBasedOnRole(role: Role) : void {
    if(role === "admin") {
        console.log("Redirecting to admin dashborad");
        return;
    }
    if(role === 'user') {
        console.log("Redirecting to user dashboard");
        return;
    }
    role;    // here role has data type never
}

function neverReturn() : never {
    while(true){}
}