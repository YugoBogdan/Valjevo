function initialize() {

	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(44.274467, 19.887722),
		mapTypeId: google.maps.MapTypeId.SATELLITE
	}
  
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	for (var i = 0; i<rezultati.length; i++){
		arr_staroValjevo[i].setMap(map);
	};
	
	var infowindow = setMarkers(map, bolnice);
	
	google.maps.event.addListener(infowindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();	
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});		
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});		
		iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});		
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});		
		
		if($('.iw-content').height() < 140){
			$('.iw-bottom-gradient').css({display: 'none'});			
		}	
		iwCloseBtn.mouseout(function(){
			$(this).css({opacity: '1'});			
		});
	});

	var naslov = document.getElementById('legenda-naslov');
	if (jezik == 1){naslov.innerHTML = '&#1051;&#1045;&#1043;&#1045;&#1053;&#1044;&#1040;';}
	else if (jezik == 2){naslov.innerHTML = 'LEGEND';}
	var legend = document.getElementById('tabelaLegenda');
    for (var i=0;i<markerIcons.length;i++) {
        var type = markerIcons[i];
		var iconUrl = type.url;
		if (jezik==1){
			var name = type.legenda_opis_cir;
		}
		else if (jezik==2){
			var name = type.legenda_opis_eng;
		}

		var row = legend.insertRow(i+1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = '<img src="'+iconUrl+'">';
		cell2.innerHTML = '<b>'+name+'</b>';
    }

	if (jezik==1){var legendaOpisZaStaroValjevo = '&#1057;&#1090;&#1072;&#1088;&#1086; &#1042;&#1072;&#1113;&#1077;&#1074;&#1086;';}
	else if (jezik==2){var legendaOpisZaStaroValjevo = 'Old Valjevo';}
	var staroValjevoLegenda = document.createElement('tr');
	staroValjevoLegenda.innerHTML = '<td id="staroValjevo_Legenda"><img src="krstovi/staroValjevo.png"></td><td><b>'+ legendaOpisZaStaroValjevo+'</b></td>';
	legend.appendChild(staroValjevoLegenda);
	
	var povlaka = document.createElement('tr');
	povlaka.innerHTML = '<td id="legendaPovlaka" colspan="2"></td>';
	legend.appendChild(povlaka);
	
	var povlaka = document.createElement('tr');
	povlaka.innerHTML = '<td id="legendaPovlaka" colspan="2"></td>';
	legend.appendChild(povlaka);
	
	var jezici = document.createElement('tr');
	jezici.innerHTML = '<td id="srb_zast" width="150px"><img src="srb-zast.png" height="20" width="42" onclick="promeni_jezik_na_srb()"></td>'+
						'<td id="eng_zast" width="150px"><img src="eng-zast.png" height="20" width="42" onclick="promeni_jezik_na_eng()"></td>';
	legend.appendChild(jezici);
	
	var autor_sr = 'Аутор (историјски подаци): Владимир Кривошејев\nАутор (мапа): Ђорђе Радонић\nКонтакт: djordje.radonic.bp@gmail.com\n\nПројекат Интерактивне карте ваљевских болница остварен је као поклон Музеју града Ваљева, у славу страних и домаћих лекара, и болесника, из доба рата и епидемије 1914. и 1915. године.\n\nХвала: професору Кривошејеву који ми је дао прилику, професору Пајићу који ми је помогао у геоинформатичким питањима, и Филипу Бачку који је одвојио више сати свог слободног времена. Вечна слава и покој јунацима са Цера, Дрине и Колубаре.';
	
	var autor_en = 'Author (historical data): Vladimir Krivošejev\nAuthor (map): Đorđe Radonić\nContact: djordje.radonic.bp@gmail.com\n\nValjevo Hospitals Interactive Map project has been realized as a gift to Valjevo City Museum, in honor of foreign and domestic doctors, and patients, from the 1914. and 1915. war and epidemic period.\n\nGratitude to: professor Krivošejev who gave me an opportunity, professor Pajić who have helped me in geoinformatic questons, and Filip Bačko who had gave several hours of his free time. Ethernal glory and peace to heores of Cer, Drina and Kolubara.';
	
	var autor_legenda = document.createElement('tr');
	if (jezik == 1){autor_legenda.innerHTML = '<td id="autor_legenda" colspan="2"><abbr title="'+autor_sr+'">&#1072;&#1091;&#1090;&#1086;&#1088;</abbr></td>';}
	else if (jezik == 2){autor_legenda.innerHTML = '<td id="autor_legenda" colspan="2"><abbr title="'+autor_en+'">author</abbr></td>';}
	
	legend.appendChild(autor_legenda);
	
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
