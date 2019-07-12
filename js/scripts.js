var arr=[] //creating variables for the input dates.
function CC(){
    CC=document.getElementById("CC").nodeValue;
    arr.push(CC);
} 
function CC(){
    CC=document.getElementById("CC").nodeValue;
    arr.push(CC);
}
function CC(){
    CC=document.getElementById("CC").nodeValue;
    arr.push(CC);
}
function CC(){
    CC=document.getElementById("CC").nodeValue;
    arr.push(CC);
}
function birthDay(){
    input();
    d=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
}
var Male=confirm("Please tick your Gender");
}
function checkTheDay (){
    var theDay = birthDay();
    if (theDay==0 && Male=== true){
        document.write("This was a Sunday"+""+"You're Kwasi");
    } else if (theDay==1 && Male=== true){
        document.write("This was a Monday"+""+"You're Kwasi");
    } else if (theDay==2 && Male=== true ){
        document.write("This was a Tuesday"+""+"You're Kwasi");
    } else if (theDay==3 && Male=== true){
        document.write("This was a Wednesday"+""+"You're Kwasi");
    } else if (theDay==4 && Male=== true){
        document.write("This was a Thursday"+""+"You're Kwasi");
    } else if (theDay==5 && Male=== true){
        document.write("This was a Friday"+""+"You're Kwasi");
    } else if (theDay==6 && Male=== true){
        document.write("This was a Saturday"+""+"You're Kwasi");
    } else if (theDay==0 && Male=== false){
        document.write("This was a Sunday"+""+"You're Kwasi");
    } else if (theDay==1 && Male=== false){
        document.write("This was a Monday"+""+"You're Kwasi");
    } else if (theDay==2 && Male=== false ){
        document.write("This was a Tuesday"+""+"You're Kwasi");
    } else if (theDay==3 && Male=== false){
        document.write("This was a Wednesday"+""+"You're Kwasi");
    } else if (theDay==4 && Male=== false){
        document.write("This was a Thursday"+""+"You're Kwasi");
    } else if (theDay==5 && Male=== false){
        document.write("This was a Friday"+""+"You're Kwasi");
    } else if (theDay==6 && Male=== false){
        document.write("This was a Saturday"+""+"You're Kwasi");
    } else {
        document.write("Invalid Format!")
    }
}