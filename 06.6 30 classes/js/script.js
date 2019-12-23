let Users = {
    hasAccesToProfile: true,
    approved: true,
    sayHi: function(){
        return 'Привет'
    }
}

function User (name, email, password){
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;
}