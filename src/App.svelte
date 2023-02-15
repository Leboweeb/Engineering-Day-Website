<script lang="ts">
  import Logo from "./assets/bau-logo.png";
</script>

<main>
  <header>
    <div id="navbar">
      <a href="#top" id="bau-logo"><img src="{Logo} " alt="Bau Logo" /></a>
      <div class="nav_text">
        <a href="#home">Home</a>
        <a href="#projects">Project</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  </header>
</main>

<style lang="scss">
  @mixin stretch_elem() {
    top: 0;
    right: 0;
    left: 0;
  }
  #navbar {
    display: flex;
    justify-content: space-between;
    text-align: center;
    position: fixed;
    @include stretch_elem();
    #bau-logo {
      padding: 10px;
      margin-inline: 3rem;
    }
    .nav_text {
      padding: 10px;
      margin-inline: 3rem;
      margin-top: 1.5rem;
      a {
        margin-inline: 15px;
        &:hover {
          color: #18bc9c;
          background-color: transparent;
        }
        text-decoration: none;
        color: whitesmoke;
      }
    }

    background-color: #2c3e50;
    width: 100%;
    height: auto;
  }
</style>
