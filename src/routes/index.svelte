<script lang="ts">
    import AlgPlayer from '$lib/AlgPlayer.svelte';
    let alg: string = "R2' u' R U' R U R' u R2 f R' f' (U)";
</script>

<svelte:head>
    <title>Cubing tools</title>
    <meta name="description" content="Cubing tools" />
</svelte:head>

<main>
    <h1>cubing-tools</h1>
    <AlgPlayer {alg} title="yo look at this cool gc perm" showAlg />
</main>

<style>
    main {
        display: grid;
        justify-items: center;
        place-content: center;
        text-align: center;
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
</style>
