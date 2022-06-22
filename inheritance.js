"use strict"

/* let user = {
    login: 'Вася',
    password: 'User12345',
    validatePassword: function () {
        if (this.password.length > 6) {
            return true;
        } else {
            return false;
        }
    },
    checkPasword: function () {
        if (this.password == 'User12345') {
            return true;
        } else {
            alert('Введите правильный пароль!')
        }
    }
};

let userProfile = {
    userName: '',
    photo: '',
    age: 0,
    getUserData: function () {

    },
    __proto__: user,
} */


let team = {
    player: true,
    stadium: true,
    fans() {
        console.log('GO GO my team')
    },
    coach: true,
};

console.log(team);

let footballTeam = {
    'sports equipment': 'ball',
    __proto__: team
};

console.log(footballTeam);

let hockeyTeam = {
    'sports equipment': 'washer',
    country: 'Canada',
    __proto__: team,
};

console.log(hockeyTeam);

let beachFootball = {
    'sports field': 'sand',
    __proto__: footballTeam
};

console.log(beachFootball);

//===================

let Sports = function (options) {
    this.name = options.name
    this.kind = options.kind
    this.equipment = options.equipment
    /*    this.fans = function () {
           console.log('GO GO my team', this.name)
       } */
}

Sports.prototype.fans = function () {
    console.log('GO GO my team', this.name)
}

let football = new Sports({ name: 'Barca', kind: 'football', equipment: 'ball' });

console.log(football);
football.fans();

//==========

class Sports1 {
    constructor(options) {
        this.name = options.name
        this.kind = options.kind
        this.equipment = options.equipment
    }
    fans = function () {
        console.log('GO GO my team', this.name)
    }
}

let football1 = new Sports1({ name: 'Barca', kind: 'football', equipment: 'ball' });

console.log(football1);
football1.fans()



class Pittsburgh extends Sports1 {
    constructor(options) {
        super(options)

        this.place = options.place
        this.bestPlayer = options.bestPlayer
    }
}

let pittsburgh = new Pittsburgh({ name: 'Pittsburgh', kind: 'hockey', equipment: 'washer', place: 'Pennsylvania', bestPlayer: 'Matio Lemieux' });

console.log(pittsburgh)
pittsburgh.fans()

//=====================

class User {
    constructor(usrname, password) {
        this.usrname = usrname;
        this.password = password;
    }
    validatePassword() {
        if (this.password.length > 6) {
            return true;
        }
        return false;
    }
}

let a = 'Ivan';
let b = 'user12';

let person = new User(a, b);
console.log(person);
console.log(person.validatePassword())


class Student extends User {
    constructor(username, password, nickname) {
        super(username, password);
        this.nickname - nickname;
    }

    getStudrntsProgramm() {
        return [1, 2, 2, 3, 4];
    }

    validatePassword() {

        if (this.password.length > 10) {
            return true;
        }
        return false;
    }
};

let firstStudent = new Student(a, b, 123333);
console.log(firstStudent);
console.log(firstStudent.getStudrntsProgramm());
console.log(firstStudent.validatePassword())


///=============

class Userr {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this.name + ' Hello');
    }
}

let kostya = new Userr('Kostya');
console.log(kostya);

class Person extends Userr {
    constructor(name, email) {
        super(name);
        this.name = name;
        this.email = email;
    }
}

let dim = new Person('dim', 'dim@gmail.com');
console.log(dim);
console.log(dim.sayHello());


//==========
/* class Userrr {
    constructor(name) {
        this._name = name;
    }
    setNameOnthisClass(name) {
        this._name = name.trim().toLowerCase();
    }
}


let stud = new Userr('petr');
stud.setNameOnthisClass('   vasya  ')
 //stud._name = 'vasya'; // это плохо
 //console.log(stud);
*/
//====

class Userrr2 {
    constructor(name) {
        this._name = name;
    }
    #test = 'Bye'
    set name(name) {
        this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name;
    }
}


let stud1 = new Userrr2('petr');
stud1.name = ('   VaSyA  ')
console.log(stud1);
console.log(stud1.name)

//=====Privat

class Userr2 {
    constructor(name) {
        this._name = name;
    }
    #test = 'Bye'
    #url = 'https://backend.ex'
    set name(name) {
        this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name;
    }
    one() {
        console.log(this.#test);
    }
}


let stu1 = new Userr2('petr');
stu1.name = ('   VaSyA  ')
console.log(stu1);
console.log(stu1.name)
console.log(stu1.test)

// Check Privat

class Implo extends Userr2 { };
let st = new Implo;
st.name = 'Oleg';
st.one();


// Statick methods

class Pro {
    static test = true;
    constructor(name) {
        this.name = name;
    }
    static getRole(email) {
        return 'admin';
    }
}

class Son extends Pro {
    static test = false;
    constructor(name) {
        super();
    }
}
let pres = new Pro('Lena');
console.log(pres);
console.log(Pro.getRole('lena@ex'));
console.log(Pro.test);
console.log(pres.test);
console.log(Son.test);

