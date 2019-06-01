const formularioFacil = document.getElementById('formularioFacil');
formularioFacil.addEventListener('submit', validarFormulario);


function validarFormulario(event) {
  event.preventDefault();
  let hayErrores=false;


  try {// Captura posibles errores de código
    // Borramos todos los mensajes de error previos

    const spansErrores = document.getElementsByClassName('error');

    for ( let i=0; i<spansErrores.length; i++) {
      spansErrores[i].innerHTML='';
    }


    // Una tira de ifs....
    // me tengo que enterar de cuando hay un error y "apuntarlo"

    // Validamos lo más fácil primero
    // ... todos los campos numéricos:
    // - Edad
    // - Estatura
    // - Empleados a cargo


    // ************* Edad **********************
	   const campoEdad = document.getElementById('idade');
	   const edadAValidar = campoEdad.value;
	   const errorEdad = campoEdad.nextElementSibling;

	   if (isNaN(edadAValidar) || edadAValidar>=50 || edadAValidar<=20) {
		   errorEdad.innerHTML='La edad tiene que estar comprendida entre 21 y 49 años';
		   hayErrores=true;
	   }
	   // ************* Fin edad **************

	   // ************* estatura **************
	   const campoEstatura = document.getElementById('estatura');
	   const estaturaAValidar = campoEstatura.value;
	   const errorEstatura = campoEstatura.nextElementSibling;

	   if (isNaN(estaturaAValidar) || estaturaAValidar<=1.45) {
		   errorEstatura.innerHTML='La estatura tiene que ser mayor que 1.45';
		   hayErrores=true;
	   }
	   // ************ Fin estatura *************

	   // ************* empregadosacargo **************
	   const campoEmpleados = document.getElementById('empregadosacargo');
	   const empleadosAValidar = campoEmpleados.value;
	   const errorEmpleados = campoEmpleados.nextElementSibling;

	   if (isNaN(empleadosAValidar) || empleadosAValidar<1 || empleadosAValidar>10) {
		   errorEmpleados.innerHTML='Los empleados deben ser entre 1 y 10';
		   hayErrores=true;
	   }
	   // ************ Fin empregadosacargo *************

	   // ************* afeccion[] **************
	   const checksAffeccions = document.getElementsByName('afeccion[]');
	   const errorAffecions = document.getElementById('errorAficiones');

	   let contadorAfeccions = 0;

	   for (var i=0; i<checksAffeccions.length; i++) {
		  if (checksAffeccions[i].checked) {
			  contadorAfeccions++;
		  }
	   }

	   if (contadorAfeccions!=2) {
		   errorAffecions.innerHTML='Debes escoger exactamente 2 aficiones';
		   hayErrores=true;
	   }

	   // ************ Fin afeccion[] *************


	   // ************* descripcion **************
	   const campoDescripcion = document.getElementById('descricion');
	   const descripcionAValidar = campoDescripcion.value;
	   const errorDescripcion = campoDescripcion.nextElementSibling;

	   if (descripcionAValidar.length<50 || descripcionAValidar.length>200) {
		   errorDescripcion.innerHTML='La descricion tiene que tner entre 50 y 200 caracteres';
		   hayErrores=true;
	   }
	   // ************ Fin descricion *************


	   // ************* nombre **************
	   const campoNombre = document.getElementById('nombre');
	   const nombreAValidar = campoNombre.value;
	   const patronNombre = /^[ a-zA-Z]{2,30}$/;
	   const errorNombre = campoNombre.nextElementSibling;

	   if (!patronNombre.test(nombreAValidar)) {
		   errorNombre.innerHTML='El nombre no mola';
		   hayErrores=true;
	   }
	   // ************ Fin nombre *************

	   // ************* apellidos **************
	   const campoApellidos = document.getElementById('apellidos');
	   const apellidosAValidar = campoApellidos.value;
	   const patronApellidos = /^[ a-zA-Z]{2,60}$/;
	   const errorApellidos = campoApellidos.nextElementSibling;

	   if (!patronApellidos.test(apellidosAValidar)) {
		   errorApellidos.innerHTML='Los apellidos no molan';
		   hayErrores=true;
	   }
	   // ************ Fin apellidos *************


	   // ************* telefono **************
	   const campoTelefono = document.getElementById('telefono');
	   const telefonoAValidar = campoTelefono.value;
	   const patronTelefono = /^[6789][0-9]{8}$/;
	   const errorTelefono = campoTelefono.nextElementSibling;

	   if (!patronTelefono.test(telefonoAValidar)) {
		   errorTelefono.innerHTML='El teléfono no mola';
		   hayErrores=true;
	   }
	   // ************ Fin telefono *************


	   // ************* coche **************
	   const campoCoche = document.getElementById('coche');
	   const cocheAValidar = campoCoche.value;
	   const errorCoche = campoCoche.nextElementSibling;

	   if (cocheAValidar=='') {
		   errorCoche.innerHTML='Escoge un coche';
		   hayErrores=true;
	   }
	   // ************ Fin coche *************


	   // ************* contrato **************

	   const checksContratos = document.getElementsByName('contrato');
	   const errorContrato = document.getElementById('errorContratos');

	   let contadorContratos = 0;

	   for (var i=0; i<checksContratos.length; i++) {
		  if (checksContratos[i].checked) {
			  contadorContratos++;
		  }
	   }

	   if (contadorContratos!=1) {
		   errorContratos.innerHTML='Debes escoger un contrato';
		   hayErrores=true;
	   }

	   // ************ Fin contrato *************


	   // ************* datanacemento **************
	   const campoFecha = document.getElementById('datanacemento');
	   const fechaAValidar = campoFecha.value;
	   const errorFecha = campoFecha.nextElementSibling;
	   if (fechaAValidar!='') {
		   const fechaTipoFecha = new Date(fechaAValidar);
		   const fechaHoy = new Date();

		   const milisDiferencia = fechaHoy - fechaTipoFecha;

		   const milisEnUnAnho = 365*24*60*60*1000;

		   const edadAPartirDeNac = parseInt(milisDiferencia / milisEnUnAnho);

		   if (edadAPartirDeNac != edadAValidar) {
        errorFecha.innerHTML='Me estas mintiendo con tu edad';
        hayErrores=true;
		   }
	   } else {
		   errorFecha.innerHTML='Inserta una fecha';
		   hayErrores=true;
	   }

	   // ************ Fin datanacemento *************
  } catch (e) {
    console.log(e);
    alert('Se produjo un error de procesamiento\n' + e);
    return false;
  }

  if (!hayErrores) {
    event.currentTarget.submit();
    return true;
  } else {
    return false;
  }
}
