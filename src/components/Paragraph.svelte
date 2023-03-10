<script lang="ts">
  export let text = "";
  export let title: string;
  export let ordered = false;
</script>

<div>
  <h3>{title}</h3>
  {#if ordered}
    <ol>
      {#each text.split("\n") as t}
        <li>{t}</li>
      {/each}
    </ol>
  {:else}
    <ul>
      {#each text.split("\n") as t}
        <li>{t}</li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  div {
    margin-block: 5rem;
    li {
      margin-block: 2rem;
    }
  }
</style>
