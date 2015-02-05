var posicion;
var jugadas;
var mensaje;

function crearTabla(filas, columnas) {
    "use strict";
	var i, j, tablero, tr, td, casilla;
    tablero = document.createElement('table');
    
	for (i = 0; i < filas; i += 1) {
		tr = document.createElement('tr');

		for (j = 0; j < columnas; j += 1) {
			td = document.createElement('td');
			casilla = String.fromCharCode(97 + i).toUpperCase() + (j + 1);
			td.innerHTML = casilla;
			tr.appendChild(td);
			td.setAttribute('id', casilla);

			if ((i + j) % 2) {
                td.style.backgroundColor = 'black';
            } else {
                td.style.backgroundColor = 'white';
            }
		}

		tablero.appendChild(tr);
	}

	document.getElementById('tablero').appendChild(tablero);
}

function reiniciarPartida() {
    "use strict";
	location.reload();
}

function jugador() {
    "use strict";
	var azul = false, verde = false;

	//jugador 1
	if (jugadas.A1 === 0 && jugadas.A2 === 0 && jugadas.A3 === 0) {
		verde = true;
	} else if (jugadas.B1 === 0 && jugadas.B2 === 0 && jugadas.B3 === 0) {
		verde = true;
	} else if (jugadas.C1 === 0 && jugadas.C2 === 0 && jugadas.C3 === 0) {
		verde = true;
	} else if (jugadas.A1 === 0 && jugadas.B2 === 0 && jugadas.C3 === 0) {
		verde = true;
	} else if (jugadas.A3 === 0 && jugadas.B2 === 0 && jugadas.C1 === 0) {
		verde = true;
	} else if (jugadas.A1 === 0 && jugadas.B1 === 0 && jugadas.C1 === 0) {
		verde = true;
	} else if (jugadas.A2 === 0 && jugadas.B2 === 0 && jugadas.C2 === 0) {
		verde = true;
	} else if (jugadas.A3 === 0 && jugadas.B3 === 0 && jugadas.C3 === 0) {
		verde = true;
	}

	//jugador 2
	if (jugadas.A1 === 1 && jugadas.A2 === 1 && jugadas.A3 === 1) {
		azul = true;
	} else if (jugadas.B1 === 1 && jugadas.B2 === 1 && jugadas.B3 === 1) {
		azul = true;
	} else if (jugadas.C1 === 1 && jugadas.C2 === 1 && jugadas.C3 === 1) {
		azul = true;
	} else if (jugadas.A1 === 1 && jugadas.B2 === 1 && jugadas.C3 === 1) {
		azul = true;
	} else if (jugadas.A3 === 1 && jugadas.B2 === 1 && jugadas.C1 === 1) {
		azul = true;
	} else if (jugadas.A1 === 1 && jugadas.B1 === 1 && jugadas.C1 === 1) {
		azul = true;
	} else if (jugadas.A2 === 1 && jugadas.B2 === 1 && jugadas.C2 === 1) {
		azul = true;
	} else if (jugadas.A3 === 1 && jugadas.B3 === 1 && jugadas.C3 === 1) {
		azul = true;
	}
    
    mensaje = function (equipo) {
        window.alert('Victoria aplastante del equipo ' + equipo);
    };
    
	//gana el jugador 1
	if (verde) {
		mensaje('verde');
		reiniciarPartida();
	}

	//gana el jugador 2
	if (azul) {
		mensaje('azul');
		reiniciarPartida();
	}

}

function moverFicha(event) {
    "use strict";
	var id, celda;
    id = event.target.id;
	celda = document.getElementById(id);

	if (posicion % 2 && jugadas[id] !== 1) {
		celda.style.backgroundColor = "lightgreen";
		celda.innerHTML = "X";
		jugadas[id] = 0;
		celda.setAttribute('onclick', 'event.cancelBubble = true;');
	} else if (!(posicion % 2) && jugadas[id] !== 0) {
		celda.style.backgroundColor = "lightblue";
		celda.innerHTML = "O";
		jugadas[id] = 1;
		celda.setAttribute('onclick', 'event.cancelBubble = true;');
	}

	posicion += 1;
	jugador();
}

function iniciar() {
    "use strict";
	crearTabla(3, 3);
	posicion = 1;
	jugadas = new Array(9);

	document.getElementById("tablero").onclick = moverFicha;
}

window.onload = iniciar;