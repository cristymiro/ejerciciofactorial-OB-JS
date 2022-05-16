let i = 10;
let r = 1;

while(i>0){
    i--;
    r *= i;
    console.log(r)
    if(i==10){
    console.log('Paro aquí')
        break;
    }
}
