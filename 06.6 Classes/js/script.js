//MAIL USERS

let Users = {
    hasAccesToProfile: true,
    approved: true,
    sayHi: function() {return 'Привет'}
}

function User(name, email, password) {
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;
    this._proto_ = Users;
}

const Fedya = new User('Федя', 'f@ex.com', 'querty');

console.log(Fedya);



//FEMAIL USER

function FUser(name, email, password) {
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;
    this._proto_ = Users;
    this.sayHi = function(){
        return 'Привет, '+ this.name +'! Ты зарегистрирована'}
}

const Alla = new FUser('Алла', 'alla.com', 'dropel')
console.log(Alla);