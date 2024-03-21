# ⚠️ DIT PROJECT IS EEN SCHOOLPROJECT ⚠️

Belastinaangifte doen is een van de meest complexe taken die mensen moeten doen. Als eindopdracht van mijn cursus moet ik een officiele belasting-PDF omzetten naar een interactief en duidelijk web-formulier.

# CSS TO THE RESCUE 

Voor het vak CSS to the Rescue moeten wij een opdracht maken waar alleen css mag gebruikt worden. We kregen de keuze uit verschillende opdrachten, ik heb uiteindelijk gekozen voor de opdracht 'controle panel' te maken.

## 📎 WEEK 1 
In de eerste week moesten we heel goed nadenken over het proces. Wat willen we doen en hoe willen we dat doen? Je kunt hieronder volgen wat ik heb gedaan :) 

In de eerste week heb ik onderzocht wat wel en niet kan. Hoe kan ik html en css mogelijkheden gebruiken in mijn eigen formulier.
Ik bedacht een paar invoervelden van welk type of pattern ze kunnen zijn.


## ✔️ Voortganggesprek 1

Na de voortgangsbespreking realiseerde ik me dat ik goed nadacht over de invoervelden. We zagen ook andere ideeën en dit inspireerde me hoe ik wilde dat het formulier eruit zou zien.


## 📎 WEEK 2
In de tweede week gaf ik mezelf volledige html en probeerde ik de eerste pagina en conditions goed te laten werken. 
En natuurlijk schreef ik een beetje css om het mooi te maken, hoewel niet al te perfect.

### Hoe ziet mijn html eruit tot nu toe?

```
<form action="" method="post">
            <fieldset id="een">
                <legend>Gegevens van de overledene</legend>

                <fieldset id="field-1">
                    <legend>1a</legend>
                    <!-- 1st section -->

                    <!-- met een "title" kun je error message van html veranderen -->
                    <section>
                        <label for="voorletters">Voorletter(s)
                            <input type="text" id="voorletters" pattern="[A-Z]+" required />
                            <span data-error>Vul de eerste letters van de naam van de overledene in hoofdletters
                                in</span>
                        </label>
                    </section>
                    <section>
                        <label for="tussenvoegsel">Tussenvoegsel(s)
                            <input type="text" class="lowercase" id="tussenvoegsel" pattern="[a-zA-Z]+" />
                        </label>
                    </section>
                    <section>
                        <label for="achternaam">Achternaam
                            <input type="text" class="capitalize" id="achternaam" pattern="[a-zA-Z]+" required />
                            <span data-error>Vul hier de achternaam van de overledene in</span>
                        </label>
                    </section>
                    <section>
                        <label for="bsn">Burgerservicenummer(BSN)
                            <input type="text" id="bsn" pattern="[1-9]{8,9}" maxlength="9" required />
                            <span data-error>Vul hier de BSN-nummer van de overledene in</span>
                        </label>
                    </section>
                    <section>
                        <label for="overlijdensdatum">Overlijdensdatum
                            <input type="date" id="overlijdensdatum" value="2023-06-01" required />
                            <span data-error>Vul hier een geldige datum in</span>

                        </label>
                    </section>

                </fieldset>
<fieldset id="field-2">
                    <legend>1b</legend>
                    <!-- 2nd section -->
                    <section class="ja-nee">
                        <p>Was de overledene getrouwd of had de overledene een geregistreerd partner op het moment van
                            overlijden?</p>

                        <label>

                            <input type="radio" class="condition" name="partner" value="ja" required>
                            ja
                        </label>
                        <label>

                            <input type="radio" name="partner" value="nee">
                            nee
                            <span data-error>Kies een van de opties</span>
                        </label>




                        <!-- 2nd ja -->
                        <section class="ja-nee hideable">
                            <p>Hadden de overledene en diens echtgeneeot of
                                geregistreerd partner huwelijkse of partner schaps-
                                voorwaarden laten vastleggen in een neetariële akte?</p>

                            <label>

                                <input type="radio" class="condition" name="vastgelegde-partner" value="ja" required>
                                Jaa
                            </label>
                            <label>

                                <input type="radio" name="vastgelegde-partner" value="nee">
                                Nee
                                <span data-error>Kies een van de opties</span>

                            </label>

                            <!-- ja -->
                            <section class="hideable">
                                <label>
                                    <input type="file" accept=".pdf" name="diens-partner-file" required>
                                </label>
                            </section>


                            <!-- nee -->
                            <section class="ja-nee">
                                <p>Hadden de overledene en diens partner een finaal
                                    verrekenbeding?</p>

                                <label>ja
                                    <input type="radio" name="diens-partner" value="ja" required>

                                </label>
                                <label>
                                    nee
                                    <input type="radio" name="diens-partner" value="nee">

                                </label>

                            </section>

                            <section>
                                <p>Hadden de overledene en diens partner een finaal
                                    verrekenbeding?</p>

                                <label>
                                    <input type="date" id="overledene-date" value="2023-06-01">
                                </label>
                            </section>
                        </section>

                    </section>
                </fieldset>
</form
```

Ik werkte alleen aan het eerste deel omdat ik probeerde de conditions te laten werken. Ik had heel veel ideeen over de conditions maar ik bepaal om het alleen met css te doen. Zodat gebruiker nog steeds de form netjes kan invullen, als js uit staan.


### Waar had ik moeite mee deze week?

Eigenlijk was ik aan het begin van de week in de war over hoe ik precies moest beginnen, maar het duurde niet lang en ik ging aan de slag. Dit waren de problemen waar ik mee worstelde en hoe ik ze heb opgelost:
- Ten eerste, het bedenk proces van ```:has``` was moeilijk voor mij. Ik moest hieraan wennen.
- Ten tweede, het validation lijkt me moeilijker dan ik dacht. Ik probeer verschillende oplossingen te krijgen.
  
## ✔️ Voortganggesprek 2
- In het voortganggesprek realiseerde ik me dat ik niet te ver achter lag en dat ik het goed deed. Net als in het andere gesprek deed ik weer nieuwe ideeën en inspiratie op door naar mijn vrienden te luisteren.
- Helaas kreeg ik niet veel feedback op mijn werk tot dan toe, dus dichtte ik dit gat door tussendoor meer vragen en ideeën te stellen.

### Wat ben ik van plan volgende week te doen?

- CSS
- Volgende vragen
- Betere condition vragen
- localStorage
  
## 📎 WEEK 3
Deze week ben ik bezig geweest met css. Ik ben eigenlijk heel tevreden van mijn design. Ik heb heel veel van grid geleerd en toegepast. Verder ben ik ook bezig geweest met validation.

### Waar had ik moeite mee deze week?
- Ik had een beetje moeite mee met validation. Ik heb bepaald dat ik validation met ```<span>``` wil doen.
- Ik kon localStorage niet kijken, het zou probleem zijn voor volgende week.

## ✔️ Voortganggesprek 3
Na de gesprek met Jeremy Keith realiseerde ik me niet dat ik nog een gesprek had, dus sloot ik me deze keer aan bij een andere groep. Nadat ik had uitgelegd hoe het met me ging en wat ik deed, realiseerde ik me dat mijn vooruitgang goed was. Ik kreeg goede feedback.

### Wat ben ik van plan volgende week te doen?
- localStorage
- Vragen
- Conditions van de vragen
- Validation fixen

## 📎 WEEK 4

Deze week is de deadlineweek. Omdat ik ziek was, kon ik mijn geplande doelen helaas niet op tijd halen en dat veroorzaakte veel stress. 

## REFLECTIE

Ik denk dat ik het tot de laatste week heel goed heb gedaan en ik heb veel geleerd van deze cursus. Ik heb voor het eerst in mijn leven een formulier gemaakt en ik had niet gedacht dat het zo moeilijk kon zijn om een formulier te maken. Wat ik eigenlijk goed en ook moeilijk vind is als een formulier van een organisatie als belastingdienst is, moet het geschikt zijn voor elke gebruiker en elk apparaat. 

Om eerlijk te zijn ben ik niet erg tevreden met het resultaat, ik ben de afgelopen week ziek geweest en ik heb geen tijd gehad om veel dingen te doen die ik wilde toevoegen of repareren. Het kostte me bijna een dag om localStorage te maken en ik heb nog steeds problemen met het opslaan van de radiobuttons in de localStorage. Uiteindelijk heb ik besloten om het niet meer te doen omdat het te veel tijd kostte. 
Maar als ik naar het hele project kijk, zie ik zichtbare veranderingen bij mij, die niets van formulieren weet en ze niet zo leuk vindt.



