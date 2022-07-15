<div class="container d-flex justify-content-center">
  <h4>GAS - Index</h4>
</div>

<!-- ZACIATOK:Číslo ponuky -->
<div class="card">
  <div class="card-body">
    <h5 class="mb-3">Číslo ponuky: O-YYYY/MM/por.číslo_verzia</h5>
    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">EXIST OM</h5>
          <div class="d-flex align-items-center">
            <div class="w-75 flex-grow-1">
              <p class="mb-0">Počet OM (MO):</p>
            </div>
            <div class="w-25 flex-shrink-0">
              <p class="mb-0">
                <button
                  class="h-0 btn btn-outline-secondary btn-sm "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#om"
                >
                  Zadať OM
                </button>
              </p>
            </div>
          </div>
          <p class="mb-0">RZM MWh (MO):</p>
          <p class="mb-0">Počet OM (SO/VO):</p>
          <div class="d-flex">
            <div class="w-75">
              <p class="mb-0">RZM MWh (SO /VO):</p>
            </div>
            <div class="w-25"><p class="mb-0">DMM:</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Akvizičné OM</h5>
          <div class="d-flex align-items-center">
            <div class="w-75 flex-grow-1">
              <p class="mb-0">Počet OM:</p>
            </div>
            <div class="w-25 flex-shrink-0">
              <p class="mb-0">
                <button
                  class="h-0 btn btn-outline-secondary btn-sm "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#om"
                >
                  Zadať OM
                </button>
              </p>
            </div>
          </div>
          <p class="mb-0">RZM MWh (MO):</p>
          <p class="mb-0">Počet OM (SO):</p>
          <p class="mb-0">RZM MWh (VO):</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Údaje</h5>
          <div class="d-flex">
            <div class="w-60" style="width: 60%;">
              <p class="mb-0">Začiatok dodávky:</p>
            </div>
            <div class="w-40" style="width: 40%;"><p class="mb-0">DA:</p></div>
          </div>
          <div class="d-flex">
            <div class="w-60" style="width: 60%;">
              <p class="mb-0">Koniec dodávky:</p>
            </div>
            <div class="w-40" style="width: 40%;">
              <p class="mb-0">Fix. množstvo:</p>
            </div>
          </div>
          <div class="d-flex mb-2">
            <div class="w-60" style="width: 60%;" />
            <div class="w-40" style="width: 40%;">
              <p class="mb-0">Burza:</p>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <div class="w-75 flex-grow-1">
              <p class="mb-0">Dátum platnosti ponuky:</p>
            </div>
            <div class="w-25 flex-shrink-0">
              <p class="mb-0">
                <button
                  class="h-0 btn btn-outline-secondary btn-sm "
                  type="button"
                >
                  Date
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- KONIEC:Číslo ponuky -->
<!-- ZACIATOK:Výpočet ceny nákupu -->
<div class="card mt-2">
  <div class="card-body">
    <div class="d-flex mb-3">
      <div class="me-auto d-flex mr-5">
        <p class="pe-2">Cena nákup : INDEX ceny / Individuálne nacenenie</p>
      </div>
      <div class="pe-2">
        <button class="h-0 btn btn-outline-secondary btn-sm " type="button">
          Požiadať o ceny / Čaká sa na cenu /Ceny dodané
        </button>
      </div>
      <div class="">
        <button
          class="h-0 btn btn-outline-secondary btn-sm "
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#bestAsk"
        >
          Zobraziť INDEX ceny
        </button>
      </div>
    </div>
    <p>Výber ceny: Ročne / Priemer / Ročne + priemer</p>
    <p>Spôsob nacenenia: CAL / Q-M / DA</p>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt INDEX</th>
          <th scope="col">Produkt pre Obdobie</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Prirážky + (Index)(€/MWh) </th>
          <th scope="col">Sourcing plat. podmienky (€/MWh)</th>
          <th scope="col">Sourcing flexibilita(€/MWh)</th>
          <th scope="col">Cena nákupu celkom (INDEX) (€/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal/Q-M/DA +0</td>
          <td>2022</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +1</td>
          <td>2023</td>
          <td />
          <td>6</td>
          <td>0,01</td>
          <td>0,03</td>
          <td>prirazka + sourcing 2x = 6,04</td>
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +2</td>
          <td>2024</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +3</td>
          <td>2025</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
    <table
      class="table table-bordered border mb-0"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt INDEX</th>
          <th scope="col">Produkt pre Obdobie</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Prirážky + (Index)(€/MWh) </th>
          <th scope="col">Sourcing plat. podmienky (€/MWh)</th>
          <th scope="col">Sourcing plat. podmienky (€/MWh)</th>
          <th scope="col">Cena nákupu celkom (INDEX) (€/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ba Cal Priemer pre celé obdobie</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- KONIEC:Výpočet ceny nákupu -->
<!-- ZACIATOK:Výpočet predajnej ceny -->
<div class="card mt-2">
  <div class="card-body">
    <h5 class="pe-4">Výpočet predajnej ceny</h5>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt INDEX</th>
          <th scope="col">Cena predaj spolu (INDEX) (€/MWh)</th>
          <th scope="col">Cenu za komoditu (INDEX) (€/MWh)</th>
          <th scope="col">+pridať cenu (variabil. cenu)</th>
          <th scope="col">+ pridať cenu (Fixná sadzba (Eur/mes.)</th>
          <th scope="col">+ pridať iné náklady var. sadzba</th>
          <th scope="col">+ pridať iné náklady fixná. sadzba</th>
          <th class="col">Iný zisk var. sadzba (Eur/MWh)</th>
          <th class="col">Iný zisk fixná sadzba (Eur/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal/Q-M/DA +0</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal +1</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal +2</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal +3</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
    <table
      class="table table-bordered border mb-0"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt INDEX</th>
          <th scope="col">Cena predaj spolu (INDEX) (€/MWh)</th>
          <th scope="col">Cenu za komoditu (INDEX) (€/MWh)</th>
          <th scope="col">+pridať cenu (variabil. cenu)</th>
          <th scope="col">+ pridať cenu (Fixná sadzba (Eur/mes.)</th>
          <th scope="col">+ pridať iné náklady var. sadzba</th>
          <th scope="col">+ pridať iné náklady fixná. sadzba</th>
          <th class="col">Iný zisk var. sadzba (Eur/MWh)</th>
          <th class="col">Iný zisk fixná sadzba (Eur/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal Priemer pre celé obdobie</td>
          <td>Vzorec SUM</td>
          <td>zada číslo</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- KONIEC:Výpočet predajnej ceny -->
<!-- ZACIATOK:Marza -->
<div class="card mt-2">
  <div class="card-body">
    <h5 class="">Marža</h5>
    <div class="d-flex">
      <div class="w-50">
        <table
          class="table table-bordered border mb-0"
          style="background-color: white; "
        >
          <thead>
            <tr>
              <th scope="col">Produkt INDEX</th>
              <th scope="col">Hrubá marža METSK (Eur)</th>
              <th scope="col">Čistá marža METSK (Eur)</th>
              <th scope="col">Čistá marža METSK (Eur/MWh)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INDEX Cal/Q-M/DA +0</td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>INDEX Cal +1</td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>INDEX Cal +2</td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>INDEX Cal +3</td>
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <table
          class="table table-bordered border mt-2 mb-0"
          style="background-color: white; "
        >
          <thead>
            <tr>
              <th scope="col">Produkt INDEX</th>
              <th scope="col">Hrubá marža METSK (Eur)</th>
              <th scope="col">Čistá marža METSK (Eur)</th>
              <th scope="col">Čistá marža METSK (Eur/MWh)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INDEX Cal Priemer pre celé obdobie</td>
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-50 ps-5 align-self-center">
        <div class="d-flex align-items-center mb-4">
          <div class="w-75 flex-grow-1">
            <p class="mb-0">Distribúcia:</p>
          </div>
          <div class="w-25 flex-shrink-0">
            <p class="mb-0">
              <button
                class="h-0 btn btn-outline-secondary btn-sm "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#vyp"
              >
                Výpočet
              </button>
            </p>
          </div>
        </div>
        <p class="mb-0">Turnover Gas:</p>
        <p class="mb-0">Turnover Power:</p>
        <p class="mb-0">TOTAL Turnover:</p>
      </div>
    </div>
  </div>
</div>
<!-- KONIEC:Marža -->
<!-- ZACIATOK:Credit check/risk -->
<div class="card mt-2 mb-5">
  <div class="card-body">
    <h5 class="">KYC&Credit check</h5>
    <div class="d-flex">
      <div class="w-50">
        <p class="">Fakturované: mesačne / ročne</p>
        <p class="">Zálohy: áno/nie</p>
        <p class="">Rozloženie zálohy:lineárne / nelineárne</p>
        <p>Výška zálohy: %</p>
        <p>Výpočet výšky záloh: mesačne / kvartálne / ročne</p>
        <p>Vystavenie zal. FA pred začiatkom dodávky: áno/nie</p>
        <p>Dátum vystavenia zal. FA: 0</p>
        <p>Dátum splatnosti zal. FA: 14</p>
        <p>Dátum vystavenia FA: 45</p>
        <p>Dátum splatnosti vyučtovacej FA: 14</p>
        <p>ToP min. : %</p>
        <p>ToP max: %</p>
        <div class="d-flex align-items-center mb-4">
          <div class="w-75 flex-grow-1">
            <p class="mb-0">EXPOZICIA</p>
          </div>
          <div class="w-25 flex-shrink-0">
            <p class="mb-0">
              <button
                class="h-0 btn btn-outline-secondary btn-sm "
                type="button"
              >
                Výpočet Exposure
              </button>
            </p>
          </div>
        </div>
        <p>Exposure Gas: ....56000....</p>
        <p>Exposure Power: ........</p>
        <p>TOTAL Exposure: ....56000....</p>
        <p>Credit line (stand alone): ....0....</p>
        <p>Credit line (insurance) : ...23000.....</p>
        <p>Výška krytia : ....0....</p>
        <p>Result (exposure vs credit line): ....-33000....</p>
      </div>
      <div class="w-50">
        <p>Fakturované: mesačne / ročne / dekádne</p>
        <p>Zálohy: áno/nie</p>
        <p>Rozloženie zálohy:lineárne / nelineárne</p>
        <p>Výška zálohy: %</p>
        <p>Výpočet výšky záloh: mesačne / kvartálne / ročne / dekádne</p>
        <p>Vystavenie zal. FA pred začiatkom dodávky: áno/nie</p>
        <p>Dátum vystavenia zal. FA: 0</p>
        <p>Dátum splatnosti zal. FA: 14</p>
        <p>Dátum vystavenia FA: 45</p>
        <p>Dátum splatnosti vyučtovacej FA: 14</p>
        <div class="d-flex">
          <div class="w-50">ToP min. : %</div>
          <div class="w-50">ToP max. : %</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5>Poistenie</h5>
        <p class="mb-0">
          Typ poistenia: Blind cover / Own competence / Normal insurance
        </p>
        <div class="d-flex align-items-center mb-0">
          <div class="w-75 flex-grow-1">
            <p class="mb-0">Výška poistného krytia: ...NI...</p>
          </div>
          <div class="w-25 flex-shrink-0">
            <p class="mb-0">
              <button
                class="h-0 btn btn-outline-secondary btn-sm "
                type="button"
              >
                Nahrať NI
              </button>
            </p>
          </div>
        </div>
        <p>DRA: ....3..</p>
        <p>
          Stav poistenia: Čaká na poistenie / 100% krytie / Čiastočné krytie /
          Zamietnuté
        </p>
      </div>
    </div>
    <div class="card mt-2">
      <div class="card-body">
        <h5>Záruky Áno/Nie</h5>
        <div class="d-flex mb-2">
          <div class="w-50">
            <p>Výška krytia: ......35.000......</p>
            <p>
              Typ krytia : Fin. zábezpeka / Banková záruka / Ručiteľské
              vyhlásenie / Bez možnosti
            </p>
            <button class="h-0 btn btn-outline-secondary btn-sm " type="button">
              Stiahnut template
            </button>
          </div>
          <div class="w-50">
            <div class="card">
              <div class="card-body">Poznámka CFO</div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mb-0">
          <div class="w-70 flex-grow-1">
            <p class="mb-0">Výška poistného krytia: ...NI...</p>
          </div>
          <div class="w-30 flex-shrink-0">
            <p class="mb-0">
              <button
                class="h-0 btn btn-outline-secondary btn-sm "
                type="button"
              >
                Schválené / Zamietnuté (vyjadrenie zákazník)
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center mt-3 mb-3">
      <div class="w-70 flex-grow-1">
        <p class="mb-0">
          Stav credit risk: Čaká na schválenie / Schválené / Zamietnuté
        </p>
      </div>
      <div class="w-30 flex-shrink-0">
        <p class="mb-0">
          <button class="h-0 btn btn-outline-secondary btn-sm " type="button">
            Schváliť/Zamietnuť/ Schváliť s podmienkou
          </button>
        </p>
      </div>
    </div>
    <div class="card mb-2">
      <div class="card-body">
        <h5>KYC</h5>
        <div class="d-flex">
          <div class="w-50">
            <p>
              <button
                class="h-0 btn btn-outline-secondary btn-sm "
                type="button"
              >
                Nahrať KYC Questionnaire
              </button>
            </p>
            <p>
              <button
                class="h-0 btn btn-outline-secondary btn-sm "
                type="button"
              >
                Schválené / Zamietnuté
              </button>
            </p>
            <p>
              Stav Regular check: Čaká na schválenie / Schválené / Zamietnuté
            </p>
          </div>
          <div class="w-50">
            <div class="card">
              <div class="card-body">Poznámka Sales manager</div>
            </div>
            <div class="card mt-2">
              <div class="card-body">Vyjadrenie CFO:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>Preferovaný výstup dokumentu: word / pdf</p>
    <p>Schválenie výnimky: So zaslaním ponuky / Bez zaslania ponuky</p>
    <div class="d-flex justify-content-center">
      <button
        class="h-0 btn btn-outline-primary btn-sm"
        style="width: 100px;"
        type="button"
      >
        Save
      </button>
    </div>
  </div>
</div>
<!-- KONIEC:Credit check/risk -->

<!-- Modals -->
<!-- START:BESTASK -->
<div
  class="modal fade"
  id="bestAsk"
  tabindex="-1"
  aria-labelledby="bestAsk"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Best ask ceny</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <table
          class="table table-bordered border mb-0"
          style="background-color: white; "
        >
          <thead>
            <tr>
              <th scope="col" colspan="2" />
              <th scope="col">Cena burzy </th>
              <th scope="col" colspan="2">Prirážky (+)</th>
            </tr>
            <tr>
              <th scope="col" rowspan="2">produkt Best Ask (BA)</th>
              <th scope="col" rowspan="2">produkt pre obdobie</th>
              <th scope="col" />
              <th scope="col">Int. obchodník</th>
              <th scope="col">ext. obchodník</th>
            </tr>
            <tr>
              <th scope="col" />
              <th scope="col">EUR/MWh</th>
              <th scope="col">EUR/MWh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
            <tr>
              <td>BA M+1 22</td>
              <td>Jun-22</td>
              <td />
              <td>1,50</td>
              <td style="background-color: yellow;">2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>
<!-- END:BESTASK  -->
<!-- START:OM -->
<div
  class="modal fade"
  id="om"
  tabindex="-1"
  aria-labelledby="OM"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Best ask ceny</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <table
          class="table table-bordered border mb-0"
          style="background-color: white; "
        >
          <thead>
            <tr>
              <th scope="col">Sadzba</th>
              <th scope="col">Objem MWh</th>
              <th scope="col">Počet OM</th>
              <th scope="col">DMM (SO/VO)</th>
              <th scope="col">Tradičný odber</th>
              <th scope="col">Kurenar</th>
              <th scope="col">Mesiace</th>
              <th scope="col">Spolu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>M (8)</td>
              <td>100</td>
              <td>-</td>
              <td>-</td>
              <td>x</td>
              <td>x</td>
              <td
                ><div class="btn-group">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Zobraziť
                  </button>
                  <ul class="dropdown-menu">
                    <li class="list-group-item">Jan: %</li>
                    <li class="list-group-item">Feb: %</li>
                    <li class="list-group-item">Mar: %</li>
                    <li class="list-group-item">Apr: %</li>
                    <li class="list-group-item">Maj: %</li>
                    <li class="list-group-item">Jun: %</li>
                    <li class="list-group-item">Jul: %</li>
                    <li class="list-group-item">Aug: %</li>
                    <li class="list-group-item">Sep: %</li>
                    <li class="list-group-item">Okt: %</li>
                    <li class="list-group-item">Nov: %</li>
                    <li class="list-group-item">Dec: %</li>
                  </ul>
                </div></td
              >
              <td>%</td>
              <td
                ><button
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-bs-dismiss="modal">Vymazať</button
                ></td
              >
            </tr>
            <tr>
              <td>M (8)</td>
              <td>100</td>
              <td>-</td>
              <td>-</td>
              <td>x</td>
              <td>x</td>
              <td
                ><div class="btn-group">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Zobraziť
                  </button>
                  <ul class="dropdown-menu">
                    <li class="list-group-item">Jan: %</li>
                    <li class="list-group-item">Feb: %</li>
                    <li class="list-group-item">Mar: %</li>
                    <li class="list-group-item">Apr: %</li>
                    <li class="list-group-item">Maj: %</li>
                    <li class="list-group-item">Jun: %</li>
                    <li class="list-group-item">Jul: %</li>
                    <li class="list-group-item">Aug: %</li>
                    <li class="list-group-item">Sep: %</li>
                    <li class="list-group-item">Okt: %</li>
                    <li class="list-group-item">Nov: %</li>
                    <li class="list-group-item">Dec: %</li>
                  </ul>
                </div></td
              >
              <td>%</td>
              <td
                ><button
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-bs-dismiss="modal">Vymazať</button
                ></td
              >
            </tr>
            <tr>
              <td>M (8)</td>
              <td>100</td>
              <td>-</td>
              <td>-</td>
              <td>x</td>
              <td>x</td>
              <td
                ><div class="btn-group">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Zobraziť
                  </button>
                  <ul class="dropdown-menu">
                    <li class="list-group-item">Jan: %</li>
                    <li class="list-group-item">Feb: %</li>
                    <li class="list-group-item">Mar: %</li>
                    <li class="list-group-item">Apr: %</li>
                    <li class="list-group-item">Maj: %</li>
                    <li class="list-group-item">Jun: %</li>
                    <li class="list-group-item">Jul: %</li>
                    <li class="list-group-item">Aug: %</li>
                    <li class="list-group-item">Sep: %</li>
                    <li class="list-group-item">Okt: %</li>
                    <li class="list-group-item">Nov: %</li>
                    <li class="list-group-item">Dec: %</li>
                  </ul>
                </div></td
              >
              <td>%</td>
              <td
                ><button
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-bs-dismiss="modal">Vymazať</button
                ></td
              >
            </tr>
            <tr>
              <td>M (8)</td>
              <td>100</td>
              <td>-</td>
              <td>-</td>
              <td>x</td>
              <td>x</td>
              <td
                ><div class="btn-group">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Zobraziť
                  </button>
                  <ul class="dropdown-menu">
                    <li class="list-group-item">Jan: %</li>
                    <li class="list-group-item">Feb: %</li>
                    <li class="list-group-item">Mar: %</li>
                    <li class="list-group-item">Apr: %</li>
                    <li class="list-group-item">Maj: %</li>
                    <li class="list-group-item">Jun: %</li>
                    <li class="list-group-item">Jul: %</li>
                    <li class="list-group-item">Aug: %</li>
                    <li class="list-group-item">Sep: %</li>
                    <li class="list-group-item">Okt: %</li>
                    <li class="list-group-item">Nov: %</li>
                    <li class="list-group-item">Dec: %</li>
                  </ul>
                </div></td
              >
              <td>%</td>
              <td
                ><button
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-bs-dismiss="modal">Vymazať</button
                ></td
              >
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>
<!-- END:OM -->
<!-- ZACIATOK:Vypocet -->
<div
  class="modal fade"
  id="vyp"
  tabindex="-1"
  aria-labelledby="bestAsk"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Výpočet</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <table
          class="table table-bordered border mb-0"
          style="background-color: white; "
        >
          <thead>
            <tr>
              <th scope="col">Sadzba</th>
              <th scope="col">Počet OM</th>
              <th scope="col">Objem MWh</th>
              <th scope="col">DMM (SO/VO)</th>
              <th scope="col">Cena distribúcia (€/MWh)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>M8</td>
              <td>1</td>
              <td>100</td>
              <td>-</td>
              <td>Cenník</td>
            </tr>
            <tr>
              <td>S9</td>
              <td>2</td>
              <td>2000</td>
              <td>-</td>
              <td>Cenník</td>
            </tr>
            <tr>
              <td>V11</td>
              <td>1</td>
              <td>1000</td>
              <td>-</td>
              <td>Cenník</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>
<!-- KONIEC:Vypocet -->
