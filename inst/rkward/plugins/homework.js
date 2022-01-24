// author: Alfredo Sánchez Alberca (asalber@ceu.es)
var dni;

function preprocess(){
	echo('library(cereales)\n');
}

function calculate () {
	dni = getString("dni");
	echo('data(cereales, package="cereales")\n');
	echo('set.seed(' + dni + 2 + ')\n');
	echo('cereales$calorias <- cereales$calorias + round(runif(length(cereales$calorias),-2,2))\n');
	echo('cereales$proteinas <- cereales$proteinas + round(runif(length(cereales$proteinas),0,1),1)\n');
	echo('cereales$grasa <- cereales$grasa + round(runif(length(cereales$grasa),0,1),1)\n');
	echo('cereales$sodio <- cereales$sodio + round(runif(length(cereales$sodio),0,5),1)\n');
	echo('cereales$fibra <- cereales$fibra + round(runif(length(cereales$fibra),0,1),1)\n');
	echo('cereales$carbohidratos <- cereales$carbohidratos + round(runif(length(cereales$carbohidratos),0,1),1)\n');
	echo('cereales$azucar <- cereales$azucar + round(runif(length(cereales$azucar),0,1),1)\n');
	echo('cereales$potasio <- cereales$potasio + round(runif(length(cereales$potasio),0,5),1)\n');
	echo('cereales$valoracion.adultos <- cereales$valoracion.adultos + round(rnorm(length(cereales$valoracion.adultos)),2)\n');
	echo('cereales$valoracion.jovenes <- cereales$valoracion.jovenes + round(rnorm(length(cereales$valoracion.jovenes)),2)\n');
	echo('.GlobalEnv$cereales.' + dni + '<- cereales\n');
	echo('rm(cereales,envir=.GlobalEnv)\n');
}

function printout () {
	echo('rk.header ("Datos del trabajo de estad&iacute;stica", parameters=list("Nombre del conjunto de datos" = "cereales.' + dni + '"))\n');
	echo('rk.print("Se ha generado un nuevo conjunto de datos en el espacio de trabajo.")\n');
}

