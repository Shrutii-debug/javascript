class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //getter setter for email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        //return this._password.toUpperCase()
        return `${this._password}shruti`
    }

    //set password(value){
    //    this.password = value
    //}

    //isme problem ye h ki constructor v value set kr rha h aur setter v set kr rha h
    //toh dikkat aati h and maximum call stack size exceeded wali dikkat aati hai 
    // kyunki dono k beech m ek race lag jati h aur yahi dikkat h

    //solution
    set password(value){
        this._password = value.toUpperCase()
    }
    //ab ye krne se get m issue aayega kyunki usme nirmally password h
    //toh udhr v _password kro
}

const shruti = new User("S@shruti.ai", "abc")
console.log(shruti.password);
