var passwordEnc, passwordDenc;
function encriptar(){
   var password = document.getElementById("txtContrasena").value;
    passwordEnc = btoa(password);
   alert(passwordEnc);
}

function desencriptar(){
   var password = document.getElementById("txtContrasena").value; // weno esto no se necesita aqui creo 
   passwordDenc = atob(passwordEnc);
   alert(passwordDenc);
}