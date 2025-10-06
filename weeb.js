window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    var headers = document.getElementsByClassName("header");
    for (var i = 0; i < headers.length; i++) {
      headers[i].style.padding = "1.1rem 10%";
    }
    var logos = document.getElementsByClassName("logo");
    for (var i = 0; i < logos.length; i++) {
      logos[i].style.fontSize = "2rem";
    }
  } else {
    var headers = document.getElementsByClassName("header");
    for (var i = 0; i < headers.length; i++) {
      headers[i].style.padding = "1.8rem 10%";
    }
    var logos = document.getElementsByClassName("logo");
    for (var i = 0; i < logos.length; i++) {
      logos[i].style.fontSize = "2.5rem";
    }
  }
}