<script lang="ts">
  import Logo from "./assets/bau-logo.png";
  import { join_with_dash } from "./lib/Lib.svelte";
  import Section from "./components/Section.svelte";
  import Pie from "./components/Pie.svelte";
  const section_names = ["About", "Projects", "Contact Us"];
  const toggle_classname = (elem: HTMLElement, _class: string) => {
    if (elem.classList.contains(_class)) {
      elem.classList.remove(_class);
    } else {
      elem.classList.add(_class);
    }
  };

  interface Action {
    element: string;
    action?: (() => void)[];
  }

  const enable_top_margin = (margin: number = 0) => {
    let e = document.querySelector<HTMLElement>(".mobile_wrapper");
    if (margin === 0) {
      e.style.marginTop = "0px";
    } else {
      e.style.marginTop = `${margin}rem`;
    }
    e.style.width = "100%";
  };
  const stick = (elems: Action[]) => {
    for (const element of elems) {
      let elem: HTMLElement = document.querySelector(element.element);
      if (elem != null && window.pageYOffset > elem?.offsetTop) {
        elem.classList.add("sticky");
        element?.action?.[0]?.();
      } else {
        elem.classList.remove("sticky");
        element?.action?.[1]?.();
      }
    }
  };
  const toggle_mobile_menu = () => {
    let navbar_buttons: HTMLElement = document.querySelector(".mobile_wrapper");
    toggle_classname(navbar_buttons, "visible");
  };
  let y: number;
  import { tweened } from "svelte/motion";

  let percent = 0;
  const store = tweened(0, { duration: 2000 });
  $: store.set(percent);
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/255a2d624d.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>
<svelte:window
  on:scroll={() => {
    stick([
      { element: "#navbar" },
      {
        element: ".mobile_wrapper",
        action: [
          () => {
            enable_top_margin(5.5);
          },
          enable_top_margin,
        ],
      },
    ]);
  }}
  bind:scrollY={y}
/>
<main>
  <header>
    <div id="navbar">
      <a href="#top" id="bau-logo"><img src={Logo} alt="Bau Logo" /></a>
      <div class="nav_text">
        <button id="mobile_menu" on:click={toggle_mobile_menu}>
          <i class="fa-solid fa-bars" />
        </button>
        {#each section_names as sec}
          <button
            class="nav_buttons"
            on:click={() => {
              let elem = document.querySelector(`#${join_with_dash(sec)}`);
              let elem_rect = elem.getBoundingClientRect();
              window.scrollTo(elem_rect.x, elem_rect.y);
            }}
          >
            {sec}
          </button>
        {/each}
      </div>
    </div>
    <div class="mobile_wrapper sticky">
      {#each section_names as sec}
        <button
          class="nav_buttons_mobile"
          on:click={() => {
            let elem = document.querySelector(`#${join_with_dash(sec)}`);
            let elem_rect = elem.getBoundingClientRect();
            window.scrollTo(elem_rect.x, elem_rect.y);
          }}
        >
          {sec}
        </button>
      {/each}
      <div class="social">
        <a href="http://">
          <i class="fab fa-facebook" />
        </a>
        <a href="http://">
          <i class="fab fa-github" />
        </a>
        <a href="http://">
          <i class="fab fa-instagram" />
        </a>

        <a href="http://">
          <i class="fab fa-tiktok" />
        </a>
        <a href="http://">
          <i class="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  </header>
</main>
<div class="make_space">
  <Section
    title={section_names[0]}
    text={"Many freshmen and graduates alike feel unprepared for work or that the subjects they've learned in school or university are not relevant to their degree. Unfortunately, this is true. This is especially true for computer scientists and engineers who often state that they learn much more on their own than in university.\nThis club aims to be the opposite and let you work on professional level projects and learn in demand skills light years faster than any course. We only ask you to be patient and expect that projects will be hard, because nothing worth doing is easy. "}
  />

  <figure>
    <Pie percent={$store} />
    <figcaption>
      <!-- svelte-ignore a11y-invalid-attribute -->
      Percentage of students who feel unprepared for
      <a
        on:click={() => {
          percent = 52;
        }}
        class="interactive_buttons"
        href="javascript:void(0)">work</a
      >
      , as opposed to
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        on:click={() => {
          percent = 81;
        }}
        class="interactive_buttons"
        href="javascript:void(0)">college</a
      >
      [<a
        href="https://www.edweek.org/teaching-learning/teens-feel-ready-for-college-but-not-so-much-for-work/2019/09"
        class="interactive_buttons">1</a
      >] (Click to show)
    </figcaption>
  </figure>
  <Section
    title={section_names[1]}
    text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?"}
    split_dir="horizontal"
  />
  <Section
    title={section_names[2]}
    text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?"}
  />
</div>

<style lang="scss">
</style>
