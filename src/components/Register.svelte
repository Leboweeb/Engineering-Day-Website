<script lang="ts">
  export let limit: number;
  let container: Element;
  import { onMount } from "svelte";

  const animate_counter = (
    element: Element,
    start: number,
    end: number,
    duration: number
  ) => {
    let range = end - start;
    let increment = end > start ? 1 : -1; // go backwards if the start is greater than the end
    let step = Math.abs(Math.floor(duration / range));
    let curr = start;
    let timer = setInterval(() => {
      curr += increment;
      element.textContent = curr.toString();
      if (curr === end) clearInterval(timer);
    }, step);
  };
  let observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      animate_counter(container, 0, limit, 5000);
      observer.unobserve(container);
    },
    { threshold: 1 }
  );
  onMount(() => {
    observer.observe(container);
  });
</script>

<div id="parent">
  <b class="countdown" bind:this={container}>0</b>
  <div>
    <p>Members and counting.</p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link"
      >Register Today!</a
    >
  </div>
</div>

<style lang="scss">
  @import "../lib/lib";

  #parent {
    @include center_flex(column);
    margin: 5rem;
    .countdown {
      margin-block: 3rem;
    }
    div {
      a,
      p {
        display: inline;
      }
      a {
        @include blue_underlined_text();
      }
    }
  }
</style>
