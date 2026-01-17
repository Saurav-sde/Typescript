function wrapInArray<T>(item: T) : T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavor: "ginger"})


function pair<A, B>(a: A, b: B): [A, B]{
    return [a,b]
}
pair("masala", "test");
pair("masala", 20);
pair("masala", {flavor: "ginger"});


// generic interfaces
interface Box<T> {
    content: T
}
const numberBox: Box<number> = {content: 10}