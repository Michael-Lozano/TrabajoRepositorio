function mostrar() {
    var Nombre = document.getElementById("Nom").value
    var Id = document.getElementById("idani").value
    var Telefono = document.getElementById("teleani").value
    var correo = document.getElementById("CorrEn").value
    var tipoani = document.getElementById("TiAn").value
    var tipoalimen = document.getElementById("TipA").value
    var ubica = document.getElementById("UbiZo").value


    alert("REGISTRO EXITOSO " + "\n Nombre: " + Nombre +"\n Id: "+ Id+"\n Telefono: "+Telefono+"\nCorreo: "+correo+"\n Tipo Animal: "+tipoani+"\n Tipo Alimento: "+tipoalimen+"\nUbicacion :"+ ubica)
}