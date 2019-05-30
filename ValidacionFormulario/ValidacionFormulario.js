var formularioFacil = document.getElementById("formularioFacil");			
formularioFacil.addEventListener("submit", validarFormulario);


function validarFormulario (event){

   event.preventDefault();
   var hayErrores=false;
   
   
   
   try{// Captura posibles errores de código
	   
	   
	   // Borramos todos los mensajes de error previos
	   
	   var spansErrores = document.getElementsByClassName("error");
	   
	   for( var i=0; i<spansErrores.length; i++){
		   spansErrores[i].innerHTML="";
	   }
	   
	   
	   // Una tira de ifs....
	   // me tengo que enterar de cuando hay un error y "apuntarlo"
	   
	   // Validamos lo más fácil primero
	   // ... todos los campos numéricos:
	   // - Edad
	   // - Estatura
	   // - Empleados a cargo
	   
	   
	   // ************* Edad **********************
	   var campoEdad = document.getElementById("idade");
	   var edadAValidar = campoEdad.value;
	   var errorEdad = campoEdad.nextElementSibling;
	   
	   if(isNaN(edadAValidar) || edadAValidar>=50 || edadAValidar<=20){		   
		   errorEdad.innerHTML="La edad tiene que estar comprendida entre 21 y 49 años";		   		  
		   hayErrores=true;
	   }
	   // ************* Fin edad **************
	   
	   // ************* estatura **************
	   var campoEstatura = document.getElementById("estatura");
	   var estaturaAValidar = campoEstatura.value;
	   var errorEstatura = campoEstatura.nextElementSibling;
	   
	   if(isNaN(estaturaAValidar) || estaturaAValidar<=1.45){		   
		   errorEstatura.innerHTML="La estatura tiene que ser mayor que 1.45";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin estatura *************
	   
	   // ************* empregadosacargo **************
	   var campoEmpleados = document.getElementById("empregadosacargo");
	   var empleadosAValidar = campoEmpleados.value;
	   var errorEmpleados = campoEmpleados.nextElementSibling;
	   
	   if(isNaN(empleadosAValidar) || empleadosAValidar<1 || empleadosAValidar>10){		   
		   errorEmpleados.innerHTML="Los empleados deben ser entre 1 y 10";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin empregadosacargo *************
	   
	   // ************* afeccion[] **************
	   var checksAffeccions = document.getElementsByName("afeccion[]");
	   var errorAffecions = document.getElementById("errorAficiones");
	   
	   var contadorAfeccions = 0;
	   
	   for(var i=0; i<checksAffeccions.length; i++){
		  if(checksAffeccions[i].checked){
			  contadorAfeccions++;
		  }
	   }
	   
	   if(contadorAfeccions!=2){
		   errorAffecions.innerHTML="Debes escoger exactamente 2 aficiones";
		   hayErrores=true;
	   }
	   
	   // ************ Fin afeccion[] *************
	   
	   
	   // ************* descripcion **************
	   var campoDescripcion = document.getElementById("descricion");
	   var descripcionAValidar = campoDescripcion.value;
	   var errorDescripcion = campoDescripcion.nextElementSibling;
	   
	   if(descripcionAValidar.length<50 || descripcionAValidar.length>200){		   
		   errorDescripcion.innerHTML="La descricion tiene que tner entre 50 y 200 caracteres";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin descricion *************
	   
	   
	   // ************* nombre **************
	   var campoNombre = document.getElementById("nombre");
	   var nombreAValidar = campoNombre.value;
	   var patronNombre = /^[ a-zA-Z]{2,30}$/;
	   var errorNombre = campoNombre.nextElementSibling;
	   
	   if(!patronNombre.test(nombreAValidar)){		   
		   errorNombre.innerHTML="El nombre no mola";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin nombre *************
	   
	   // ************* apellidos **************
	   var campoApellidos = document.getElementById("apellidos");
	   var apellidosAValidar = campoApellidos.value;
	   var patronApellidos = /^[ a-zA-Z]{2,60}$/;
	   var errorApellidos = campoApellidos.nextElementSibling;
	   
	   if(!patronApellidos.test(apellidosAValidar)){		   
		   errorApellidos.innerHTML="Los apellidos no molan";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin apellidos *************
	   
	   
	   // ************* telefono **************
	   var campoTelefono = document.getElementById("telefono");
	   var telefonoAValidar = campoTelefono.value;
	   var patronTelefono = /^[6789][0-9]{8}$/;
	   var errorTelefono = campoTelefono.nextElementSibling;
	   
	   if(!patronTelefono.test(telefonoAValidar)){		   
		   errorTelefono.innerHTML="El teléfono no mola";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin telefono *************
	   
	   
	   // ************* coche **************
	   var campoCoche = document.getElementById("coche");
	   var cocheAValidar = campoCoche.value;	   
	   var errorCoche = campoCoche.nextElementSibling;
	   
	   if(cocheAValidar==""){		   
		   errorCoche.innerHTML="Escoge un coche";		   		  
		   hayErrores=true;
	   }	   
	   // ************ Fin coche *************
	   
	   
	   // ************* contrato **************
	   
	   var checksContratos = document.getElementsByName("contrato");
	   var errorContrato = document.getElementById("errorContratos");
	   
	   var contadorContratos = 0;
	   
	   for(var i=0; i<checksContratos.length; i++){
		  if(checksContratos[i].checked){
			  contadorContratos++;
		  }
	   }
	   
	   if(contadorContratos!=1){
		   errorContratos.innerHTML="Debes escoger un contrato";
		   hayErrores=true;
	   }
	   
	   // ************ Fin contrato *************
	   
	   
	   // ************* datanacemento **************
	   var campoFecha = document.getElementById("datanacemento");
	   var fechaAValidar = campoFecha.value;
	   var errorFecha = campoFecha.nextElementSibling;
	   if(fechaAValidar!=""){
		   var fechaTipoFecha = new Date(fechaAValidar);
		   var fechaHoy = new Date();
		   
		   var milisDiferencia = fechaHoy - fechaTipoFecha;
		   
		   var milisEnUnAnho = 365*24*60*60*1000;
		   
		   var edadAPartirDeNac = parseInt(milisDiferencia / milisEnUnAnho);
		   
		   if(edadAPartirDeNac != edadAValidar){
			errorFecha.innerHTML="Me estas mintiendo con tu edad";		   		     
			hayErrores=true;
		   }
		   		   		  
	   }else{
		   errorFecha.innerHTML="Inserta una fecha";		   		  
		   hayErrores=true;
	   }
	   	      
	   // ************ Fin datanacemento *************
	   
	   
	   
   }catch (e){	
		console.log(e);
		alert("Se produjo un error de procesamiento\n" + e);
		return false;
   }
   
   if (!hayErrores){
		event.currentTarget.submit();
		return true;
   }else{		
		return false;
   }	
}
