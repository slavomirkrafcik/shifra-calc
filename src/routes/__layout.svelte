<script lang="ts">
  import { goto } from "$app/navigation";
  import { AppwriteService, user } from "$lib/appwrite";
  import { PodioService } from "$lib/podio";
  import { onMount } from "svelte";

  let load: boolean = false;
  let podiouser: any;

  onMount(async () => {
    await AppwriteService.fetchUser();
    console.log("user:" + user);
    if (!user) {
      console.log("dadas");
      goto("/");
    }
    try {
      podiouser = await PodioService.getUser();
    } catch {
    } finally {
      load = true;
    }
  });

  async function logout() {
    AppwriteService.logout();
    console.log("LOGOUT");
    location.reload();
    user.set(null);

    goto("/");
  }

  async function idk() {
    return 0;
  }
</script>

<header class="">
  <div class="py-3 navbar navbar-dark bg-white">
    <div class="container">
      <a
        href="/"
        class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <img
          src="https://www.absolventi.stuba.sk/dokumenty/firmy/loga_web/met_slovakia_as_logo.jpg"
          alt="sse-logo"
          width="80"
        />
      </a>
      {#if load}
        {#if podiouser != null}
          <a href="/">
            <button
              class="h-0 btn btn-outline-secondary mt-1 align-bottom"
              type="button"
              on:click={logout}
            >
              Odhlasit uzivatela: {JSON.stringify($user.name)
                .slice(1)
                .slice(0, $user.name.length - 1)}
            </button>
          </a>
        {/if}
      {/if}
    </div>
  </div>
</header>

<div class="container h-100">
  <slot />
</div>
