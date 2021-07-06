var passwordEnc, passwordDenc;
function encriptar(){
   var password = document.getElementById("txtContrasena").value;
    passwordEnc = btoa(password);
   alert(passwordEnc);
}

function desencriptar(){
   var password = document.getElementById("txtContrasena").value;
   passwordDenc = atob(passwordEnc);
   alert(passwordDenc);
}