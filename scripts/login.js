let formulario = document.querySelector("#formularioIngreso");

formulario.addEventListener("submit",EnviarDatos);

function EnviarDatos(e){
    e.preventDefault();
    let usuario = document.querySelector("#cmpUsuario").value;
    let clave = document.querySelector("#cmpClave").value;

    MostrarMensaje(usuario,clave);
}

function MostrarMensaje(u,c){
    let espacioMensaje = document.querySelector("#espacioMensajes");

    let mensaje = document.createElement("div");
    mensaje.className = "alert alert-success";
    mensaje.innerHTML = `<h5><i class="icon-ok"></i>&nbsp; Datos capturados con exito</h5>`;
    
    espacioMensaje.appendChild(mensaje);

    setTimeout(() => espacioMensaje.removeChild(mensaje),3000);
}