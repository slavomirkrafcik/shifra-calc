<div class="container d-flex justify-content-center">
  <h4>GAS</h4>
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
                >
                  Zadať OM
                </button>
              </p>
            </div>
          </div>
          <p class="mb-0">RZM MWh (MO):</p>
          <p class="mb-0">Počet OM (SO):</p>
          <div class="d-flex">
            <div class="w-75">
              <p class="mb-0">RZM MWh (VO):</p>
            </div>
            <div class="w-25"><p class="mb-0">DMM:</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Údaje</h5>
          <p class="mb-0">Začiatok dodávky:</p>
          <p class="mb-0">Koniec dodávky:</p>
          <p class="mb-0">Umiestnenie v MDS: nie je / je</p>
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
        <h5 class="pe-4">Výpočet ceny nákupu</h5>
        <p class="pe-2">Cena nákup : Best ask / Individuálne nacenenie</p>
      </div>
      <div class="pe-2">
        <button class="h-0 btn btn-outline-secondary btn-sm " type="button">
          Požiadať o ceny / Čaká sa na cenu /Ceny dodané
        </button>
      </div>
      <div class="">
        <button class="h-0 btn btn-outline-secondary btn-sm " type="button">
          Zobraziť Best ask ceny
        </button>
      </div>
    </div>
    <p>Výber ceny: Ročne / Priemer / Ročne + priemer</p>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt Best Ask (BA)</th>
          <th scope="col">Produkt pre Obdobie</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Cena nákup (€/MWh)</th>
          <th scope="col">Sourcing plat. podmienky (€/MWh)</th>
          <th scope="col">Sourcing flexibilita (€/MWh)</th>
          <th scope="col">Cená nákupu celkom (€/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ba +0</td>
          <td>2022</td>
          <td />
          <td>50</td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Ba +1</td>
          <td>2023</td>
          <td />
          <td>65$</td>
          <td />
          <td />
          <td>65</td>
        </tr>
        <tr>
          <td>Ba +2</td>
          <td>2024</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Ba +3</td>
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
          <th scope="col">Produkt Best Ask (BA)</th>
          <th scope="col">Produkt pre Obdobie</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Cena nákup (€/MWh)</th>
          <th scope="col">Sourcing plat. podmienky (€/MWh)</th>
          <th scope="col">Sourcing plat. podmienky (€/MWh)</th>
          <th scope="col">Cená nákupu celkom (€/MWh)</th>
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
<div class="card mt-2">
  <div class="card-body">
    <h5 class="pe-4">Výpočet predajnej ceny</h5>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt Best Ask (BA)</th>
          <th scope="col">Predajna cena spolu (€/MWh)</th>
          <th scope="col">Cenu za komoditu (FIX) (€/MWh)</th>
          <th scope="col">+ pridať cenu (variabil. cenu)</th>
          <th scope="col">+ pridať cenu (Fixná sadzba (Eur/mes.)</th>
          <th scope="col">+ pridať iné náklady var. sadzba</th>
          <th scope="col">+ pridať iné náklady fixná. sadzba</th>
          <th class="col">Iný zisk var. sadzba (Eur/MWh)</th>
          <th class="col">Iný zisk fixná sadzba (Eur/MWh)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ba +0</td>
          <td>2022</td>
          <td />
          <td>50</td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Ba +1</td>
          <td>2023</td>
          <td />
          <td>65$</td>
          <td />
          <td />
          <td>65</td>
        </tr>
        <tr>
          <td>Ba +2</td>
          <td>2024</td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Ba +3</td>
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
          <th scope="col">Produkt Best Ask (BA)</th>
          <th scope="col">Predajna cena spolu (€/MWh)</th>
          <th scope="col">Cenu za komoditu (FIX) (€/MWh)</th>
          <th scope="col">+ pridať cenu (variabil. cenu)</th>
          <th scope="col">+ pridať cenu (Fixná sadzba (Eur/mes.)</th>
          <th scope="col">+ pridať iné náklady var. sadzba</th>
          <th scope="col">+ pridať iné náklady fixná. sadzba</th>
          <th class="col">Iný zisk var. sadzba (Eur/MWh)</th>
          <th class="col">Iný zisk fixná sadzba (Eur/MWh)</th>
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
