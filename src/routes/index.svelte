<script lang="ts">
    import { setPlayer } from '$lib/lib';
    import type { TwistyPlayer } from 'cubing/twisty';
    import { onMount } from 'svelte';
    
    let player: TwistyPlayer;
    onMount(() => {
        setPlayer(player, "R U R' (U' D) R2 U' R U' R' U R' U R2 D'");
    });
</script>

<svelte:head>
    <title>Cubing tools</title>
    <meta name="description" content="Cubing tools">
</svelte:head>

<main>
    <h1>cubing-tools</h1>
    <p>look at this cool ga perm</p>
    
    <twisty-player bind:this="{player}"></twisty-player>
</main>

<style>
    main {
        margin: 0;
        display: grid;
        place-content: center;
        gap: 1em;
        font-family: sans-serif;
    }

    /* .button {
        background-color: #4CAF50;
        border: none;
        color: black;
        padding: 15px 32px;
        text-align: center;
        
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        width: 100px;
        cursor: pointer;
    } */

    twisty-player {
        background: #BBBBBB;
    }

</style>