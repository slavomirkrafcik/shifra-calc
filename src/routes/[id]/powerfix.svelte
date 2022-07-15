<div class="container d-flex justify-content-center">
  <h4>EE</h4>
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
          <div class="d-flex align-items-center">
            <div class="w-75 flex-grow-1">
              <p class="mb-0">Počet OM (SO/VO):</p>
            </div>
            <div class="w-25 flex-shrink-0">
              <p class="mb-0">
                <button
                  class="h-0 btn btn-outline-secondary btn-sm "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#diagram"
                >
                  Diagram Spotreby
                </button>
              </p>
            </div>
          </div>
          <p class="mb-0" />
          <p class="mb-0">RZM MWh (SO /VO):</p>
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
          <div class="d-flex mb-0">
            <div class="w-60" style="width: 60%;">
              <p class="mb-0">ToP min. :</p>
            </div>
            <div class="w-40" style="width: 40%;">
              <p class="mb-0">Umiestnenie:</p>
            </div>
          </div>
          <p class="mb-0">ToP max: %</p>

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
        <p class="pe-2">Výber ceny: Ročne / Priemer / Ročne + priemer</p>
      </div>
      <div class="pe-2">
        <button class="h-0 btn btn-outline-secondary btn-sm " type="button">
          Požiadať o ceny / Čaká sa na cenu /Ceny dodané
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col"><p>Spôsob nacenenia: CAL / Q-M / DA</p></div>
        <div class="col"><p>% Pomer VT : ....100%..</p></div>
        <div class="col"><p>ZE : Áno/Nie</p></div>
      </div>
    </div>

    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt INDEX</th>
          <th scope="col">Produkt pre Obdobie</th>
          <th scope="col">Objem JT/VT(MWh)</th>
          <th scope="col">Objem NT(MWh)</th>
          <th scope="col">Cena nákup JT/VT (€/MWh)</th>
          <th scope="col">Cena nákup NT (€/MWh)</th>
          <th scope="col">Nákup certifikátu ZE (€/MWh)</th>
          <th scope="col">Cena nákup celkom (€/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal/Q-M/DA +0</td>
          <td>2022</td>
          <td>Celý objem (ak bude 100%)</td>
          <td>50</td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +1</td>
          <td>2023</td>
          <td>Celý objem (ak bude 100%)</td>
          <td>50</td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +2</td>
          <td>2024</td>
          <td>Celý objem (ak bude 100%)</td>
          <td>50</td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +3</td>
          <td>2025</td>
          <td>Celý objem (ak bude 100%)</td>
          <td>50</td>
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
          <th scope="col">Objem JT/VT(MWh)</th>
          <th scope="col">Objem NT(MWh)</th>
          <th scope="col">Cena nákup JT/VT (€/MWh)</th>
          <th scope="col">Cena nákup NT (€/MWh)</th>
          <th scope="col">Nákup certifikátu ZE (€/MWh)</th>
          <th scope="col">Cena nákup celkom (€/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal/Q-M/DA Priemer pre celé obdobie</td>
          <td>2022</td>
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
          <th scope="col">Produkt PXE</th>
          <th scope="col">Predajna cena spolu (€/MWh)</th>
          <th scope="col">Cenu za komoditu JT/VT(FIX) (€/MWh)</th>
          <th scope="col">Cenu za komoditu NT(FIX) (€/MWh)</th>
          <th scope="col">Predajná cena certifikátu ZE (€/MWh)</th>
          <th scope="col">+pridať cenu (variabil. cenu)</th>
          <th scope="col">+ pridať cenu (Fixná sadzba (Eur/mes.)</th>
          <th class="col">+ pridať iné náklady var. sadzba</th>
          <th class="col">+ pridať iné náklady fixná. sadzba</th>
          <th class="col">Iný zisk var. sadzba (Eur/MWh)</th>
          <th class="col">Iný zisk fixná sadzba (Eur/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal/Q-M/DA +0</td>
          <td>2022</td>
          <td />
          <td>50</td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>INDEX Cal/Q-M/DA +1</td>
          <td>2023</td>
          <td />
          <td>65$</td>
          <td />
          <td />
          <td>65</td>
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
          <th scope="col">Produkt PXE</th>
          <th scope="col">Predajna cena spolu (€/MWh)</th>
          <th scope="col">Cenu za komoditu JT/VT(FIX) (€/MWh)</th>
          <th scope="col">Cenu za komoditu NT(FIX) (€/MWh)</th>
          <th scope="col">Predajná cena certifikátu ZE (€/MWh)</th>
          <th scope="col">+pridať cenu (variabil. cenu)</th>
          <th scope="col">+ pridať cenu (Fixná sadzba (Eur/mes.)</th>
          <th class="col">+ pridať iné náklady var. sadzba</th>
          <th class="col">+ pridať iné náklady fixná. sadzba</th>
          <th class="col">Iný zisk var. sadzba (Eur/MWh)</th>
          <th class="col">Iný zisk fixná sadzba (Eur/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INDEX Cal/Q-M/DA Priemer pre celé obdobie</td>
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
              <td>INDEX Cal +0</td>
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
        <p class="mb-0">TTurnover:</p>
        <p class="mb-0">TOTAL Turnover:</p>
        <p class="mb-0">Distribúcia:</p>
        <p class="mb-0">Distribúcia: 73€/MWh</p>
        <table
          class="table table-bordered border mt-2 mb-0"
          style="background-color: white; "
        >
          <thead>
            <tr>
              <th scope="col">Sadzba</th>
              <th scope="col">Počet OM</th>
              <th scope="col">Objem MWh</th>
              <th scope="col">Distribúcia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VN</td>
              <td />
              <td>100</td>
              <td />
            </tr>
            <tr>
              <td>NN</td>
              <td />
              <td>2000</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<!-- KONIEC:Marža -->
<!-- ZACIATOK:Credit check/risk -->
<div class="card mt-2 mb-5">
  <div class="card-body">
    <h5 class="">Credit check/risk</h5>
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
              <th scope="col">Počet OM</th>
              <th scope="col">Objem MWh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VN</td>
              <td />
              <td>100</td>
            </tr>
            <tr>
              <td>NN</td>
              <td />
              <td>2000</td>
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
<div
  class="modal fade"
  id="diagram"
  tabindex="-1"
  aria-labelledby="diagram"
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
              <th scope="col">Diagram spotreby</th>
              <th scope="col">Názov</th>
              <th scope="col">Obdobie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nahrať / Stiahnuť</td>
              <td>text</td>
              <td>100</td>
            </tr>
            <tr>
              <td>+ Nahrat</td>
              <td />
              <td />
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
