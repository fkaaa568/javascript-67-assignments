//-------------------------------- Chapter 38 to 42 ------------------------//

//task no 1

// var x = parseInt(prompt("What is first value"));
// var y = parseInt(prompt("What is second value"));

// function power(a,b)
// {
//         var value = 1;
//         var i =1;
//         while(i<=b){

//             i++
//                 value = a * value;        
//         }
//         return value;
// }

// document.write("The first value is : " + x + "<br>");
// document.write("The second value is : " + y + "<br>");
// var get = power(x,y);
// document.write("The values power is " + get);


//task no 2

// var year = parseInt(prompt("Write the year"));

// function check_leapyear(){
    
//    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// check_leapyear(year);


//task no 3

// function side_of_Tri(a,b,c){
//     var sides = (a+b+c)/2;
//     return sides
// }

// function Calculate_Area(a,b,c){
//      var sides = side_of_Tri(a,b,c);
//      var area = sides*(sides-a)*(sides-b)*(sides-c);
//      return Math.pow(area,3);
// }

// console.log(Calculate_Area(5,9,3));


// task no 4

// function calAvg(urdu,math,eng){
//          var total = urdu+math+eng;
//          return total/3;
// }

// function calPer(urdu,math,eng){

//     var per = calAvg(urdu,math,eng)/3;
//     return per;

// }
//  function MaInFunC(urdu,math,eng){
//         document.write("The Average is " + calAvg(urdu,math,eng)+"<br>");
//         document.write("The Percentage is " +calAvg(urdu,math,eng));
//  }

//  MaInFunC(83,20,90);


// task no 5

// function inDexOf(str,char){
//         for(var i=0;i < str.length;i++){
//             if(str[i] === char){
//                 console.log(i);
//             }
//         }
// }

// inDexOf("faizan","a");


// task no 6

// function deleteVowels(string){
// if (string.length > 25){
//     return string.replace(/[aeiou]/g,"");
// }
// else{
//     return "The length of string is long!!!"
//     }
// }

// document.write(deleteVowels("Today the weather is so gud!!"));


// task no 7

// function occurences(str){
    
//     var value = 0;

//     var bool = false;

//     for(var i=0; i < str.length;i++){
//         switch (str[i].toLowerCase()) {
//             case 'a':
//             case 'e':
//             case 'i':        
//             case 'o':
//             case 'u':    
//                     {
//                         if(bool){
//                         value++;
//                         bool = false;
//                     }
//                     else{
//                         bool = true;
//                     }
//                 break;
//              }
//              default:
//                  bool = false;
//         }
//     }
//     return value;
// }

// var str = "Pleases read this application and give me gratuity";
// console.log(occurences(str));


// task no 8

// function KmtoMeter(km){
//     return km * 1000 +"m";
// }

// function KmtoFeet(km){
//     return km * 3280.84 +"ft";
// }

// function KmtoInches(km){
//     return km * 39370.1 + "inch";
// }

// function KmtoCentimeTer(){
//     return km * 100000 + "cm"
// }

// var km = 8;

// document.write( "The result of " + km + " km is equal to " + KmtoMeter(km)+"<br>");
// document.write( "The result of " + km + " km is equal to " + KmtoFeet(km) +"<br>");
// document.write( "The result of " + km + " km is equal to " + KmtoInches(km)+"<br>");
// document.write( "The result of " + km + " km is equal to " + KmtoCentimeTer(km));



// task no 9

// function overTimes(dutyTime){
//     var overTimepay = 0;
//     var overTime = 0;

//     if(dutyTime > 40){
//         overTime = dutyTime - 40;
//         overTimepay = overTime * 12.00;
//         overTimepay = overTimepay.toFixed(2);
//     }
//     else{
//         return "Your over time is 0";
//     }
//     return " you can work on company with overTime so company pays you $ "+ overTimepay;
// }


// var dutyTime = parseInt(prompt("Enter the time"));
// document.write(overTimes(dutyTime));



// task no 10

// var Rupees = prompt("Enter the amount withdraw");

// var hun = Math.floor(Rupees/100);

// var fifty =  Math.floor((Rupees % 100)/50);

// var tens =  Math.floor(((Rupees % 100)%50)/10);

// var amount = ((Rupees % 100)%50)%10;

// document.write("You will have " + hun + " hundred notes " + fifty + " fifty notes " + tens + " ten notes and " + amount + " rupees.")


//------------------------------------------- Chapter 43 to 48 ------------------------------------------//

//task no 1

// function alertBox(){
//     alert("Hello world");
// }

//task no 2

// function clickme(){
//     alert("Thank for purchasing a phone from myShop");
// }

// task no 3

// function click_On(row) {
//   var del = row.parentNode.parentNode.rowIndex;
//   document.getElementById("myTable").deleteRow(del);
// }


// task no 4

// function change(id,src){
//     var img = document.getElementById(id);
//     img.src = src
// }


// task no 5

// var increase = 0;

// function increment(){
//     increase +=1;
//     document.getElementById('count').innerHTML = increase;
// }

// function decrement(){

//     document.getElementById('count').innerHTML = --increase;
// }


// ------------------------------------------ Chapter 49 to 52 --------------------------------//

// task no 1

// function show(){
//     var password = document.getElementById('pass');
//     pera.document.getElementById()
// }


// //task no 2//

// function readmore(){
//     var types = ' Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol. Samsung was founded by Lee Byung-chul in 1938 as a trading company.' +"<br>" +'<ol><li>Samsung Galaxy S1</li> <li>Samsung Galaxy S2</li> <li>Samsung Galaxy S3</li> <li>Samsung Galaxy S4</li> <li>Samsung Galaxy S5</li> <li>Samsung Galaxy S5 pro</li> <li>Samsung Galaxy Note4</li> <li>Samsung Galaxy Note5</li> <li>Samsung Galaxy Edge</li> <li>Samsung Galaxy Edge plus</li></ol>';
//     var Samsung = document.getElementById('sam');

//     Samsung.innerHTML = types
// }

//task no 3


// ------------------------------------------ Chapter 52 to 57 --------------------------------//

// task no 1


// var images = ['others/1.jpg', 'others/2.jpg', 'others/3.jpg', 'others/5.jpg', 'others/6.jpg', 'others/7.png' , 'others/8.jpg' , 'others/9.jpg', 'others/10.jpg' , 'others/11.jpg' , 'others/12.jpg' , 'others/13.jpg' , 'others/14.png' , 'others/15.jpg'];

// function displayImages() {
//     for (var i = 0; i < images.length; i++) {
//         document.body.innerHTML += `<img src='${images[i]}' width="80%"  id="${i}" data-toggle="modal" data-target="#exampleModal" onclick="displayModal(this)" class="images">`
//     }
// }

// var captions = ['Salar de Uyuni, Bolivia The worlds largest salt flat, it creates a mirror effect after the rain.', 'Cinque Terre, Rio Maggiore, ItalyThe 5 Lands of colored homes perched on a cliff by the sea.', 'Blue Lagoon, Iceland Natural thermal hot springs.', 'Maldives This archipelago is the ultimate tropical island paradise.', 'Glass Beach, California, USA A beach buried in colorful sea glass.', 'Santorini, Greece - Iconic blue and white buildings on a cliff by the sea.', 'Neuschwanstein Castle, Germany The gorgeous former castle of the king.', 'Aogashima Volcano, Japan A small village living in a volcanic island.', 'Venice, Italy The city of colorful winding corridors and canals, and good food.', 'Havasu Falls, Grand Canyon, Arizona, USA In Grand Canyon National Park is this majestic waterfall.', 'Swiss Alps, Switzerland The epic and majestic mountain range.', ' Iceland A vast winter and a perfect place to watch the aurora.', 'Positano, Almalfi Coast, Italy Storybook town on a cliff by the sea.','Rio de Janeiro, BrazilThe iconic statue overlooking the city.',' Aansu lake, Pakistan The name "Ansoo" comes from its tear-like shape (the Urdu word Ansoo means teardrop). The lake also resembles a human eye with a central ice island resembling the iris and a ridge resembling an eyebrow, which becomes even more prominent when ice melts on the "eyebrow" during the summer.']

// displayImages();

// function displayModal(e) {

//     var setImg = document.getElementById("setImage");
//     setImg.innerHTML = `<figure><img src="${e.src}" width="100%" ><figcaption>${captions[e.id]}</figcaption></figure>`;

// }

// ------------------------------------------ Chapter 58 to 67 --------------------------------//



// Part - 1

// Task no 1 
// Task no 2 
var mainContent = document.getElementById("main-content").childNodes;
console.log(mainContent);

// Task no 3 

var showData = document.getElementById("result");
for (var i = 0; i < mainContent.length; i++) {
    if (mainContent[i].nodeType === 1) {
        var para = document.createElement("p");
        var data = document.createTextNode(mainContent[i].innerHTML);
        para.appendChild(data);
        showData.appendChild(para);
    }
}

// Task no 4 

var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "first-name") {
            formContent[j].value = "";
        }
    }
}


// Task no 5

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            formContent[j].value = "";
        } else if (formContent[j].getAttribute("id") === "email") {
            formContent[j].value = "";
        }
    }
}

// Part - 2

// Task no 1

var formContent = document.getElementById("form-content");
console.log("Node type of form content is: " + formContent.nodeType);

// Task no 2 

var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            console.log("Node type of element having an id 'last name' is : " + formContent[j].nodeType);
        }
    }
}


// Task no 3 

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            console.log(formContent[j].childNodes = "New child");
        }
    }
}

// Task no 4

var mainContent = document.getElementById("main-content");
console.log(mainContent.firstElementChild);
console.log(mainContent.lastElementChild);


// Task no 5

var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            console.log(formContent[j].nextElementSibling);
            console.log(formContent[j].previousElementSibling);
        }
    }
}


// Task no 6
var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "email") {
            console.log(formContent[j].parentNode);
            console.log(formContent[j].nodeType);

        }
    }
}
