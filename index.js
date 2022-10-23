let user = {
    login:'vasza123',
    name:'Jon',
    regData: new Date(11,11,2011),
    url:'1.jpg',
    orders:[111,1222,233]
}

let comment =
{
date: new Date(11,11,2011),
text:"comments",
author:"vasza123",

showComment(){


return`${this.author}: ${this.text} at ${this.date}`;
}
}
console.log(comment);
let cat = {
    name:"Barsik",
    height:5,
    age:3,
    happiness:3,

    feedCat(){
        this.happiness = this.happiness+5;
    }
}

let calc ={
sum(a,b){
    return a+b;
}
}
 
let car = {}
    car.brand ='BMW';
    car.drive = function test()
    {
        console.log('i want test-drive!');
    }
