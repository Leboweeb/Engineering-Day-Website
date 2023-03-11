<script lang="ts">
  import Logo from "./assets/bau-logo.png";
  import Ziad from "../public/ziad.jpeg_processed.jpeg";
  import Sari from "../public/sari.jpeg_processed.jpeg";
  import Sami from "../public/sami.jpeg_processed.jpeg";
  import Mohammad from "../public/mohammad.jpeg_processed.jpeg";
  import Saja from "../public/saja.jpeg_processed.jpeg";
  import Nour from "../public/nour.jpeg_processed.jpeg";
  import Lama from "../public/lama.jpeg_processed.jpeg";
  import Jana from "../public/jana.jpeg_processed.jpeg";
  import IOT from "../public/IOT.png";
  import Web from "../public/web.png";
  import Mediapipe from "../public/mediapipe.png";
  const section_names = ["Register", "About", "Projects", "Contact Us"];
  import Section from "./components/Section.svelte";
  import Pie from "./components/Pie.svelte";
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
  import Caption from "./components/Caption.svelte";
  import SplitText from "./components/SplitText.svelte";
  import Paragraph from "./components/Paragraph.svelte";
  import Register from "./components/Register.svelte";
  import Buttons from "./components/Buttons.svelte";
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
  const images = [Ziad, Sari, Mohammad, Sami, Saja, Nour, Lama, Jana];
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
      <Buttons />
      <button id="mobile_menu" on:click={toggle_mobile_menu}>
        <i class="fa-solid fa-bars" />
      </button>
    </div>
  </div>
  <div class="mobile_wrapper">
    <Buttons />
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
  <Section title={section_names[1]} />
  <Paragraph
    title="Why ARC?"
    text={"Your participation in our events will be put in our news section and your name will be publicly displayed.\nWe will host workshops to imporove your skills.\nWe will actively contact companies for internships and partnership programs. Also, your participation will bolster your CV because we will give you real skills .\nMeet people with similar intrests and have fun!\nAnyone can start their own project with fellow club members, no hierarchy or bureaucracy!"}
  />
  <Paragraph
    title="How Does it Work?"
    ordered={true}
    text={"Start a project (about AI or robotics, of course).\nGather fellow club members to see who is interested. (Note that we might run several projects in parallel)\nWork on the project and finish it.\nTell us about the details so that we can publish it on the website\nSuccess!"}
  />
  <figure>
    <h2>Job Opportunities and Activities</h2>
    <Pie percent={$store} />
    <figcaption>
      <!-- svelte-ignore a11y-invalid-attribute -->
      Post graduation job offer percentage :
      <a
        on:click={() => {
          percent = 57.5;
        }}
        class="interactive_buttons"
        href="javascript:void(0)">internship experience</a
      >
      , as opposed to
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        on:click={() => {
          percent = 42.5;
        }}
        class="interactive_buttons"
        href="javascript:void(0)"
        >no experience
      </a>
      [<a
        href="https://www.zippia.com/advice/internship-statistics/"
        class="interactive_buttons">1</a
      >] (Click to show)
    </figcaption>
  </figure>
  <Register limit={107} />
  <Section title={section_names[2]} />
  <Caption
    caption_text="Game controlled with AI hand motion controls"
    image={Mediapipe}
    alt="mediapipe demo"
    mw={642}
  />
  <Caption
    caption_text="Developing the site for this club"
    image={Web}
    alt="web"
    mw={960}
  />

  <Caption
    caption_text="Developing IOT solutions for environmental purposes"
    image={IOT}
    alt="IOT cleaning"
    mw={960}
  />
  <Section title={section_names[3]}>
    <SplitText
      text={"If you want to contact us, click the register link in the navigation bar\nor click at any of our icons to send us an email"}
      split_dir="horizontal"
    />
  </Section>
  <p />
  <div class="profiles">
    {#each names as name, i}
      <Profile {name} src={images[i]} role={roles[i]} email={emails[i]} />
    {/each}
  </div>
</div>

<style lang="scss">
</style>
