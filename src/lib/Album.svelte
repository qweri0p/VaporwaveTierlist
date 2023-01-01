<script lang="ts">
    import Popover from "./Popover.svelte";
    interface album{
        name:string
        image:string
        bandcamp:string
        description:string
    }
    let visible = false
    export let data:album;
</script>

<img src="{data.image}" alt="{data.name}" on:keydown={() => {console.log("what?")}} on:click={() => {visible = true}}>

<Popover data={data} bind:visible={visible}/>

<style>
    img {
        height: 10vmin;
        width: 10vmin;
    }
</style>