<script lang="ts">
    import Popover from "./Popover.svelte";
    let visible = false
    export let data;
</script>

<img src="{data.image}" alt="{data.name}" on:keydown={() => {console.log("what?")}} on:click={() => {visible = true}}>

<Popover data={data} bind:visible={visible}/>

<style>
    img {
        height: 12vmin;
        width: 12vmin;
        transition: ease-in-out;
    }
    img:hover {
        transform: scale(1.03);
    }
</style>