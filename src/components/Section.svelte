<script lang="ts">
  import SplitText from "./SplitText.svelte";

  export let title = "";
  export let split = false;
  export let text = "";
  let split_text = text.split("\n");
</script>

<section>
  <h1>{title}</h1>
  <hr />
  <div id={title}>
    {#if split}
      <SplitText strs={text.split("\n")} />
    {:else}
      <p>{text}</p>
    {/if}
  </div>
</section>

<style lang="scss">
  h1,
  div {
    text-align: center;
  }
  hr {
    margin: 25px auto 30px;
    padding: 0;
    max-width: 250px;
    border: 0;
    border: solid 3px #e1b573;
    border-radius: 3px;
    text-align: center;
    color: #e1b573;
  }
</style>
