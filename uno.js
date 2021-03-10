/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;

	var contadorProgramador = 0;
	var acumuladorSueldoProgramador = 0;
	var contadorAnalista = 0;
	var acumuladorSueldoAnalista = 0;
	var contadorQa = 0;
	var acumuladorSueldoQa = 0;
	var nombreMaximoSueldoFemenino;
	var maximoSueldoFemenino;
	var flagFemenino = true;
	var contadorProgramadorNoBinario = 0;
	var maximoSueldo;
	var sexoMaximoSueldo;
	var flagPrimeraVuelta = true;
	var promedioSueldoProgramador;
	var promedioSueldoAnalista;
	var promedioSueldoQa;


	do
	{

		nombre = prompt ("Ingrese nombre:");
		while(!isNaN(nombre))
		{
			nombre = prompt ("Error, reingrese nombre:");
		}

		edad = prompt ("Ingrese edad:");
		edad = parseInt (edad);
		while(isNaN(edad) || edad < 18 || edad>90)
		{
			edad = prompt("Error, reingrese edad:");
			edad = parseInt (edad);
		}

		sexo = prompt ("Ingrese sexo:");
		while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
		{
			sexo = prompt ("Error, reingrese sexo:");
		}

		puesto = prompt ("Ingrese puesto:");//(programador - analista - Qa),
		while(puesto != "programador" && puesto != "analista" && puesto != "Qa")
		{
			puesto = prompt ("Error, reingrese puesto:");
		}

		sueldo = prompt ("Ingrese sueldo:");
		sueldo = parseInt (sueldo);
		while(isNaN(sueldo) || sueldo < 15000 || sueldo>70000)
		{
			sueldo = prompt("Error, reingrese sueldo:");
			sueldo = parseInt (sueldo);
		}

		switch(puesto)
		{
			case "programador":
				contadorProgramador++;
				acumuladorSueldoProgramador = acumuladorSueldoProgramador + sueldo;
				break;

			case "analista":
				contadorAnalista++;
				acumuladorSueldoAnalista = acumuladorSueldoAnalista + sueldo;
				break;

			case "Qa":
				contadorQa++;
				acumuladorSueldoQa = acumuladorSueldoQa + sueldo;
				break;
		}

		switch(sexo)
		{
			case "masculino":
				break;

			case "femenino":
				if(maximoSueldoFemenino < sueldo || flagFemenino == true)
				{
					nombreMaximoSueldoFemenino = nombre;
					maximoSueldoFemenino = sueldo;
					flagFemenino = false;
				}
				break;

			case "no binario":
				
				if(sueldo < 55001 && sueldo > 19999 && puesto == "programador")
				{
					contadorProgramadorNoBinario++;
				}
				break;	
		}

		

		if(maximoSueldo < sueldo || flagPrimeraVuelta == true)
		{
			maximoSueldo = sueldo;
			sexoMaximoSueldo = sexo;
			flagPrimeraVuelta = false;
		}


		continuar = confirm("Desea continuar?")
	}while(continuar == true)


	promedioSueldoProgramador = acumuladorSueldoProgramador / contadorProgramador;
	promedioSueldoAnalista = acumuladorSueldoAnalista / contadorAnalista;
	promedioSueldoQa = acumuladorSueldoQa / contadorQa;



	if(contadorProgramador > 0)
	{
		document.write("El promedio de sueldo de un Programador es " + promedioSueldoProgramador + ". <br>");
	}
	else
	{
		document.write("No se ingresaron programadores. <br>");
	}

	if(contadorAnalista > 0)
	{
		document.write("El promedio de sueldo de un Analista es " + promedioSueldoAnalista + ". <br>");
	}
	else
	{
		document.write("No se ingresaron Analistas. <br>");
	}

	if(contadorQa > 0)
	{
		document.write("El promedio de sueldo de un Qa es " + promedioSueldoQa + ". <br>");
	}
	else
	{
		document.write("No se ingresaron Qa. <br>");
	}

	document.write ("El sexo de quien percibe mejor sueldo es " + sexoMaximoSueldo + ". <br>");

	if(flagFemenino == false)
	{
		document.write("El nombre del empleado femenino con mas sueldo es " + nombreMaximoSueldoFemenino + ". <br>");
	}
	else
	{
		document.write("No se ingresaron mujeres. <br>");
	}

	if(contadorProgramadorNoBinario > 0)
	{
		document.write("La cantidad de programadores no binarios que cobran entre 20000 y 55000 es " + 
			contadorProgramadorNoBinario + ".");
	}
	else
	{
		document.write("No se ingresaron programadores no binarios con sueldos de entre 20000 y 55000.")
	}




}
