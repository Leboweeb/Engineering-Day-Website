<script lang="ts">
  export let text: string;
  export let split_dir = "vertical";
</script>

<div>
  {#each text.split("\n") as s}
    <p style="--dis={split_dir === 'vertical' ? 'block' : 'flex'}">{s}</p>
  {/each}
</div>

<style lang="scss">
  div {
    display: block;
    text-align: center;
    p {
      margin-block: 2.5rem;
      margin-inline: 0.5rem;
    }
  }
</style>
