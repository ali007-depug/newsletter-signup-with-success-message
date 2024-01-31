const emaill = document.querySelector("#email");
const btnSub = document.querySelector("#btn-subscribe");
const btnDismiss = document.querySelector("#btn-dismiss");
const errorP = document.querySelector(".sign-up__label--hidden")
const signUp = document.querySelector(".sign-up");
const signUpSuccess = document.querySelector(".sign-up--success-message");

//subscribe button
btnSub.addEventListener("click", e => {
    let regEx = /^[\w\-\.]+@([\w]+\.)+[\w-]{2,}$/gm; //found on : regex101.com
    if (regEx.test(emaill.value)) {
        emaill.classList.remove("error-state");
        errorP.classList.remove("error-p-state");
        signUp.classList.add("hide");
        handelSub();
        e.preventDefault();

    }
    else {
        emaill.classList.add("error-state");
        errorP.classList.add("error-p-state")
        signUp.classList.remove("hide")
        e.preventDefault()
    }
})

// dismiss button
btnDismiss.addEventListener("click", e => {
    signUp.classList.toggle("hide"); //toggle sign up 
    signUpSuccess.classList.toggle("show") // toggle success message
    emaill.value = "";
    e.preventDefault();
});

function handelSub() {
    signUpSuccess.classList.add("show");
}
