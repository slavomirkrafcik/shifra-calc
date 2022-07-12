<script lang="ts">
  import { PodioService } from "$lib/podio";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { append } from "svelte/internal";
  import { itemId } from "$lib/appwrite";
  import { goto } from "$app/navigation";

  let item: any;
  let data: any;
  onMount(async () => {
    item = await PodioService.getItem($page.params.id);
    console.log(item);
  });

  function goToLink(link: string) {
    goto(link);
    return null;
  }
</script>

<div class="card-group mt-5">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Firma</h5>
      <p class="card-text">
        Názov firmy: <br />
        Ulica číslo: IČO: <br />
        DIČ: <br />
        IČ DPH: <br /><br />
        Index Ciribis: <br />
        Varovné informácie: <br />
        Vlastníctvo:
      </p>
    </div>
    <div class="card-footer">
      <button class="h-0 btn btn-outline-secondary align-bottom" type="button"
        >Otvoriť PDOIO</button
      >
      <button class="h-0 btn btn-outline-secondary align-bottom" type="button"
        >Global report</button
      >
    </div>
  </div>
  <div class="card">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Kontaktná osoba</h5>
        <p class="card-text">
          Meno a Priezvisko, pozícia: <br />
          Tel. číslo: <br />
          Email:
        </p>
      </div>
      <div class="card-footer">
        <button
          class="h-0 btn btn-outline-secondary align-bottom"
          type="button"
        >
          Otvoriť PDOIO
        </button>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dalsie osoby
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/"
                >Meno a Priezvisko, pozícia: <br />Tel. číslo: <br />Email:
              </a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="/"
                >Meno a Priezvisko, pozícia: <br />Tel. číslo: <br />Email:
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Obchodník</h5>
        <p class="card-text">
          Meno a Priezvisko, pozícia: <br />
          Tel. číslo: <br />
          Email:
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ZACIATOK:Zoznam ponúk FIX  -->
<div class="card mt-2">
  <div class="card-body">
    <div class="card-title d-flex mb-3">
      <div class="me-auto p-2">
        <h5>Zoznam ponúk FIX</h5>
      </div>
      <div class="p-2">
        <button
          class="h-0 btn btn-outline-secondary align-bottom"
          type="button"
        >
          Aktualizovať opportunitu
        </button>
      </div>
      <div class="p-2">
        <button
          class="h-0 btn btn-outline-secondary align-bottom"
          type="button"
        >
          Vytvoriť ponuku/verziu FIX
        </button>
      </div>
    </div>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Verzia ponuky</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Predajná cena (€/MWh)</th>
          <th scope="col">Cenu za komoditu (€/MWh)</th>
          <th scope="col">Čístá marža (€)</th>
          <th scope="col">Turnover (€)</th>
          <th scope="col">Exposure (€)</th>
          <th scope="col">Obdobie dodávky</th>
          <th scope="col">Produkt</th>
          <th scope="col">Stav ponuky</th>
          <th scope="col">Stav Credit check</th>
          <th class="col">KYC</th>
          <th class="col">Stav KYC</th>
          <th class="col">Dátum platnosti ponuky</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Dátum od - do</td>
          <td>Index (Cal/ Q-M / DA )</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>
            <button
              class="h-0 btn btn-outline-secondary btn-sm align-bottom"
              type="button"
            >
              Edit / Open
            </button>
            <button
              class="h-0 btn btn-outline-secondary btn-sm mt-1 align-bottom"
              type="button"
            >
              Akceptácia
            </button>
            <button
              class="h-0 btn btn-outline-secondary btn-sm mt-1 align-bottom"
              type="button"
            >
              Prehra/Zrušené
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- KONIEC:Zoznam ponúk FIX -->
<!-- ZACIATOK:Zoznam ponúk INDEX  -->
<div class="card mt-2">
  <div class="card-body">
    <div class="card-title d-flex mb-3">
      <div class="me-auto p-2">
        <h5>Zoznam ponúk INDEX</h5>
      </div>
      <div class="p-2">
        <button
          class="h-0 btn btn-outline-secondary align-bottom"
          type="button"
        >
          Vytvoriť ponuku/verziu INDEX
        </button>
      </div>
    </div>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Verzia ponuky</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Predajná cena (€/MWh)</th>
          <th scope="col">Cenu za komoditu (€/MWh)</th>
          <th scope="col">Čístá marža (€)</th>
          <th scope="col">Turnover (€)</th>
          <th scope="col">Exposure (€)</th>
          <th scope="col">Obdobie dodávky</th>
          <th scope="col">Produkt</th>
          <th scope="col">Stav ponuky</th>
          <th scope="col">Stav Credit check</th>
          <th class="col">KYC</th>
          <th class="col">Stav KYC</th>
          <th class="col">Dátum platnosti ponuky</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Dátum od - do</td>
          <td>Index (Cal/ Q-M / DA )</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>
            <button
              class="h-0 btn btn-outline-secondary btn-sm align-bottom"
              type="button"
            >
              Edit / Open
            </button>
            <button
              class="h-0 btn btn-outline-secondary btn-sm mt-1 align-bottom"
              type="button"
            >
              Akceptácia
            </button>
            <button
              class="h-0 btn btn-outline-secondary btn-sm mt-1 align-bottom"
              type="button"
            >
              Prehra/Zrušené
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- KONIEC:Zoznam ponúk INDEX  -->
<!-- ZACIATOK:Otvorené opportunity iné komodity -->
<div class="card mt-2" style="background-color: #e6ffe6;">
  <div class="card-body">
    <div class="card-title d-flex mb-3">
      <div class="me-auto p-2">
        <h5>Otvorené opportunity iné komodity</h5>
      </div>
    </div>
    <table
      class="table table-bordered border"
      style="background-color: white; "
    >
      <thead>
        <tr>
          <th scope="col">Produkt</th>
          <th scope="col">Objem (MWh)</th>
          <th scope="col">Predajná cena (€/MWh)</th>
          <th scope="col">Cenu za komoditu (€/MWh)</th>
          <th scope="col">Čístá marža (€) </th>
          <th scope="col">Turnover (€)</th>
          <th scope="col">Exposure (€)</th>
          <th scope="col">Obdobie dodávky</th>
          <th scope="col">Stav ponuky</th>
          <th scope="col">Stav Credit check</th>
          <th scope="col">KYC</th>
          <th class="col">Dátum platnosti ponuky</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>FIX</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>
            <button
              class="h-0 btn btn-outline-secondary mt-1 align-bottom"
              type="button"
            >
              Otvoriť PODIO
            </button>
          </td>
        </tr>
        <tr>
          <td>INDEX</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>
            <button
              class="h-0 btn btn-outline-secondary mt-1 align-bottom"
              type="button"
            >
              Otvoriť PODIO
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- KONIEC:Otvorené opportunity iné komodity -->
