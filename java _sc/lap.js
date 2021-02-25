var age = 3 +'5' ; 
console.log(age);
var elemnt = document.getElementById('hi')

confirm("welcome in zed shop cars")



var ageUserInput = prompt('enter your age');
if( ageUserInput >= 16  ){
    alert("we sugest for you marcedes car");
    elemnt.innerText='hello in zed shop car';

}

if( ageUserInput < 16  ){
    alert("we sugest for you buy a bicycle");
    

}


var nameUserInput = prompt('enter your name');
alert("hello" +"  "+ nameUserInput );
 

 function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }


  var a = prompt( "enter your favaret color ")
  for( var i= 0 ; i < 2 ; i++)
 {
   if( a =='red'){
     document.write("we suggest for you")
    //  var elemnt = document.getElementById('we')
    document.write('<img id= "we" src="https://cover.com/blog/wp-content/uploads/2019/03/red-car-insurance-1.jpg" alt="">')
     
   }
   if( a =='blue'){
    document.write('<img id= "we" src="https://www.autoguide.com/blog/wp-content/uploads/2016/01/Tokyo-Auto-Salon-Dream-04.png" alt="">')
    var elemnt = document.getElementById('sa')
    }
 }
 var a;
 var key = "0000";
 var a = prompt('please enter the key');
 while (a!= key)
 {
  a=prompt('try again');
 }

 function myFunction() {
  alert("welcome in zed car shop!");
}
myFunction();

function price(x){
  if (x =='fox')
  {
    alert("2000$");
  }
  if ( x =='gulf')
  {
    alert("3000$");
  }
  if (x =='bmw')
  {
    alert("4000$");
  }
  else{
    alert("please choise fox or gulf or bmw");
  }
}
x=prompt("enter name of car to know his price")
price(x);

var us=prompt("enter a number ");
us =parseInt(us);
var default_image = document.getElementById('default_image');
for (var j=1;j<=us;j++){
function imgloop()
  {
    var ar = [];
    ar.push("https://i.pinimg.com/originals/b5/cc/3f/b5cc3f37b85bc7f623cb8cafaf354cb3.png");
    for (i = 0; ar.length > i; i++)
    {
      var img = new Image(50, 50);
      img.src = ar[i];
      var src = document.getElementById("elementid");
      src.appendChild(img);
    }
  }
  imgloop();
}











