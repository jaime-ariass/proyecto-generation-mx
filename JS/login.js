/********** Ocultar/Mostrar formulario de login y registro *********/
function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

// Validación por Javascript Formulario de login Api restriction. 

const form1 = document.getElementById('formsection1')[0];

const user = document.getElementById('user')
const psw = document.getElementById('psw1')
const login = document.getElementById('login')

const msgError = document.querySelector('#psw1 + span.error');


// --------- Validación de usuario.

user.addEventListener('input', function(event) {

    if (user.validity.valid) {

        msgError.innerHTML = '';
        msgError.className = 'error';
    } else {

        showErrorUser();
    }

});

function showErrorUser() {
    if (user.validity.valueMissing) {

        msgError.textContent = 'Debe introducir su email.';
    }
    userError.className = 'error activo';
}



// --------- Validación de contraseña. 
psw.addEventListener('input', function(event) {

    if (psw.validity.valid) {

        msgError.innerHTML = '';
        msgError.className = 'error';
    } else {

        showErrorPsw();
    }

});

function showErrorPsw() {
    if (psw.validity.valueMissing) {

        msgError.textContent = 'Debe introducir una contraseña';
    }
    pswError.className = 'error activo';
}



// ---------Envío de datos.

login.addEventListener('click', function(event) {


    if (!user.validity.valid || !psw.validity.valid || (pswData.indexOf(psw.value) < 0) || (emailData.indexOf(user.value) < 0)) {


        msgError.textContent = 'Usuario no registrado';

        event.preventDefault();

    } else {

        msgError.textContent = 'Login exitoso. Bienvenido ' + nameData[emailData.indexOf(user.value)] + ' :D'
        window.location.href = "../HTML/index.html"
            //alert("Bienvenido" + nameData[emailData.indexOf(user.value)])
        event.preventDefault();


    }
});






// Validación por Javascript Formulario de registro Api restriction. 
const form = document.getElementById('formsection2')[0];

const nombre = document.getElementById('nombre')
const email = document.getElementById('email');
const phone = document.getElementById('telefono')
const password = document.getElementById('psw')
const message = document.getElementById('password')
const register = document.getElementById('register')

const messageError = document.querySelector('#password + span.error');


// --------- Validación de nombre.

nombre.addEventListener('input', function(event) {

    if (nombre.validity.valid) {

        messageError.innerHTML = '';
        messageError.className = 'error';
    } else {

        showErrorName();
    }

});

function showErrorName() {
    if (nombre.validity.valueMissing) {

        messageError.textContent = 'Debe introducir un nombre.';
    } else if (nombre.validity.patternMismatch) {

        messageError.textContent = 'Formato no válido';
    }
    nameError.className = 'error activo';
}

// --------- Validación de email.

email.addEventListener('input', function(event) {


    if (email.validity.valid) {

        messageError.innerHTML = '';
        messageError.className = 'error';
    } else {

        showErrorEmail();
    }

});

function showErrorEmail() {
    if (email.validity.valueMissing) {

        messageError.textContent = 'Debe introducir una dirección de correo electrónico.';
    } else if (email.validity.typeMismatch) {

        messageError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
    } else if (email.validity.tooShort) {

        messageError.textContent = 'El correo electrónico debe tener al menos ' + email.minLength + ' caracteres; ha introducido ' + email.value.length + '.';
    }

    emailError.className = 'error activo';
}

// --------- Validación de teléfono.

phone.addEventListener('input', function(event) {

    if (phone.validity.valid) {

        messageError.innerHTML = '';
        messageError.className = 'error';
    } else {

        showErrorPhone();
    }

});

function showErrorPhone() {
    if (phone.validity.valueMissing) {

        messageError.textContent = 'Debe introducir un número telefónico';
    } else if (nombre.validity.patternMismatch) {

        message.textContent = 'Formato no válido';

    } else if (phone.validity.tooShort) {

        messageError.textContent = 'El número telefónico debe contener al menos 10 dígitos';
    }
    phoneError.className = 'error activo';
}

// --------- Validación de contraseña. 
password.addEventListener('input', function(event) {

    if (password.validity.valid) {

        messageError.innerHTML = '';
        messageError.className = 'error';
    } else {

        showErrorPassword();
    }

});

function showErrorPassword() {
    if (password.validity.valueMissing) {

        messageError.textContent = 'Debe introducir una contraseña';
    } //else if(password.validity.patternMismatch) {

    //message.textContent = 'Su contraseña debe contener 8 o más caracteres: Al menos un número, una letra mayúscula y una letra minúscula';
    else if (password.validity.tooShort) {

        messageError.textContent = 'Su contraseña debe contener 8 o más caracteres'
    }
    passwordError.className = 'error activo';

}

message.addEventListener('input', function(event) {

    if (message.validity.valid) {

        messageError.innerHTML = '';
        messageError.className = 'error';
    } else {

        showErrorMessage();
    }

});

function showErrorMessage() {
    if (message.validity.valueMissing) {

        messageError.textContent = 'Repita de nuevo su contraseña';
    } else if (message.value != password.value) {

        messageError.textContent = 'Las contraseñas no coinciden';
    }
    messageError.className = 'error activo';

}

// ---------Envío de datos.

register.addEventListener('click', function(event) {


    if (!email.validity.valid || !nombre.validity.valid || !phone.validity.valid || !password.validity.valid || !message.validity.valid || (password.value != message.value)) {


        messageError.textContent = 'Por favor, verifique su información.';

        event.preventDefault();

    } else {
        //Pueden mandar datos a lista de usuarios desde aquí, ej: datos.push(email.value)
        messageError.textContent = 'Registro exitoso.'
            //Codificación
        passwordEnc = btoa(password.value);
        console.log(passwordEnc);

        event.preventDefault();


    }
});

var pswData = []
var emailData = []
var nameData = []

//AJAX

$(document).ready(() => {
    const list = () => {
        $.ajax({
            url: 'https://60f99aa47ae59c0017165e6a.mockapi.io/exilegames/login',
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                let data = '';
                res.forEach(element => {
                    data += `
            <tr>
              <td>${element.id}</td>
              <td>${element.name}</td>
              <td>${element.email}</td>
            </tr>
          `
                });

                for (var i in res) {
                    pswData.push(res[i].password)

                }
                for (var i in res) {
                    emailData.push(res[i].email)

                }

                for (var i in res) {
                    nameData.push(res[i].name)

                }

                console.log(pswData)
                console.log(emailData)
                $('#tbody').html(data);


            }

        })
    }

    const save = () => {
        $('#register').on('click', function() {
            const datosUser = {
                name: $('#nombre').val(),
                email: $('#email').val(),
                phone: $('#telefono').val(),
                password: $('#psw').val(),
            }
            $.ajax({
                url: 'https://60f99aa47ae59c0017165e6a.mockapi.io/exilegames/login',
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify(datosUser),
                dataType: 'json',
                success: (data) => {
                    console.log('Registro exitoso')
                }
            })
        })
    }

    list();
    save();
})