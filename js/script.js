function toggle() {
  const logIn = document.getElementById("log-in");
  const signUp = document.getElementById("sign-up");

  if (logIn.classList.contains("active")) {
    logIn.classList.add("inactive");
    logIn.classList.remove("active");

    signUp.classList.add("active");
    signUp.classList.remove("inactive");
  } else if (signUp.classList.contains("active")) {
    signUp.classList.add("inactive");
    signUp.classList.remove("active");

    logIn.classList.add("active");
    logIn.classList.remove("inactive");
  } else {
    alert("error");
  }
}

function toTop() {
  document.documentElement.scrollTop = 0;
}
