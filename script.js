/***************** simple example
var firstName = "Pradyumna";
console.log("Hello "+firstName);

*/


/******************* variable and data type in js

var firstName = "pradyumna";
var age = 28;
var isMarried = false;
var height;
height = 6.7
var lastName = prompt("Enter your last name:");
alert("Name of the Applicant:"+firstName+" "+lastName+" having age "+age+" is Married?"+isMarried+" height:"+height)

//console.log("Name of the Applicant:"+firstName+" having age "+age+" is Married?"+isMarried+" height:"+height);

*/

/***************************** Operators in JS
 */
/*
var now = 2019;
var ageOfDipu = 28;
var ageOfLipu = 26;
var name ='Pradyumna';
var ageIsMax = false;
var trip;
trip=9.876;
console.log('DOB of DIPU:'+(now-ageOfDipu));
console.log('Sum of age of bros:'+(ageOfDipu+ageOfLipu))

//conditional operator
if(ageOfDipu>ageOfLipu){
    console.log("Dipu is elder than lipu");
}
else{
    console.log("Lipu is elder than dipu");    
}

//typeof operator

console.log(typeof ageOfDipu);
console.log(typeof name);
console.log(typeof ageIsMax);
console.log(typeof trip);
*/

/*
Code Challenge 1
*/
var markMass,johnMass,markHeight,johnHeight;
markMass = 65;
johnMass = 75;
markHeight = 1.38;
johnHeight = 1.4587;

var markBMI = (markMass / (markHeight*markHeight));
console.log('mark BMI:'+markBMI);
var johnBMI = (johnMass/(johnHeight*johnHeight));
console.log('John BMI:'+johnBMI);
console.log("Is Mark's BMI higher than JOHNS?"+(markBMI>johnBMI));