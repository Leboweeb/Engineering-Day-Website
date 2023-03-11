<script lang="ts">
  import { join_with_dash } from "../lib/Lib.svelte";

  const section_names = ["Register", "About", "Projects", "Contact Us"];
</script>

{#each section_names as sec, i}
  {#if i == 0}
    <button
      class="nav_buttons"
      on:click={() => {
        window.location.href =
          "https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link";
      }}
    >
      {sec}
    </button>
  {:else}
    <button
      class="nav_buttons"
      on:click={() => {
        let elem = document.querySelector(`#${join_with_dash(sec)}`);
        elem.scrollIntoView({
          block: "center",
        });
      }}
    >
      {sec}
    </button>
  {/if}
{/each}
