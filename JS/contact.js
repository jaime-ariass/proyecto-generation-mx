




// Validación por Javascript Api restriction. 
const form  = document.getElementsByTagName('form')[0];

const nombre = document.getElementById('nombre')
const email = document.getElementById('email');
const phone = document.getElementById('telefono')
const message = document.getElementById('mensaje')


const messageError = document.querySelector('#mensaje + span.error');


// --------- Validación de nombre.

nombre.addEventListener('input', function (event) {
    
    if (nombre.validity.valid) {
   
      messageError.innerHTML = ''; 
      messageError.className = 'error'; 
    } else {
      
      showErrorName();
    }
    
  });

function showErrorName() {
    if(nombre.validity.valueMissing) {

      messageError.textContent = 'Debe introducir un nombre.';
    } else if(nombre.validity.patternMismatch) {
  
      messageError.textContent = 'Formato no válido';
    } 
    nameError.className = 'error activo';
  }

// --------- Validación de email.

<<<<<<< HEAD
  if(!email.validity.valid || !nombre.validity.valid || !phone.validity.valid || !message.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    
    messageError.textContent = 'Por favor, verifique su información.';
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
    
  }else{
    datos.push(nombre.value)
    datos.push(email.value)
    datos.push(phone.value)
    datos.push(message.value)
    messageError.textContent = '¡Gracias! Nos pondremos en contacto pronto con usted.'
    event.preventDefault();
    console.log(datos);
    
    var contactParams = {
      fromName: nombre.value,
      fromEmail: email.value,
      fromPhone: phone.value,
      fromMessage: message.value,
  };
  emailjs.send('service_6bqlr4g','template_sglxwf9', contactParams, 'user_ZhjtSfzk5zFv0BZ0VZdUj').then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
      console.log('FAILED...', error);
      });
=======
email.addEventListener('input', function (event) {


  if (email.validity.valid) {
 
    messageError.innerHTML = ''; 
    messageError.className = 'error'; 
  } else {
   
    showErrorEmail();
>>>>>>> respaldo
  }
  
});

function showErrorEmail() {
  if(email.validity.valueMissing) {
   
    messageError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    
    messageError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    
    messageError.textContent = 'El correo electrónico debe tener al menos ' + email.minLength + ' caracteres; ha introducido ' + email.value.length + '.';
  }

  emailError.className = 'error activo';
}

// --------- Validación de teléfono.

phone.addEventListener('input', function (event) {
    
    if (phone.validity.valid) {
   
      messageError.innerHTML = ''; 
      messageError.className = 'error'; 
    } else {
      
      showErrorPhone();
    }
    
  });

function showErrorPhone() {
    if(phone.validity.valueMissing) {

      messageError.textContent = 'Debe introducir un número telefónico';
    }else if(nombre.validity.patternMismatch) {
  
        message.textContent = 'Formato no válido';
   
    } else if(phone.validity.tooShort) {
  
      messageError.textContent = 'El número telefónico debe contener al menos 10 dígitos';
    }
    phoneError.className = 'error activo';
  }
  
// --------- Validación de mensaje. 

message.addEventListener('input', function (event) {
    
    if (message.validity.valid) {
   
      messageError.innerHTML = ''; 
      messageError.className = 'error'; 
    } else {
      
      showErrorMessage();
    }
    
  }); 
  
  function showErrorMessage() {
    if(message.validity.valueMissing) {

      messageError.textContent = 'Debe introducir un mensaje';
    } else if(message.validity.tooShort) {
  
      messageError.textContent = 'Por favor, déjenos su mensaje y nos comunicaremos con usted pronto';
    }
    messageError.className = 'error activo';
    
  }

<<<<<<< HEAD
=======
// ---------Envío de datos.

form.addEventListener('submit', function (event) {
 

  if(!email.validity.valid || !nombre.validity.valid || !phone.validity.valid || !message.validity.valid) {
  
    
    messageError.textContent = 'Por favor, verifique su información.';
 
    event.preventDefault();
    
  }else{
 
    messageError.textContent = '¡Gracias! Nos pondremos en contacto pronto con usted.'
    event.preventDefault();
   

    var contactParams = {
    fromName: nombre.value,
    fromEmail: email.value,
    fromPhone: phone.value,
    fromMessage: message.value,

  };
  emailjs.send('service_6bqlr4g','template_sglxwf9', contactParams, 'user_ZhjtSfzk5zFv0BZ0VZdUj').then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
}
});




 

 
 

>>>>>>> respaldo
