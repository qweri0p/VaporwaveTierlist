<script lang="ts">
    import Album from "./Album.svelte";
    export let tier:string;
    import rawdata from "./data.json"
    const list = rawdata[tier]
</script>

<div>
    <span id="{tier}icon" >
        {tier.toUpperCase()}
    </span>
    {#each list as item}
        <Album data={item}/>
    {/each}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
    #sicon {
        background-color: red;
    }
    #aicon {
        background-color: blue;
    }
    #bicon {
        background-color: yellow;
    }
    #cicon {
        background-color:  green;
    }
    #dicon {
        background-color: darkturquoise;
    }
    #eicon {
        background-color: purple;
    }
    div {
        font-family: 'Rubik', sans-serif;
        height: 12vmin;
        width: 100%;
        display: flex;

    }
    span {
        display: block;
        text-align: center;
        font-size: 10vmin;
        height: 12vmin;
        width: 12vmin;
    }
</style>