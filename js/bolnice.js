var bolnice = [
	['Okruzna bolnica Valjevo',44.275010, 19.883541,1,
	'https://www.google.com/maps/@44.2745659,19.8838533,3a,75y,293.3h,96.52t/data=!3m6!1e1!3m4!1siHOKUKChKrShtbXePJ9h9w!2e0!7i13312!8i6656?hl=en', 1],
	['Vojna bolnica Drinske divizije',44.26980,19.88254,2,
	'https://www.google.com/maps/@44.2698802,19.8821316,3a,87.3y,104.46h,84.46t/data=!3m6!1e1!3m4!1sXrLuYkThsu-vnv6WvQjLZw!2e0!7i13312!8i6656?hl=en', 1],
	['Prva rezervna vojna bolnica', 44.26954,19.87764,3,
	'https://www.google.com/maps/@44.2692628,19.8781964,3a,90y,312.83h,84.89t/data=!3m6!1e1!3m4!1swUAI88S6r2tOlRQ5vO0b0Q!2e0!7i13312!8i6656?hl=en',2],
	['Druga rezervna vojna bolnica', 44.27077,19.89410,4,
	'https://www.google.com/maps/@44.271276,19.8935565,3a,75y,159.62h,99.32t/data=!3m7!1e1!3m5!1soCjr12J3aPbCWmvXa5QW2A!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DoCjr12J3aPbCWmvXa5QW2A%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D312.78336%26pitch%3D0!7i13312!8i6656?hl=en',2],
	['Treca rezervna vojna bolnica', 44.27838,19.89028,5,
	'https://www.google.com/maps/@44.2784841,19.8885906,3a,75y,64.35h,93.74t/data=!3m6!1e1!3m4!1syJRDHhowSD6Yu1sAnH-Lig!2e0!7i13312!8i6656?hl=en',2],
	['Cetvrta rezervna vojna bolnica', 44.26980,19.88593,6,
	'https://www.google.com/maps/@44.2696452,19.8864032,3a,90y,302.18h,92.87t/data=!3m6!1e1!3m4!1sB0h-1aMH8SbLY7OW7g0WUg!2e0!7i13312!8i6656?hl=en',2],
	['Peta rezervna vojna bolnica', 44.27052,19.88440,7,
	'https://www.google.com/maps/@44.270814,19.883933,3a,75y,130.8h,95.5t/data=!3m6!1e1!3m4!1s8DEQQLplQQh4UK0XyzST6A!2e0!7i13312!8i6656?hl=en',2],
	['Sesta rezervna vojna bolnica', 44.27711,19.88259,8,
	'https://www.google.com/maps/@44.276633,19.8838712,3a,75y,242.86h,99.97t/data=!3m7!1e1!3m5!1sq8se0iGMIj4L7WssGKO4yw!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3Dq8se0iGMIj4L7WssGKO4yw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D353.24252%26pitch%3D0!7i13312!8i6656?hl=en',2],
	['Kafana Bosna',44.27391,19.88357,9,'https://www.google.com/maps/@44.2739439,19.88383,3a,75y,263.46h,94.31t/data=!3m6!1e1!3m4!1se821dNCi96qyGhBQCQwF7g!2e0!7i13312!8i6656?hl=en',3],
	['Hotel Sekulic',44.26956,19.88190,10,'https://www.google.com/maps/@44.2695131,19.8821441,3a,90y,259.42h,102.17t/data=!3m6!1e1!3m4!1sxpUahXKo5q-Pictg12y5kQ!2e0!7i13312!8i6656?hl=en',3],
	['Kafana Suša',44.26926,19.88183,11,'',3],
	['Kafana Grozd',44.26899,19.88252,12,'',3],
	['Kafana Riste Topalovica',44.26918,19.88406,13,'https://www.google.com/maps/@44.2689185,19.8842078,3a,23.1y,357.44h,98.52t/data=!3m7!1e1!3m5!1sOonpJLGkz_8AAAAGOpHsEA!2e0!3e11!7i6000!8i3000',3],
	['Pivnica Srbija',44.26928,19.88442,14,'https://www.google.com/maps/@44.2689185,19.8842078,3a,15y,18.34h,97.88t/data=!3m7!1e1!3m5!1sOonpJLGkz_8AAAAGOpHsEA!2e0!3e11!7i6000!8i3000',3],
	['Hotel Grand',44.26900,19.88443,15,'https://www.google.com/maps/@44.2689185,19.8842078,3a,90y,44.6h,106.4t/data=!3m7!1e1!3m5!1sOonpJLGkz_8AAAAGOpHsEA!2e0!3e11!7i6000!8i3000',3],
	['Osnovna škola',44.26913,19.88571,16,'https://www.google.com/maps/@44.2689959,19.8858415,3a,90y,333.22h,89.35t/data=!3m6!1e1!3m4!1saeHRZYo42B6Ldl4_v9oHNw!2e0!7i13312!8i6656',3],
	['Kafana Venecija',44.26977,19.88793,17,'https://www.google.com/maps/@44.2696331,19.8878323,3a,75y,23.54h,98.03t/data=!3m6!1e1!3m4!1ss97h-mqj9SmpikA96-nBWQ!2e0!7i13312!8i6656',3],
	['Kafana Sunce',44.27067,19.88657,18,'https://www.google.com/maps/@44.2709357,19.886498,3a,75y,172.03h,90.66t/data=!3m6!1e1!3m4!1sQUfgAKExMVXq7c4GUK1DBA!2e0!7i13312!8i6656',3],
	['Kafana Posavina',44.27067,19.88688,19,'https://www.google.com/maps/@44.2709505,19.886791,3a,75y,172.03h,90.66t/data=!3m6!1e1!3m4!1sNRndShMD7XXjilEEf0GHPQ!2e0!7i13312!8i6656',3],
	['Kafana Balkan',44.27067,19.88718,20,'https://www.google.com/maps/@44.2709627,19.8870335,3a,75y,175.84h,77.7t/data=!3m6!1e1!3m4!1svIlUt8CJXvgIeFelXcDYUg!2e0!7i13312!8i6656',3],
	['Kafana Jadar',44.27097,19.87921,21,'https://www.google.com/maps/@44.2700743,19.8802985,3a,75y,288.37h,87.23t/data=!3m6!1e1!3m4!1s-9q2N33oIffqVqi1sHJgVQ!2e0!7i13312!8i6656?hl=en',3],
	['Kafana Podgorina',44.27012,19.88004,22,'https://www.google.com/maps/@44.2700263,19.8802972,3a,90y,320.89h,80.06t/data=!3m6!1e1!3m4!1sN_bjMsFZirTA5mBgkqqHFw!2e0!7i13312!8i6656',3],//imamo samo katastarski plan, nema stare slike
	['Kafana Mali Beograd',44.27096,19.89238,23,'https://www.google.com/maps/@44.2712218,19.892446,3a,90y,183.83h,97.75t/data=!3m6!1e1!3m4!1sFc34Qa6sZnjsIXqP0HZPyQ!2e0!7i13312!8i6656',3],
	['Kafana Brace Markovic',44.27097,19.89288,24,'https://www.google.com/maps/@44.2709865,19.8926347,3a,90y,107.18h,83.61t/data=!3m6!1e1!3m4!1s8EOI-wxATjgiQJqud38jAQ!2e0!7i13312!8i6656',3],
	['Hotel Takovo',44.271273, 19.887631,25,'https://www.google.com/maps/@44.270999,19.8877524,3a,75y,339.7h,89.47t/data=!3m6!1e1!3m4!1s_OdiATyHiLS0OQGBTzOwWQ!2e0!7i13312!8i6656',3]
];

/*NEPOZNATO MESTO
25. Kafana Brace Grozdanovic
26. Kafana Rusija
27. Kafana Petrovgrad
28. Hotel Takovo //ODRADJEN POD BROJEM 25 - PRONADJEN
29. Kafana Srpski kralj
*/