## Test data

Put anonymized datadump inside folder `data/db/toLoad/`

## Install

Run 
```
deno install
```

## Run

Open the Jupyter Notebook in [JupyterLab](https://jupyter.org/install) or [VS Code](https://docs.deno.com/runtime/reference/cli/jupyter/) using the extension.

## Use cases

1 mandatarissen
1.1 een persoon heeft voor 1 mandaat geen overlappende mandatarissen
1.2 voor een mandataris vallen de start- en einddatums steeds binnen de 
bindingStart en bindingEinde van het bestuursorgaan
1.3 voor een orgaan valt het aantal mandatarissen op elk moment tussen 
de min en max aantallen
1.4 een mandataris heeft steeds een publicatiestatus
1.5 een mandataris heeft steeds een status
1.6 een mandataris heeft steeds een startdatum
1.7 een mandataris heeft steeds een persoon
1.8 een mandataris heeft steeds een mandaat
1.9 een mandataris in gemeenteraad, burgemeester of college van 
burgemeester en schepenen organen zit altijd in een fractie (of is 
onafhankelijk)
1.10 enkel mandatarissen van type schepen of burgemeester hebben 
beleidsdomeinen
1.11 (optioneel, faciliteitengemeenten doen dit niet): een mandataris in 
de gemeenteraad zetelt ook als lid van het ocmw
1.12 (optioneel, faciliteitengemeenten doen dit niet): een mandataris 
voorzitter van de gemeenteraad zetelt ook als voorzitter van het ocmw
1.13 (optioneel, faciliteitengemeenten doen dit niet): een mandataris in 
het college van burgemeester en schepenen zetelt ook in het vast bureau
1.14 (optioneel, faciliteitengemeenten doen dit niet): een (evt. 
aangewezen) burgemeester is ook voorzitter van het vast bureau
1.15 de voorzitter van het bcsd is ook lid van raad van maatschappelijk 
welzijn of vast bureau
1.16 de mandataris die een verhinderde mandataris vervangt heeft een 
startdatum gelijk aan de startdatum van de verhinderde mandataris
1.17 een mandataris van gemeenteraad, burgemeester en college 
burgemeester en schepenen is gebonden aan een persoon uit een kieslijst 
van de overeenkomstige periode
1.18 een mandataris met de publicatiestatus bekrachtigd heeft steeds een 
link naar een besluit (of een lmb:linkToBesluit als dat niet als linked 
data is gepubliceerd)
1.19 mandatarissen met een classificatie schepen, toegevoegde schepen of 
gemeenteraadslid hebben steeds een rangorde
2 mandaten
2.1 een mandaat heeft steeds een classificatie uit de juiste codelijst
2.2 een mandaat heeft steeds een naam
2.3 een mandaat is steeds gebonden aan een bestuursorgaan in de tijd
3 bestuursorganen in de tijd
3.1 een bestuursorgaan in de tijd heeft steeds een bestuursorgaan
3.2 een bestuursorgaan in de tijd heeft steeds een bindingstart
3.3 een bestuursorgaan in de tijd heeft steeds 1 of meerdere mandaten
3.4 een bestuursorgaan in de tijd van type gemeenteraad heeft mandaten 
met classificatie gemeenteraadslid, voorzitter gemeenteraad
3.5 een bestuursorgaan in de tijd van type burgemeester heeft mandaten 
met classificatie aangewezen burgemeester, burgemeester
3.6 een bestuursorgaan in de tijd van type college van burgemeester en 
schepenen heeft mandaten met classificatie schepen, burgemeester, 
aangewezen burgemeester, toegevoegde schepen
3.7 een bestuursorgaan in de tijd van type raad van maatschappelijk 
welzijn heeft mandaten met classificatie lid van raad voor 
maatschappelijk welzijn, voorzitter van raad voor maatschappelijk welzijn
3.8 een bestuursorgaan in de tijd van type vast bureau heeft mandaten 
met classificatie lid van vast bureau en voorzitter van vast bureau
3.9 een bestuursorgaan in de tijd van type bcsd heeft mandaten met 
classificatie lid van bcsd en voorzitter bcsd
3.10 het mandaat met classificatie burgemeester/aangestelde burgemeester 
is gelinkt aan zowel het college van burgemeester en schepenen als het 
burgemeester orgaan
3.11 een bestuurseenheid van het type gemeente heeft bestuursorganen en 
bestuursorganen in de tijd voor gemeente, burgemeester en college 
burgemeester en schepenen
3.12 een bestuurseenheid van het type ocmw heeft bestuursorganen en 
bestuursorganen in de tijd voor raad van maatschappelijk welzijn, vast 
bureau en bcsd
3.13 [similar voor districten en provincies]
4 bestuursorganen
4.1 een bestuursorgaan heeft steeds een classificatie
4.2 een bestuursorgaan heeft minstens 1 bestuursorgaan in de tijd
4.3 de bindingStart en bindingEinde datums van de bestuursorganen in de 
tijd van een bestuursorgaan overlappen niet
4.4 een bestuursorgaan heeft steeds een bestuurseenheid
5 bestuurseenheid
5.1 een bestuurseenheid heeft steeds een naam
5.2 een bestuurseenheid heeft steeds een classificatie
5.3 een bestuurseenheid heeft steeds een werkingsgebied
6 fracties
6.1 een persoon mag maar in 1 fractie zitten per bestuursperiode of 
daarna onafhankelijk worden (is een aparte fractie)
6.2 een fractie heeft steeds een naam
6.3 een fractie is steeds gebonden aan een bestuursorgaan in tijd van 
(gemeenteraad, burgemeester EN college burgemeester en schepenen) OF 
(voor ocmw) (raad van maatschappelijk welzijn, vast bureau, BCSD) OF 
(voor provincie) (gouverneur, deputatie, provincieraad) OF voor district 
(districtsburgemeester, districtsraad EN districtscollege)
6.4 een lidmaatschap heeft steeds een fractie
6.5 een lidmaatschap heeft steeds een mandataris
6.6 (tijdsinterval leiden we af en zetten we op de ldes, heeft dus geen 
validaties nodig)
7 personen (minimaal, niet onze data, en missing velden komen geregeld 
voor in rijksregister)
7.1 er bestaan geen 2 personen met het zelfde rijksregister nummer