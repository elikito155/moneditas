// app.js
$(document).ready(function () {
	// Obtener los datos del archivo JSON
	$.getJSON('assets/db.json', function (data) {
		// Iterar a través de los datos y mostrarlos en la lista
		var coinList = $('#coinList');
		$.each(data, function (index, coin) {
			coinList.append('<li class="list-group-item">' + coin.País + ' (' + coin.Año + '): ' + coin.Título + ' - Cantidad: ' + coin.Cantidad + '</li>');
		});
	});
});
