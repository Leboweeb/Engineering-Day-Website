<script lang="ts">
  import Logo from "./assets/bau-logo.png";
  // import Ziad from "../public/ziad.jpeg_processed.jpeg";
  import Sari from "../public/sari.jpeg_processed.jpeg";
  import Sami from "../public/sami.jpeg_processed.jpeg";
  import Mohammad from "../public/mohammad.jpeg_processed.jpeg";
  import Saja from "../public/saja.jpeg_processed.jpeg";
  // import Nour from "../public/nour.jpeg_processed.jpeg";
  import Lama from "../public/lama.jpeg_processed.jpeg";
  import Jana from "../public/jana.jpeg_processed.jpeg";
  import { join_with_dash } from "./lib/Lib.svelte";
  import Section from "./components/Section.svelte";
  import Pie from "./components/Pie.svelte";
  const section_names = ["Register", "About", "Projects", "Contact Us"];
  const toggle_classname = (elem: HTMLElement, _class: string) => {
    if (elem.classList.contains(_class)) {
      elem.classList.remove(_class);
    } else {
      elem.classList.add(_class);
    }
  };

  const toggle_mobile_menu = () => {
    let navbar_buttons: HTMLElement = document.querySelector(".mobile_wrapper");
    toggle_classname(navbar_buttons, "visible");
  };
  import { tweened } from "svelte/motion";
  import Profile from "./components/Profile.svelte";
  import Header from "./components/Header.svelte";
  import Caption from "./components/Caption.svelte";
  let percent = 0;
  const store = tweened(0, { duration: 2000 });
  $: store.set(percent);

  const names = [
    "Ziad Doughan",
    "Sari Itani",
    "Mohammad Shahbaz",
    "Sami Kanawati",
    "Saja Hakim",
    "Nour Hijazy",
    "Lama Mawlawi",
    "Jana Moslemani",
  ];
  const roles = [
    "Club Advisor",
    "President",
    "Vice President",
    "PR & Social Media",
    "Treasurer",
    "Design Manager",
    "Secretary",
    "Logistics Manager",
  ];

  const emails = [
    "",
    "ssi@student.bau.edu.lb",
    "mys239@student.bau.edu.lb",
    "smk057@student.bau.edu.lb",
    "sgh237@student.bau.edu.lb",
    "",
    "lym075@student.bau.edu.lb",
    "Jhm431@student.bau.edu.lb",
  ];
  const images = ["", Sari, Mohammad, Sami, Saja, "", Lama, Jana];
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/255a2d624d.js"
    crossorigin="anonymous"
  ></script>
  <title>ARC Club</title>
  <link rel="icon" href={Logo} type="image/x-icon" />
</svelte:head>
<div class="mobile_and_friends">
  <div id="navbar">
    <a href="#top" id="bau-logo"><img src={Logo} alt="Bau Logo" /></a>
    <div class="nav_text">
      {#each section_names as sec, i}
        {#if i == 0}
          <button
            class="nav_buttons"
            on:click={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link";
            }}
          >
            {sec}
          </button>
        {:else}
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
        {/if}
      {/each}
      <button id="mobile_menu" on:click={toggle_mobile_menu}>
        <i class="fa-solid fa-bars" />
      </button>
    </div>
  </div>
  <div class="mobile_wrapper">
    {#each section_names as sec, i}
      {#if i == 0}
        <button
          class="nav_buttons_mobile"
          on:click={() => {
            window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link";
          }}
        >
          {sec}
        </button>
      {:else}
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
      {/if}
    {/each}
    <div class="social">
      <a href="https://www.facebook.com/profile.php?id=100090891691460">
        <i class="fab fa-facebook" />
      </a>
      <a href="https://github.com/Leboweeb/Engineering-Day-Website">
        <i class="fab fa-github" />
      </a>
      <a href="https://www.instagram.com/bau_arc/">
        <i class="fab fa-instagram" />
      </a>

      <a href="https://www.tiktok.com/@bau_a.r.c">
        <i class="fab fa-tiktok" />
      </a>
      <a href="mailto:arc.2023@outlook.com">
        <i class="fa-solid fa-envelope" />
      </a>
    </div>
  </div>
</div>
<div class="make_space">
  <Section
    title={section_names[1]}
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
    title={section_names[2]}
    text={"Your participation in our events will be put in our news section and your name will be publicly displayed.\nWe will actively contact companies for internships and partnership programs. Also, your participation will bolster your CV because we will give you real skills and not bore you with theoretical work.\nOur projects may be the most important asset to achieve the club's purpose of allowing students with simiar interests interact and work together in a university setting while building important experiences and hoarding essential knowledge and skills saught after in the industry, not taught at university, and most importantly, having a lot of fun!\nStudents have the freedom to participate in or even start their own projects relevant to the topics of interest of the club : AI, robotics, and gaming."}
  />
  <Caption
    caption_text="Game controlled with AI hand motion controls"
    border_color="transparent"
    image="/mediapipe.png"
    alt="mediapipe demo"
    mw={642}
  />
  <Caption
    caption_text="Developing the site for this club"
    border_color="transparent"
    image="/web.png"
    alt="web"
    mw={960}
  />

  <Caption
    caption_text="Developing IOT solutions for environmental purposes"
    border_color="transparent"
    image="/IOT.png"
    alt="IOT cleaning"
    mw={960}
  />
  <Section
    title={section_names[3]}
    text={"If you want to contact us, click the register link in the navigation bar\nor click at any of our icons to send us an email"}
  />

  <p />
  <div class="profiles">
    {#each names as name, i}
      <Profile {name} src={images[i]} role={roles[i]} email={emails[i]} />
    {/each}
  </div>
</div>

<style lang="scss">
</style>
