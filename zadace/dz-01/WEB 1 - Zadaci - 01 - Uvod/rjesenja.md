1. 
    Osnovne komponente:
    - TKO traži? – *klijent*
        - na raznovrsnim uređajima, preglednici, robotski pretraživači…
    - KOGA će pitati? – *poslužitelj*
        - opet – raznovrsni uređaji i prateća programska podrška…
    - GDJE se nalazi? - adresiranje - **identifikacija** resursa: *URI*
    - KAKO tamo doći? - način povezivanja i komunikacije:
        - protokol *HTTP* - standardni internetski aplikacijski protokol
    - ŠTO tražimo? - **zapis** resursa: *HTML*
        - jednostavan, prenosiv zapis teksta, čitljiv i ljudima i računalima
        - mogućnost umetanja poveznica (tzv. "hiperveza")
        - korištenje drugih medija (slike, audio, video) u izvornom obliku
2. Da postoji samo jedan preglednik, to bi imalo svoje prednosti i nedostatke. Prednost bi bila da nema potrebe za standardima i da ne bi više ljudi razvijalo različiti softver koji radi istu stvar. Nedostatak bi bio manjak izbora za korisnika koji možda želi nešto drugo.
    
    U navedenom bi slučaju korisnici imali manje izbora. Tehnologija bi se razvijala samo u skladu s tim jednim preglednikom i ljudi ne bi morali brinuti o kompatibilnosti između trenutnih verzija različitih preglednika.
    
    Također, u tom slučaju nema nikakvog smisla definirati standarde, jer je cilj standarda omogućiti korisnicima različitih preglednika da vide World Wide Web na isti način. Treba im se prikazivati isti sadržaj i izgled.
3. Klijent zahtijeva uslugu slanjem zahtjeva poslužitelju protokolom HTTP. Više klijenata šalje zahtjeve na jedan ili više poslužitelja.   
    
    Klijent je bilo koji uređaj ili program koji može slati zahtjeve
poslužitelju weba.

    Klijent može biti preglednik weba na bilo kojem računalu ili pokretnom uređaju koji prikazuje web stranice dobivene, robot/crawler – program koji sistematično prolazi sjedištima weba, program koji dohvaća podatke s nekog sjedišta weba koristeći protokol HTTP, uređaj koji koristi neku web aplikaciju (web-mail, internetsko bankarstvo, ...), itd.
4. Otvaranje u localhostu odgovara okruženju web poslužitelja. Razlikuju se primjerice u postupku određivanja enkodiranja.

    Jedna važna razlika jest vezana uz Cross-Origin Resource Sharing (CORS) politiku dijeljenja resursa različitog podrijetla. Ako otvorimo datoteku lokalno pomoću `file://` URL-a, tada je origin `null`. Neki preglednici će ovo interpretirati tako da u potpunosti onemoguće takvo dijeljenje. U tom slučaju HTML stranica koju prikazujemo ne može pristupati i prikazivati resurse iz drugih podrijetla.
5. Potrebno je poslati pet HTTP zahtjeva: jedan za HTML stranicu, po jedan za svaku od dvije slike, jedan za JS datoteku, te jedan za CSS datoteku.

    Popis čestih tipova medija nalazi se ovdje: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

    Inače postoje i data URI-jevi oblika `data:[<media type>][;base64],<data>` kojima se vanjski resursi poput slika mogu ugraditi unutar HTML-a.
6. Relacijske (SQL) baze podataka najbolje su za pohranu podataka, dok je zapis u tekstualnim oblicima podataka kao što su XML i JSON bolji za razmjenu podataka.