<script lang="ts">
  export let caption_text: string;
  export let alt: string;
  export let image: string;
  export let mw: number;
  export let border_color: string = "#cccccc";
</script>

<figure style="--col={border_color} --mw={mw}">
  <img src={image} {alt} />
  <figcaption>{caption_text}</figcaption>
</figure>

<style lang="scss">
  @import "../lib/lib";
  figure {
    margin-inline: 3.5rem;
    margin-block: 4rem;
    @include center_flex(column);
    border: 3px var(--col) solid;
    padding: 20px 10px;
    margin: auto;
    img {
      max-width: var(--mw);
      height: auto;
      width: 100%;
    }
  }
</style>
