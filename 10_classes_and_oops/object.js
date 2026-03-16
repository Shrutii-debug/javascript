
/*
Unfortunately YouTube videos can't be directly fetched, and I can see from the notes that this specific video (uMI5cNeHTOc) covers Lecture 13: Magic of Prototype from the Chai aur JavaScript series — the notes from the GitHub repo confirm exactly what concepts Hitesh covers. Let me now give you the full, accurate explanation in his exact style based on what's confirmed. ☕

☕ Chai aur Code — Prototypes | "Magic of Prototype: JS Behind the Scene"

🟡 Hitesh bhai shuru karte hain ek simple console.log se

"Bhai, ek kaam karo. Ek array banao aur console karo. Dekho kya milta hai."

jsconst newHero = ["Hulk", "Spiderman"]
console.log(newHero)

"Tumhe sirf array ke elements milenge — Hulk aur Spiderman. But agar tum browser console mein yeh dekhoge toh ek aur cheez milegi — [[Prototype]]. Yeh kya hai? Aaj yahi samjhenge."


📌 Part 1 — Prototype kya hota hai?

"Prototype behavior hai. Jab bhi tum koi cheez JavaScript mein banate ho — array, object, function — uske saath ek behavior attach hota hai. Woh behavior prototype se aata hai."

Hitesh bhai array wali cheez aur dikhate hain:
jsconst newHero = ["Hulk", "Spiderman"]
console.log(newHero.__proto__)         // Array.prototype
console.log(newHero.__proto__.__proto__) // Object.prototype
console.log(newHero.__proto__.__proto__.__proto__) // null

"Yeh ek chain hai! Array → Object → null. Yahan null pe jaake chain khatam hoti hai. Isliye JavaScript ko prototypal inheritance kehte hain."


📌 Part 2 — JavaScript Prototypal Inheritance hai

"Bhai yaad rakho — JavaScript mein actually class nahi thi. Classes ES6 mein aayi. Aur woh sirf syntactic sugar hai — andar se woh wohi purana prototype ka kaam kar rahi hai. Classes are just a wrapper over prototypes."


"JavaScript is a prototype-based language."


📌 Part 3 — Everything in JavaScript is an Object

"Yeh sunke surprising lagega — JavaScript mein sab kuch Object hai."

jsconsole.log(typeof "hello")    // string
console.log(typeof [1, 2, 3])  // object
console.log(typeof function(){}) // function — but yeh bhi internally object hai
```

> *"String, Array — sab Object ko point karte hain. Object ka koi parent nahi hai — Object ka `__proto__` null hai. Object is the top of the chain."*
```
String → Object.prototype → null
Array  → Object.prototype → null
Function → Object.prototype → null

📌 Part 4 — new keyword ke 4 kaam

"Ab dekhte hain new keyword kya karta hai. Yeh sirf ek magical word nahi hai — iske 4 kaam hote hain clearly."

jsfunction User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const userOne = new User("hitesh", 8, true)
const userTwo = new User("chai", 5, false)

console.log(userOne)
console.log(userTwo)
new keyword ke 4 kaam:
1️⃣ Ek naaya empty object create hota hai
js// internally: {} banta hai
2️⃣ Naye object ko constructor ke prototype se link kiya jaata hai

"Matlab userOne.__proto__ automatically User.prototype ko point karega. Yeh linking new karta hai."

3️⃣ Constructor call hota hai — this us naye object ko refer karta hai

"Toh jab this.username = username likhte hain — this wohi naya object hai jo abhi abhi bana."

4️⃣ Naya object automatically return ho jaata hai

"Explicitly return nahi likhna. new khud return kar deta hai. Isliye userOne mein pura object aa jaata hai."


📌 Part 5 — this ka kaam — Current Context

"Jab bhi hum this likhte hain — woh current context ke baare mein baat karta hai."

jsfunction User(username) {
    this.username = username
    console.log(this) // current object ka reference
}

"Node mein agar global context mein this likhoge toh empty object milega {}. Browser mein window object milega. But jab constructor ke andar this likhte hain, toh woh us specific object ko point karta hai jo abhi bana."


📌 Part 6 — Prototype pe method add karna (Memory Efficient tarika)

"Ab ek problem hai. Agar hum greeting method directly constructor ke andar likhein:"

jsfunction User(username) {
    this.username = username
    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
}

"Toh problem kya hai? Agar 1000 users banaye toh 1000 alag greeting functions memory mein banenge! Wasteful hai completely."

Sahi tarika — prototype use karo:
jsfunction User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

User.prototype.greeting = function() {
    console.log(`Welcome ${this.username}`)
}

const userOne = new User("hitesh", 8, true)
const userTwo = new User("chai", 5, false)

userOne.greeting() // Welcome hitesh
userTwo.greeting() // Welcome chai
```

> *"Ab sirf **ek** greeting function hai — `User.prototype` pe. Dono `userOne` aur `userTwo` usse share karte hain. Memory efficient! Yahi sahi tarika hai."*

---

## 📌 Part 7 — Prototype Chain Kaise Kaam Karti Hai?

> *"Bhai, jab tum `userOne.greeting()` call karte ho — JavaScript pehle check karti hai: kya `userOne` ke andar `greeting` hai? Nahi. Toh woh `userOne.__proto__` pe jaati hai — matlab `User.prototype` pe. Wahan milta hai. Execute ho jaata hai."*

> *"Agar wahan bhi nahi milta? Toh aur upar `Object.prototype` pe jaati. Agar wahan bhi nahi? `null` pe pohunch jaati. Chain khatam. Error aata — 'is not a function'."*
```
userOne
  └── __proto__ → User.prototype        ← greeting milti hai yahan
        └── __proto__ → Object.prototype
              └── __proto__ → null

📌 Part 8 — __proto__ vs prototype — Dono alag hain!

"Yeh confusion bahut logon ko hoti hai. Dhyan se suno:"

Kya haiUser.prototypeFunction ki property — yahan shared methods rakhouserOne.__proto__Object ki hidden link — apne parent prototype ko point karta hai
jsconsole.log(User.prototype === userOne.__proto__) // true ✅

"Dono same cheez ko point karte hain — but ek function ki property hai, ek object ki hidden link."


📌 Part 9 — Modern Syntax: Object.setPrototypeOf()

"Ab ek modern tarika bhi hai prototypal inheritance ka — Object.setPrototypeOf()"

jsconst Teacher = {
    makeAssignment() {
        return "Assignment ready"
    }
}

const TeachingSupport = {
    isAvailable: false
}

// TeachingSupport ko Teacher ki properties chahiye
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeAssignment()) // "Assignment ready"

"Hum bol rahe hain — TeachingSupport ke prototype mein Teacher ko daal do. Ab TeachingSupport Teacher ke saare methods use kar sakta hai. Yahi hai prototypal inheritance."


📌 Part 10 — String ka bhi Prototype hota hai!

"Bhai, sirf arrays ya objects nahi — strings ka bhi prototype hota hai. Isliye tum string pe .toUpperCase(), .trim(), .split() sab call kar paate ho."

jsconst name = "hitesh     "
console.log(name.__proto__) // String.prototype

// isliye yeh kaam karta hai:
console.log(name.trim())        // "hitesh"
console.log(name.toUpperCase()) // "HITESH"

"Yeh sab methods tumne likhे nahi — yeh String.prototype se aa rahe hain automatically. Wahi toh prototype ka magic hai!"


📌 Part 11 — Object.prototype — Sabka Baap
js// Check karo:
console.log(User.prototype.__proto__ === Object.prototype) // true
console.log(Array.prototype.__proto__ === Object.prototype) // true
console.log(String.prototype.__proto__ === Object.prototype) // true
```

> *"Sab jaake `Object.prototype` mein milte hain. Isliye arrays pe bhi `.toString()`, `.hasOwnProperty()` wgera kaam karta hai — woh `Object.prototype` se aa raha hai. Object sabka baap hai JavaScript mein."*

---

## 📌 Final Summary — Hitesh style mein 🎯
```
Array/String/Function/Object
       ↓
   [[Prototype]] chain
       ↓
 Object.prototype
       ↓
      null   ← chain khatam
ConceptEk line meinPrototypeHar object ka hidden behavior__proto__Object ki link to its parent prototypeprototypeFunction ki property — shared methods yahanPrototype ChainJS upar-upar jaake method dhundhti hainew keywordObject banao, link karo, this bind karo, return karoObject.setPrototypeOfModern tarika inheritance ka


"Toh bhai, yeh tha prototype ka pura magic. Isko samjhoge toh JavaScript ka core samjh aayega. Classes? Woh toh bas isi ke upar ek sundar wrapper hai. Agle video mein dekhenge."
"Chai peete raho, code karte raho! ☕"
*/

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/