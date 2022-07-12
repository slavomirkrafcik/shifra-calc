<script lang="ts">
  import { AppwriteService, user } from "$lib/appwrite";
  import { onMount } from "svelte";

  let load: boolean = false;
  let itemId: string;

  onMount(async () => {
    await AppwriteService.fetchUser();
    load = true;
  });

  async function login(): Promise<void> {
    AppwriteService.login();
  }

  async function logout(): Promise<void> {
    AppwriteService.logout();
    location.reload();
  }
</script>

{#if load}
  {#if $user == null}
    <div
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h3>Naceňovací systém</h3>
        <p class="lead fw-normal">
          Pre prístup do systému sa prihláste cez podio účet, pokračujte
          stlačením tlačidla ktoré vás presmeruje na podio.com.
        </p>
        <button class="btn btn-outline-secondary" on:click={login}
          >Podio login</button
        >
      </div>
      <div class="product-device shadow-sm d-none d-md-block" />
      <div
        class="product-device product-device-2 shadow-sm d-none d-md-block"
      />
    </div>
  {:else}
    <div
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h3>Naceňovací systém</h3>
        <p class="lead fw-normal">
          Ste úspešne prihlásený do systému, pre zobrazenie informácii zdajte
          item_id z podia.
        </p>
        <div class="input-group mb-3">
          <input
            bind:value={itemId}
            type="text"
            class="form-control"
            placeholder="Item_id"
            aria-describedby="button-addon2"
          />
          <a href="/item/{itemId}">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2">Zobraziť</button
            >
          </a>
        </div>
      </div>
      <div class="product-device shadow-sm d-none d-md-block" />
      <div
        class="product-device product-device-2 shadow-sm d-none d-md-block"
      />
    </div>
  {/if}
{/if}
