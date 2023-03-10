<script lang="ts">
  import { join_with_dash } from "../lib/Lib.svelte";

  export let title = "";
  export let bg = "white";
</script>

<div id={join_with_dash(title)}>
  <section style:--bg-color={bg}>
    <h1>{title}</h1>
    <hr />
  </section>
</div>

<style lang="scss">
  section {
    background-color: var(--bg-color);
  }
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
