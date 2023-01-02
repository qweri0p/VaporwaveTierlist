<script lang="ts">
  import About from "./About.svelte";
  import Tier from "./lib/Tier.svelte";
  const tiers = ['s', 'a', 'b', 'c', 'd', 'e']
</script>

<main>
  {#each tiers as tier}
    <Tier tier={tier}/>
    <br>
  {/each}
</main>
<About/>

<style>
  main {
    padding: 0.5vmax;
    height: 10vmin;
    width: 100%;
    white-space: nowrap;
  }
</style>