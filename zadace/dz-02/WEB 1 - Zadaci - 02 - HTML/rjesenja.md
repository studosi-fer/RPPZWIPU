1. Element jest osnovna gradivna komponenta HTML dokumenta.

    Vrste elemenata su: Metadata content, Flow content, Sectioning content, Heading content, Phrasing content, Embedded content, Interactive content. Više o njima: https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content

    Sadržaj elementa može biti:
    - (bez sadržaja)
    - Tekst (uključujući prazne znakove)
    - Elementi
    - Miješani sadržaj; elementi i tekst

2. Atribut je definiran parom ime="vrijednost”. Booleovski atributi imaju vrijednost true navođenjem samo imena, npr. readonly za `<textarea>` ili checked za `<input type="checkbox" />`. Globalni atributi su definirani za sve elemente HTML-a, npr. id, class, lang, title, style, hidden, data-*. Objašnjeni su na prezentaciji.

3. a) Element head koristi se kao prvi element unutar elementa `<html>` nekog HTML dokumenta. On sadržava metapodatke o dokumentu.

    b) Točno jedan title element, te nula ili više elemenata koji sadržavaju metapodatke, a to su: base, link, meta, noscript, script, style, template, title.

    c) title je naslov dokumenta. meta su razni metapodaci. base predstavlja zadani URL za relativne URLove u dokumentu. link specificira vanjske resurse. noscript unutar sebe zapisuje stilove koji se primjenjuju ako je korisnik onemogućio izvođenje skripti. script sadrži skripte. style sadrži stilove. template predstavlja fragmente HTML-a koji se mogu klonirati u dokument.

4. a) Zbog base elementa i činjenice da je "archives.html" relativan URL, traženi će URL biti https://www.example.com/news/archives.html

    b) Element body definira tijelo dokumenta koje će se prikazati u pregledniku. Sadržava jedan h2 heading (podnaslov) i dva paragrafa teksta.

    c) Block elementi su section, h2 i `<p>`. Oni zauzimaju cijelu širinu roditeljskog elementa (bodyja). Inline elementi su `<a>` i em. Oni su široki koliko i njihova djeca.

5. blockquote je citat, del označava precrtani/pobrisani tekst, img je slika.

6. https://www.w3schools.com/html/html5_semantic_elements.asp

7. Najlakše je kopirati simbol direktno u HTML i kodirati dokument kao UTF-8. Treba paziti jer se dvostruki navodnik ne može nalaziti unutar dvostrukih navodnika HTML atributa. Možemo koristiti i entitete. Navodnik je `&quot;` Euro je `&euro;`

8. Rješenje je u istom folderu "70-Image5.html"

9. a) Znači da je HTML dokument kodiran u UTF-8, pa može sadržavati sve Unicode znakove.

    b) https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag

    c) Atribut title="phrase" znači da će se prikazati "phrase" (bez navodnika) kada prijeđemo mišem preko elementa koji ima taj atribut (engl. tooltip). abbr predstavlja kraticu ili akronim, dok element time ima ulogu vremena.

    d) https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values

10. Riješeno u delicije.html

11. Na w3schools je lijevo sidebar s linkovima.

12. Ferova web stranica se generalno sastoji od vertikalnog niza divova. Na dnu je element footer. Navigacija na vrhu koristi element nav. Unutar njega je neuređena lista (elementi ul, li) dijelova navigacije koja koristi CSS flex.

13. Stranica se s obavijestima generalno sastoji od hrpe ugniježđenih divova, svaka obavijest je neki div, pa je onda tekst unutar nje podijeljen na divove, itd. Element span koristi se za datume objava, autore objava, i još par stvari npr. "Portlet Obavijesti".

14. a) Ferova web stranica ima jako puno pogrešaka (70) i upozorenja (48).

    b) Greška "Using the meta element to specify the document-wide default language is obsolete. Consider specifying the language on the root element instead." Javlja se jer više nije standardno koristiti element meta za definiranje jezika dokumenta. Moguće je zaobići tako da se taj meta element obriše i stavi se atribut lang za `<html>` i/ili ostale elemente.

    Upozorenje "The type attribute is unnecessary for JavaScript resources." Ovo se javlja jer piše `<script type="text/javascript">`, a može se zaobići pisanje atributa type za JS skripte.

    c) Sada je za ferovu web stranicu broj pogrešaka 142, a broj upozorenja 33. Jedno strože pravilo pisanja je sad da ne smijemo pisati npr. `<meta ... />` nego moramo `<meta ...>`. Nisu definirani/prepoznati elementi header, nav, time i footer.