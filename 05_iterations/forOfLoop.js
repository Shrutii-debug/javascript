// for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//for(const iterator of object) ye koi object ni h, bs notation h,ye sb par lag skta h jaise ki strings
for(const num of arr){
    //console.log(num);
    
}

const greetings = "Hello World!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
    
}

//Maps (like arrays but more to them) // it is an object
// the map objects holds value pairs and remembers the original insertion order of the keys. Any value
//(both objects and primitive values) maybe used as either a key or a value
//diff is isme koi v duplicate value ni h, sb unique h

const map = new Map() 
//key value pairs
map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('Fr', "France")

//console.log(map);


for(const key of map){
    //console.log(key);     //even this returns the whole map, not just keys
    
}

//but agar aise alag alag print krwana h toh ye syntax h
for(const [key, value] of map){
    //console.log(key, ":=", value); //even this returns the whole map, not just keys
    
}

//for of for an object

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}


/*
for (const [key, value] of myObject){
    //console.log(key, ":=", value); //this returns error that object is not iterable
    //so for of doesnt work for objects
    
}
    */