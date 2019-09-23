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
/*
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
*/

/********CODE CHALLENGE 2
 * 
 */
/*
var johnsAverageScore = (89 + 120 + 103) / 3;
var mikeAvergaeScore = (116 + 94 + 123) / 3;
var maryaverage  = (97 + 134 + 105)/3
console.log(johnsAverageScore,mikeAvergaeScore,maryaverage);
if(johnsAverageScore>mikeAvergaeScore && johnsAverageScore>maryaverage){
    console.log("John higest avg score");
}
else if(mikeAvergaeScore>johnsAverageScore && mikeAvergaeScore>maryaverage){
    console.log("Mike highest Avg score");
}else if(maryaverage>johnsAverageScore && maryaverage>mikeAvergaeScore){
    console.log("Mary Highest Avg score");
}
else{
    console.log("Match Drawn");
}
*/
/*
if((johnsAverageScore > mikeAvergaeScore)){
    console.log("John Team is the winner");
}else if(johnsAverageScore < mikeAvergaeScore){
    console.log("Mike Having highest avg score");
}
else{
    console.log("Match Drawn");
}
*/

/***********************
 * FUNCTIONS IN JS
 */

 function calculateAge(birthyear){
     return 2019-birthyear;
 }
console.log("Age of Dipu:"+calculateAge(1991));
console.log("Age of Baby:"+calculateAge(1990));

function yearUntilretirement(birthyear,firstName){
    var age = 2019-birthyear;
    retireyear= 65-age;
    console.log(firstName+" years left for retirement:"+retireyear+" years");
}
yearUntilretirement(1991,"Pradyumna");
yearUntilretirement(1990,"Itishree");

var profession = function(job,firstName){
    switch(job){
        case 'Teacher':
            console.log(firstName+' knows how to teach code');
            break;
        case 'Barber':
            console.log(firstName+' knows how to cut the hair');
            break;
        case 'Carpenter':
            console.log(firstName+' knows how to design wooden stuff');
            break;
        default:
            console.log(firstName+' is Jobless need a job');
    }
}

profession('Teacher','Pradyumna');
profession('Carpenter','Itishree');