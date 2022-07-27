<script lang="ts">
    import AlgPlayer from '$lib/AlgPlayer.svelte';
    import pll from '$lib/algs/cfop/pll/pll.json';
</script>

<svelte:head>
    <title>Cubing tools</title>
    <meta name="description" content="Cubing tools" />
</svelte:head>

<main>
    {#each Object.entries(pll) as [name, alg]}
        <AlgPlayer alg={alg.algs[0]} title={name} showAlg showBorder />
    {/each}
</main>

<style>
    main {
        display: grid;
        justify-items: center;
        place-content: center;
        text-align: center;
        font-family: sans-serif;
    }
</style>
