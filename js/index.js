'use strict';

class User {
    static Roles = ["admin","user"] ;

    #password;
    
    constructor(name, role, password) {
        this.name = name;
        this.#password = password;
        this.role = role;
    }

    set name(value) {
        if (value === '') {
            alert (`Name should not be empty`);
            return;
        }
        this._name = value;
    }

    getName() {
        return this._name;
    }

    set role(value) {
        if (!User.Roles.includes(value.toLowerCase())) {
            alert (`Enter correct role`);
            this._role = undefined;
            return
        }

        this._role = value.toLowerCase()
    }

    getRole() {
        return this._role;
    }

    login(user) {
        return user.#password === this.#password ? `Welcome, ${user._name}` : 'Password is not correct'
    }

    logout(user) {
        return `${user._name}, you logged out`
    }

    changePassword(oldPassword, newPassword) {
        if (oldPassword === this.#password) {
            this.#password = newPassword;
        }
    }

}

// const anna = new User ('Anna','User','12345');
// const anna1 = new User ('Anna','Use','12345');
// console.log(anna);

// console.log(anna1);
// console.log(anna.login(anna));
// console.log(anna.getName());
// console.log(anna.logout(anna));

// anna.changePassword('12345', 'qqqqq')
// console.log(anna);


class Admin extends User {
    #users = [];
    constructor(name, role, password) {
        super(name, role, password)
    }

    set role(value) {
        if (value !== 'admin') {
            alert `Your role have to be 'admin'`
            this._role = undefined;
            return
        }
        this._role = value
    }

    addUser({name, role, password}) {
        let newUser = new User (name, role, password);
        this.#users.push(newUser);
        return newUser;
    }

    removeUser(user) {
        const index = this.#users.findIndex(obj => obj._name === user.name);
        
        if (index > -1) {
            this.#users.splice(index, 1);
        }
        return this.#users
    }

    changeUserRole(user, value) {
        const userToChange = this.#users.map(obj => obj._name === user.name)
        if (userToChange && value === 'admin') {
            const newAdmin = new Admin (user.name, user.role = value, user.password)
            this.removeUser(user);
            return newAdmin;
        } else {
            return `User ${user.name} not found`
        }
    
    }

    getAllUsers() {
        return this.#users;
    }

    removeAllUsers() {
        this.#users = [];
    }
}

// const admin = new Admin('Anna','admi','12345')
const admin1 = new Admin('Inna','admin','12345')
// console.log(admin);
console.log(admin1);

const anna = {name: 'Anna', role: 'user', password: '22222'};
const ira = {name: 'Ira', role: 'user', password: '33333'};
const mira = {name: 'Mira', role: 'user', password: '44444'};

console.log(admin1.addUser(anna));
console.log(admin1.addUser(mira));
console.log(admin1.addUser(ira));
console.log(admin1);

console.log(admin1.removeUser(ira));
console.log(admin1);

console.log(admin1. changeUserRole(anna, 'admin'));
console.log(admin1);
