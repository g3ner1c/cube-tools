<script context="module">
    import Player from '$lib/Player.svelte';
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
        return {
            props: {
                // @ts-ignore
                message: error.message,
                status, // same as status: status
            },
        };
    }
</script>

<script>
    export /**
     * @type {string}
     */
    let message;
    export /**
     * @type {string}
     */
    let status;
</script>

<main>
    {#if status == '404'}
        <h1>404</h1>
        <h2>whoops this page doesnt exist <a href="/">click me to go back</a></h2>
        <br />
        <Player alg="U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2" setup="" anchor="end" />
    {:else}
        <h1>{status} {message}</h1>
    {/if}
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
