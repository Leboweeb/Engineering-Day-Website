<script lang="ts">
  import SplitText from "./SplitText.svelte";
  import { join_with_dash } from "../lib/Lib.svelte";

  export let title = "";
  export let split_dir = "vertical";
  export let text = "";
</script>

<div id={join_with_dash(title)}>
  <section>
    <h1>{title}</h1>
    <hr />
    <div>
      {#if split_dir === "horizontal"}
        <SplitText strs={text.split("\n")} />
      {:else}
        {#each text.split("\n") as txt}
          <p>{txt}</p>
        {/each}
      {/if}
    </div>
  </section>
</div>

<style lang="scss">
  h1,
  div {
    text-align: center;
  }
  p {
    margin-block: 2.5rem;
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
