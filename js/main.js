let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

let logArr = [];
if (localStorage.getItem("user") != null) {
  logArr = JSON.parse(localStorage.getItem("user"));
}

function signUp() {
  let user = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };

  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger m-3">Please Enter All Input</span>';
  } else if (regxValid() == false) {
    document.getElementById("exist").innerHTML = "This mail is not valid";
  } else if (checkEmail() == false) {
    document.getElementById("exist").innerHTML = "This mail is exist";
  } else {
    logArr.push(user);
    document.getElementById("exist").innerHTML =
      '<span class="text-success m-3">Success</span>';
  }
  localStorage.setItem("user", JSON.stringify(logArr));
}

function checkEmail() {
  for (let i = 0; i < logArr.length; i++)
    if (logArr[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return false;
    }
}

function regxValid() {
  let pnamRegex = /^[a-zA-z]{1,}(@)(yahoo|gmail|outlook)(.)(c)(o)(m)$/;
  let emailValue = signupEmail.value;
  console.log(emailValue);
  if (pnamRegex.test(emailValue) == true) {
    return true;
  } else {
    return false;
  }
}
