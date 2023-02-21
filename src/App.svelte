<script lang="ts">
  import Logo from "./assets/bau-logo.png";
  import { join_with_dash } from "./lib/Lib.svelte";
  import Section from "./components/Section.svelte";
  const section_names = ["About", "Projects", "Contact Us"];
  const stick = () => {
    let navbar = document.getElementById("navbar");
    window.pageYOffset > navbar.offsetTop
      ? navbar.classList.add("sticky")
      : navbar.classList.remove("sticky");
  };
  let y: number;
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/255a2d624d.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>
<svelte:window on:scroll={stick} bind:scrollY={y} />
<main>
  <header>
    <div id="navbar">
      <a href="#top" id="bau-logo"><img src={Logo} alt="Bau Logo" /></a>
      <div class="nav_text">
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
        <button id="mobile_menu">
          <i class="fa-solid fa-bars" />
        </button>
      </div>
    </div>
  </header>
</main>
<div class="make_space">
  <Section
    title={section_names[0]}
    text={"Many freshmen and graduates alike feel unprepared for work or that the subjects they've learned in school or university are not relevant to their degree. Unfortunately, this is true. This is especially true for computer scientists and engineers who often state that they learn much more on their own than in university.\nThis club aims to be the opposite and let you work on"}
  />
  <Section
    title={section_names[1]}
    text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?"}
  />
  <Section
    title={section_names[2]}
    text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam enim quibusdam illo vero quidem distinctio? Voluptas soluta cupiditate facilis dolore, dignissimos quisquam nemo in doloribus ex aliquam quidem voluptate iure?"}
  />
</div>

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nemo
perspiciatis commodi pariatur aliquam eum facilis magnam possimus iusto, id
repellat inventore dolores, repudiandae voluptatem distinctio ducimus, maiores
ipsam! Sed! Repellendus odit ea enim iusto assumenda, officia obcaecati saepe.
Aut, sint repellendus, earum neque ad expedita et officia odit sequi dignissimos
laboriosam. Provident ullam voluptate sit inventore fugit, tenetur eius.
Inventore necessitatibus sit enim obcaecati nulla velit, fugit veritatis non
aliquam molestias tempora aliquid est nemo facere repellendus! Deserunt
laudantium reprehenderit illum. Perspiciatis asperiores explicabo cupiditate
repudiandae excepturi harum maxime. Qui sit velit adipisci, laboriosam pariatur
ipsum? Quasi ipsa iusto quod quis quos. Facere, cupiditate voluptatem quasi,
similique rerum excepturi vitae nihil omnis vero quisquam, veniam illum. Atque,
temporibus in. Illum fuga quaerat assumenda sed accusantium obcaecati, omnis
modi? Officia aliquam numquam laudantium enim quae sed ipsum. Sint optio rem
quaerat quia, facilis mollitia ab ut, dicta illo, similique excepturi! Eum
reiciendis inventore autem vitae, nostrum architecto. Sed fuga debitis veniam
odio at consectetur illo aperiam, veritatis maxime similique sapiente, obcaecati
temporibus nemo repudiandae, tempore magni officia eos reprehenderit nulla!
Maiores repellendus neque, officia consequuntur pariatur eaque ducimus quis
facere laudantium fuga perferendis voluptas voluptatibus odio illo non
accusamus. Tempora sint error, optio rem voluptas eos non iste facilis
consectetur. Praesentium molestias provident quae amet impedit, maiores numquam
laudantium esse et deserunt labore aliquid quis laboriosam veniam nulla rerum
laborum quos exercitationem? Necessitatibus asperiores hic delectus. Impedit
nisi cupiditate maiores. Ipsam veritatis pariatur sed culpa laborum atque
corrupti, adipisci suscipit cumque, incidunt esse similique impedit! Quae
praesentium reprehenderit, illum molestias quis quibusdam non cupiditate
consequuntur laboriosam. Accusamus aspernatur soluta fugiat! Pariatur dicta
voluptatum, animi sequi adipisci libero distinctio excepturi fugit temporibus
quo. Ea, pariatur. Iure recusandae, eum nesciunt, quia quibusdam placeat, ab
obcaecati voluptatibus alias amet omnis harum possimus cumque! Aliquam impedit
earum sunt eaque alias? Cupiditate adipisci enim ut porro. Quas recusandae ipsam
fugit deleniti eaque vero et laborum repellat corrupti! Neque quis veniam dicta
possimus quos illo nam. Facere, optio voluptates eius delectus ab iste pariatur
numquam quas aperiam quidem. Sit deserunt dolores, iste exercitationem dicta
veniam non amet atque, voluptas in ratione ducimus iure commodi libero!
Doloremque? Sequi, culpa error nam similique sed iusto pariatur praesentium
laudantium deleniti ducimus perferendis aliquam at laborum voluptates, nesciunt
provident earum! At, aperiam accusamus? Delectus velit ad quam, commodi facere
vel. Dolores vero accusantium voluptates id vitae reiciendis qui praesentium
aliquid omnis enim voluptatem laudantium porro, numquam earum perferendis! Quos
error enim officiis provident, consequatur perspiciatis non dolores laudantium
similique alias. Illo qui voluptatem, vel adipisci quia maiores eveniet
provident quaerat maxime, perferendis iste eaque commodi odio. Illo assumenda
dolorem perspiciatis architecto, sunt iusto suscipit nemo dolor in veniam, non
et? Quaerat voluptatum mollitia incidunt nemo animi nam porro nihil ipsam,
libero neque dolor quisquam quas, ea assumenda, dolores provident accusamus iste
aliquam minima? Distinctio, qui necessitatibus? Aperiam similique adipisci non.
Qui ipsam architecto nesciunt explicabo esse ducimus rem reiciendis mollitia
dolorem repellat quia, officiis aliquid repudiandae magnam facere aspernatur
culpa illum voluptates vel distinctio sit nobis, saepe autem? Et, corrupti.
Magnam ad illum nihil recusandae! Dolore cum aperiam in, nemo magnam natus
beatae ab cupiditate consectetur velit, dolorem, eius minima facilis expedita!
Quis tenetur quos voluptate deserunt eligendi, dolor beatae! Accusantium facilis
accusamus ducimus inventore, eius, corporis eum sequi eveniet debitis dicta
dolorum excepturi minima, libero nulla repellendus quod porro ex. Quibusdam
necessitatibus ipsum debitis id amet similique adipisci officia. Itaque ratione
doloribus magnam tempore ipsam assumenda voluptatem architecto dignissimos error
blanditiis iste doloremque, suscipit minus praesentium omnis temporibus repellat
rerum iusto laudantium veniam officia officiis consectetur. Nulla, sapiente
dolor.

<style lang="scss">
</style>
