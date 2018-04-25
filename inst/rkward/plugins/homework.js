// author: Alfredo Sánchez Alberca (asalber@ceu.es)
var dni;

function preprocess(){
	echo('require(cereales)\n');
}

function calculate () {
	dni = getString("dni");
	echo('data(datos.cereales, package="cereales")\n');
	echo('set.seed(' + dni + 3 + ')\n');
	echo('datos.cereales$calorias <- datos.cereales$calorias + round(runif(length(datos.cereales$calorias),-2,2))\n');
	echo('datos.cereales$proteinas <- datos.cereales$proteinas + round(runif(length(datos.cereales$proteinas),0,1),1)\n');
	echo('datos.cereales$grasa <- datos.cereales$grasa + round(runif(length(datos.cereales$grasa),0,1),1)\n');
	echo('datos.cereales$sodio <- datos.cereales$sodio + round(runif(length(datos.cereales$sodio),0,5),1)\n');
	echo('datos.cereales$fibra <- datos.cereales$fibra + round(runif(length(datos.cereales$fibra),0,1),1)\n');
	echo('datos.cereales$carbohidratos <- datos.cereales$carbohidratos + round(runif(length(datos.cereales$carbohidratos),0,1),1)\n');
	echo('datos.cereales$azucar <- datos.cereales$azucar + round(runif(length(datos.cereales$azucar),0,1),1)\n');
	echo('datos.cereales$potasio <- datos.cereales$potasio + round(runif(length(datos.cereales$potasio),0,5),1)\n');
	echo('datos.cereales$valoracion.adultos <- datos.cereales$valoracion.adultos + round(rnorm(length(datos.cereales$valoracion.adultos)),2)\n');
	echo('datos.cereales$valoracion.jovenes <- datos.cereales$valoracion.jovenes + round(rnorm(length(datos.cereales$valoracion.jovenes)),2)\n');
	echo('.GlobalEnv$datos.cereales.' + dni + '<- datos.cereales\n');
	echo('rm(datos.cereales,envir=.GlobalEnv)\n');
}

function printout () {
	echo('rk.header ("Datos del trabajo de estad&iacute;stica", parameters=list("Nombre del conjunto de datos" = "datos.cereales.' + dni + '"))\n');
	echo('rk.print("Se ha generado un nuevo conjunto de datos en el espacio de trabajo.")\n');
}

