$(document).ready(function(){

  let images = [
    "images/vaga1.JPG",
    "images/vaga2.JPG",
    "images/vaga3.JPG",
    "images/vaga4.JPG",
    "images/vaga5.JPG",
    "images/vaga6.JPG",
    "images/vaga7.JPG",
    "images/vaga8.JPG"
  ];

  let imagesDark = [
    "images/vaga-dark1.JPG",
    "images/vaga-dark2.JPG",
    "images/vaga-dark3.JPG",
    "images/vaga-dark4.JPG",
    "images/vaga-dark5.JPG",
    "images/vaga-dark6.JPG",
    "images/vaga-dark7.JPG",
    "images/vaga-dark8.JPG",
    "images/vaga-dark8.JPG"
  ];

  for (i = 0; i < images.length; i++) {

    let img = document.createElement("IMG");
    img.setAttribute("class", "image white");
    img.src = images[i];
    randomLeft = Math.floor(Math.random()* 20) + 40;
    randomTop = Math.floor(Math.random()* 10) + 45;
    // console.log(random);
    document.getElementById("image-container").appendChild(img);

    img.style.left = randomLeft + "%";
    img.style.top = randomTop + "%";

  }

  for (i = 0; i < imagesDark.length; i++) {

    let img = document.createElement("IMG");
    img.setAttribute("class", "image dark");
    img.src = imagesDark[i];
    randomLeft = Math.floor(Math.random()* 20) + 40;
    randomTop = Math.floor(Math.random()* 10) + 45;
    // console.log(random);
    document.getElementById("image-container").appendChild(img);

    img.style.left = randomLeft + "%";
    img.style.top = randomTop + "%";

  }


  let anim = new TimelineMax({
      repeat: -1
  });

  let animDark = new TimelineMax({
      repeat: -1
  });

  anim.add([
    TweenMax.staggerFromTo(".white", .01, {display: "none"}, {display: "block"}, .13),
  ]);

  animDark.add(
    TweenMax.staggerFromTo(".dark", .01, {display: "none"}, {display: "block"}, .08),
  );


  $("body").mousedown(function(){

    let display = new TimelineMax();

    display.add([
      TweenMax.to(".page-home", .01, {backgroundColor: "black"}),
      TweenMax.to(".white", .01, {autoAlpha: 0}),
      TweenMax.to(".dark", .01, {autoAlpha: 1}),
      TweenMax.to(".title", .01, {webkitTextStroke: "1px white", color: "transparent"}),
    ]);

  });

  $("body").mouseup(function(){

    let display = new TimelineMax();

    display.add([
      TweenMax.to(".page-home", .01, {backgroundColor: "white"}),
      TweenMax.to(".white", .01, {autoAlpha: 1}),
      TweenMax.to(".dark", .01, {autoAlpha: 0}),
      TweenMax.to(".title", .01, {webkitTextStroke: "1px black", color: "transparent"}),
    ]);

  });



});
