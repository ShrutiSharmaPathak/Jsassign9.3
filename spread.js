var evens=[2,4,6,8];
var odds=[1,3,5,7];
var prime=[2,3,5,7,11];

var newarray=[...prime,...evens,...odds]; //combining array prime,evens,odds using spread(...)operator
console.log("newarray = "+newarray);

var newprime=[...prime]; //copying array prime in array called newprime using spread(...) operator
 console.log("newprime = "+newprime);

 //destructuring object
 var jamesbond={              //object
     first:'James',
     last:'Bond',
     country:'United States',
     city:'New York',
     twitter:'@jamesbond'
 };
//destructuring object
var {first,last,country,city,twitter} = jamesbond;

console.log("first "+first); 
console.log("last "+last); 
console.log("country "+country); 
console.log("city "+city); 
console.log("twitter "+twitter); 

//array destructuring

var players= ['paul','andy', 'darrel','jim'];
var player1,player2,player3,player4;
[player1,player2,player3,player4]= players;
console.log("player1 "+ player1);
console.log("player2 "+ player2);
console.log("player3 "+ player3);
console.log("player4 "+ player4);