//KONTURA STAROG VALJEVA - racunanje
var rezultati = [];
function reformatirajPodatke(siroviPodaci){
	var rezultat = [];
	for (var i = 0; i<siroviPodaci.length; i++){
		var trenutniElement = siroviPodaci[i];
		var formatiraniElement = {lat:trenutniElement[1], lng:trenutniElement[0]};
		rezultat.push(formatiraniElement);
	}
	return rezultat;
}

for (var i = 0; i<ARR_svi_polikordi.length; i++){
	var rezultat2 = reformatirajPodatke(ARR_svi_polikordi[i]);
	rezultati.push(rezultat2);
};

var arr_staroValjevo = [];
for (var i = 0; i<rezultati.length; i++){
	var pata = rezultati[i];
	var staroValjevo = new google.maps.Polygon({
		paths: pata,
		strokeColor: '#b35900',
		strokeOpacity: 0.8,
		strokeWeight: 3,
		fillColor: '#b35900',//default> crvena'#FF0000',
		fillOpacity: 0.20
	});
	arr_staroValjevo.push(staroValjevo);
};