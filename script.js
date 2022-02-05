
//var num = 2004
//console.log(2022-num);
//
//
//let speed = 10;
//if(speed<=120 &&  speed>=90 ) { console.log("Jarima to'lansin");
//}else if (speed<=89 && speed>=60) {console.log("Normal tezlik");   
//}else if (speed<=59 && speed>=40) {console.log("Siz sekin harakatlanyapsiz");  
//} else console.log("Yurmadingiz"); 
//
//var num = 15;
//console.log(Math.ceil(num));


//HOMEWORK//
//1
function logNumber(){
    console.log(8);
}
logNumber()
//2
function logString(){
    console.log("string bu tekstdir");
}
logString()
//3
function logBoolean(){
    console.log(typeof true);
}
logBoolean()
//4
function logUndefined(){
    var a;
    console.log(a)
}
logUndefined();
//5
function logNull (){
    var a = null;
    if(a) {
        console.log("a mavjud");
    }else {
        console.log("a mavjud emas");
    }
}
logNull()
//6
function logArray(){
    var arr = [5,8, "string",true,[],null,undefined];
console.log(arr);
}
logArray()
//7
function logObject (){
    var obj = {
        name:"Vasila",
        surname:"Mahmudxo'jayeva",
        age:"18",
    }
console.log(obj);
console.log(obj.name);
}
logObject()