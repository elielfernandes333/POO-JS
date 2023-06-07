class Nave{
    constructor(x,y,cor){
        this.xNave = x;
        this.yNave = y;
        this.cor = cor;
    }
    show(){
        fill(this.cor);
        square(this.xNave,this.yNave,40)
    }
}