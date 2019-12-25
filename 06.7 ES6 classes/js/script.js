class User {
constructor(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}
sayHi() {
    return 'Hello' + this.name;
}
}

class Female extends User {
    sayHi(){
        return 'Привет,'+this.name+'! Ты зарегистрирована';
    }
}

const Man = new User('someone', '123@Ru', '12345678')
console.log(Man)
console.log(Man.sayHi())

const Women = new Female('Аня', '7643.com', '12345678')
console.log(Women)
console.log(Women.sayHi())