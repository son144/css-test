class Car{
    constructor(color){
        this.color=color
        console.log("inside car");
    }
    showColor(){
        console.log("color is ");
    }
}
class Toyota extends Car{
    constructor(color){
        super(color)
        this.color=color
        console.log("inside toyota",);
    }
    showColor(){
        console.log("new color",this.color);
    }

}
let car1=new Toyota("green")
car1.showColor()
console.log(car1);