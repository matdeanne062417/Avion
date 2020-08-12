function collapse() {
    var nav = document.querySelector(".topnav");

    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
  }