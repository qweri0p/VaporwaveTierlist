<script lang="ts">
    export let data;
    export let visible = false;
</script>

{#if visible}
<main id="container">
    <span id="item-4">{data.name}</span>
    <img id="item-1" src="{data.image}" alt="{data.name}" on:keydown={() => {console.log("what?")}} on:click={() => {visible = false}}>
    <p id="item-0">{data.description}</p>
    <button id="item-2" on:click={()=>{visible = false}}>X</button>
    <a href="{data.bandcamp}" target="_blank" rel="noopener noreferrer" id="item-3">Bandcamp</a>
</main>
{/if}

<style>
    #container {
        position: fixed;
        color: antiquewhite;
        top: 0;
        left: 0;
        display: grid;
        grid-template-rows: 10vmin 55vmin 15vmin;
        grid-template-columns: 90vmin 35vmin;
        padding: 10vmin;
        background-color: rgb(37, 37, 37);
        height: 70vmin;
    }
    #item-0 {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
        font-size: 3vmin;
        overflow-wrap: break-word;
    }
    #item-1 {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        align-items: center;
        height: 55vh;
    }
    #item-2 {
        background-color: #ff4343; 
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        font-size: 25vmin;
    }
    #item-3 {
        background-color: #3d3d3d; 
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        font-size: 5vmin;
        text-align: center;
        margin: 5vmin;
        color: antiquewhite;
        line-height: 3vmin;
        text-decoration: underline antiquewhite;
    }
    #item-4 {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        font-size: 5vmin;
    }
    #item-2:active {
        background-color: #130200;
    }
</style>