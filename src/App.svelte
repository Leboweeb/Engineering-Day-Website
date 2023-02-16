<script lang="ts">
  import Logo from "./assets/bau-logo.png";
  import Section from "./Section.svelte";
  const section_names = ["Home", "Projects", "About", "Contact Us"];
  const stick = () => {
    let navbar = document.getElementById("navbar");
    window.pageYOffset > navbar.offsetTop
      ? navbar.classList.add("sticky")
      : navbar.classList.remove("sticky");
  };
</script>

<svelte:window on:scroll={stick} />
<main>
  <header>
    <div id="navbar">
      <a href="#top" id="bau-logo"><img src={Logo} alt="Bau Logo" /></a>
      <div class="nav_text">
        {#each section_names as sec}
          <a href={`#${sec}`}>{sec}</a>
        {/each}
      </div>
    </div>
  </header>
</main>
<div class="make_space">
  {#each section_names as sec}
    <Section
      title={sec}
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit exercitationem"
    />
  {/each}

  <p>
    iusto quia, omnis molestiae! Porro laborum quasi quia ratione temporibus
    veritatis magnam praesentium exercitationem. Doloremque cumque architecto
    esse deserunt?" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Asperiores, recusandae doloribus fuga quisquam rem molestias delectus itaque
    sequi vel, maxime harum unde laboriosam autem! Temporibus, autem? Laboriosam
    nihil architecto vitae. Natus laborum aperiam officia quam. Ea sit impedit
    fugiat esse cum, sint est facere natus, totam tenetur repudiandae!
    Temporibus ducimus delectus voluptas nesciunt. Inventore beatae molestias
    quos, consequatur consequuntur maxime? Sint dolores illo numquam suscipit
    cupiditate excepturi quae illum voluptas adipisci temporibus repellendus,
    vel, exercitationem saepe eveniet odit tenetur. Voluptates optio alias
    blanditiis quidem. Ab ipsam laudantium nesciunt id repellat. Architecto
    natus exercitationem, a nulla hic consequatur minima sapiente provident
    sint, sunt id quos aspernatur? Tempora aliquid aspernatur, dolore nulla
    quasi, obcaecati reprehenderit, odit doloremque voluptatibus repudiandae
    veritatis tempore debitis. Suscipit, facere aspernatur veritatis delectus
    rerum in neque quaerat id officia provident accusantium. Earum eveniet
    repellat cupiditate? Pariatur provident reiciendis adipisci. Omnis
    praesentium alias quos molestias, consequatur ad odio magni. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Numquam assumenda maxime
    delectus atque, dicta veritatis voluptates commodi, quidem aut natus optio
    unde dolorem laboriosam veniam est, eaque voluptate recusandae provident!
    Repellendus quis laborum impedit cum perferendis velit neque fuga quaerat.
    Dolorum cumque expedita atque, nesciunt ducimus quam maiores est
    praesentium. Nisi fugit tenetur voluptatibus aliquid similique natus impedit
    nam officiis. Dignissimos, similique id optio doloremque doloribus ipsam
    ducimus necessitatibus eveniet repudiandae sunt, assumenda magnam officiis
    inventore, nemo amet a molestias error. Libero aliquam, voluptatibus illum
    impedit omnis hic sit ab. Aperiam, exercitationem neque possimus soluta
    laborum sint, ipsum recusandae doloribus velit iure officia. Optio similique
    necessitatibus unde. Quae dolor nihil repellendus itaque. Voluptatem
    architecto tempora, tempore quod hic modi enim. In rerum iste temporibus
    illum aperiam soluta cumque ratione delectus quis laudantium asperiores
    blanditiis repellat, totam fuga excepturi commodi, itaque quisquam veritatis
    aliquid qui, nihil explicabo placeat ab. Maiores, dignissimos? Lorem ipsum
    dolor, sit amet consectetur adipisicing elit. Velit, quibusdam perspiciatis
    laboriosam ducimus fugit saepe labore dolor culpa praesentium placeat
    consequuntur ad, voluptate commodi illum, nesciunt doloremque ratione magnam
    sapiente. Perspiciatis modi quibusdam quidem aliquam atque, dicta veniam
    explicabo veritatis officia officiis debitis maiores delectus blanditiis hic
    provident quo recusandae reprehenderit quasi amet. Vel quos adipisci
    facilis, cupiditate officiis soluta. Corrupti illo dignissimos a sapiente,
    dolorem non, natus debitis asperiores adipisci, perspiciatis ducimus beatae.
    Officia, saepe placeat. Aliquid corporis laborum cumque labore nostrum
    repellat debitis. Nostrum voluptatum enim ipsam rerum. Suscipit expedita
    tenetur praesentium nulla. Itaque harum dignissimos accusantium voluptate
    necessitatibus corporis est natus quia non, autem dolorem, quam at sit
    cumque, laborum expedita earum. Non dolor exercitationem dolorum ut? Quasi
    laborum dignissimos minus a! Possimus quas hic temporibus cupiditate,
    tempore corrupti deserunt maxime reiciendis, eveniet nesciunt eligendi
    libero, magni veniam. Natus, soluta eveniet. Eius tempora sit vel ab
    molestiae?
  </p>
</div>

<style lang="scss">
</style>
