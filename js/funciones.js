var posicion;
var jugadas;

window.onload = iniciar;

function iniciar() {
	crearTabla(3, 3);
	posicion = 1;
	jugadas = new Array(9);

	document.getElementById("tablero").onclick = moverFicha;
}

function crearTabla(filas, columnas) {
	tablero = document.createElement('table');

	for(i=0; i<filas; i++) {
		var tr = document.createElement('tr');

		for(j=0; j<columnas; j++) {
			var td = document.createElement('td');
			var casilla = String.fromCharCode(97 + i).toUpperCase() + (j+1);
			td.innerHTML = casilla;
			tr.appendChild(td);
			td.setAttribute('id', casilla);

			if( (i+j) % 2 ) td.style.backgroundColor = 'black';
			else td.style.backgroundColor = 'white';
		}

		tablero.appendChild(tr);
	}

	document.getElementById('tablero').appendChild(tablero);
}

function moverFicha(event) {
	var id = event.target.id;
	var celda = document.getElementById(id);

	if(posicion % 2 && jugadas[id] != 1) {
		celda.style.backgroundColor = "lightgreen";
		celda.innerHTML = "X";
		jugadas[id] = 0;
		celda.setAttribute('onclick', 'event.cancelBubble = true;');
	}
	else if( !(posicion % 2) && jugadas[id] != 0) {
		celda.style.backgroundColor = "lightblue";
		celda.innerHTML = "O";
		jugadas[id] = 1;
		celda.setAttribute('onclick', 'event.cancelBubble = true;');
	}

	posicion++;
	jugador();
}

function jugador() {
	var azul = false;
	var verde = false;

	//jugador 1
	if(jugadas['A1'] == 0 && jugadas['A2'] == 0 && jugadas['A3'] == 0) {
		verde = true;
	}
	else if(jugadas['B1'] == 0 && jugadas['B2'] == 0 && jugadas['B3'] == 0) {
		verde = true;
	}
	else if(jugadas['C1'] == 0 && jugadas['C2'] == 0 && jugadas['C3'] == 0) {
		verde = true;
	}
	else if(jugadas['A1'] == 0 && jugadas['B2'] == 0 && jugadas['C3'] == 0) {
		verde = true;
	}
	else if(jugadas['A3'] == 0 && jugadas['B2'] == 0 && jugadas['C1'] == 0) {
		verde = true;
	}
	else if(jugadas['A1'] == 0 && jugadas['B1'] == 0 && jugadas['C1'] == 0) {
		verde = true;
	}
	else if(jugadas['A2'] == 0 && jugadas['B2'] == 0 && jugadas['C2'] == 0) {
		verde = true;
	}
	else if(jugadas['A3'] == 0 && jugadas['B3'] == 0 && jugadas['C3'] == 0) {
		verde = true;
	}

	//jugador 2
	if(jugadas['A1'] == 1 && jugadas['A2'] == 1 && jugadas['A3'] == 1) {
		azul = true;
	}
	else if(jugadas['B1'] == 1 && jugadas['B2'] == 1 && jugadas['B3'] == 1) {
		azul = true;
	}
	else if(jugadas['C1'] == 1 && jugadas['C2'] == 1 && jugadas['C3'] == 1) {
		azul = true;
	}
	else if(jugadas['A1'] == 1 && jugadas['B2'] == 1 && jugadas['C3'] == 1) {
		azul = true;
	}
	else if(jugadas['A3'] == 1 && jugadas['B2'] == 1 && jugadas['C1'] == 1) {
		azul = true;
	}
	else if(jugadas['A1'] == 1 && jugadas['B1'] == 1 && jugadas['C1'] == 1) {
		azul = true;
	}
	else if(jugadas['A2'] == 1 && jugadas['B2'] == 1 && jugadas['C2'] == 1) {
		azul = true;
	}
	else if(jugadas['A3'] == 1 && jugadas['B3'] == 1 && jugadas['C3'] == 1) {
		azul = true;
	}

	//gana el jugador 1
	if(verde) {
		alert('Victoria aplastante del equipo verde');
		reiniciarPartida();
	}

	//gana el jugador 2
	if(azul) {
		alert('Victoria aplastante del equipo azul');
		reiniciarPartida();
	}

}

function reiniciarPartida() {
	location.reload();
}
