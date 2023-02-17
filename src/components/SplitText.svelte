<script lang="ts">
  export let strs: string[];
</script>

<div>
  {#each strs as s}
    <p>{s}</p>
  {/each}
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-between;
  }
</style>
