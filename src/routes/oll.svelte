<script lang="ts">
    import AlgPlayer from '$lib/AlgPlayer.svelte';
    import oll from '$lib/algs/cfop/oll/oll.json';
</script>

<svelte:head>
    <title>Cubing tools</title>
    <meta name="description" content="Cubing tools" />
</svelte:head>

<main>
    <h1><a href="/">Home</a></h1>
    <h2>
        <i>OLL</i>
        &nbsp;&middot;&nbsp;
        <a href="/pll">PLL</a>
    </h2>
    {#each Object.entries(oll) as [name, alg]}
        <AlgPlayer alg={alg.algs[0]} title="OLL {name}" showAlg showBorder />
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
