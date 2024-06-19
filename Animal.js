class Animal {
    constructor ( name, age , isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class cat extends Animal {
    constructor(name , age) {
        super(name, age , true) ;
    }

    eat() {
    return `${this.name} Sedang Mengejar !`;
    }
}

class Mouse extends Animal {
    constructor (name , age) {
        super(name , age , false);
  }

  fly() {
    return `${this.name} Sedang Dikejar ?` ;
  }
}

const mycat = new cat ("Mouse" , 2);

const myMouse = new Mouse ("Cat" , 4);

console.log(mycat.eat());
console.log(myMouse.fly());
console.log(mycat);
console.log(myMouse); 
