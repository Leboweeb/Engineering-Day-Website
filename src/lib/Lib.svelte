<script lang="ts" context="module">
  export const join_with_dash = (s: string) => {
    let temp = s.toLowerCase().trim().split(" ");
    return temp.join("_");
  };
</script>
