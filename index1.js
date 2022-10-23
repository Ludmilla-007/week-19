class Animal {
    constructor(name,type){
        this.name=name;
        this.type=type;

    }
    showInfo(){
        console.log('This '+ this.type);
    }
}
let animal1 = new Animal('Snow','cat');
let animal2 = new Animal('Gav','dog');

class Car{
    constructor(brand,model){
        this.brand = brand;
        this. model = model;
    }
    drive()
    {
        console.log(`Go by ${this.brand}`);
    }
}
let car1 = new Car('BMW', 'x5');
car1.drive();

let car2 = new Car ('VW','Golf5');
car2.drive();