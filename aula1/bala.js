class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        fill("yellow");
        circle(this.x, this.y, 5);
    }
    automove(speed){
        this.x = this.x - speed; 
    }
}