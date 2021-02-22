const form = document.forms.validation


const email = document.querySelector('#email')
const password = document.querySelector('#password')

const emailError = document.querySelector('.email-error')

const lengthError = document.querySelector('.length-error')
const symbolError = document.querySelector('.symbol-error')


email.onblur = () => {
    if(!email.value.includes('@')) {
        emailError.textContent = "Enter Valid Email Please"
        emailError.classList.add('invalid')
    }
}

email.onfocus = () => {
    if(emailError.classList.contains('invalid')) {
        emailError.classList.remove('invalid')
        emailError.textContent = ''
    }
}

// Length Error Listener
password.addEventListener('blur', () => {
    if(password.value.length < 8 || password.value.length > 20 ) {
        lengthError.textContent = "Password length must be at least 8 and max 20 symbols "
        lengthError.classList.add('invalid')
    }
})

password.addEventListener('focus', () => {
    if(lengthError.classList.contains('invalid')) {
        lengthError.classList.remove('invalid')
        lengthError.textContent = ''
    }
})


//First symbol error listener
password.addEventListener('blur', () => {
    if(password.value.charCodeAt(0) >=65 && password.value.charCodeAt(0) <=90 ) {
        
    } else {
        symbolError.classList.add('symbol-error')
        symbolError.textContent = 'Password must start with uppercase'
    }
})


password.addEventListener('focus', () => {
    if(symbolError.classList.contains('symbol-error')) {
        symbolError.classList.remove('symbol-error')
        symbolError.textContent = ''
    } 
})
