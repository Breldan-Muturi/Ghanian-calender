var century, year, month, dayOfBirth, dayOfWeek, gender
function myInput(){
    century=parseInt(document.getElementById("CC"));
    year=parseInt(document.getElementById("YY"));
    month=parseInt(document.getElementById("MM"));
    dayOfBirth=parseInt(document.getElementById("DD"));
    gender=getElementById("gender");
}
function calculateDay(){
    myInput();
    dayOfWeek=( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7;
    return (Math.round(dayOfWeek));
}

function checkTheDay (){
    calculateDay();
    var theDay = birthDay();
    if (theDay==0 && Male=== true){
        document.getElementById("Akan").innerHTML=("This was a Sunday"+""+"You're Kwasi");
    } else if (theDay==1 && Male=== true){
        document.getElementById("Akan").innerHTML=("This was a Monday"+""+"You're Kwasi");
    } else if (theDay==2 && Male=== true ){
        document.getElementById("Akan").innerHTML=("This was a Tuesday"+""+"You're Kwasi");
    } else if (theDay==3 && Male=== true){
        document.getElementById("Akan").innerHTML=("This was a Wednesday"+""+"You're Kwasi");
    } else if (theDay==4 && Male=== true){
        document.getElementById("Akan").innerHTML=("This was a Thursday"+""+"You're Kwasi");
    } else if (theDay==5 && Male=== true){
        document.getElementById("Akan").innerHTML=("This was a Friday"+""+"You're Kwasi");
    } else if (theDay==6 && Male=== true){
        document.getElementById("Akan").innerHTML=("This was a Saturday"+""+"You're Kwasi");
    } else if (theDay==0 && Female===true){
        document.getElementById("Akan").innerHTML=("This was a Sunday"+""+"You're Kwasi");
    } else if (theDay==1 && Female===true){
        document.getElementById("Akan").innerHTML=("This was a Monday"+""+"You're Kwasi");
    } else if (theDay==2 && Female===true ){
        document.getElementById("Akan").innerHTML=("This was a Tuesday"+""+"You're Kwasi");
    } else if (theDay==3 && Female===true){
        document.getElementById("Akan").innerHTML=("This was a Wednesday"+""+"You're Kwasi");
    } else if (theDay==4 && Female===true){
        document.getElementById("Akan").innerHTML=("This was a Thursday"+""+"You're Kwasi");
    } else if (theDay==5 && Female===true){
        document.getElementById("Akan").innerHTML=("This was a Friday"+""+"You're Kwasi");
    } else if (theDay==6 && Female===true){
        document.getElementById("Akan").innerHTML=("This was a Saturday"+""+"You're Kwasi");
    } else {
        document.getElementById("Akan").innerHTML=("Invalid Format!");
    }
} 
function validate(){
    checkTheDay();
    if (DD <= 0 || DD > 31){
    alert("INVALID DAY OF BIRTH. ENTER A NUMBER BETWEEN 1 AND 31");
    return;
    } 
    if (MM <=0 || MM > 12){
    alert("INVALID MONTH OF BIRTH. ENTER A NUMBER BETWEEN 1 AND 12");
    return;
    }
}