1. a) ECMAScript služi za standardizaciju Javascripta od strane Ecma International, kako bi različite implementacije imale zajedničku funkcionalnost. Prva specifikacija jezika ECMAScript počela se razvijati u studenom 1996, a usvojena je u lipnju 1997.

    Trenutno je aktivna 10. verzija ECMAScripta, odnosno ECMAScript 2019, koja je bila objavljena u lipnju 2019.

    b) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

2. Javascript engine je softverska komponenta koja izvršava Javascript kod. Kroz povijest su to prvo bili interpreteri, ali danas se koristi just-in-time compilation. Najčešće korišten engine jest V8, kojeg razvija Google i koji se koristi u pregledniku Chrome i preglednicima baziranima na Chromiumu. Mozilla u Firefoxu koristi SpiderMonkey, Apple za Safari koristi JavaScriptCore, dok je Microsoft za Internet Explorer koristio Chakru.

    a) Pomoću V8 se Javascript može ugraditi unutar C++ aplikacije. Time objekti i metode iz C++ aplikacije postaju dostupni objektima i metodama Javascripta, i obrnuto.
    
    b) To se radi preuzimanjem V8 izvornog koda, izgradnjom statičke biblioteke nad njime, kompajliranjem C++ koda i linkanjem s bibliotekom.

3. Riješeno u zadatak3.html.

4. a) Operator=== služi za uspoređivanje vrijednosti i njihovih tipova, te vraća true ako i samo ako su varijable istog tipa i imaju istu vrijednost. Ako su varijable različitog tipa ili imaju različitu vrijednost, on vraća false. Više informacija: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

    b) Operator!== uspoređuje vrijednosti i njihove tipove, te vraća true ako su operandi različitog tipa, ili ako su istog tipa i različite vrijednosti.

    c) Riješeno u emulateTripleEqual.html.

    d) Riješeno u emulateTripleNotEqual.html.

5. Riješeno u zadatak5.html.

6. Riješeno u zadatak6.html.