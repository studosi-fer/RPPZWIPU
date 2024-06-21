1. CSS piksel (1px) jest 1/96 od 1in (inč, odnosno 2.54 cm). Znači 1px je otprilike 0.26 milimetara. Dakle, u CSS-u je piksel apsolutna mjerna jedinica duljine. To znači da ona ne ovisi o uređaju ili formatu ispisa. Pikseli su relativni u odnosu na veličinu uređaja. Za uređaje s niskim dpi (dots per inch), 1px se poklapa s jednim hardverskim pikselom (dot). Za printere i uređaje s višim dpi, 1px odgovara više hardverskih piksela (dots). Responzivne web stranice prilagođavaju se rezoluciji ali i veličini hardverskih piksela te se prikazuju tako da ih korisnici najbolje vide s tipične udaljenosti.

    - Samsung Galaxy S20+ ima rezoluciju 1440x3200 hardverskih piksela i 525 dpi
    - LG 27UD88-W 27" ima rezoluciju 3840x2160 hardverskih piksela
    - Dell SE2419Hx 23.8" ima rezoluciju 1920x1080 hardverskih piksela
    - HL-L8360CDW ima rezoluciju 2400x600 dpi

2. HTML stranice se nalaze u folderu pod zadatak2a.html i zadatak2b.html. Rezolucija uređaja jest 1080x1920. Rezolucija slike pak je 540x720. Prikaz je takav jer nismo postavili neku našu širinu i visinu, već se koristi rezolucija slike 540x720 ali pretvorena u CSS piksele. Ti pikseli i dalje nisu apsolutni jer se bez viewport taga web stranica renderira na nekoj većoj virtualnoj rezoluciji, pa se nakon toga sadržaj smanji kako bi stao na ekran mobitela. Nakon zumiranja se dobije stvarna apsolutna rezolucija.

    Kada dodamo viewport nema više toga smanjivanja pa je rezolucija realnija već prije zumiranja. Više se ne pretvaramo da smo stolno računalo, priznajemo da je mobitel manji, pa se web stranica rendera po veličini mobitela. Naravno, nakon zumiranja rezolucija je identična.

    Kada dodamo slike sa width:100%, na prvoj će stranici ona poprimiti cijelu širinu bodyja, koja je napumpana na preko 900. Na drugoj pak će stranici također poprimiti širinu bodyja, koja ovdje više podsjeća na pravu rezoluciju od S5. Zato će na prvoj stranici slika sa width:100% biti veća, a na drugoj će biti manja. Body u drugom slučaju ima širinu 344px, što je manje od širine slike. Zato će na drugoj stranici slika u originalnoj rezoluciji viriti van bodyja, dok će ona druga biti širine bodyja. U prvom pak slučaju body ima širinu 964px što je šire od širine slike, pa će zbog toga 100%-tna slika biti jako široka kao body. Ona originalna će biti manja od bodyja i neće viriti van.

3. Prvi treći zadatak riješen u zadatak3a.html, drugi treći zadatak riješen u zadatak3b.html.

4. Riješeno u zadatak4.html.

5.

6. Ako raspoređujemo stvari u jednoj dimenziji (jedan stupac ili jedan red), tada je prikladniji Flexbox. Ako pak raspoređujemo elemente u dvije dimenzije (stupce i redke), onda koristimo CSS Grid.

7.

8. Riješeno u zadatak8.html.

9.