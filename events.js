var output = document.getElementById("output-target");

document.getElementById("list-section").addEventListener("click", function(clickEvent) {
  output.innerHTML = "You clicked on the list section";
  console.log("clickEvent", clickEvent.target);
  console.log("clickEvent", clickEvent.currentTarget);
  });

document.getElementById("article-section").addEventListener("click", function(clickEvent) {
  output.innerHTML = "You clicked on the article section";
  console.log("clickEvent", clickEvent.target);
  console.log("clickEvent", clickEvent.currentTarget);

  });

var title = document.getElementById("page-title");

title.addEventListener("mouseover", function (mouseover) {
  output.innerHTML = "You moved your mouse over the header."
});
title.addEventListener("mouseout", function (mouseout) {
   output.innerHTML = "You left me!!"
});

var textbox = document.getElementById("keypress-input");

textbox.addEventListener("keyup", function (textMirror) {
      textbox.value;
      output.innerHTML = textbox.value;
});

var output = document.getElementById("output-target");


var guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(clickEvent) {
  guineaPig.classList.add("color");
  });

document.getElementById("make-large").addEventListener("click", function(clickEvent) {
  guineaPig.classList.add("bigFont");
  });

document.getElementById("add-border").addEventListener("click", function(clickEvent) {
  guineaPig.classList.add("border");
  });

document.getElementById("add-rounding").addEventListener("click", function(clickEvent) {
  guineaPig.classList.add("roundBorder");
  });







