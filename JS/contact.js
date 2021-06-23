// Validación por Javascript Api restriction. 
const form  = document.getElementsByTagName('form')[0];

const nombre = document.getElementById('nombre')
const email = document.getElementById('email');
const phone = document.getElementById('telefono')
const message = document.getElementById('mensaje')

var datos= [] 

const nameError = document.querySelector('#nombre + span.error');
const emailError = document.querySelector('#email + span.error');
const phoneError = document.querySelector('#telefono + span.error');
const messageError = document.querySelector('#mensaje + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showErrorEmail();
  }
  
});

nombre.addEventListener('input', function (event) {
    
    if (nombre.validity.valid) {
   
      nameError.innerHTML = ''; 
      nameError.className = 'error'; 
    } else {
      
      showErrorName();
    }
    
  });

  phone.addEventListener('input', function (event) {
    
    if (phone.validity.valid) {
   
      phoneError.innerHTML = ''; 
      phoneError.className = 'error'; 
    } else {
      
      showErrorPhone();
    }
    
  });

  message.addEventListener('input', function (event) {
    
    if (message.validity.valid) {
   
      messageError.innerHTML = ''; 
      messageError.className = 'error'; 
    } else {
      
      showErrorMessage();
    }
    
  });

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email.validity.valid && !nombre.validity.valid && !phone.validity.valid && !message.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showErrorEmail();
    showErrorName();
    showErrorPhone();
    showErrorMessage();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
    
  }else{
    datos.push(nombre.value)
    datos.push(email.value)
    datos.push(phone.value)
    datos.push(message.value)
    alert('Enviado')
    event.preventDefault();
    console.log(datos)

  }
});

function showErrorEmail() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}

function showErrorName() {
    if(nombre.validity.valueMissing) {

      nameError.textContent = 'Debe introducir un nombre.';
    } else if(nombre.validity.typeMismatch) {
  
      nameError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
    } 
    
  
    nameError.className = 'error activo';
  }

  function showErrorPhone() {
    if(phone.validity.valueMissing) {

      phoneError.textContent = 'Debe introducir un número telefónico válido';
    } else if(phone.validity.typeMismatch) {
  
      phoneError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
    } else if(phone.validity.tooShort) {
  
      phoneError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
    }
  
    phoneError.className = 'error activo';
  }

  function showErrorMessage() {
    if(message.validity.valueMissing) {

      messageError.textContent = 'Debe introducir un mensaje';
    } else if(message.validity.tooShort) {
  
      messageError.textContent = 'El mensaje debe de contener al menos 140 caracteres';
    }
  
    messageError.className = 'error activo';
  }



