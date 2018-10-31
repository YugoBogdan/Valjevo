	var markerIcons = [];
	
	var imageRed = {
		url: 'krstovi/redovnaBolnicaAnicinGM.png',
		size: new google.maps.Size(52, 62),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(26, 31),
		legenda_opis_cir: '&#1056;&#1077;&#1076;&#1086;&#1074;&#1085;&#1077; &#1073;&#1086;&#1083;&#1085;&#1080;&#1094;&#1077;',
		legenda_opis_eng: 'Regular hospitals'
	};
	markerIcons.push(imageRed);
	
	var imageRez = {
		url: 'krstovi/rezervnaBolnicaAnicinGM.png',
		size: new google.maps.Size(41, 37),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(20, 18),
		legenda_opis_cir: '&#1056;&#1077;&#1079;&#1077;&#1088;&#1074;&#1085;&#1077; &#1073;&#1086;&#1083;&#1085;&#1080;&#1094;&#1077;',
		legenda_opis_eng: 'Auxilliary military hospitals'
	};
	markerIcons.push(imageRez);
	
	var imagePri = {
		url: 'krstovi/privremenaBolnicaAnicinGM.png',
		size: new google.maps.Size(26, 26),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(13, 13),
		legenda_opis_cir: '&#1055;&#1088;&#1080;&#1074;&#1088;&#1077;&#1084;&#1077;&#1085;&#1077; &#1080;&#1084;&#1087;&#1088;&#1086;&#1074;&#1080;&#1079;&#1086;&#1074;&#1072;&#1085;&#1077; &#1073;&#1086;&#1083;&#1085;&#1080;&#1094;&#1077;',
		legenda_opis_eng: 'Temporary hospital facilities'
	};
	markerIcons.push(imagePri);
	
function setMarkers(map, locations) {
	var shapeRed = {
		coords: [1, 1, 1, 52, 52, 62, 62, 1],
		type: 'poly'
	};
	
	var shapeRez = {
		coords: [1, 1, 1, 41, 41, 37, 37, 1],
		type: 'poly'
	};
	
	var shapePri = {
		coords: [1, 1, 1, 26, 26, 26, 26, 1],
		type: 'poly'
	};
	
	var markers = []
	for (var i = 0; i<locations.length; i++) {
		var bolnica = locations[i];
		var myLatLng = new google.maps.LatLng(bolnica[1], bolnica[2]);
		
		switch (bolnica[5]){
			case 1:
				imi = imageRed;
				shape = shapeRed;
				break;
			case 2:
				imi = imageRez;
				shape = shapeRez;
				break;
			case 3:
				imi = imagePri;
				shape = shapePri;
				break;
		}
		
		switch(i+1){
			case 1:
				tekst_info_sr = arr_tekstovi_cir.t_1;
				tekst_info_en = arr_tekstovi_eng.t_1;
				break;
			case 2:
				tekst_info_sr = arr_tekstovi_cir.t_2;
				tekst_info_en = arr_tekstovi_eng.t_2;
				break;
			case 3:
				tekst_info_sr = arr_tekstovi_cir.t_3;
				tekst_info_en = arr_tekstovi_eng.t_3;
				break;
			case 4:
				tekst_info_sr = arr_tekstovi_cir.t_4;
				tekst_info_en = arr_tekstovi_eng.t_4;
				break;
			case 5:
				tekst_info_sr = arr_tekstovi_cir.t_5;
				tekst_info_en = arr_tekstovi_eng.t_5;
				break;
			case 6:
				tekst_info_sr = arr_tekstovi_cir.t_6;
				tekst_info_en = arr_tekstovi_eng.t_6;
				break;
			case 7:
				tekst_info_sr = arr_tekstovi_cir.t_7;
				tekst_info_en = arr_tekstovi_eng.t_7;
				break;
			case 8:
				tekst_info_sr = arr_tekstovi_cir.t_8;
				tekst_info_en = arr_tekstovi_eng.t_8;
				break;
			case 9:
				tekst_info_sr = arr_tekstovi_cir.t_9;
				tekst_info_en = arr_tekstovi_eng.t_9;
				break;
			case 10:
			case 11:
			case 12:
				tekst_info_sr = arr_tekstovi_cir.t_10_11_12;
				tekst_info_en = arr_tekstovi_eng.t_10_11_12;
				break;
			case 18:
			case 19:
			case 20:
			case 25:
				tekst_info_sr = arr_tekstovi_cir.t_18_19_20_25;
				tekst_info_en = arr_tekstovi_eng.t_18_19_20_25;
				break;
			case 13:
			case 14:
				tekst_info_sr = arr_tekstovi_cir.t_13_14;
				tekst_info_en = arr_tekstovi_eng.t_13_14;
				break;
			case 15:
			case 16:
				tekst_info_sr = arr_tekstovi_cir.t_15_16;
				tekst_info_en = arr_tekstovi_eng.t_15_16;
				break;
			case 17:
				tekst_info_sr = arr_tekstovi_cir.t_17;
				tekst_info_en = arr_tekstovi_eng.t_17;
				break;
			case 21:
			case 22:
				tekst_info_sr = arr_tekstovi_cir.t_21_22;
				tekst_info_en = arr_tekstovi_eng.t_21_22;
				break;
			case 23:
			case 24:
				tekst_info_sr = arr_tekstovi_cir.t_23_24;
				tekst_info_en = arr_tekstovi_eng.t_23_24;
				break;
			default:
				tekst_info_sr = '';
				tekst_info_en = '';
		}
		
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: imi,
			shape: shape,
			title: bolnica[0],
			zIndex: bolnica[3],
			IW_txt_sr: tekst_info_sr,
			IW_txt_en: tekst_info_en,
			brisanje_praznog_reda_iz_IW_naslova: 0
		});
		
		switch (jezik){
			/*case 1:
				marker.title = arr_naslovi_cir_ne-unicode[i];
				break;*/
			case 2:
				marker.title = arr_naslovi_en_za_markere[i];
				break;
			/*default:
				marker.title = arr_naslovi_en[i];*/
		}
		markers.push(marker);
	}

	var arr_slikaBolnice = [];
	for (var i = 0; i < arr_slikaBol_id.length; i++){
		var slikaBolnice = '<img id="slika" width="100%" src='+arr_slikaBol_id[i]+'alt="nekadasnji izgled" title="nekadasnji izgled">'
		arr_slikaBolnice.push(slikaBolnice);
	};
		
	var arr_contentString = [];
	var infowindow = new google.maps.InfoWindow();	
	for (var i = 0; i<markers.length; i++){
		var lokacija3D = bolnice[i][4];
		
		if (jezik == 1){
			var naziv = arr_naslovi_cir[i];
			var gde_smestena = arr_gde_smestena_cir[i];
			
			var podnaslov_za_red = 'asd';
			var podnaslov_za_rez = '('+smestena_u_cir + gde_smestena +')';
			var podnaslov_za_pri = '(' + txt_konst_pri_cir + ')';
			
			txt_k_3Dprikaz = txt_k_3Dprikaz_cir;
			var sadrzajIW = markers[i].IW_txt_sr;
			
			var danas = '&#1076;&#1072;&#1085;&#1072;&#1089;';
			var o_valjevskim_bolnicama = '&#1054; &#1074;&#1072;&#1113;&#1077;&#1074;&#1089;&#1082;&#1080;&#1084; &#1073;&#1086;&#1083;&#1085;&#1080;&#1094;&#1072;&#1084;&#1072;';
			
		}
		else if (jezik == 2){
			var naziv = arr_naslovi_en[i];
			var gde_smestena = arr_gde_smestena_en[i];
			
			var podnaslov_za_red = 'asd';
			var podnaslov_za_rez = '(' + gde_smestena + ')';
			var podnaslov_za_pri = '(' + txt_konst_pri_en + ')';
			
			txt_k_3Dprikaz = txt_k_3Dprikaz_en;
			var sadrzajIW = markers[i].IW_txt_en;
			
			var danas = 'today';
			var o_valjevskim_bolnicama = 'About Valjevo hospitals';
		}
			
		if (bolnice[i][5]==3) {
			var podnaslov_za = podnaslov_za_pri;
			markers[i].brisanje_praznog_reda_iz_IW_naslova = 0;
		}
		else if (bolnice[i][5]==2) {
			var podnaslov_za = podnaslov_za_rez;
			markers[i].brisanje_praznog_reda_iz_IW_naslova = 0;
		}
		else {
			var podnaslov_za = podnaslov_za_red;
			markers[i].brisanje_praznog_reda_iz_IW_naslova = 1;
		}
		
		var contentString =
				'<div id="iw-container">' +
							'<div class="iw-naslov">'+
							'<table id="tabelaIW_naslov">'+
							'<tr>'+
								'<td><img src="'+ markers[i].icon.url+'"</td>'+
								'<td><h1>' + naziv + '</h1></td>'+
							'</tr>'+
							'<tr>'+
								'<td></td>'+
								'<td><h3>' +podnaslov_za+ '</h3></td>'+
							'</tr>'+
							'</table>'+
							'</div>'+

                    '<div class="iw-content">' +
						'<div class="slika">' + arr_slikaBolnice[i] + '</div>' +
						'<p></p>'+
						'<p>' +sadrzajIW+ '</p>'+
						'<div id="dugme3Ddiv">'+
							'<a id="dugme3D" href="' + lokacija3D + '"><button>' + txt_k_3Dprikaz + ' - <b>' + naziv + '</b> - '+danas+'</button></a>'+
						'</div>'+							
						'<p>'+
						'<button onclick="alert_bolnice_text()">'+o_valjevskim_bolnicama+'</button>'+
						'</p>'+
						'<p></p>'+
						'<p></p>'+
						'<p></p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';
		
		arr_contentString.push(contentString);
		
		google.maps.event.addListener(markers[i], 'click', function() {
			infowindow.setContent(arr_contentString[this.getZIndex()-1]);
			infowindow.open(map,this);
			if (this.brisanje_praznog_reda_iz_IW_naslova==1){
				document.getElementById("tabelaIW_naslov").deleteRow(1);
			}
        });
		
		google.maps.event.addListener(map, 'click', function() {
			infowindow.close();
		});
		
		for(var j=0;j<arr_staroValjevo.length;j++){
			google.maps.event.addListener(arr_staroValjevo[j], 'click', function() {
				infowindow.close();
			});
		}
	} 		  
	return infowindow;
}