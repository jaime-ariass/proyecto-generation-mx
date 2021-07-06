var passwordEnc, passwordDenc;
function encriptar(){
   var password = document.getElementById("txtContrasena").value;
    passwordEnc = btoa(password);
   alert(passwordEnc);
}

function desencriptar(){
   // var password = document.getElementById("txtContrasena").value; // Esto no se necesita aqui creo, si no funciona descomentar
   passwordDenc = atob(passwordEnc);
   alert(passwordDenc);
}