<script lang="ts">
  export let title = "";
  export let text = "";
</script>

<section>
  <h1>{title}</h1>
  <p id={title}>{text}</p>
</section>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
