<script lang="ts">
  export let src: string;
  export let name: string;
  export let email: string;
  export let role: string;
</script>

<div class="profile">
  <a href={"mailto:" + email}
    ><img {src} alt={`profile picture of ${name}`} srcset="" /></a
  >
  <p>{name}</p>
  <p class="role">{role}</p>
</div>

<style lang="scss">
  @import "../lib/lib.scss";
  .profile {
    @include center-flex(column);
    img {
      border-radius: 50%;
      &:hover {
        box-shadow: 0px 0px 8px #555;
      }
    }
    .role {
      font-size: larger;
    }
  }
</style>
