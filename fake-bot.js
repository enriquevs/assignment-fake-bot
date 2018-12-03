var hello = document.querySelector(".sayHi");
var descripcion = document.querySelector(".descripcion");
var hobby = document.querySelector(".hobby");
var inName = document.querySelector(".inName");
// var validName = document.querySelector(.inName.value)


setTimeout(function(){
  hello.style.display = "block";
},1000);

setTimeout(function(){
  descripcion.style.display = "block";
},2000);

setTimeout(function(){
  hobby.style.display = "block";
},3000);

setTimeout(function(){
  inName.style.display = "block";
},4000);

document.getElementById("#validate-field").addEventListener('keypress',function(e){

  if (e.keyCode == 13);
  {
    alert (false);
  }

});
