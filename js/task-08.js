const formList = document.querySelector('.login-form')
formList.addEventListener('submit', trueForm)

function trueForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
    if (email === "" || password === "") {
        alert("Please fill in all the fields!");
    } else {
        const enteredForm = {
            Email: email,
            Password: password
        };
        form.reset();
        console.log(enteredForm)
    }
}
