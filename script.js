let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirm_pass = document.getElementById('confirm-password')
let submit = document.getElementById('btn')

        

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateInputs();
})

let validateInputs = () => {

    const usernameValue = username.value.trim()//removes the blank spaces between the texts
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirm_passValue = confirm_pass.value.trim()

    if (usernameValue === '') {
        seterror(username, "Enter a username please")
    } else {
        setsucess(username)
    }

    if (passwordValue === '') {
        seterror(password, "Enter a password")
    } else if (passwordValue < 5) {
        seterror(password, "Enter a password of length greater than 5")
    } else {
        setsucess(password)
    }

    if (confirm_passValue === passwordValue) {
        setsucess(confirm_pass)
    } else if (confirm_passValue !== passwordValue) {
        seterror(confirm_pass, "Please enter the same password")
    } else {
        seterror(confirm_pass, "please enter a the password here for checking")
    }


}



const seterror = (element, message) => {

    const inputcControl = element.parentElement;
    const errorControl = inputcControl.querySelector('.error')
    errorControl.innerText = message

    inputcControl.classList.add('error')
    inputcControl.classList.remove('success')
}

const setsucess = (element) => {

    const inputcControl = element.parentElement
    const errorControl = inputcControl.querySelector('.error')

    errorControl.innerText = ""
    inputcControl.classList.remove('error')
    inputcControl.classList.add('success')
}