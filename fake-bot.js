var image = document.querySelector(".bot");
var hello = document.querySelector(".sayHi");
var descripcion = document.querySelector(".descripcion");
var hobby = document.querySelector(".hobby");
var inName = document.querySelector(".inName");
var longName = document.querySelector(".longName");
var shortName = document.querySelector(".shortName");
var hi = document.querySelector(".hi");
var sayHello = document.querySelector(".name");

setTimeout(function(){
  image.style.display = "block";
},1000);

setTimeout(function(){
  hello.style.display = "block";
},2000);

setTimeout(function(){
  descripcion.style.display = "block";
},3000);

setTimeout(function(){
  hobby.style.display = "block";
},4000);

setTimeout(function(){
  inName.style.display = "block";
},5000);


inName.addEventListener("keypress", function(e){

  if (e.keyCode === 13){

    if(inName.value === "" || inName.value.length < 2){

      alert("Write your name.")

    } else if (inName.value.length >= 2){

      if(inName.value.length > 6){

        setTimeout(function() {

          longName.style.display = "block"

          shortName.style.display = "none"

        },1000)

        setTimeout(function() {

          hi.style.display = "block"

          sayHello.textContent = inName.value
        },2000)
      }

      if(inName.value.length <= 6){

        setTimeout(function() {

          shortName.style.display = "block"

          longName.style.display = "none"
        },1000)

        setTimeout(function() {

          hi.style.display = "block"

          sayHello.textContent = inName.value

        },2000)
      }
    }
  }
})
